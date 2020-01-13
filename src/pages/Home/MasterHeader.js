import React from 'react';
import { View , Text , TouchableOpacity , Image ,Dimensions} from 'react-native'
import { withNavigation } from 'react-navigation';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

class LogoTitle extends React.Component {

  constructor(props) {
    super(props)

    // Default state
    this.state ={
        photo :"",
        name : 'سارا '
    }
   
   

}
  onPressheader= ()=>{
    this.props.navigation.goBack();
  }
  render() {
    const {name} = this.state;
    return (
      <View
        style={{ flexDirection:'column',borderBottomLeftRadius: 25  , width: SCREEN_WIDTH, height: 200  , backgroundColor : '#8AA9FC'}}>
           <View style={{alignItems:'center',flexDirection:'row-reverse', justifyContent: 'center'  ,borderBottomLeftRadius: 25  , width: SCREEN_WIDTH+20, height: 85  , backgroundColor : '#8AA9FC'}}>
             <TouchableOpacity style={{marginLeft:1,marginRight:15, borderRadius:65/2, width:65,height:65, backgroundColor:'blue',  alignItems: 'center' ,justifyContent: 'center'}}
                onPress={this.handleChosePhoto}/>             
            <Text style={styles.TextHeader} > سلام {name} </Text>
            <View style={{ alignItems :"center", flexDirection:'row', height :26 , width: 100 , borderRadius :35 , backgroundColor :"#ffff" , opacity:.5}}>
                
            </View>
            </View>
         </View>
    );
  }
}
export default withNavigation(LogoTitle);