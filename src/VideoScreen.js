import React, {Component} from 'react';
import { StyleSheet, Text, View,  WebView  } from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
  } from "expo";

class VideoScreen extends Component {
    render(){      
        return (
            <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
                <Text>VideoScreen</Text>
            </View>
        )
    }
} 

export default VideoScreen