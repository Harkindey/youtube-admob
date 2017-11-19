import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView,  WebView, View, Image, Dimensions, Picker} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    Constants
  } from "expo";
import api from './api/api';
import _ from 'lodash'
const APP_ID = 'ca-app-pub-9859695340262318~8036501499';
const BANNER_ID = 'ca-app-pub-9859695340262318/6575794750';
const REWARDED_ID = 'ca-app-pub-9859695340262318/8938519628';
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;


AdMobRewarded.setAdUnitID(REWARDED_ID);
AdMobRewarded.setTestDeviceID(Constants.deviceId);
console.disableYellowBox = true;

class VideoScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Videos',
        headerRight:  (<Icon name="share" iconStyle={{padding: 10, color: 'blue'}} size={30} onPress={() => {

        }}/>),
        headerLeft: (<Icon name="rate-review" iconStyle={{padding: 10, color: 'blue'}} size={30}  onPress={
            () => {

            }
        }/>)
    });

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
            <View  style={{ flex: 1,alignItems: 'center', justifyContent: 'center',  }} key={index}>  
                <Card title={item.title} containerStyle={{borderRadius: 10 }}>
                <View style={{ height: 170, width: 300 }}>
                    <Image source ={{ uri: 'http://facebook.github.io/react/img/logo_og.png'}} style={{height: x* 0.4 , width: x * 0.53333 }}/>
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
            <View  style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey' }}>
            <ScrollView >
                {this.renderVid()}
            </ScrollView>
            <AdMobBanner
                    bannerSize="banner"
                    adUnitID='ca-app-pub-1425926517331745/4139536433'
                    didFailToReceiveAdWithError={this.bannerError}
                    testDeviceID={Constants.deviceId}
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