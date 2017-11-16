import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView,  WebView, View, Image, Button  } from 'react-native';
import { Card } from 'react-native-elements';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
  } from "expo";
import api from './api/api';
const APP_ID = 'ca-app-pub-9458148096593235~8739853271';
const BANNER_ID = 'ca-app-pub-9458148096593235/5084567348';
const REWARDED_ID = 'ca-app-pub-9458148096593235/5846984679';


AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID('EMULATOR');
console.disableYellowBox = true;

class VideoScreen extends Component {
   componentWillMount() {
      const videos =  api.getVideos()
   }
    ads = (url) => {
        console.log(url);
        const {navigate} = this.props.navigation
        AdMobRewarded.requestAd(() => AdMobRewarded.showAd());      
        navigate('WebView', {url :url}); 
      };

    render(){  
        return (
            <View  style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView >
                <View  style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>  
                    <Card title='Video Title'>
                    <View style={{ height: 170, width: 300 }}>
                        <Image source ={{ uri: 'https//i.ytimg.com/vi/xsX1scbJnDc/hqdefault.jpg'}}/>
                        <Text>Video Title</Text>
                        <Text>Duration</Text>
                    </View> 
                    <View>
                        <Button title="OPEN VIDEO" color="green" onPress={this.ads.bind(this, 'https://www.youtube.com/embed/CvEnDmw9Nnc?rel=0&autoplay=1&showinfo=0&controls=0')} />
                        </View>
                    </Card>
                    
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