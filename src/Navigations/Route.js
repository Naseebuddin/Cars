import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from "../constant/navigationString";
import { Home, MyCars, Notification } from "../Screens";

function Route() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name={navigationString.HOME} component={Home}/>
         <Stack.Screen name={navigationString.MYCARS} component={MyCars}/>
         <Stack.Screen name={navigationString.NOTIFICATION} component={Notification}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Route;