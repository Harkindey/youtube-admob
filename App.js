import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator} from 'react-navigation';

const MainNavigator = TabNavigator({
  splash: {screen: SplashScreen},
  video: {screen: VideoScreen}
},{
  navigationOptions: {
    tabBarVisible: false
  },
  lazy: true
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MainNavigator />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
