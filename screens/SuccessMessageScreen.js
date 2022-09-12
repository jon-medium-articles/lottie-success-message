import { View, Text, StyleSheet } from "react-native";

export const SuccessMessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Success!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
