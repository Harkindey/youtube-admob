import React, { Component } from 'react';
import {
  View,
  WebView,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements'


class WEBVIEW extends Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft : (
        <Icon type='ionicon' name='ios-arrow-back' iconStyle={{padding: 10, color: 'blue'}} onPress={() => navigation.goBack()} />
    )
    });
    render () {
        const { id } = this.props.navigation.state.params
        let url = `https://www.youtube.com/embed/${id}?rel=0&autoplay=1&showinfo=0&controls=0`;
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