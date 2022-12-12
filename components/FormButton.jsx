import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { windowHeight, windowWidth } from '../src/utils/Dimensions';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function FormButton({ buttonTitle, theme, icon, ...rest }) {
  if (theme === "primary") {
    return (
      <View
      style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#5acdcf", borderRadius: 18 }]}
      >
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => alert('You pressed a button.')}
        >
          <FontAwesome
            name={icon}
            size={18}
            color="#5acdcf"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#5acdcf" }]}>{buttonTitle}</Text>
        </TouchableOpacity>
    </View>      
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
  );
  }

 const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  button: {
    borderRadius: 5,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
});
