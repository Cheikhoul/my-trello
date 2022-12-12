import React, { useState, useContext } from 'react';
// import { AuthContext } from '../navigation/AuthProvider';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { windowWidth } from '../src/utils/Dimensions';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const PlaceholderImageLogo = require('../assets/logo.png');
    const PlaceholderImage = require('../assets/home.png');
    // const { login } = useContext(AuthContext);

    return (
      <>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImageLogo}></Image>
          <Image source={PlaceholderImage} style={styles.image}></Image>
        </View>
        <View style={styles.container}>
          <FormInput
            value={email}
            placeholderText='Email'
            onChangeText={userEmail => setEmail(userEmail)}
            autoCapitalize='none'
            keyboardType='email-address'
            autoCorrect={false}
          />
          <FormInput
            value={password}
            placeholderText='Password'
            onChangeText={userPassword => setPassword(userPassword)}
            secureTextEntry={true}
          />
          <FormButton buttonTitle='Login' onPress={() => alert('login button')} />
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.navButtonText}>New user? Join here</Text>
          </TouchableOpacity>
          {/* <FormButton buttonTitle='Login' onPress={() => login(email, password)} /> */}
        </View>
      </>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 24,
      marginBottom: 10
    },
    imageContainer: {
      flex : 1,
      alignSelf: 'center',
      backgroundColor: '#fff',
      width: windowWidth,
    },
    image: {
      alignSelf: 'center',
      height: 200,
    },
  })