import React from 'react';
import { View ,Text ,TouchableOpacity ,Image,Dimensions  } from 'react-native';
import { withNavigation } from 'react-navigation';
import persify from "persify"

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Profile extends React.Component{
    
    render(){
        return(
            <View 
            style={{
                width :SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
                flexDirection: "column"
            }}>
                <View
                    style={{
                        backgroundColor:"#8aa9fc",
                        width: SCREEN_WIDTH+10,
                        height: SCREEN_HEIGHT/3,
                        flexDirection:"column",
                        marginLeft:-5, marginRight:-5,marginTop:-5,
                        borderBottomLeftRadius: 35,
                        shadowColor: "#000",
                        shadowOffset:{
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}></View>
            </View>
        )
    }
}

export default withNavigation(Profile);