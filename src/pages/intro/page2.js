import React, { Component } from 'react';
import {View , Text ,StyleSheet ,StatusBar ,Image ,Dimensions ,TouchableOpacity} from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class page2 extends Component{
    render(){
        return(
            <View style={{backgroundColor: '#251A51',flex: 1, flexDirection: "column" ,justifyContent :"flex-start" , alignItems: "center"}}>
        <View>
            <Image source={require('../../../assets/img/img_intro/2.png')}  style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT/2}} />
        </View>
        <View style={{paddingTop :30}}>
            <Text style={{fontFamily:'Lalezar-Regular',color:'#ffff'}}>عنوان دوم</Text>
        </View>
        <View style={{padding :15,paddingTop : 30 }}>
            <Text style={{fontFamily:"IRANSansWeb" ,color:'#ffff',textAlign:'center'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</Text>    
        </View>
        
      </View>
          
    
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      btn_login: {
        width : 162,
        height :40,
        marginTop: 25,
        
        //borderBottomRightRadius: 45,
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
  
})
export default page2  ;