//@flow

import Icon from 'react-native-vector-icons/FontAwesome';
import React,{ Component } from 'react';
import { StyleSheet,
  TouchableHighlight,
  Button,
  View,
Text } from 'react-native';



class NotifyButton extends Component {
  constructor(props) {
    super(props);

  }
   
  render(){
    return (
      
        
       <TouchableHighlight style={this.props.AlignRight ? styles.rightButton: styles.button} onPress={this.props.onPress ? this.props.onPress.bind(this) : null}
            underlayColor='#99d9f4'>
           
            {this.props.icon ? <Text style={styles.buttonText}><Icon name={this.props.icon} size={30}  color="white"/> {"    "+this.props.text}</Text>: <Text style={styles.buttonText}>{this.props.text}</Text>}
                   
            
       </TouchableHighlight>


 );
  }
}
const styles = StyleSheet.create({
 
  buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center',
  marginLeft:10,
},

  button:{
    opacity:0.7,
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
  rightButton :{

  	opacity:0.7,
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'blue',
    borderRadius: 8,
    marginBottom: 10,
    marginTop:5,
    justifyContent: 'center'
  }


});

 

export default NotifyButton;

