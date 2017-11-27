import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
const PUSH_ENDPOINT = 'https://adonis-app-garjleuroa.now.sh/note';
 export default registerForNotifications = async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log(previousToken);
    if(previousToken){
        return
    } else {
        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        await axios.post(PUSH_ENDPOINT, {token});
        AsyncStorage.setItem('pushtoken', token);
    }
}