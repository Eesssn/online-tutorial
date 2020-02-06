import React,{Component} from 'react';
import { StyleSheet, View, Text, Image, I18nManager, Dimensions } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import { StackActions, NavigationActions } from 'react-navigation';
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Details' })],
});


I18nManager.forceRTL(false);



const slides = [
  {
    key: 'somethun',
    title:'عنوان اول',
    text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.    ',
    image: require('../../../assets/img/img_intro/1.png'),
      backgroundColor: '#f4f4f4',
      title_style:{ fontFamily:'Lalezar-Regular'},
     text_style: {fontFamily:"IRANSansWeb" ,textAlign:'center'}
    
  },
  {
    key: 'somethun1',
    title:'عنوان دوم',
    text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.    ',
      image: require('../../../assets/img/img_intro/2.png'),
      backgroundColor: '#251A51',
      title_style:{ fontFamily:'Lalezar-Regular',color:'#ffff'},
      text_style: {fontFamily:"IRANSansWeb" ,textAlign:'center',color:'#ffff'}
    
  },
  {
    key: 'somethun2',
    title:'عنوان سوم',
    text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.    ',
    image: require('../../../assets/img/img_intro/3.png'),
    backgroundColor: '#f1fcfc',
    title_style:{ fontFamily:'Lalezar-Regular'},
    text_style: {fontFamily:"IRANSansWeb" ,textAlign:'center'}
   
  },
];

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
var counter = 0;
class AppIntro extends Component{
  static navigationOptions = {
    headerShown: false,
};

_renderItem = ({ item, dimensions }) => (
  <View style={{backgroundColor: item.backgroundColor,flex: 1,flexDirection: "column" ,justifyContent :"flex-start" , alignItems: "center"}}>
    <View>
      <Image source={item.image}  style={styles.image_style} />
    </View>
    <View style={styles.section}>
      <View style={{paddingTop :20}}>
        <Text style={item.title_style}>{item.title}</Text>
      </View>
      <View style={{padding :12,paddingTop : 10 }}>
        <Text numberOfLines={5} ellipsizeMode="tail"  style={item.text_style}>{item.text}</Text>
      </View>
    </View>
  </View>
);
  
    render(){
        
        return(
          <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          // bottomButton
          bottomButton
          nextLabel={'ادامه'}
          doneLabel={'شروع'}
       
          activeDotStyle	={{backgroundColor:'#EDC483'}}
          buttonStyle={{
            height: 45,
            marginTop:1,
            borderRadius:45,
            backgroundColor:'#8AA9FC',
            alignItems:'center',
            
            }}
            buttonTextStyle={{fontFamily:"IRANSansWeb" }}
            onDone={()=>{ 
                          this.props.navigation.dispatch(resetAction)}}
          // hideNextButton
          // hideDoneButton
          // onSkip={() => console.log("skipped")}
        />
      );
    };
}
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    padding : 5,
    textAlign: 'center',
    color: '#fff',
    fontFamily:"IRANSansWeb"
  },
  image_style:{
    width:SCREEN_WIDTH, 
    height: SCREEN_HEIGHT/10*5
  },
  section:{
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT/10*4,
    alignItems:"center"
  }


});

export default AppIntro;
