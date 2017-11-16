import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView,  WebView, View, Image, Button  } from 'react-native';
import { Card } from 'react-native-elements';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
  } from "expo";
const APP_ID = 'ca-app-pub-9458148096593235~8739853271';
const BANNER_ID = 'ca-app-pub-9458148096593235/5084567348';
const REWARDED_ID = 'ca-app-pub-9458148096593235/5846984679';


AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID('EMULATOR');
console.disableYellowBox = true;

class VideoScreen extends Component {
   
     _openRewarded =  (url) => {
        console.log(url);
    //  AdMobRewarded.requestAd(() => AdMobRewarded.showAd());      
    //    navigate('WebView'); 
      };

    render(){  
        return (
            <View  style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView >
                <View  style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>  
                    <Card title='Video Title'>
                    <View style={{ height: 200 }}>
                        <Image source ={{ uri: 'http://lorempixel.com/g/400/200'}}/>
                        <Text>Video Title</Text>
                        <Text>Duration</Text>
                    </View> 
                    </Card>
                    <View>
                            <Text style={styles.title}>REWARDED AD</Text>
                            <Button title="OPEN VIDEO" color="green" onPress={this._openRewarded} />
                        </View>
                </View>
            </ScrollView>
            <AdMobBanner
                    bannerSize="banner"
                    adUnitID='ca-app-pub-1425926517331745/4139536433'
                    didFailToReceiveAdWithError={this.bannerError}
                />
            </View>
        )
    }
}

const styles={
    title: {
        marginTop: 10,
        fontSize: 30,
        color: "#333"
      }
}

export default VideoScreen