import React, {useState, useRef} from 'react';
import {
	View,
	Text,
	Image,
	Alert,
	StatusBar,
	Modal,
	ActivityIndicator,
	Animated
} from 'react-native';
import {colors} from '../../utils/colors';
import {SplashImage, IlustOne, IlustTwo} from '../../assets';
import {AuthContext} from '../../configs/context';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {getToken, getPlayerIdOneSignal} from '../../utils/helper';
import Swiper from 'react-native-swiper';
import { Button } from 'react-native-paper';

const WelcomeAuth = ({navigation}) => {
	const {signIn} = React.useContext(AuthContext);
	const [userInfo, setUserInfo] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);

	React.useEffect(() => {
		
	});

	return (
		<View style={styles.wrapper.page}>
				<StatusBar barStyle="light-content" />

				<Image style={styles.wrapper.ilustration} source={SplashImage} />
				
				<Swiper style={styles.wrapperSlider}>
					<View style={styles.slide}>
						<Image source={IlustOne} />
						<Text style={styles.text}>Nikmati kemudahan pembayaran di genggaman jari anda</Text>
					</View>
					<View style={styles.slide}>
						<Image source={IlustTwo} />
						<Text style={styles.text}>Cek status pembayaran tagihan anda hanya dengan memasukkan ID Pelanggan</Text>
					</View>
				</Swiper>

				<Button mode="contained" contentStyle={{width:'100%'}}>
					MASUK
				</Button>

				<View style={styles.wrapperFooter}>
					<Text>Belum punya akun ? Daftar</Text>
				</View>
		</View>
	);
};

const styles = {
	openButton: {
		backgroundColor: '#F194FF',
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	wrapper: {
		page: {
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent:'center'
		},
		ilustration: {
			width: 100,
			height: 110,
			resizeMode: 'contain',
			marginTop: 40
		},
		logo: {
			alignItems: 'flex-start',
			width: 100,
			height: 25,
			resizeMode: 'contain',
		},
	},
	wrapperBody: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapperFooter: {
		height: 100,
	},
	wrapperSlider: {},
	slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 	text: {
    fontSize: 12,
    marginHorizontal: 20,
    textAlign: 'center'
  }
};

export default WelcomeAuth;
