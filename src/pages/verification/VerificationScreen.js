import React,{Component} from 'react';
import {TouchableHighlight,Modal,Image ,TextInput ,Text ,View , TouchableOpacity,Dimensions} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import Header from './Header'


const SCREEN_WIDTH = Dimensions.get('window').width;




class FormComplet extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        header: () => <Header/>,
      };

    constructor(props) {
        super(props)
    
        // Default state
        this.state = {
            result: "",
            d1 :"*",
            d2 :"*",
            d3 : "*",
            d4 : "*"
      
        }
        this.onPress = this.onPress.bind(this);
     
    }
    onPress = e => {  
        switch(this.state.result.length) {
            case 0:
             this.setState({
                d1 : e,
                d2 :"*",
                d3 : "*",
                d4 : "*"
             })
              break;
            case 1:
                this.setState({
                    d2 :e,
                    d3 : "*",
                    d4 : "*"
                 })
              break;
              case 2:
                this.setState({
                    d3 : e,
                    d4 : "*"
                 })
              break;
              case 3:
                this.setState({
                    d4 : e,
                    
                   
                 })
              break;
            default:
        
          }
        
        if (this.state.result.length == 4){
            console.log("length up down 4")
        }
        else {
            this.setState({
                result: this.state.result + e
                
            })
           
            
        }
       
    };
    backspace = () => {
        
        this.setState({
            result: this.state.result.slice(0, -1)
        })
       
        switch(this.state.result.length) {
            case 4:
             this.setState({
                d4 : "*"
             })
              break;
            case 3:
                this.setState({
                  
                    d3 : "*",
                   
                 })
              break;
              case 2:
                this.setState({
                    d2 : "*",
                   
                 })
              break;
              case 1:
                this.setState({
                    d1 : "*",
                    
                   
                 })
              break;
            default:
        
          }
    };
    onPresscontinues = ()=>{
        this.props.navigation.navigate('Master')
    }
    componentDidMount(){
        console.log(Dimensions.get('window').height)
    }
    render(){
     
    
        
        return(
            <View style={styles.container}>
            <View style={{height:(Dimensions.get('window').height)/10*5 ,alignItems:'center'}}>
                <Text style={styles.title}>لطفا کد ارسالی به شماره تلفن ثبت شده را در کادر زیر بصورت کامل وارد کنید</Text>
                <Image source={require('../../../assets/img/app_icons/mail.png')}  style={styles.icon} />
                <View style={styles.verificationpad}>
                    <Text style={styles.verificationpad_text}>{this.state.d1}</Text>
                    <Text style={styles.verificationpad_text}>{this.state.d2}</Text>
                    <Text style={styles.verificationpad_text}>{this.state.d3}</Text>
                    <Text style={styles.verificationpad_text}>{this.state.d4}</Text>
                </View>
                <Text style={styles.resend}> ارسال مجدد</Text>
                <View style={styles.btn_view_style }>
                    <TouchableOpacity style={styles.btn_login} onPress={this.onPresscontinues}>
                        <Text style={styles.btn_title}> تایید </Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={{height:(Dimensions.get('window').height)/10*2}}>
                <View style={{backgroundColor:'#FFFF'}}>
                <View style={styles.keypad}>
                    <TouchableOpacity  onPress={e => this.onPress("1") } style={styles.card}><Text style={styles.verificationpad_text}>1</Text></TouchableOpacity>
                    <TouchableOpacity  onPress={e => this.onPress("2") } style={styles.card}><Text style={styles.verificationpad_text}>2</Text></TouchableOpacity>
                    <TouchableOpacity  onPress={e => this.onPress("3") } style={styles.card}><Text style={styles.verificationpad_text}>3</Text></TouchableOpacity>
                </View>
                <View style={styles.keypad}>
                    <TouchableOpacity  onPress={e => this.onPress("4") }  style={styles.card}><Text style={styles.verificationpad_text}>4</Text></TouchableOpacity>
                    <TouchableOpacity  onPress={e => this.onPress("5") }  style={styles.card}><Text style={styles.verificationpad_text}>5</Text></TouchableOpacity>
                    <TouchableOpacity  onPress={e => this.onPress("6") } style={styles.card}><Text style={styles.verificationpad_text}>6</Text></TouchableOpacity>
                </View>
                <View style={styles.keypad}>
                    <TouchableOpacity onPress={e => this.onPress("7") } style={styles.card}><Text style={styles.verificationpad_text}>7</Text></TouchableOpacity>
                    <TouchableOpacity  onPress={e => this.onPress("8") } style={styles.card}><Text style={styles.verificationpad_text}>8</Text></TouchableOpacity>
                    <TouchableOpacity  onPress={e => this.onPress("9")} style={styles.card}><Text style={styles.verificationpad_text}>9</Text></TouchableOpacity>
                </View>
                <View style={styles.keypad}>
                    <TouchableOpacity onPress={()=>{console.log(this.state.result)}} style={styles.cardhide}><Text style={styles.verificationpad_text}></Text></TouchableOpacity>
                    <TouchableOpacity onPress={e => this.onPress("0") } style={styles.card}><Text style={styles.verificationpad_text}>0</Text></TouchableOpacity>
                    <TouchableOpacity onPress={e => this.backspace("CE") } style={styles.card}><Text style={styles.verificationpad_text}>←</Text></TouchableOpacity>
                </View>
                </View>
                </View>
                
               
                
            </View>        


      
 
        )
    };
}
export default FormComplet;