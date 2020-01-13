/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/pages/intro/AppIntro';
import DetailsScreen from './src/pages/signup/SignUp';
import MasterScreen from './src/pages/Home/Master';
import FormScreen from './src/pages/formcomplet/FormCopmplet';
import VerificationScreen from './src/pages/verification/VerificationScreen';
import ForgetPassScreen from './src/pages/forgetpass/ForgetPass'
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Master: MasterScreen,
    Form: FormScreen,
    Verification : VerificationScreen,
    Forget : ForgetPassScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen'
  }
);
const AppContainer = createAppContainer(RootStack);

class App extends React.Component{
  render(){
    return <AppContainer />;
  }
  
};

const styles = StyleSheet.create({
  
});

export default App;
