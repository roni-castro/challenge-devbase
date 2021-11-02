import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CardButton } from '../../components/CardButton';
import { Colors } from '../../utils/colors';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [users] = React.useState<string[]>([
    'GrahamCampbell',
    'fabpot',
    'weierophinney',
    'rkh',
    'josh',
  ]);

  const navigateToUserDetail = (userName: string) =>
    navigation.navigate('UserDetail', { userName });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 GitHub Users</Text>
      <Text style={styles.subtitle}>
        Tap the username to see more information
      </Text>
      <FlatList
        data={users}
        numColumns={3}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={{ padding: 4 }}>
            <CardButton
              text={item}
              onPress={() => navigateToUserDetail(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'column',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  cardTextContainer: {
    color: 'red',
  },
  title: {
    marginTop: 20,
    marginBottom: 16,
    fontWeight: 'bold',
    fontColor: `${Colors.black}`,
    fontSize: 32,
  },
  subtitle: {
    marginBottom: 20,
    fontColor: `${Colors.neutral80}`,
    fontSize: 24,
  },
});
