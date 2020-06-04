import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
  const userToken = await AsyncStorage.getItem('token');
  return userToken;
};

export const getPushToken = async () => {
  const userToken = await AsyncStorage.getItem('pushToken');
  return userToken;
};

export const getPlayerIdOneSignal = async () => {
  const playerId = await AsyncStorage.getItem('playerId');
  return playerId;
};
