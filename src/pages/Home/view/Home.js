import React from 'react';
import { Dimensions, View ,Text ,TouchableOpacity ,ScrollView ,StyleSheet,Image,TextInput,FlatList ,I18nManager } from 'react-native'
import { withNavigation } from 'react-navigation';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
class Home extends React.Component{

    constructor(props) {
        super(props)
    
        // Default state
        this.state ={
            photo :"",
            name : 'سارا ',
            lastRound :[
                {id: 0 ,title:"چرا آمازون",chapter:"سه فصل"},
                {id: 1,title:"برترین شو",chapter:"پنج فصل"},
                {id: 2,title:"یادگیری آسان",chapter:"پنج فصل"},
                {id: 3,title:"آماده باش",chapter:"پنج فصل"} ,               
            ],
            hederChatName:[
                {id: 0 , chatname:'چرا آمازون |دوره آموزشی حرفه ای آمازون وکسب در آمد', notifmod: 1},
                {id: 1 , chatname:'چرا آمازون |دوره آموزشی حرفه ای آمازون وکسب در آمد', notifmod: 0},
            ]
        }
       
       
    
    }
  
    render() {
        const {name} = this.state
        return (
        
            <View 
            style={{
                width :SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
                flexDirection: "column"
            }}>
                <View
                    style={{
                        width: SCREEN_WIDTH+10,
                        height: SCREEN_HEIGHT/2,
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
                    }}>
                    
                            <View
                                style={styles.header}>
                                    <View style={{marginHorizontal: 10, alignItems:'center',flexDirection:'row', justifyContent: 'space-between', height: 85  }}>
                                        
                                        <View style={{ alignItems :"center", flexDirection:'row-reverse', height :28 , width: 100 , borderRadius :35 , backgroundColor :"#ffff" ,}}>
                                            <Image source={require('../../../../assets/img/app_icons/magnifying-glass.png')}  style={{width: 12, height: 12 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                                            <TextInput placeholder ='جستجو'  style={{alignItems:"center", width: 50, height:40 , fontSize:12, textAlign: 'right',fontFamily:"IRANSansWeb"}}/>
                                        </View>
                                        <View style={{flexDirection:"row-reverse", alignContent:"center" ,justifyContent:"center"}}>   
                                            <TouchableOpacity 
                                                style={{marginLeft:1,marginRight:15, borderRadius:65/2, width:65,height:65, backgroundColor:'blue',  alignItems: 'center' ,justifyContent: 'center'}}
                                                />  
                                            <View 
                                            style={{justifyContent:"center",alignItems:"center" }}>
                                                <Text style={styles.TextHeader} > سلام {name} </Text>
                                            </View>           
                                        
                                        </View>
                                    
                                    
                                        </View>
                                        <View style={{ width:SCREEN_WIDTH+10,backgroundColor:"#8AA9FC"}}>
                                        <View style={{marginHorizontal: 10, alignItems:'center',flexDirection:'row', justifyContent: 'space-between',}}>
                                        <TouchableOpacity style={styles.btn_login} onPress={this.onPressSignUp}>
                                            <Text style={styles.btn_title}> نمایش همه </Text>
                                        </TouchableOpacity>
                                        <Text style={{marginHorizontal:8, color:'#251A51',fontFamily:"IRANSansWeb",}}>آخرین دوره ها </Text>
                                        </View>
                                        </View>
                                        <View style={styles.mainContainer}>
                                                <FlatList 
                                                    horizontal
                                                    data={this.state.lastRound}
                                                    
                                                    keyExtractor={(item,index)=> index.toString()}
                                                    renderItem ={({item})=>(
                                                        <TouchableOpacity style={{padding:10, margin:6, borderRadius:20, backgroundColor:"#ffff" ,width :SCREEN_WIDTH/5 ,height : SCREEN_WIDTH/5 ,justifyContent :"center" ,alignItems:'center' ,flexDirection:"column"}}>
                                                            <Image 
                                                            source={require('../../../../assets/img/app_icons/idea.png')}
                                                            style={{borderRadius:35/2, width:35,height:35,  alignItems: 'center' ,justifyContent: 'center',resizeMode: 'contain' ,}}
                                                            />  
                                                            <Text style={{ width :SCREEN_WIDTH/5.5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:10}}>{item.title}</Text>
                                                            <View style={{justifyContent: "center", width :SCREEN_WIDTH/5.5 ,padding:8,paddingTop:2, alignItems:"flex-end"}}>
                                                            <Text style={{textAlign:"right", fontFamily:'IRANSansWeb' ,fontSize:5}}>{item.chapter}</Text></View>
                                                        </TouchableOpacity>
                                                    )}/>

                                        </View>
                                            <View style={styles.notif}>
                                                <View style={{ width:SCREEN_WIDTH+10}}>
                                                    <View style={{marginHorizontal: 10, alignItems:'center',flexDirection:'row', justifyContent: 'space-between',}}>
                                                        <TouchableOpacity style={styles.btn_login} onPress={this.onPressSignUp}>
                                                            <Text style={styles.btn_title}> نمایش همه </Text>
                                                        </TouchableOpacity>
                                                        <Text style={{marginHorizontal:8, color:'#251A51',fontFamily:"IRANSansWeb",}}>گروه های شما</Text>
                                                        
                                                    </View>
                                                    
                                                </View>
                                                <View style={{alignItems:"flex-end", marginTop:10, height:90, width:SCREEN_WIDTH+10}}>
                                                        {/* chat titles view */}
                                                        <FlatList 
                                                   
                                                    data={this.state.hederChatName}
                                                    
                                                    keyExtractor={(item,index)=> index.toString()}
                                                    renderItem ={({item})=>(
                                                        <TouchableOpacity style={styles.chatnf}>
                                                           
                                                           <View style={{
                                                                            flex: .5,
                                                                            flexDirection: 'row',
                                                                            justifyContent: 'space-between',
                                                                            alignItems:"center",
                                                                            justifyContent:"center"
                                                                        }}>
                                                                            <View style={{alignItems:"center",justifyContent:"center",width: 30, height: 30}} >
                                                                                {item.notifmod == 0 ? (<Image 
                                                                                    source={require('../../../../assets/img/app_icons/mute.png')}
                                                                                    style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' ,}}
                                                                                /> ):(<Image 
                                                                                    source={require('../../../../assets/img/app_icons/unmute.png')}
                                                                                    style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' ,}}
                                                                                /> )}
                                                                                
                                                                            </View>
                                                                            <View style={{alignItems:"center",justifyContent:"center", width: 215, height: 30}} > 
                                                                                <Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:9}}>{item.chatname}</Text>
                                                                            </View>
                                                                            <View style={{alignItems:"center",justifyContent:"center", width: 30, height: 30}} >
                                                                                <Image 
                                                                                    source={require('../../../../assets/img/app_icons/idea.png')}
                                                                                    style={{borderRadius:35/2, width:35,height:35,resizeMode: 'contain' ,}}
                                                                                /> 
                                                                            </View>
                                                                        </View>
                                                           
                                                                   
                                                                
                                                               
                                                           
                                                        </TouchableOpacity>
                                                        
                                                    )}/>

                                                </View> 

                                            </View>
                                        </View>    
                                                                                       
                  
                                    </View>
                                    <View style={{alignItems:"center", flexDirection:"column", marginTop:8, height:180, width:SCREEN_WIDTH}}>
                                        {/* your offer */}
                                        
                                                <View style={{ width:SCREEN_WIDTH+10}}>
                                                    <View style={{marginHorizontal: 12, alignItems:'center',flexDirection:'row-reverse', justifyContent: 'space-between',}}>
                                                        <Text style={{marginHorizontal:10, color:'#251A51',fontFamily:"IRANSansWeb",}}>پیشنهاد به شما</Text>
                                                    </View>

                                                    <View style={{marginLeft:5, width:SCREEN_WIDTH,height:93 ,marginTop:4,backgroundColor: '#2356'}}>
                                                    <ScrollView horizontal style={{ flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }}>
                                                    <View style={{ width: 150, height: 100, backgroundColor: '#12a19e' }}><Text>1</Text></View>
                                                    <View style={{ width: 150, height: 100, backgroundColor: '#f45b21' }}><Text>2</Text></View>
                                                    <View style={{ width: 150, height: 100, backgroundColor: '#640fe7' }}><Text>3</Text></View>
                                                    <View style={{ width: 150, height: 100, backgroundColor: '#8f5e3e' }}><Text>4</Text></View>
                                                    <View style={{ width: 150, height: 100, backgroundColor: '#f4bd15' }}><Text>5</Text></View>
                                                    <View style={{ width: 150, height: 100, backgroundColor: '#137cf9' }}><Text>6</Text></View>
                                                    </ScrollView>
                                                    </View>
                                                </View>
                                                </View>
                                     
                                        
                                    
                                        



            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width : window.width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      header:{ 
        flexDirection:'column',
        width: SCREEN_WIDTH+10, 
        height: 100  , 
        backgroundColor : '#8AA9FC',
        justifyContent:'space-between'
      },
      TextHeader:{
        padding:5,
        fontSize:22,
        color:'#ffffff',
        fontFamily:'Lalezar-Regular',
        alignItems: "center",
      },
      btn_login: {
        width : 62,
        height :16,
    
        borderRadius:45,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#FFF",
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
            color: '#8AA9FC',
            fontFamily:"IRANSansWeb",
            fontSize: 10
          },
          btn_view_style:{
            marginEnd: 25,
            marginStart: 25,
            width: 320,
            height: 50,
            justifyContent:"center",
            flexDirection:'row',
            alignItems: 'center',
            marginTop: 40
    
        },  
        mainContainer:{
            padding:10,
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            alignContent:'center',
            width:SCREEN_WIDTH ,
            height:120,
            backgroundColor:'#8aa9fc',
            borderBottomLeftRadius:35
        },
        notif:{
            width:SCREEN_WIDTH+20,
            height: 100,
            marginTop:10,
           
            
            
        },
        chatnf:{
        padding:10,
        margin:5,
        borderBottomLeftRadius:20 ,
        borderTopLeftRadius:20, 
        backgroundColor:"#ffffff" ,
        width :SCREEN_WIDTH/1.2 ,
        height : 35 ,
        justifyContent :"center" ,
        alignItems:"flex-end" ,
        flexDirection:"column",
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    
    }
    
})


export default withNavigation(Home);