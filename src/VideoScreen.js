import React, {Component} from 'react';
import { StyleSheet, 
    Text, 
    ScrollView, 
    WebView, 
    View, 
    Image, 
    Dimensions,
    Share,
    ActivityIndicator } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    Constants
  } from "expo";
  import firebase from 'firebase';
import _ from 'lodash'
const APP_ID = 'ca-app-pub-9859695340262318~8036501499';
const BANNER_ID = 'ca-app-pub-9859695340262318/6575794750';
const REWARDED_ID = 'ca-app-pub-9859695340262318/8938519628';
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;
  
const config = {
    apiKey: "AIzaSyCGziM8ZF5AUvrJKPy2gB5Y5Hm2fSYa-SM",
    authDomain: "ads-186107.firebaseapp.com",
    databaseURL: "https://ads-186107.firebaseio.com",
    projectId: "youtubeads-186107",
    storageBucket: "youtubeads-186107.appspot.com",
    messagingSenderId: "796180200883"
  };
  firebase.initializeApp(config);


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
  async componentWillMount() {
    firebase.database().ref('/saved_videos/videos')
    .once('value', snapshot => {
        const bean = snapshot.val()
        var resArray = _.values(bean);
        this.setState({
            videos : resArray.reverse()
        });
    })
    
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
                    <Image source={{ uri: item.thumbnails.medium.url }} style={{height: x* 0.4 , width: x * 0.8 }}/>
                    <Text>Duration : {item.duration}</Text>
                </View> 
                <View>
                    <Button title="OPEN VIDEO" backgroundColor='blue' onPress={this.ads.bind(this, item.id )} />
                    </View>
                </Card>           
            </View>
        )})
      }

    render(){  
        return (
            <View  style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey' }}>
            <ScrollView >
                {(this.state.videos) ? this.renderVid() : <ActivityIndicator style={{ paddingTop: y * 0.3 }} color='blue' size='large' /> }
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