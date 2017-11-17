import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView,  WebView, View, Image,} from 'react-native';
import { Card, Button } from 'react-native-elements';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
  } from "expo";
import api from './api/api';
import _ from 'lodash'
const APP_ID = 'ca-app-pub-9458148096593235~8739853271';
const BANNER_ID = 'ca-app-pub-9458148096593235/5084567348';
const REWARDED_ID = 'ca-app-pub-9458148096593235/5846984679';


AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID('EMULATOR');
console.disableYellowBox = true;

class VideoScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos : ''
        }
    }
   componentWillMount() {
      const videos =  api.getVideos()
      var resArray = _.values(videos);
      this.setState({
          videos : resArray
      });
   }
    ads = (id) => {
        const {navigate} = this.props.navigation
        AdMobRewarded.requestAd(() => AdMobRewarded.showAd());      
        navigate('WebView', {id :id}); 
      };
      renderVid() {
        return this.state.videos.map((item, index) => {
            return (     
            <View  style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }} key={index}>  
                <Card title={item.title}>
                <View style={{ height: 170, width: 300 }}>
                    <Image source ={{ uri: 'http://facebook.github.io/react/img/logo_og.png'}} style={{height: 150, width: 200}}/>
                    <Text>Duration : {item.duration}</Text>
                </View> 
                <View>
                    <Button title="OPEN VIDEO" backgroundColor="green" onPress={this.ads.bind(this, item.id )} />
                    </View>
                </Card>           
            </View>
        )})
      }

    render(){  
        
        return (
            <View  style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView >
                {this.renderVid()}
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