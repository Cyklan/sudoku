import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>Sudoku</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("Sudoku")}
            title="Start Game"
            accessibilityLabel="Play a game of Sudoku"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("Daily")}
            title="Daily Challenge"
            accessibilityLabel="View daily challenge"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    marginVertical: 20
  }
});
