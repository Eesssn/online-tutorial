import React from 'react';
import { View , Text , TouchableOpacity , Image ,Dimensions} from 'react-native'
import { withNavigation } from 'react-navigation';
import styles from './styles';
const SCREEN_WIDTH = Dimensions.get('window').width;

class LogoTitle extends React.Component {

  constructor(props) {
    super(props)

    // Default state
   
   

}
  onPressheader= ()=>{
   
   
      this.props.navigation.goBack();
   
  }
  render() {
    
    return (
      <View
        style={{flexDirection:'row', justifyContent: 'flex-start'  ,borderBottomLeftRadius: 25 , alignItems:'center', width: SCREEN_WIDTH, height: 65  , backgroundColor : '#8AA9FC'}}>
         <TouchableOpacity onPress={this.onPressheader}>
            <Image
              style={styles.back}
              source={require('../../../assets/img/app_icons/undo.png')}
            />
          </TouchableOpacity>
         <Text style={styles.TextHeader} >اطلاعات کاربری</Text>
         </View>
    );
  }
}
export default withNavigation(LogoTitle);