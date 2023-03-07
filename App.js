import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import EmpProfile from "./src/screens/Page2/EmpProfile";
import FetchEmployee from "./src/screens/Page1/FetchEmployee";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import GetLocation from "./src/config/GetLocation";
import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));




const Stack= createNativeStackNavigator(); 

const App = () =>{

  
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='lightblue'/>

      <Stack.Navigator initialRouteName='Home' style= {styles.appContainer}>
  
        <Stack.Screen name="Home" component={FetchEmployee} 
          options={{headerStyle:{
            backgroundColor: "lightblue",
          }}}/>
        <Stack.Screen name="profile" component={EmpProfile} initialParams={{id: 1}} options={{headerStyle:{
            backgroundColor: "lightblue",
          }}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  
});


export default App;