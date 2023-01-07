import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsiveHeight} from '../Utils/ResponsiveUI';

export default function Account({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://unsplash.it/400/400?image=1'}}
          style={styles.image}
        />
        <Text style={styles.name}>Dani Nur Ramadhan Prayogi</Text>
        <Button onPress={() => navigation.navigate('Login')} title="Logout" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    marginVertical: responsiveHeight(30),
    fontSize: 20,
  },
});
