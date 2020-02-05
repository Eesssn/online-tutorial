import React,{Component} from 'react';
import {Image  ,Text ,View , TouchableOpacity,Dimensions,ScrollView} from 'react-native'
import styles from './styles';
import LogoTitle from './LogTitle'
import logo from '../../../assets/img/app_icon.png';
import persify from 'persify';



const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT =Dimensions.get('window').height;



class CallMe extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        header: () => <LogoTitle title={'تماس با ما'}/>,
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
                    height: SCREEN_HEIGHT-80,
                    flexDirection:'column',
                    
                }}>
                    <ScrollView>
                    <View 
                        style={{
                            flex : 2 ,
                            flexDirection: "column",
                            justifyContent:"flex-start",
                            alignItems:"center",
                            marginTop: 10                        
                        }}>
                        <View style={styles.callme_style}>
                            <Text style={styles.callme_text}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </Text>
                        </View>
                        <View style={{ flexDirection:'row',justifyContent:'space-around', alignItems:'center', width: 180, height: 80}} >
                            <TouchableOpacity style={{width: 45, height: 45}}
                                 onPress={() => alert('در مرحله بعد اضافه می شود ')}>
                                <Image source={require('../../../assets/img/app_icons/instagram.png')} style={{width:35 ,height:35}}/>
                            </TouchableOpacity> 
                           
                            
                            <TouchableOpacity style={{width: 45, height: 45}}
                                 onPress={() => alert('در مرحله بعد اضافه می شود ')}>
                            <Image source={require('../../../assets/img/app_icons/youtube.png')} style={{width:40 ,height:40}}/>
                            </TouchableOpacity> 
                            <TouchableOpacity style={{width: 45, height: 45}}
                                 onPress={() => alert('در مرحله بعد اضافه می شود ')}>
                            <Image source={require('../../../assets/img/app_icons/whatsapp.png')} style={{width:35 ,height:35}}/>
                            </TouchableOpacity> 
                        </View>

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
                    </ScrollView>
            </View>
        )
    };
}



export default CallMe;