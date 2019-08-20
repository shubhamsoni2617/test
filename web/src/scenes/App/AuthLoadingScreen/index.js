import React, { Component } from 'react'
import { 
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View } from 'react-native'
import AuthService from '../../../shared/services/AuthService'

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const token = await AsyncStorage.getItem('token');
    AuthService.setToken(token);
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate('App');
  };
  render() {
    
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default AuthLoadingScreen;