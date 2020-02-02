import React from 'react';
import { View } from 'react-native';

import Profile from '../Home/view/Profile';


class MyProfile extends React.Component{
    static navigationOptions = {
        headerShown: false,
       
    };
    render(){
        return(
            <View style={{flex: 1 }}>
                <Profile/>
            </View>
        )
    }
}

export default MyProfile ;