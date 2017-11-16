import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

class SplashScreen extends Component {

    render(){      
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#456767' }}>
                <Text>Welcome AKINDE</Text>
            </View>
        )
    }
} 

export default SplashScreen