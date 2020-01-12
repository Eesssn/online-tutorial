import React from 'react';
import { View,Button ,Text, Image} from 'react-native' ;
import ImagePicker from 'react-native-image-picker';

export default class imagepicker extends React.Component{
    state ={
        photo:null,
    }
    handleChosePhoto = () => {
        const options ={
            noData : true,
        };
        ImagePicker.launchImageLibrary(options, response =>{
            console.log("response" , response)
            if (response.uri){
                this.setState({
                    photo: response
                })
            }
        })

    }
    render(){
        const {photo} = this.state;
        return(
            <View style={{flex:1 , alignItems: 'center' ,justifyContent: 'center'}}>
                {photo && (
                    <Image
                        source = {{uri: photo.uri}}
                        style = {{width : 75 , height : 75 ,resizeMode: 'contain' , borderRadius :300/2 }}
                        onPress={this.handleChosePhoto}
                        />
                )}
                <Button
                title ="chose photo"
                onPress={this.handleChosePhoto}/>
            </View>
        );
    }
}