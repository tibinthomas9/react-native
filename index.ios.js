/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
// var Main = require('./app/components/Main');
import Main from './app/components/Main';
import ProviderList from './app/components/ProviderList';
import SideMenu from './app/components/SideMenu';
import RedditList from './app/components/RedditList';
function registerScreens(){
  Navigation.registerComponent('Main', () => Main);
  Navigation.registerComponent('ProviderList', () => ProviderList);
  Navigation.registerComponent('SideMenu', () => SideMenu);
  Navigation.registerComponent('RedditList', () => RedditList);
  
  

}

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Main', // unique ID registered with Navigation.registerScreen
    //title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {navBarHidden: true}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
       screen: 'ProviderList', // unique ID registered with Navigation.registerScreen
      // passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    },
    right: { // optional, define if you want a drawer from the right
      // screen: 'example.SecondSideMenu', // unique ID registered with Navigation.registerScreen
      // passProps: {} // simple serializable object that will pass as props to all top screens (optional)
    },
    disableOpenGesture: false, // optional, can the drawer be opened with a swipe instead of button
    type:'TheSideBar'
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
// export default class purple extends Component {
//   constructor(props){
//     super(props);
//     registerScreens();
//   }
//   render() {
//     // return (
//     //   <NavigatorIOS
//     //       style={styles.container}
//     //       initialRoute={{
//     //         title: 'LOGIN',
//     //         component: Main,
//     //         navigationBarHidden: true,
//     //       }}/>
// //<Main/>
//   //  );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//    // backgroundColor: '#F5FC2F',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

//AppRegistry.registerComponent('purple', () => purple);
