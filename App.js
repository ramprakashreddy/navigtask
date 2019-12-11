import React,{ Component } from 'react';
import{
   Platform, Text,View,Button,TouchableOpacity,TextInput
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homepage from './src/homepage'
import mainpage from './src/mainpage'

const AppNavig=createStackNavigator({
    Homepage:{
        screen:homepage,
    },
    Mainpage:{
        screen:mainpage,

    }
})
export default createAppContainer(AppNavig);
