import React, { Component,PropTypes } from 'react';
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
                <WebView source={{ uri: 'https://www.youtube.com/embed/CvEnDmw9Nnc?rel=0&autoplay=1&showinfo=0&controls=0'}} />
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