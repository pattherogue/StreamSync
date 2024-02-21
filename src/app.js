// App.js
// Main entry point of the streaming application

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
import AuthenticationService from './services/AuthenticationService';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      // Simulate checking login status
      const loggedInUser = await AuthenticationService.checkLoginStatus();
      setUser(loggedInUser);
    } catch (error) {
      console.error('Error checking login status:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        ) : user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
