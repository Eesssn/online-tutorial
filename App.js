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
import SettingScreen from './src/pages/settings/Setting';
import BlogViewPage from './src/pages/blogpageView/BlogPageView';
import NBuySCREEN from './src/pages/content/NBuy';
import BuyScreen from './src/pages/content/BuyCourses';
import PartScreen from './src/pages/content/PartContent';
import ChateListScreen from './src/pages/chat/ChatList';
import ChatBoxScreen from './src/pages/chat/ChatBox';
import FrequentlyQuesScreen from './src/pages/profilepages/FrequentlyQuestions';
import ChangePassScreen from './src/pages/settings/ChangePass'
import CallMeScreen from './src/pages/settings/CallMe'
import AboutMeScreen from './src/pages/settings/AboutMe'
import SearchScreen from './src/pages/search/Search';
import MyProfileScreen from './src/pages/profilepages/MyProfile'
import ViewAllScreen from './src/pages/Home/view/courses/ViewAll' 
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Master: MasterScreen,
    Form: FormScreen,
    Verification : VerificationScreen,
    Forget : ForgetPassScreen,
    Setting : SettingScreen,
    Blog : BlogViewPage,
    Nbuy : NBuySCREEN,
    Buy : BuyScreen,
    Part : PartScreen,
    ChatList : ChateListScreen,
    ChatBox : ChatBoxScreen,
    FQues : FrequentlyQuesScreen,
    ChangePass : ChangePassScreen,
    CallMe : CallMeScreen,
    AboutMe : AboutMeScreen,
    Search : SearchScreen,
    MyProfile :MyProfileScreen,
    ViewAll :ViewAllScreen,
    
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
