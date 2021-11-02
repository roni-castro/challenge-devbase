import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { UserCard } from '../../components/UserCard';
import { Colors } from '../../utils/colors';

interface UserDetailProps {
  userName: string;
}

interface User {
  avatar_url: string;
  name: string;
  location: string;
}

export const UserDetailScreen = () => {
  const {
    params: { userName },
  } = useRoute();
  const navigation = useNavigation();
  const [{ state, data }, setUserData] = React.useState<{
    data?: User;
    state: 'loading' | 'success' | 'error';
  }>({
    state: 'loading',
  });

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`,
        );
        const userData = await response.json();
        console.log(`https://api.github.com/users/${userName}`);
        setUserData({ data: userData, state: 'success' });
        navigation.setOptions({
          title: userData.name,
        });
      } catch (e) {
        setUserData({ state: 'error' });
      }
    };
    fetchUserData();
  }, [navigation, userName]);

  if (state === 'loading' || !data) {
    return <ActivityIndicator size="large" color={Colors.primary} />;
  }

  if (state === 'error') {
    return <Text>Error loading user data</Text>;
  }

  return (
    <View style={styles.container}>
      <UserCard
        imageUrl={data.avatar_url}
        title={data.name}
        subTitle={data.location}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
