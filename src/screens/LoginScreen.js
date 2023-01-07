import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
} from '@react-native-google-signin/google-signin';
import {GOOGLE_ID, GOOGLE_IOS_CLIENT_ID} from '../Constants/Config';

export default function LoginScreen({navigation}) {
  const handleSubmit = () => {
    navigation.navigate('MyTabs');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
    });
  }, []);

  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    } catch (error) {
      if ((error.error = 'DEVELOPER_ERROR')) {
        return navigation.navigate('MyTabs');
      }
    }
  };
  return (
    <View style={styles.page}>
      <Text style={styles.title}>LoginScreen</Text>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.txtBtn}>Facebook</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
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
  or: {
    marginVertical: responsiveHeight(30),
    fontWeight: '800',
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
