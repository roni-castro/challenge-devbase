import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../utils/colors';

interface CardButtonProps {
  text: string;
  onPress: () => void;
}

export const CardButton = ({ text, onPress }: CardButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: `${Colors.primary}`,
    borderRadius: 12,
    alignContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontColor: `${Colors.white}`,
    fontSize: 12,
  },
});
