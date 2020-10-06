import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home.screen';
import Header from '../components/Header';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    background:'#d1d8e0'
  }
}

export default function Router(){
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          header: () => <Header/>
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}