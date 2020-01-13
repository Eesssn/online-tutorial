import React,{Component} from 'react';
import {Image ,TextInput ,Text ,View , TouchableOpacity,Dimensions} from 'react-native'

import MasterHeader from './MasterHeader';

import styles from './styles';


class Master extends Component{
    static navigationOptions = {
        header :() => <MasterHeader/>,
    };
    render(){
        return(
            <View style={styles.container}>
                <Text>home</Text>
            </View>
        )
    }
}
export default Master;
