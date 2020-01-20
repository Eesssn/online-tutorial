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
    marginTop: 20     
    
  },

});