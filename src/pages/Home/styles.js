import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({
  container: {
    width : window.width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 10,
    padding:10,
    marginTop:IMAGE_HEIGHT_SMALL
  },
  register:{
    marginBottom:20, 
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae'
 },
 title:{
  padding:25,
  fontSize:18,
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
  
  TextHeader:{
     width: (window.width/2),
      padding:5,
      fontSize:22,
      color:'#ffffff',
      fontFamily:'Lalezar-Regular',
      alignItems: "center",
       
  },
  back:{
    
    width: 20,
    height: 20,
    marginHorizontal :20
  },
  card:{
    borderRadius:5,
    width: 300,
    height: 250,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    backgroundColor:"white",
  
    padding: 10,
    flexDirection:"column",
    alignItems:'center'

  },
  btn_date: {
    width : 125,
    height :35,
    marginTop:30,
    marginBottom:45,
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
   
});