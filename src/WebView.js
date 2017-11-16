import React, { Component } from 'react';
import {
  View,
  WebView,
  Text
} from 'react-native';


class WEBVIEW extends Component {
    render () {
        console.log(this.props.navigation.state.params.url)
        return (
            <View style={styles.container}>
                <WebView source={{ uri: this.props.navigation.state.params.url}} />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor : '#F6F6EF',
        flexDirection: 'column'
    }
}
export default WEBVIEW