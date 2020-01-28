import React from 'react';
import { View , Text , TouchableOpacity,Image, StyleSheet,Dimensions,ScrollView } from 'react-native'
import VideoPlayer from 'react-native-video-player';

const VIMEO_ID = '179859217';

const SCREEN_WIDTH = Dimensions.get('window').width


class BuyCourses extends React.Component{
    static navigationOptions = {
        headerShown: false,
       
    };
        constructor(props){
            super(props);

            this.state={
                video: { width: undefined, height: undefined, duration: undefined },
                thumbnailUrl: undefined,
                videoUrl: undefined,
        }
    }
   
    componentDidMount() {
        global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
          .then(res => res.json())
          .then(res => this.setState({
            thumbnailUrl: res.video.thumbs['640'],
            videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
            video: res.video,
          }));
         
      }
      onPressheader= ()=>{
        this.props.navigation.goBack();
      }
  
    render(){
        const {navigation} = this.props;
        return(
            <View style={styles.container}>
              
               <VideoPlayer
                endWithThumbnail
                thumbnail={{ uri: this.state.thumbnailUrl }}
                video={{ uri: this.state.videoUrl }}
                videoWidth={this.state.video.width}
                videoHeight={this.state.video.height}
                duration={this.state.video.duration/* I'm using a hls stream here, react-native-video
                    can't figure out the length, so I pass it here from the vimeo config */}
                ref={r => this.player = r}
                // my add
                controlsTimeout={3000}
                pauseOnPress
                fullScreenOnLongPress
                />

                <View style={{width:SCREEN_WIDTH,position:'absolute',top :0, left:0 , height: 40 ,marginTop:10, alignItems:"center",justifyContent:"flex-start",flexDirection:"row"}}>
                    <TouchableOpacity style={{flex:1, height:20 ,alignItems:"flex-start",justifyContent:'flex-start'}} onPress={this.onPressheader}>
                        <Image
                            style={styles.back}
                            source={require('../../../assets/img/app_icons/undo.png')}
                            />
                    </TouchableOpacity>
                </View>
                <View  style={{marginTop: 10 , marginHorizontal: 12}}>
                    <Text style={styles.title_text}>{navigation.getParam('title')}</Text>
                </View>
                <View  style={{marginTop: 10 , marginHorizontal: 12}}>
                    <Text style={styles.title_text2}>{navigation.getParam('name') +" | "+navigation.getParam('section')}</Text>
                </View>
                <ScrollView  style={{marginTop: 10 , marginHorizontal: 12}}>
                    <View>
                        <Text style={styles.title_text2}>{navigation.getParam('coursetex')}</Text>
                    </View>
                    <View style={styles.share}>
                        <View style={{flexDirection:'row', alignItems:'center',justifyContent:"center", width:Dimensions.get('window').width,marginTop:25,height:80}}>
                    
                            <TouchableOpacity style={styles.btn_login} onPress={this.onPressSave}>

                                <Text style={styles.btn_title}> خلاصه مطالب گذشته </Text>
                                <Image source={require('../../../assets/img/app_icons/bookmark.png')} style={{ width:20,height:20,resizeMode: 'contain' }}/>
                            </TouchableOpacity>

                        </View>
                     </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        flexDirection:"column"

    },
    back:{
    
        width: 25,
        height: 25,
        marginHorizontal :20
      },
      title_text:{
        fontFamily:'IRANSansWeb' ,
        fontSize:16,
        color:'#707070'
    },
    title_text2:{
        fontFamily:'IRANSansWeb' ,
        fontSize:12,
        color:'#707070'
    },
    btn_login: {
        flexDirection:'row',
        width : 165,
        height :45,
        margin:5,
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
            color: '#251A51',
            fontFamily:"IRANSansWeb",
            fontSize: 12
          },
          share:{
              marginTop: 50
          }

})

export default BuyCourses;


