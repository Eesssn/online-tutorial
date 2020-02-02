import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const SCREEN_WIDTH = window.width;
export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({  
  TextHeader:{
     width: (window.width/2),
      padding:15,
      fontSize:22,
      color:'#ffffff',
      fontFamily:'Lalezar-Regular',
      alignItems: "center"      
  },
  back:{
    
    width: 20,
    height: 20,
    marginHorizontal :20
  },
  nav_style:{
    width: SCREEN_WIDTH-40,
    height: 50,
    borderColor : 'black',
    borderWidth: .2, 
    padding:5,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 12
    },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginTop: 30     
    
  },
  input_style:{
    marginEnd: 25,
    marginStart: 30,
    width: 320,
    height: 50,
    borderColor : 'black',
    borderWidth: .2,
    justifyContent:"center",
    flexDirection:'row-reverse',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 12
},
btn_view_style:{
  marginEnd: 25,
  marginStart: 25,
  width: 320,
  height: 50,
  justifyContent:"center",
  flexDirection:'row',
  alignItems: 'center',
  marginTop: 40

},  
btn_login: {
  width : 304,
  height :50,
  marginTop:30,
  borderRadius:45,
  backgroundColor:'#8AA9FC',
  alignItems:'center',
  justifyContent:'center',
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  },
  btn_title: {
      padding : 5,
      textAlign: 'center',
      color: '#fff',
      fontFamily:"IRANSansWeb",
      fontSize: 20
    },
    callme_style:{
      width:SCREEN_WIDTH-20,
      margin: 10,
    },
    callme_text: {
      padding : 5,
      fontFamily:"IRANSansWeb",
      fontSize: 12
    },

});