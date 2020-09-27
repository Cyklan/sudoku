import React from 'react';
import HomePage from "./components/pages/HomePage"
import SudokuPage from "./components/pages/SudokuPage"
import DailyChallengePage from "./components/pages/DailyChallengePage"
import AboutDailyPage from "./components/pages/AboutDailyPage"
import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none" >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Sudoku" component={SudokuPage} />
        <Stack.Screen name="Daily" component={DailyChallengePage} />
        <Stack.Screen name="DailyAbout" component={AboutDailyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}