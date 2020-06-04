import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import {SplashImage} from '../../assets';
import {colors} from '../../utils/colors';

const Splash = ({navigation}) => {

  return (
    <View style={styles.wrapper.page}>
      <StatusBar barStyle="light-content" />
      <Image source={SplashImage} style={styles.image.splash} />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
  },
  image: {
    splash: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
  },
  title: {
    splash: {
      fontSize: 20,
      color: colors.default,
      fontWeight: 'bold',
      marginTop: 20,
    },
  },
};

export default Splash;
