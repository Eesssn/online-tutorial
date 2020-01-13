import React,{Component} from 'react';
import {StyleSheet ,Properties,Image ,TextInput ,Text ,View , TouchableOpacity,Dimensions} from 'react-native'
import TabBar from "fluidbottomnavigation-rn";
import ViewPager from '@react-native-community/viewpager';
import MasterHeader from './MasterHeader';




class Master extends Component{
    static navigationOptions = {
        headerShown: false,
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
                    <View><Text>Profile</Text></View>
                  </View>
                  <View key="1">
                  <View ><Text>blog</Text></View>
                  </View>
                  <View key="2">
                  <View ><Text>home</Text></View>
                  </View>
                  <View key="3">
                  <View ><Text>groduated</Text></View>
                  </View>
                  <View key="4">
                  <View><Text>liked</Text></View>
                  </View>
                </ViewPager>
            </View>
      
            <TabBar
              
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#b5d1c4"
    },
  
    pageStyle: {
      alignItems: 'center',
      flex:1,
      padding: 20
    },
    recentlyPlayed: {
      
      height: Dimensions.get('window').height-100,
      width: Dimensions.get('window').width
  },
  viewPager: {
    flex: 1,
  }
  
  });
export default Master;
