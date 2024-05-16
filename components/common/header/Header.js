import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('D:/App_Home/public/images/logo.jpg')} // Đường dẫn đến file logo của bạn
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: 80,
    height: 80,
    // marginTop: 5
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;