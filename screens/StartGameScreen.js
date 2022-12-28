import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsRow}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: '#4e0329',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  // textInputContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
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
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
