import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({
  container: {
    width : window.width,
    flex: 1,
    alignItems: 'center',
    
    
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width ,
    
  },

 title:{
     padding:5,
     fontSize:15,
     color:'#707070',
     fontFamily:"IRANSansWeb",
     justifyContent: 'center',
     textAlign:'center',
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

forget_style:{
    marginEnd: 25,
    marginStart: 25,
    width: 320,
    height: 50,
    justifyContent:"flex-start",
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 1
},
btn_login: {
    width : 304,
    height :50,
    marginTop:10,
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
      btn_view_style:{
        marginEnd: 25,
        marginStart: 25,
        width: 320,
        height: 50,
        justifyContent:"center",
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 30

    },  
  
  TextHeader:{
     width: (window.width/2)+20,
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
  icon:{
    width: 46,
    height: 46 , 
    resizeMode: 'contain',
    marginLeft :5 ,
    marginRight:30
  },
  verificationpad:{
    justifyContent: "center",
    flexDirection: 'row',
    alignItems:'center',
    borderRadius: 35 ,
    height: 45 , width: (window.width)/1.35,
    backgroundColor: "#00000029",
    padding:25,
    margin : 10
  },
  verificationpad_text:{
    fontSize : 36,
    padding : 15, 
    color: '#707070'
  },
  resend:{
    padding:0,
    fontSize:14,
    color:'#FDC830',
    fontFamily:"IRANSansWeb",
    justifyContent: 'center',
    textAlign:'center',
  },
  keypad:{
    justifyContent:'center',
    flexDirection:'row',
    

  },
  
    card:{
      borderRadius:5,
      width: (Dimensions.get('window').width/10*3),
      height: (Dimensions.get('window').height/10*.7),
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      backgroundColor:"white",
      margin:5,
      padding: 10,
      justifyContent:'center',
      alignItems:'center'
  
    },
    cardhide:{
      borderRadius:5,
      width: 110,
      height: 60,
      margin:5,
      padding: 10,
      justifyContent:'center',
      alignItems:'center'
  
    },
  


});