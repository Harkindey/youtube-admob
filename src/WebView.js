import React, { Component,PropTypes } from 'react';
import {
  View,
  WebView
} from 'react-native';

class WEBVIEW extends Component {
    render () {
        return (
            <View style={styles.container}>
                {/* <WebView source={{uri: this.props.url}} /> */}
                <WebView source={{ uri: 'https://www.youtube.com/embed/CvEnDmw9Nnc?rel=0&autoplay=0&showinfo=0&controls=0'}} />
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