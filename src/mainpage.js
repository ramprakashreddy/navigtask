import React,{ Component } from 'react';
import{
   Platform,StyleSheet, Text,View,Button,TouchableOpacity
} from 'react-native';

export default class main extends Component{
     
    render(){
        const { navigation } = this.props;  
        const values = navigation.getParam('counter');  
    return(
<View>
   
       <Text  >Number of times visted to this screen : {JSON.stringify(values)}</Text>  

           

</View>
        );
    }
}