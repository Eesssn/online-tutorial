import React,{Component} from 'react';
import {StyleSheet ,View , BackHandler,Dimensions,ToastAndroid} from 'react-native'
import TabBar from 'fluidbottomnavigation-rn';
import ViewPager from '@react-native-community/viewpager';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import Home from './view/Home';
import Profile from './view/Profile';
import Blog from './view/blog/Blog';
import Courses from './view/courses/Courses';
import Favorite from './view/favorite/Favorite'

const counter = 0;



class Master extends Component{
    static navigationOptions = {
        headerShown: false,
    };

    onBackButtonPressAndroid = () => {
        
    
      if (true) {
        // do something
        // console.log('back')
        // BackHandler.exitApp()
        //return true;
        if (this.counter > 0) {
          BackHandler.exitApp();
        } else {
          setTimeout(() => {
            this.counter = 0;
          }, 3000);
          this.counter++;
          ToastAndroid.show('Press again to exit.', ToastAndroid.SHORT);
          return true;
        }
      }
      return false;
    };

  
  
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.recentlyPlayed}>
            <ViewPager
                   scrollEnabled = {false}
                  ref={(viewPager) => {this.viewPager = viewPager}}
                  style={styles.viewPager}
                  initialPage={2}>
                  <View key="0">
                    <View><Profile/></View>
                  </View>
                  <View key="1">
                  <View ><Blog/></View>
                  </View>
                  <View key="2">
                  <View ><Home/></View>
                  </View>
                  <View key="3">
                  <View ><Courses/></View>
                  </View>
                  <View key="4">
                  <View><Favorite/></View>
                  </View>
                </ViewPager>
            </View>
      
            <TabBar
              tintColor ="#8AA9FC"
              onPress={tabIndex => {
                console.log("tab index = " + tabIndex)
                this.viewPager.setPage(tabIndex)
              }}
              values={[
                { title: "", icon: require('../../../assets/img/icon/profile/profile.png')},
                { title: "", icon: require('../../../assets/img/icon/blog/blog.png')},
                { title: "", icon: require('../../../assets/img/icon/home/home.png') },
                { title: "", icon: require('../../../assets/img/icon/page/Page.png')},
                { title: "", icon: require('../../../assets/img/icon/heart/heart.png')}
                ]}/>

            <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#f2f2f2"
    },
  
    pageStyle: {
      alignItems: 'center',
      flex:1,
      padding: 20
    },
    recentlyPlayed: {
      
     flex:1 ,
      width: Dimensions.get('window').width
  },
  viewPager: {
    flex: 1,
  }
  
  });
export default Master;
