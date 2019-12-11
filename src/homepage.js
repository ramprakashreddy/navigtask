import React,{ Component } from 'react';
import{
   Platform,StyleSheet, Text,View,Button,TouchableOpacity
} from 'react-native';

export default class home extends Component{
  constructor (props){
      super(props);
      this.state={
        count: 1  
  }
}

    state={
        count: 0
    }
    functionOne(){
        this.props.navigation.navigate('Mainpage', {  
            counter: this.state.count,  
            
        })  
        }
        
        functionTwo(){
        this.setState({count:this.state.count+1})

        }
        
    
            
       render(){
           const {navigate}=this.props.navigation;
           
        
  return(
<View>
    <Text>
        HomeScreen
        
       
       
    </Text>
    <Button title="GO TO MAINSCREEN"
    
    onPress={() => { this.functionOne(); this.functionTwo(); }
        }
    >

    </Button>
</View>
        );
    }
}