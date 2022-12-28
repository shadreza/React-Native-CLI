import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/Buttons/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Hi</PrimaryButton>
      <PrimaryButton>Kemon Acho</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({});
