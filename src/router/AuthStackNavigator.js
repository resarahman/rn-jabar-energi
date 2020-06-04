import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeAuth} from '../pages';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="WelcomeAuth"
      component={WelcomeAuth}
      options={{title: 'Masuk', headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
