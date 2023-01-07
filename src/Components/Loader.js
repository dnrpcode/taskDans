import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';

const Loader = ({visibility}) => {
  return (
    <Modal animationType="fade" visible={visibility} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={50}/>
      </View>
    </Modal>
  );
};

export default Loader;
