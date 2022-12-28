import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} />
      <PrimaryButton>Hi</PrimaryButton>
      <PrimaryButton>Kemon Acho</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: '#72063c',
    marginHorizontal: 24,
    borderRadius: 8,
    // android
    elevation: 4,
    // ios
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    fontSize: 32,
    borderBottomColor: '#FAAB78',
    borderBottomWidth: 2,
    width: 64,
    textAlign: 'center',
    color: '#FAAB78',
    marginVertical: 8,
    fontWeight: 'bold',
  },
});
