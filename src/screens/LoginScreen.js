import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  windowWidth,
} from '../Utils/ResponsiveUI';
import {Colors} from '../Constants/Colors';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GOOGLE_ID, GOOGLE_IOS_CLIENT_ID} from '../Constants/Config';

export default function LoginScreen({navigation}) {
  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
    });
  }, []);

  const signInGoogle = async () => {
    try {
      console.log('mamang');

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      let info = await GoogleSignin.signInSilently();

      console.log('userInfo');
    } catch (error) {
      console.log('errornya nih', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>LoginScreen</Text>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.txtBtn}>By pass</Text>
      </TouchableOpacity>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInGoogle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    paddingHorizontal: responsiveWidth(20),
    backgroundColor: 'white',
  },
  button: {
    height: responsiveHeight(50),
    backgroundColor: Colors.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  txtBtn: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  title: {
    fontSize: 30,
    marginBottom: responsiveHeight(50),
    fontWeight: '900',
    color: Colors.primary,
  },
});
