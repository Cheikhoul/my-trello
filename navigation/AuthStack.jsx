import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../vues/SignupScreen';
import LoginScreen from '../vues/LoginScreen';
const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen name='Register' component={SignupScreen} />
    </Stack.Navigator>
  );
}