import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import { Colors } from '../utils/colors';

interface UserCardProps {
  imageUrl: string;
  title: string;
  subTitle: string;
}

export const UserCard = ({ imageUrl, title, subTitle }: UserCardProps) => (
  <View>
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subTitle}</Text>
      </View>
    </View>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  cardTextContainer: {
    marginStart: 20,
    flexDirection: 'column',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 20,
  },
  cardSubtitle: {
    marginTop: 4,
    color: Colors.neutral40,
    fontSize: 16,
  },
  line: {
    marginTop: 14,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral15,
  },
});
