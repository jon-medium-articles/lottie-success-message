import { View, Text, Button, StyleSheet } from "react-native";

export const ActionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Perform action"
        onPress={() => {
          navigation.navigate("SuccessMessage");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
