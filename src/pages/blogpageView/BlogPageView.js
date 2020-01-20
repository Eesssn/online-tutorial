import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { withNavigation } from 'react-navigation';


const MIN_HEIGHT = 250;
const MAX_HEIGHT = 250;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HIGHT = Dimensions.get('window').height;

class BlogPageView extends Component{
    static navigationOptions = {
        headerShown: false,
    };
    constructor() {
        super();
        this.state = { showNavTitle: false };
      }
    
    render(){
        const { navigation } = this.props;
      
        return(
            // <View style={styles.container}>
            //     <Text> {navigation.getParam('title')} </Text>
            // </View>
            // <View style={styles.container}>
            //     <View style={{flex: 2 ,width :SCREEN_WIDTH, backgroundColor:'#356'}}>
            //     <Image source={navigation.getParam('src')} style={{width:SCREEN_WIDTH, flex:1}} />
            //     </View>
            //     <View style={{flex: 4 ,width :SCREEN_WIDTH, backgroundColor:'#8789'}}></View>
            //     <View style={{position:'absolute',bottom:0,right:0, height:80,width :SCREEN_WIDTH, backgroundColor:'#546'}}></View>
            // </View>
            <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.3}
          fadeOutForeground
          renderHeader={() => <Image source={navigation.getParam('src')} style={styles.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}
            >
              <Text style={styles.navTitle}>
                {}
              </Text>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={styles.titleContainer}>
             
            </View>
          )}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          >
            <Text style={styles.title}>
              <Text style={styles.name}>{navigation.getParam('title')}</Text>
            </Text>
          </TriggeringView>
          <View style={styles.section}>
           
            <Text style={styles.sectionContent}>{navigation.getParam('text')}</Text>
          </View>
         
           
         
        </HeaderImageScrollView>
      </View>
        );
    }
}
const styles = StyleSheet.create({
    // container:{
    //     width :SCREEN_WIDTH,
    //     height: SCREEN_HIGHT,
    //     flexDirection : 'column',
    //     alignItems: 'center',
    //     justifyContent: "flex-start",
        
    // }
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
      },
      title: {
        fontSize: 20,
      },
      name: {
        fontWeight: 'bold',
      },
      section: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'white',
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
        textAlignVertical:'center'
      },
      keywords: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      },
      keywordContainer: {
        backgroundColor: '#999999',
        borderRadius: 10,
        margin: 10,
        padding: 10,
      },
      keyword: {
        fontSize: 16,
        color: 'white',
      },
      titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
      },
      navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
      },
      navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
      },
      sectionLarge: {
        height: 600,
      },
})
export default withNavigation(BlogPageView);