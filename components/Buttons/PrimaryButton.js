// eslint-disable-next-line prettier/prettier
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { Pressable, StyleSheet, Text, View } from 'react-native';

const PrimaryButton = ({children}) => {
  return (
    <Pressable>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
