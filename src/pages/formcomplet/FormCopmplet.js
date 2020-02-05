import React,{Component} from 'react';
import {TouchableHighlight,Modal,Image ,TextInput ,Text ,View , TouchableOpacity,Dimensions} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import LogoTitle from './LogTitle'
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-jalaali-date-picker'
import moment from 'moment-jalaali'

var counter =  0;

const SCREEN_WIDTH = Dimensions.get('window').width;




class FormComplet extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        header: () => <LogoTitle/>,
      };

    constructor(props) {
        super(props)
    
        // Default state
        this.state = {
            modalVisible: false,
            photo:null,      
            date : moment(),
        }
        this.onDateChange = this.onDateChange.bind(this);
   
    }
    onDateChange(date) {
        this.setState({ date });
        }
    handleChosePhoto = () => {
        const options ={
            noData : true,
           
        };
        ImagePicker.launchImageLibrary(options, response =>{
            console.log("response" , response)
            if (response.uri){
                this.setState({
                    photo: response,
                })
            }
        })

    }
   
    onPresscontinues = ()=>{
        this.props.navigation.navigate('Verification')
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
  
    render(){
     
        const {photo,date} = this.state;
        const persiandate  =date.format('jYYYY/jMM/jDD');
        const { navigation } = this.props;
        
        return(
            <KeyboardAwareScrollView
            
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
          >
               {(navigation.getParam('pageName')) === "profile" ? ( <>
        <Modal
          style={{height: 300, width: 300}}
            presentationStyle= ''
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible);
            }}>
            <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          }}>
              <View style={styles.card}>


              <DatePicker
              
                showTitleDate={false}
                onChangeDate={this.onDateChange}
               />

            <TouchableOpacity style={styles.btn_date} onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                console.log(this.state.date)
                
              }}>
                <Text style={styles.btn_title}> ثبت </Text>
            </TouchableOpacity>

            </View>
            </View>
           
          </Modal>
      <TouchableOpacity style={{marginBottom: 10,marginTop:15, borderRadius:94/2, width:94,height:94, backgroundColor:'#9e9e9e',  alignItems: 'center' ,justifyContent: 'center'}}
       onPress={this.handleChosePhoto}>
                {photo && (
                    <Image
                        source = {{uri: photo.uri}}
                        style = {{width : 95 , height : 95 ,resizeMode: 'contain' , borderRadius :95/2 }}
                        onPress={this.handleChosePhoto}
                        />
                )}
            </TouchableOpacity>
      
    
      <View>
         <View><View style={styles.input_style}>
            <Image source={require('../../../assets/img/app_icons/man.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='نام و نام خانوادگی' maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>

        <View style={styles.input_style}>
            <Image source={require('../../../assets/img/app_icons/mail.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='ایمیل'  keyboardType='email-address' maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>

        <View style={styles.input_style}>
        <Image source={require('../../../assets/img/singup/call.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='شماره موبایل' keyboardType={'phone-pad'} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>
        

        <TouchableOpacity style={styles.input_style} onPress={() => {
              this.setModalVisible(true);
            }}>
            <Image source={require('../../../assets/img/app_icons/calendar.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='تاریخ تولد' value={persiandate} editable={false} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </TouchableOpacity>

       
        
    
        <View style={styles.btn_view_style }>
            <TouchableOpacity style={styles.btn_login} onPress={this.onPressSave}>
                <Text style={styles.btn_title}> ذخیره </Text>
            </TouchableOpacity>
        </View>
            </View>
      </View></>):(
        <>
        <Modal
          style={{height: 300, width: 300}}
            presentationStyle= ''
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible);
            }}>
            <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          }}>
              <View style={styles.card}>


              <DatePicker
              
                showTitleDate={false}
                onChangeDate={this.onDateChange}
               />

            <TouchableOpacity style={styles.btn_date} onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                console.log(this.state.date)
                
              }}>
                <Text style={styles.btn_title}> ثبت </Text>
            </TouchableOpacity>

            </View>
            </View>
           
          </Modal>
      <TouchableOpacity style={{marginBottom: 20,marginTop:20, borderRadius:94/2, width:94,height:94, backgroundColor:'#9e9e9e',  alignItems: 'center' ,justifyContent: 'center'}}
       onPress={this.handleChosePhoto}>
                {photo && (
                    <Image
                        source = {{uri: photo.uri}}
                        style = {{width : 95 , height : 95 ,resizeMode: 'contain' , borderRadius :95/2 }}
                        onPress={this.handleChosePhoto}
                        />
                )}
            </TouchableOpacity>
      
    
      <View>
         <View><View style={styles.input_style}>
            <Image source={require('../../../assets/img/app_icons/man.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='نام و نام خانوادگی' maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>

        <View style={styles.input_style}>
            <Image source={require('../../../assets/img/app_icons/mail.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='ایمیل'  keyboardType='email-address' maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>

        <TouchableOpacity style={styles.input_style} onPress={() => {
              this.setModalVisible(true);
            }}>
            <Image source={require('../../../assets/img/app_icons/calendar.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='تاریخ تولد' value={persiandate} editable={false} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </TouchableOpacity>

        <View style={styles.input_style}>
            <Image source={require('../../../assets/img/app_icons/star.png')}  style={{width: 20, height: 20 ,  resizeMode: 'contain', marginLeft :5 ,marginRight:30}} />
            <TextInput placeholder ='کد معرف'  keyboardType={'phone-pad'} maxLength={11} style={{width: 300,textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
        </View>
        
    
        <View style={styles.btn_view_style }>
            <TouchableOpacity style={styles.btn_login} onPress={this.onPresscontinues}>
                <Text style={styles.btn_title}> ادامه </Text>
            </TouchableOpacity>
        </View>
            </View>
      </View></>)}
              <View style={{ height: 60 }} />
          </KeyboardAwareScrollView>
            
        )
    };
}
export default FormComplet;