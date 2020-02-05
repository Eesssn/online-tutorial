import React,{Component} from 'react';
import {Image  ,Text ,View , TouchableOpacity,Dimensions,TextInput} from 'react-native'
import styles from './styles';
import LogoTitle from './LogTitle'
import logo from '../../../assets/img/app_icon.png';
import persify from 'persify';



const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT =Dimensions.get('window').height;



class ChangePass extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        header: () => <LogoTitle title={'تغییر گذرواژه'}/>,
      };

    constructor(props) {
        super(props)
    
        // Default state
        this.state = {
          
           
        }
 
   
    }

   onPress(value){
       if (value == 'change'){
            this.props.navigation.navigate('Details')
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
                            marginTop: 10,
                        
                                   
                        }}>

                        <View style={{alignItems:'center'}}>
                            <View style={styles.input_style}>
                                    <Image source={require('../../../assets/img/singup/key.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:40}} />
                                    <TextInput placeholder ='رمز عبور فعلی'   style={{width: SCREEN_WIDTH-40,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
                                </View>

                                <View style={styles.input_style}>
                                    <Image source={require('../../../assets/img/singup/key.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:40}} />
                                    <TextInput placeholder =' رمز عبور جدید'secureTextEntry={true}  style={{width:  SCREEN_WIDTH-40,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
                                </View>
                                <View style={styles.input_style}>
                                    <Image source={require('../../../assets/img/singup/key.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:40}} />
                                    <TextInput placeholder ='رمز عبور جدید' secureTextEntry={true}  style={{width:  SCREEN_WIDTH-40,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
                                </View>
                            
                            
                                <View style={styles.btn_view_style }>
                                    <TouchableOpacity style={styles.btn_login} onPress={() => this.onPress('change')}>
                                        <Text style={styles.btn_title}> تغییر گذرواژه </Text>
                                    </TouchableOpacity>
                                </View>
                                    </View>
                            
                    </View>
            </View>
        )
    };
}



export default ChangePass;