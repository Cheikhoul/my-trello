import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './vues/LoginScreen';
import SignupScreen from './vues/SignupScreen';

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <>
       <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="LoginScreen" component={LoginScreen} />
                <Tab.Screen name="Signup" component={SignupScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,    
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  image: {
    flex: 1 / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 158,
  }
});