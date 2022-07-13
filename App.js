import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import Register from './Screens/Register';
import HomePage from './Screens/HomePage';
import Details from './Screens/Details';
// import { StackNavigator } from 'react-navigation'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button } from 'react-native-paper';

import * as Font from 'expo-font';


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const NavigationApp =StackNavigator({
//   Login:{screen: LoginScreen},
//   Register:{screen: Register},
// })

Font.loadAsync({
  Font: require('./assets/fonts/font2.ttf'),
  Mesa: require('./assets/fonts/Mesa.otf'),
 })

const AppNavigator = createStackNavigator(
  {
    App:App,
    LoginScreen: LoginScreen,
      Register: Register,
      HomePage: HomePage,
      Details: Details,
   
  },
  {
      initialRouteName: 'LoginScreen',
 
      defaultNavigationOptions: {
        header: null
    }
    });

    


  
const AppContainer = createAppContainer(AppNavigator);

// Font.loadAsync({
//   Font: require('./assets/fonts/font2.ttf'),
//   Mesa: require('./assets/fonts/Mesa.otf'),
//  }),


 function App({ navigation }) {

 //   Font.loadAsync({
    //     Font: require('../assets/fonts/font2.ttf'),
    //     Mesa: require('../assets/fonts/Mesa.otf'),
    //    }),


  return (
  
     <AppContainer  screenOptions={{
      headerShown: false
    }} /> 

    // <NavigationApp/>
  //  <View>
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//   <Text>Details Screen</Text>
//   <Button style={{backgroundColor:'red'}}
//     title="Go to Details... again"
//     onPress={() => navigation.navigate('LoginScreen')}
//   />
// </View>
      //  <LoginScreen></LoginScreen> 
  //     {/* <Register></Register> */}
  //     <HomePage></HomePage>
  //   </View>

 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function DetailsScreen (){

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button style={{backgroundColor:'red'}}
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('LoginScreen')}
        />
      </View>
    );

}


export default AppContainer;


