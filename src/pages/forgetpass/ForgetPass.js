import React,{Component} from 'react';
import { View , Text, TextInput , TouchableOpacity ,Image ,Dimensions} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LogoTitle from './LogTitle'
import styles from './styles'

var counter =  0;

class ForgetPass extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        header: () => <LogoTitle/>,
      };
    onPressLogin = ()=>{
        this.props.navigation.navigate('Verification')
    }

    render(){
        return(
            <KeyboardAwareScrollView
            
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
          >
     
      
    <View>
    <Text style={styles.title}>لطفا شماره تلفن ثبت شده را در کادر زیر بصورت کامل وارد کنید</Text>
    
        <View style={styles.input_style}>
            <Image source={require('../../../assets/img/singup/call.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='شماره موبایل' keyboardType={'phone-pad'} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>

        
    
        <View style={styles.btn_view_style }>
            <TouchableOpacity style={styles.btn_login} onPress={this.onPressLogin}>
                <Text style={styles.btn_title}> تایید </Text>
            </TouchableOpacity>
        </View>
            </View>
    
      
       
      <View style={{ height: 60 }} />
    </KeyboardAwareScrollView>
        )
    };
}
export default ForgetPass;

