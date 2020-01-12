import React,{Component} from 'react';
import {View ,Text ,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import ViewPager from "@react-native-community/viewpager";
import One from "./page1"
import Two from "./page2"
import Three from "./page3"

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
var counter = 0;
class AppIntro extends Component{
  static navigationOptions = {
    headerShown: false,
};
    constructor(props) {
        super(props)
    
        // Default state
        this.state = {
          btnText: 'ادامه',
          opacity1: 1,
          opacity2: 0.5,
          opacity3: 0.5,
                   
        }
   
}
onPress =() =>{
    counter ++
    this.viewPager.setPage(parseFloat(counter))
    if (counter == 2){
        this.setState({
          btnText: "شروع کن"
        })
    }
    if (counter== 1){
      this.setState({
        opacity1: 0.5,
        opacity2: 1,
        opacity3: 0.5,
      })
    }
    else if (counter == 2){
      this.setState({
        opacity1: 0.5,
        opacity2: 0.5,
        opacity3: 1,
      })    
    }
    else if(counter == 3){
      counter = 0
      this.props.navigation.navigate('Details')
      
    }
}
    render(){
        const btnText = this.state;
        return(
            <View style={styles.container}>
        
            <View style={styles.main}>
            
                <ViewPager
                    style={styles.viewPager}
                    initialPage={0}
                    scrollEnabled = {false}
                    ref={(viewPager) => {this.viewPager = viewPager}}
                    >
                    <View key="0">
                    <One/>
                    </View>
                    <View key="1">
                    <Two/>
                    </View>
                    <View key="2">
                    <Three/>
                    </View>
                </ViewPager>
        <View style={styles.bbar}>
        <View style={{ flexDirection:'row',justifyContent:'space-around', alignItems:'center', width: 75, height: 50}} >
          <View style={{borderRadius:45,width: 8, height: 8, backgroundColor:'#EDC483',opacity :this.state.opacity1}} />
          <View style={{borderRadius:45,width: 8, height: 8, backgroundColor:'#EDC483',opacity :this.state.opacity2}} />
          <View style={{borderRadius:45,width: 8, height: 8, backgroundColor:'#EDC483',opacity :this.state.opacity3}} />
        </View>
          <TouchableOpacity style={styles.btn_login} onPress={this.onPress}>
              <Text style={styles.title}> {this.state.btnText} </Text>
          </TouchableOpacity>
        </View>
          
        </View>
      
      </View>
        )
    };
}
const styles = StyleSheet.create({
    container: {
      flex: 1

      
    },
 
    main: {
      flex: 1,
      height :SCREEN_HEIGHT
    },
    item: {
      height: 200,
      width: 375,
      marginTop: 10,
      backgroundColor: 'green'
    },
    text: {
      color: '#ffffff',
      fontSize: 40
    },
    viewPager: {
        flex: 1,
    },
    bbar: {
        
       
        alignItems: "center",
        position: "absolute",
        bottom:0,
        flex: 1,
        width: SCREEN_WIDTH,
       
        marginBottom: 10

      },
    btn_login: {
        width : 162,
        height :40,
        marginTop:1,
        borderRadius:45,
        backgroundColor:'#8AA9FC',
        alignItems:'center'
      },
      title: {
        padding : 5,
        textAlign: 'center',
        color: '#fff',
        fontFamily:"IRANSansWeb"
      },
  });
export default AppIntro;
