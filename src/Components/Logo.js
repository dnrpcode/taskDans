import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {responsiveHeight} from '../Utils/ResponsiveUI';

const defaultUri = 'https://unsplash.it/400/400?image=1';

export default function Logo({uri}) {
  const [src, setSrc] = useState(uri);
  return (
    <Image
      source={{uri: src || defaultUri}}
      style={styles.logo}
      onError={() => setSrc(defaultUri)}
      defaultUriSource={{
        uri: defaultUri,
      }}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    height: responsiveHeight(70),
    width: responsiveHeight(70),
  },
});
