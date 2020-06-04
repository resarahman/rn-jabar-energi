import React from 'react';
import Router from './router';
import axios from 'axios';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './configs/store';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

// setup axios
//axios.defaults.baseURL = 'https://mabar.ggwp.id';

// axios.interceptors.request.use(request => {
//   console.log('Starting Request', request)
//   return request
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    //OneSignal.init('173deec7-3423-4009-9bf9-ea21dc684cea'); // set kOSSettingsKeyAutoPrompt to false prompting manually on iOS
    //OneSignal.inFocusDisplaying(2); // disable the alert box when the app is in opened

    //OneSignal.addEventListener('received', this.onReceived);
    //OneSignal.addEventListener('opened', this.onOpened);
    //OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    //OneSignal.removeEventListener('received', this.onReceived);
    //OneSignal.removeEventListener('opened', this.onOpened);
    //OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
    // const navigation = this.context;
    // const {navigation} = this.props;
    // const data = openResult.notification.payload.additionalData;
    // navigation.navigate('Home', {
    //   category: data.linkNotification || '',
    // });
  }

  onIds(device) {
    // console.log('Device info: ', device);
    const id = device.userId || '';
    const token = device.pushToken || '';
    AsyncStorage.multiSet([['playerId', id], ['pushToken', token]]);
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <Router />
        </PaperProvider>
      </StoreProvider>
    );
  }
}

export default App;