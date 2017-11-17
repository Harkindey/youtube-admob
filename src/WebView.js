import React, { Component } from 'react';
import {
  View,
  WebView,
  Text
} from 'react-native';


class WEBVIEW extends Component {
    render () {
        const { id } = this.props.navigation.state.params
        let url = `https://www.youtube.com/embed/${id}?rel=0&autoplay=1&showinfo=0&controls=0`;
        console.log(url);
        return (
            <View style={styles.container}>
                <WebView source={{ uri: url }} />
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