import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SplashScreen extends Component {

    componentWillMount(){
        const { navigate } = this.props.navigation;
        setTimeout(navigate('video'), 4000);
    }
    render(){
        
        return (
            <View>
                <Text>Welcome</Text>
            </View>
        )
    }
} 

export default SplashScreen