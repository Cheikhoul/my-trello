import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, icon }) {
  if (theme === "primary") {
    return (
      <View
      style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#5acdcf", borderRadius: 18 }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => alert('You pressed a button.')}
        >
          <FontAwesome
            name={icon}
            size={18}
            color="#5acdcf"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#5acdcf" }]}>{label}</Text>
        </Pressable>
    </View>      
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
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
