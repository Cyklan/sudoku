import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DailyChallengePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.headerText}>Daily Challenge</Text>
        <Text style={styles.minorText}>Time to complete:</Text>
        <Text style={styles.importantText}>03:17:57</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("Sudoku")}
            title="Play Daily Challenge"
            accessibilityLabel="Play a game of Sudoku"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {}}
            title="Show Leaderboard"
            accessibilityLabel="View leaderboard"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("DailyAbout")}
            title="About Daily Challenges"
            accessibilityLabel="About daily challenges"
          />
        </View>
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
    paddingTop: 50
  },
  body: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50
  },
  buttonContainer: {
    marginVertical: 20
  },
  importantText: {
      fontSize: 48,
      fontWeight: "bold"
  },
  minorText: {
      fontSize: 32
  },
  headerText: {
      fontSize: 32,
      fontWeight: "bold"
  }
});
