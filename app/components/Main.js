//@flow
import Icon from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';
import React,{ Component } from 'react';
import { StyleSheet,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Button,
  Alert,
Text } from 'react-native';
const fac=`<Icon name="facebook" size={30}   color="white"/>     Login with facebook`;
const myIcon = (<Icon name="envelope-o" size={30} color="#900" />)
const Logo = require('../images/Purple-Logo.png');
import NotifyButtton from './NotifyButtton';
import ProviderList from './ProviderList';



class Main extends Component {


  // static navigatorButtons = {
  //   leftButtons: [
  //     {
  //       title: 'Edit', // for a textual button, provide the button title (label)
  //       id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
  //       testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
  //       disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
  //       disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
  //       showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
  //       buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
  //       buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
  //       buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
  //     },
  //     {
  //       //icon: require('../../img/navicon_add.png'), // for icon button, provide the local image asset name
  //       id: 'add' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
  //     }
  //   ]
  // };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

  }
   onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        AlertIOS.alert('NavBar', 'Edit button pressed');
      }
      if (event.id == 'add') {
        AlertIOS.alert('NavBar', 'Add button pressed');
      }
    }
  }
  login(){
    this.props.navigator.setStyle({
  //navBarHidden: true,
});
  //   this.props.navigator.push({
  //       title: 'ProviderList',
  //       screen: 'ProviderList',
  //       passProps: {text: "hai"},
  //       navBarHidden: true,
        
  // });
  this.props.navigator.resetTo({
  screen: 'ProviderList', // unique ID registered with Navigation.registerScreen
  title: "Modal", // title of the screen as appears in the nav bar (optional)
  passProps: {}, // simple serializable object that will pass as props to the modal (optional)
  navigatorStyle: {navBarHidden: false, navBarTitleTextCentered: true,navBarTranslucent: true,navBarTransparent: false,drawUnderNavBar: false,navBarBlur: true, navBarNoBorder: true,statusBarTextColorScheme: 'light',statusBarBlur: true,navBarBackgroundColor: 'yellow',navBarTextColor: 'yellow',}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
  navigatorButtons: {leftButtons: [
      {
        title: 'Edit', // for a textual button, provide the button title (label)
        id: 'sideMenu', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      },
      {
        //icon: require('../../img/navicon_add.png'), // for icon button, provide the local image asset name
        id: 'add' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      }
    ]}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
  }
  render(){
   
    return (

      <View style={styles.container}>
        <Image source={Logo} style={styles.logo}/>
        <View style={styles.flowColumn2}>
        <View style={styles.icon}><Icon name="user-o" size={30}   color="white"/></View>
        <TextInput style={styles.username2} placeholder="Email" placeholderTextColor="white"></TextInput>
        </View>
        <View style={styles.flowColumn2}>
        <View style={styles.icon}><Icon name="unlock-alt" size={30}   color="white"/></View>
        <TextInput style={styles.username2} placeholder="Password" placeholderTextColor="white"></TextInput>
        </View>
        
        <NotifyButtton text="Login" onPress={this.login.bind(this)}/>
        <Text style={styles.buttonText}>or</Text>
       
        <TouchableHighlight style={styles.facebook}>
         <View style={styles.flowColumn3}>
        
        <Text style={styles.buttonText2}> <Icon name="facebook" size={30}   color="white"/>     Login with facebook</Text>
         </View>
        </TouchableHighlight>
       <TouchableHighlight style={styles.facebook}>
         <View style={[styles.flowColumn3,styles.red]}>
        
        <Text style={styles.buttonText2}> <Icon name="google" size={30}   color="white"/>     Login with Google</Text>
         </View>
        </TouchableHighlight>

        
        <View style={styles.flowColumn}>
               <Button color='white' style={styles.buttonText} title="Forgot pasword?">
               </Button>
               <View style={styles.button2}><NotifyButtton text="Register" color="red" AlignRight/></View>
        </View>
      </View>


 );
  }
}
const styles = StyleSheet.create({
  logo:{
    width: 250,
    height:100,
  },

red:{
backgroundColor:'red',
},
  facebook:{

  
     marginRight:35,
     marginLeft:35,
    alignSelf:'stretch',

  },
  
  button:{
    
    alignSelf: 'stretch',
    height: 50,
    marginRight:35,
    marginLeft:35,
    flexDirection: 'row',
    backgroundColor: 'green',
    borderRadius: 8,
    marginBottom: 10,
    marginTop:5,
    justifyContent: 'center'
  },
  icon:{
      flex:1, 
      marginLeft:5,
      alignSelf:'center'
  },
  username:{

     height: 50,
     marginRight:35,
     marginLeft:35,
   // textAlign: 'center',
    color: 'white',

    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    marginBottom: 5,
  },
   username2:{
     flex:7,
   // textAlign: 'center',
    color: 'white',
    borderRadius: 8,
    //backgroundColor: '#73b8ce',
    
  },
  buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center',

},
buttonText2: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center',

},


text:{
  fontSize: 18,
  color: 'white',
  alignSelf: 'center',
},
  
  button2:{
    flex:1
      
  },
  
  container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#800080',

  },
  flowColumn:{
    justifyContent: 'center',
    alignItems:'center',
        height: 50,
    marginRight:35,
    marginLeft:35,
    flexDirection:'row'
  },
  flowColumn2:{
    borderRadius: 8,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgb(68,75,103)',
    height: 50,
    marginRight:35,
    marginLeft:35,
    flexDirection:'row',
     marginBottom: 10,
  },
  flowColumn3:{
    alignContent:'center',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor:'#3b5998',
    height: 50,
    flexDirection:'row',
     marginBottom: 10,
  },

});

export default Main;