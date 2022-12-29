import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Pressable, StyleSheet, Text, View } from 'react-native';

const PrimaryButton = ({children}) => {
  const pressHandler = () => {
    // console.log('primary button pressed');
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.pressedIos, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{color: '#4e0329'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 6,
    overflow: 'hidden',
    flex: 1,
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    // android
    elevation: 2,
    // ios
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 6,
    },
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  pressedIos: {
    opacity: 0.75,
  },
});
