import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserDetailScreen } from './screens/UserDetail';
import { HomeScreen } from './screens/Home';

const HomeStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ title: '' }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
