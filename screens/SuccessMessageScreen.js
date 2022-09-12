import { View, Text, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export const SuccessMessageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lottie}>
        <Lottie
          source={require("../assets/animations/success.json")}
          autoPlay
          loop={false}
        />
      </View>

      <View>
        <Text style={styles.title}>Great job!</Text>
        <Text style={styles.text}>
          You have animated one screen, now your UI quality deliverables has
          increased.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  lottie: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    color: "#757575",
    textAlign: "center",
  },
});
