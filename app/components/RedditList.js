//@flow
import Dimensions from 'Dimensions';

import axios from 'axios';
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

const Logo = require('../images/default_avatar.png');
const API_URL = 'https://www.reddit.com/r/movies/top.json?limit=5';

class RedditList extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
this.props.navigator.setStyle({
 //navBarHidden: true,
});
this.state = {
      dataSource: [],
      loaded: false,
    };

  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        //Alert.alert('NavBar', 'Edit button pressed');
        this.props.navigator.toggleDrawer({
            side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
            animated: true, // does the toggle have transition animation or does it happen immediately (optional)
            to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
          });
      }
      if (event.id == 'add') {
        AlertIOS.alert('NavBar', 'Add button pressed');
      }
    }
  }
  renderItem = ({ item, index }) =>{
    console.log(item);
   return (
    <View style={{flex:1,flexDirection:'column',marginBottom:10,backgroundColor:'white',height:Dimensions.get('window').height/4.5}}>
    
        <View style={{flex:3 ,flexDirection:'row'}}> 
                <View style={{flex:3,justifyContent:'center',padding:5}}>
                    <Image source={{uri: item.data.preview ? item.data.preview.images[0].source.url :item.data.thumbnail}} style={{width:Dimensions.get('window').width/4.5,height:Dimensions.get('window').width/4.5,}}/>
                 </View>
               <View style={{flex:8,flexDirection:'column',padding:10,marginLeft:5}}>
                    <Text style={[styles.buttonText,{fontSize: 14,fontWeight: "bold"}]}>{item.data.author}</Text>
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
   componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    console.log("FETCH DATA",API_URL)
    axios.get(`${API_URL}`)
    .then(response => {
      console.log(response.data.data.children);
      this.setState({
          dataSource: response.data.data.children,
          loaded: true,
        });
      console.log(this.state.dataSource);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render(){
    return (
      
        <View style={styles.container}>
       <Text style={styles.buttonText}>"haiww"</Text>
         <FlatList automaticallyAdjustContentInsets={false} style={styles.list}
         data={this.state.dataSource}
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
  //marginBottom:5,
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
 

export default RedditList;

