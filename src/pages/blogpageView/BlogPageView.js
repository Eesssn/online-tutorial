// import React,{Component} from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
// import { withNavigation } from 'react-navigation';



// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HIGHT = Dimensions.get('window').height;

// class BlogPageView extends Component{
//     static navigationOptions = {
//         headerShown: false,
//     };
   
    
//     render(){
//         const { navigation } = this.props;
      
//         return(
//           <>
//             <View style={styles.container}>
//                 <Text> {navigation.getParam('title')} </Text>
//             </View>
//             <View style={styles.container}>
//                 <View style={{flex: 2 ,width :SCREEN_WIDTH, backgroundColor:'#356'}}>
//                 <Image source={navigation.getParam('src')} style={{width:SCREEN_WIDTH, flex:1}} />
//                 </View>
//                 <View style={{flex: 4 ,width :SCREEN_WIDTH, backgroundColor:'#8789'}}></View>
//                 <View style={{position:'absolute',bottom:0,right:0, height:80,width :SCREEN_WIDTH, backgroundColor:'#546'}}></View>
//             </View>
//             </>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     container:{
//         width :SCREEN_WIDTH,
//         height: SCREEN_HIGHT,
//         flexDirection : 'column',
//         alignItems: 'center',
//         justifyContent: "flex-start",
        
//     }
    
// })
// export default withNavigation(BlogPageView);
import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;



export default class BlogPageView extends Component {
  static navigationOptions = {
            headerShown: false,
        };

  constructor(props) {
    super(props);
  
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  _renderScrollViewContent() {
    const { navigation } = this.props;
    return (
      <View style={styles.scrollViewContent}>
        <View style={{width:Dimensions.get('window').width , height: 800}}>
        <View style={{flexDirection:"column"}}>
          <View style={styles.row}><Text style={styles.title}> {navigation.getParam('title')} </Text></View>
          <View ><Text style={styles.text}> {navigation.getParam('text')}</Text></View>
          <View style={{flexDirection: "row" , alignItems:"center", justifyContent:'center',height:40}}>
         
          <View style={styles.shadow} >
          <Image source={require('../../../assets/img/app_icons/like.png')} style={{ width:15,height:15,resizeMode: 'contain' }}/>
          </View>
          <Text style={styles.text}>مطلب چطور بود؟! دوست داشتید؟</Text>
          
          </View>
          
        </View>
          <View style={{alignItems:'center',justifyContent:"center", width:Dimensions.get('window').width,marginTop:5,height:10}}>
            <View style={{alignItems:'center',justifyContent:"center",backgroundColor:'#707070', width:Dimensions.get('window').width-60,marginTop:5,height:1}}/>
          </View>
          <View style={{flexDirection:'row', alignItems:'center',justifyContent:"center", width:Dimensions.get('window').width,marginTop:25,height:80}}>
            <TouchableOpacity style={styles.btn_login2} onPress={this.onPressSave}>
            
                <Text style={styles.btn_title}> اشتراک گذاری </Text>
                <Image source={require('../../../assets/img/app_icons/share.png')} style={{ width:20,height:20,resizeMode: 'contain' }}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_login} onPress={this.onPressSave}>

                <Text style={styles.btn_title}> ذخیره </Text>
                <Image source={require('../../../assets/img/app_icons/bookmark.png')} style={{ width:20,height:20,resizeMode: 'contain' }}/>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }

  onPressheader= ()=>{
    this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    })
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
      scrollEventThrottle={16}
      onScroll={Animated.event(
      [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
      )}
        >
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={[styles.header, {height: headerHeight}]}>
        <Animated.Image
          style={[
            styles.backgroundImage,
            {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
          ]}
          source={navigation.getParam('src')}
        />
        <Animated.View>
          <TouchableOpacity style={styles.bar} onPress={this.onPressheader}>
          <Image
              style={styles.back}
              source={require('../../../assets/img/app_icons/undo.png')}
            />
          </TouchableOpacity>
          </Animated.View>
          
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back:{
    
    width: 20,
    height: 20,
    marginHorizontal :20
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#8AA9FC',
    overflow: 'hidden',
    borderBottomLeftRadius: 25
  },
  bar: {
    marginTop: 22,
    height: 32,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 10,
   
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    marginTop:2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    fontFamily:"IRANSansWeb",
    fontSize: 20
  },
  text:{
    textAlign: "right",
    fontFamily:"IRANSansWeb",
    fontSize: 14,
    padding:15,
    color:"#707070"

  },
  shadow:{
    width:30,
    height:30 ,
    alignItems:"center",
    justifyContent:'center', 
    backgroundColor:'#ffff',
    borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,},
  btn_login: {
    flexDirection:'row',
    width : 150,
    height :45,
    margin:5,
    borderRadius:45,
    backgroundColor:'#8AA9FC',
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },
    btn_login2: {
      flexDirection:'row',
      width : 150,
      height :45,
      margin:5,
      borderRadius:45,
      backgroundColor:'#EDC483',
      alignItems:'center',
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      },
    btn_title: {
        padding : 5,
        textAlign: 'center',
        color: '#251A51',
        fontFamily:"IRANSansWeb",
        fontSize: 14
      },

});