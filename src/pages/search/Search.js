import React from 'react';
import { View ,Text } from 'react-native'

import Header from '../settings/LogTitle'
class Search extends React.Component{
    static navigationOptions = {
        // headerTitle instead of title
        header: () => <Header title={'جستجو'}/>,
      };
    render(){
        const {navigation} = this.props ;
        return(
            <View>
                <Text>
                    search from ( {navigation.getParam('from')} )
                </Text>
            </View>
        )
    }
}

export default Search;