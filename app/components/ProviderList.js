//@flow
import Dimensions from 'Dimensions';


import Icon from 'react-native-vector-icons/FontAwesome';
import React,{ Component } from 'react';
import { StyleSheet,
  FlatList,
  TouchableHighlight,
  Button,
  View,
  Image,
  Alert,
Text,Flat } from 'react-native';
import listData from './ListData';
//import RedditList from './RedditList';

const Logo = require('../images/default_avatar.png');

class ProviderList extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
this.props.navigator.setStyle({
 //navBarHidden: true,
});

  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'sideMenu') { // this is the same id field from the static navigatorButtons definition
        //Alert.alert('NavBar', 'Edit button pressed');
        // this.props.navigator.toggleDrawer({
        //     side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
        //     animated: true, // does the toggle have transition animation or does it happen immediately (optional)
        //     to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
        //   });

        this.props.navigator.showLightBox({
           screen: 'RedditList', 
             style: {
              tapBackgroundToDismiss: true,
     //backgroundBlur: "none", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
     backgroundColor: "#ff000080", // tint color for the background, you can specify alpha here (optional)
     // dismisses LightBox on background taps (optional)
  },
            animated: true, // does the toggle have transition animation or does it happen immediately (optional)
          
          });

      }
      if (event.id == 'add') {
        AlertIOS.alert('NavBar', 'Add button pressed');
      }
    }
  }
  renderItem({ item, index }) {

   return (
    <View style={{flex:1,flexDirection:'column',marginBottom:10,backgroundColor:'white',height:Dimensions.get('window').height/4.5}}>
    
        <View style={{flex:3 ,flexDirection:'row'}}> 
                <View style={{flex:3,justifyContent:'center',padding:5}}>
                    <Image source={Logo} style={{width:Dimensions.get('window').width/4.5,height:Dimensions.get('window').width/4.5,}}/>
                 </View>
               <View style={{flex:8,flexDirection:'column',padding:10,marginLeft:5}}>
                    <Text style={[styles.buttonText,{fontSize: 14,fontWeight: "bold"}]}>Tibin Thomas</Text>
                    <Text style={[styles.buttonText,{fontSize: 18}]}>hair stylist</Text>
                    <Text style={[styles.buttonText,{fontSize: 12}]}>dss</Text>
                    <Text style={[styles.buttonText,{fontSize: 12}]}>experion</Text>
              </View>
               <View style={{flex:3,alignItems:'center',padding:10}}>
                    <Text style={[styles.buttonText,{fontSize: 12,color:'green'}]}><Icon name="facebook" size={13}  color="green"/> 3.4mi</Text>
              </View>
        </View>
         
        <View style={{flex:1}}> 
                 <FlatList horizontal={true} automaticallyAdjustContentInsets={false} style={{}}
               data={[{key:1,name: "Hello"},
              {key:2,name: 'Devin'},
              {key:3,name: 'Jackson'}]}
               renderItem={ ({item}) =>
                // <Button style={{color:'green',height:20,margin:10}} title={item.name}></Button>
                <TouchableHighlight style={{}}>
         
        
        <Text style={{color:'white',height:20,margin:5,borderWidth:1,backgroundColor:'orange',borderColor:'orange'}}> {item.name}</Text>
         
        </TouchableHighlight>
              }
             />
        </View>
    </View>
    );
   }
   
  render(){
    return (
      
        <View style={styles.container}>
       <Text style={styles.buttonText}>"haiww"</Text>
         <FlatList automaticallyAdjustContentInsets={false} style={styles.list}
         data={listData}
         renderItem={this.renderItem}
       />
        
       <Text style={styles.buttonText}>"haiww"</Text>
       </View>

 );
  }
}
const styles = StyleSheet.create({
 
  buttonText: {
    
  
  fontSize: 18,
  
  color: 'black',
 // alignSelf: 'center',
  marginLeft:10,
  marginBottom:5,
  //backgroundColor:'blue'
 
},
list:{
   // paddingTop:- 65,
  //marginBottom:10,
// backgroundColor: 'gray',
 padding:10,
},

  
  
  container:{
    flex: 1,
   paddingTop:25,
    flexDirection: 'column',
    backgroundColor: 'gray',
    //alignItems: 'flex-start',
   // justifyContent: 'center',
   

  },


});
//<View style={{flex:1}}>
//       
 //     </View>
 

export default ProviderList;

