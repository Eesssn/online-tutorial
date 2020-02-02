import React from 'react';
import { View } from 'react-native';

import All from './CoursesView';
import Header from './LogTitle';


class ViewAll extends React.Component{
    static navigationOptions = {
        // headerTitle instead of title
        header: () => <Header title={' آخرین دوره ها'}/>,
      };
    render(){
        return(
            <View style={{flex: 1 }}>
                <All/>
            </View>
        )
    }
}

export default ViewAll ;