import React, { Component } from 'react';
import { BackHandler, AsyncStorage, PixelRatio, StyleSheet, Image, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import  { AppNavigator }  from './Navigator';

export default createAppContainer(AppNavigator);