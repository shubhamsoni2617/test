import React, { Component } from 'react'
import { Text, View,Image, TextInput, TouchableHighlight, AsyncStorage } from 'react-native'
import Utilities from '../../../shared/utilities'
import AuthService from '../../../shared/services/AuthService'

export default class Login extends Component {
  page;
  state = {
    username:'',
    password:''
  } 
  
  onsubmit = () => {
    if(this.state.username != ''){
      if(!this.state.username.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
        Utilities.showAlert('username is not vailid');
      }else{
        AuthService.login(this.state)
        .then(response => {	
          response.data = response.data.replace(/['"]+/g, '');
          response.data = response.data.trim();
          this.storeToken(response.data);
        })
        .catch(error => {
                  debugger				
          console.log(error);
        });
      }
    }
  }

  storeToken = async (token) => {
    await AsyncStorage.setItem('token', token);
    AuthService.setToken(token);
		this.props.navigation.navigate(this.page);
	  }; 


  render() {
    // this.page = this.props.navigation.getParam('page', 'Home');
    return (
      <View>
        <Text>Login</Text>
        <TextInput placeholder={'username'} onChangeText={(text) => this.setState({username:text})}/>
        <TextInput placeholder={'password'} onChangeText={(text) => this.setState({password:text})} secureTextEntry={true}/>
        <TouchableHighlight onPress={() => this.onsubmit()}><Text>Submit</Text></TouchableHighlight>
      </View>
    )
  }
}