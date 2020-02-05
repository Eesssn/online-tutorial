import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    width : window.width,
    height:window.height,
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
    width:Dimensions.get('window').width/4,
    height:Dimensions.get('window').width/4,
    resizeMode: 'contain',
    marginBottom: 10,
    padding:10,
    
    
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
     padding:15,
     fontSize:22,
     color:'#707070',
     fontFamily:'Lalezar-Regular'
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

});