import React,{Component} from 'react';
import {Image ,TextInput ,Text ,View , TouchableOpacity,Dimensions} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import logo from '../../../assets/img/app_icon.png';

var counter =  0;
const SCREEN_WIDTH = Dimensions.get('window').width;

class SingUp extends Component {
    static navigationOptions = {
        headerShown: false,
    };
    constructor(props) {
        super(props)
    
        // Default state
        this.state = {
            color1: '#ffff',
            color2: '#e0e0e0'
                   
        }
   
    }

    onPressS = ()=>{
        counter = 1 ;
        this.setState({
            color1 : '#e0e0e0',
            color2:  '#ffff'
        })
    }
    onPressl = ()=>{
        counter = 0;
        this.setState({
            color1 : '#ffff',
            color2 : '#e0e0e0'
        })
    }
    onPressLogin = ()=>{
        this.props.navigation.navigate('Master')
    }
    onPressSignUp = ()=>{
        this.props.navigation.navigate('Form')
    }
    render(){
        return(
            <KeyboardAwareScrollView
            
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
          >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>نام اپلیکیشن</Text>
      
      <View style={{width:SCREEN_WIDTH/1.3, height:45, margin:10,backgroundColor: '#e0e0e0', borderRadius:45, flexDirection:'row',justifyContent:'space-around', alignItems:'center',padding:3}} >
             <TouchableOpacity style={{justifyContent:'center',alignItems:'center' ,marginLeft: -10, borderRadius:45,width: 123, height: 35,backgroundColor: this.state.color1}} onPress={this.onPressl} ><Text style={{fontFamily:"IRANSansWeb"}}>ورود</Text></TouchableOpacity>
             <TouchableOpacity style={{justifyContent:'center',alignItems:'center' ,marginRight: -10,borderRadius:45,width: 123, height: 35,backgroundColor: this.state.color2}} onPress={this.onPressS}><Text style={{fontFamily:"IRANSansWeb"}}onPress={this.onPress} >عضویت</Text></TouchableOpacity>
      </View>
      <View>
          {counter == 0?(<View><View style={styles.input_style}>
            <Image source={require('../../../assets/img/singup/call.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='شماره موبایل' keyboardType={'phone-pad'} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>

        <View style={styles.input_style}>
            <Image source={require('../../../assets/img/singup/key.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='رمز عبور' secureTextEntry={true} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>
        
        <TouchableOpacity style={styles.forget_style} onPress ={() =>{ this.props.navigation.navigate('Forget')}}>
            <Text style={{color : '#EDC483',textAlign: 'right',fontFamily:"IRANSansWeb"}}>رمز خود را فراموش کردم</Text>
        </TouchableOpacity>
    
        <View style={styles.btn_view_style }>
            <TouchableOpacity style={styles.btn_login} onPress={this.onPressLogin}>
                <Text style={styles.btn_title}> ورود </Text>
            </TouchableOpacity>
        </View>
            </View>):(<View><View style={styles.input_style}>
            <Image source={require('../../../assets/img/singup/call.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='شماره موبایل' keyboardType={'phone-pad'} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>

        <View style={styles.input_style}>
            <Image source={require('../../../assets/img/singup/key.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='رمز عبور'secureTextEntry={true} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>
        <View style={styles.input_style}>
            <Image source={require('../../../assets/img/singup/key.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='رمز عبور' secureTextEntry={true} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>
      
    
        <View style={styles.btn_view_style }>
            <TouchableOpacity style={styles.btn_login} onPress={this.onPressSignUp}>
                <Text style={styles.btn_title}> عضویت </Text>
            </TouchableOpacity>
        </View>
            </View>)}
      </View>
      
       
      <View style={{ height: 60 }} />
    </KeyboardAwareScrollView>
        )
    };
}
export default SingUp;