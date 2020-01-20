import React from 'react';
import { View ,Text ,TouchableOpacity ,Image,Dimensions ,StyleSheet ,TextInput} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import persify from "persify"
import { withNavigation } from 'react-navigation';
import BlogView from '../favorite/FavoriteView'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Favorite extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
            chatNumber : 2,
            tab1:"#FFFF",
            tab2:"#8aa9fc",
            tab3:"#8aa9fc"
        }
    
    }
    onPress(e){
        if(e == "a"){
            console.log('you press a')
            this.setState({
                tab3:"#FFFF",
                tab2:"#8aa9fc",
                tab1:"#8aa9fc" 
            })
            this.viewPager.setPage(0)
        }
        else if(e == "b"){
            console.log('you pressed b')
            this.setState({
                tab2:"#FFFF",
                tab1:"#8aa9fc",
                tab3:"#8aa9fc" 
               

            })
            this.viewPager.setPage(1)
        }
        else{
            console.log('you pressed c')
            this.setState({
                tab1:"#FFFF",
                tab2:"#8aa9fc",
                tab3:"#8aa9fc" 
            })
            this.viewPager.setPage(2)
        }
    }

   
 
    onPageSelected(evt){
        console.log(evt.nativeEvent.position)
        if(evt.nativeEvent.position === 0){
          
                this.setState({
                    tab3:"#FFFF",
                    tab2:"#8aa9fc",
                    tab1:"#8aa9fc" 
                })
        
              }else if (evt.nativeEvent.position === 1){
                this.setState({
                    tab2:"#FFFF",
                    tab1:"#8aa9fc",
                    tab3:"#8aa9fc" 
                })
              }else if(evt.nativeEvent.position === 2){
                this.setState({
                    tab1:"#FFFF",
                    tab2:"#8aa9fc",
                    tab3:"#8aa9fc" 
                }) 
              }
    }
    
    render(){
        const {tab1,tab2,tab3,chatNumber} = this.state ;
      
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
                        height: 120,
                        flexDirection:"column",
                        marginLeft:0, marginRight:-5,marginTop:-5,
                        borderBottomLeftRadius: 35,
                        shadowColor: "#000",
                        shadowOffset:{
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}>
                    {/* hedaer */}
                         <View style={{ 
                             width:SCREEN_WIDTH,
                             height: 80,
                             flexDirection: "row",
                             alignItems: 'center',
                             justifyContent:'center',
                             padding:5
                         }} >
                             <View style={{
                                 flex:1,
                                 height:60,
                                 alignItems:"center",
                                 justifyContent:'flex-start',
                                 
                                 flexDirection: 'row'
                             }}>
                                 <TouchableOpacity style={{margin:15, width : 50 , height: 50 ,justifyContent:"center", alignContent:'center'}}>
                                    <Image source={require('../../../../../assets/img/app_icons/chat.png')}  style={{width: 32, height: 32 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                                    <View style={{ alignItems:"center",justifyContent:"center", width : 15 , height:15 , borderRadius:15/2 , backgroundColor : "#E3707F" ,position:"absolute",top:"55%",left:"60%"}}><Text style= {{fontSize:10, fontFamily:"IRANSansWeb", color:"#FFFFFF"}}>{ persify(chatNumber)}</Text></View>
                                 </TouchableOpacity>
                             </View>
                                   <View style={{
                                 flex:1,
                                 height: 60,
                                 alignItems:"center",
                                 justifyContent:"center",
                                 
                             }}>
                                <View style={{ alignItems :"center", flexDirection:'row-reverse', height :28 , width: 100 , borderRadius :35 , backgroundColor :"#ffff" ,}}>
                                            <Image source={require('../../../../../assets/img/app_icons/magnifying-glass.png')}  style={{width: 12, height: 12 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                                            <TextInput placeholder ='جستجو'  style={{alignItems:"center", width: 50, height:40 , fontSize:12, textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
                                </View>
                            </View>
                              <View style={{
                                 flex:1,
                                 height: 60,
                                 alignItems:"center",
                                 justifyContent:'flex-end',
                                

                                flexDirection: "row",
                             }}>

                                    <TouchableOpacity >
                                      <Image source={require('../../../../../assets/img/profilepic.jpeg')}  style={{width: 45, height: 45 , borderRadius:45/2 }} />
                                    </TouchableOpacity>
                             </View>

                         </View>

                         <View style={{
                             flex:1,
                             height:30,
                             flexDirection:'row',
                             alignItems:'center',
                             justifyContent:'center',
                             padding: 10,

                         }}>
                          <View style={{ width:30 , height :30 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Text ></Text>
                            </View>
                            <TouchableOpacity onPress={()=> this.onPress("a")} style={{ flex:1 , height :30 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{alignItems:"center",color:'#ffff' , fontSize:12, textAlign: 'right',fontFamily:"IRANSansWeb"}}>دوره هدف </Text>
                                <View style={{width:80, height:1.5 ,backgroundColor:tab3, marginTop:10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> this.onPress("b")} style={{ flex:1 , height :30 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{alignItems:"center",color:'#ffff' , fontSize:12, textAlign: 'right',fontFamily:"IRANSansWeb"}}>دوره های من</Text>
                                <View style={{width:80, height:1.5 ,backgroundColor:tab2, marginTop:10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> this.onPress("c")} style={{ flex:1 , height :30 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{alignItems:"center",color:'#ffff' , fontSize:12, textAlign: 'right',fontFamily:"IRANSansWeb"}}>مطالب</Text>
                                <View style={{width:80, height:1.5 ,backgroundColor:tab1, marginTop:10}}/>
                            </TouchableOpacity>
                            
                         </View>
                    </View>
                    {/* content */}
                    <View style={styles.recentlyPlayed}>
                    <ViewPager
                        //onPageScroll={(evt) => this.onPageScroll(evt)}
                        onPageSelected = {(evt) => this.onPageSelected(evt)}
                        scrollEnabled = {true}
                        ref={(viewPager) => {this.viewPager = viewPager}}
                        style={styles.viewPager}
                        initialPage={2}>
                  <View key="0">
                    <View><BlogView id="targetCourses"/></View>
                  </View>
                  <View key="1">
                  <View ><BlogView id="myCourses" /></View>
                  </View>
                  <View key="2">
                  <View ><BlogView id="content"/></View>
                  </View>
                  
                </ViewPager>
                </View>
                
            </View>
                    

                    
            
        )
    }
}

const styles = StyleSheet.create({
    recentlyPlayed: {
      
        height: Dimensions.get('window').height-50,
        width: Dimensions.get('window').width
    },
    viewPager: {
      flex: 1,
    }
})

export default withNavigation(Favorite);