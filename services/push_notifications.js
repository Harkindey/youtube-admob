import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
const PUSH_ENDPOINT = 'http://localhost:3333/note';
 export default registerForNotifications = async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log(previousToken);
    if(previousToken){
        return
    } else {
        const { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);

        if ( status != granted ) {
            return;
        }
        let token = await Notifications.getExponentPushTokenAsync();
        console.log(token);
        await axios.post(PUSH_ENDPOINT, {token});
        AsyncStorage.setItem('pushtoken', token);
    }
}