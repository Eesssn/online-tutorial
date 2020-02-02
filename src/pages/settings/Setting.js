import React,{Component} from 'react';
import {Image  ,Text ,View , TouchableOpacity,Dimensions,BackHandler} from 'react-native'
import styles from './styles';
import LogoTitle from './LogTitle'
import logo from '../../../assets/img/app_icon.png';
import persify from 'persify';



const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT =Dimensions.get('window').height;



class Setting extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        header: () => <LogoTitle title={'تنظیمات'}/>,
      };

    constructor(props) {
        super(props)
    
        // Default state
        this.state = {
          
           
        }
 
   
    }

   onPress(value){
       if (value == "change"){
        this.props.navigation.navigate('ChangePass')
       }
       else if(value == "call"){
        this.props.navigation.navigate('CallMe')
       }
       else if (value == "about"){
         this.props.navigation.navigate('AboutMe') 
       }else if (value == 'exit'){
        BackHandler.exitApp()
       }
   }

  
    render(){
     
     
        
        return(
            <View
                style={{
                    width:SCREEN_WIDTH,
                    height: SCREEN_HEIGHT-20,
                    flexDirection:'column',
                    
                }}>

                    <View 
                        style={{
                            flex : 2 ,
                            flexDirection: "column",
                            justifyContent:"flex-start",
                            alignItems:"center",
                            marginTop: 10                        
                        }}>
                            <TouchableOpacity onPress ={() => this.onPress('change')}>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Image source={require('../../../assets/img/app_icons/next.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../assets/img/singup/key.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >تغییر گذرواژه</Text></View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress ={() => this.onPress('call')}>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Image source={require('../../../assets/img/app_icons/next.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../assets/img/singup/call.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >تماس با ما</Text></View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress ={() => this.onPress('about')}>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Image source={require('../../../assets/img/app_icons/next.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={logo} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >درباره ما</Text></View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress ={() => this.onPress('exit')}>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Image source={require('../../../assets/img/app_icons/next.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../assets/img/app_icons/logout.png')} style={{ width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#E3707F", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >خروج از برنامه</Text></View>
                                </View>
                            </TouchableOpacity>

                        </View>
                    <View
                        style={{
                            flex: 2.5,
                            flexDirection:'column',
                            justifyContent:"flex-start",
                            alignItems:"center",
                        }}>
                         <Image source={logo} style={styles.logo} />
                        <View style={{width:SCREEN_WIDTH ,height: 50 ,alignItems:'center',justifyContent:"center"}}>
                        <Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:12}} >نسخه {persify("0.1")} </Text>
                        </View>
                    </View>
                </View>
        )
    };
}


export default Setting;