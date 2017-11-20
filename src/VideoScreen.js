import React, {Component} from 'react';
import { StyleSheet, 
    Text, 
    ScrollView, 
    WebView, 
    View, 
    Image, 
    Dimensions,
    ActivityIndicator,
    Linking,
    Share } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import Expo, {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    Constants,
    Notifications
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
        headerRight:  (<Icon name="share" iconStyle={{padding: 10, color: 'blue'}} size={30} underlayColor='white' onPress={(e) => {
            Share.share({
                message: 'Download Dharianwale kirtan online Video',
                url: 'http://bam.tech',
                title: 'Wow, did you see that?'
              })
            console.log('Rate in Progress');
        }}/>),
        headerLeft: (<Icon name="rate-review" iconStyle={{padding: 11, color: 'blue'}} size={30} underlayColor='white' onPress={(e) => {
            // Linking.canOpenURL(link).then(supported => {
            //     supported && Linking.openURL(link);
            // }, (err) => console.log(err));
            console.log('Share In Progress')
            }
        }/>)
    });

    constructor(props){
        super(props)
        this.state = {
            videos : null
        }
    }
    data = () => {
        firebase.database().ref('/saved_videos/videos')
        .on('value', snapshot => {
            const bean = snapshot.val()
            var resArray = _.values(bean);
            this.setState({
                videos : resArray.reverse()
            });
        })
    }
  componentWillMount() {
        this.data();
   }

   refresh =() => {
    this.setState({
        videos : null
    });
    this.data();
   }

   
    
    ads = (id) => {
        const {navigate} = this.props.navigation
        AdMobRewarded.requestAd(() => AdMobRewarded.showAd());      
        navigate('WebView', {id :id}); 
      };
      renderVid() {
        return this.state.videos.map((item, index) => {
            return (     
            <View  style={{ flex: 1,alignItems: 'center', justifyContent: 'center'}} key={index}>  
                <Card title={item.title} containerStyle={{borderRadius: 10 }}>
                <View style={{ height: 170, width: 300,alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: item.thumbnails.medium.url }} style={{height: x* 0.4 , width: x * 0.8 }}/>
                    <Text>Duration : {item.duration.replace(/PT/g,'').replace(/M/g,':').replace(/S/g,'').replace(/H/g,':')}</Text>
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
            <View  style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView >
                {(this.state.videos) ? 
                    (this.state.videos.length > 0 ) ? this.renderVid() :  <Button title="Refresh" style={{ paddingTop: y * 0.3 }} backgroundColor='blue' onPress={this.refresh.bind(this)} />
                    : <ActivityIndicator style={{ paddingTop: y * 0.3 }} color='blue' size='large' /> }
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