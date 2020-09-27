import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function AboutDailyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.headerText}>About Daily Challenges</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <Text style={styles.normalText}>
          Every day at midnight CEST (UTC+2), a new sudoku will be generated.
          Every player will receive the same puzzle. You can only attempt it
          once, and once you finish it, you can publish your time to the leaderboard.
          The faster you can solve it, the higher you will place on the leaderboard.
        </Text>
      </View>
    <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 50,
},
body: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
},
buttonContainer: {
    marginVertical: 20,
},
headerText: {
    fontSize: 32,
    fontWeight: "bold",
},
normalText: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20
  }
});
