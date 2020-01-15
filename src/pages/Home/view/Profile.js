import React from 'react';
import { View ,Text ,TouchableOpacity ,Image,Dimensions ,StyleSheet ,I18nManager} from 'react-native';
import { withNavigation } from 'react-navigation';
import persify from "persify"
import { black } from 'ansi-colors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


class Profile extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
            chatNumber : 2,
            doing :12,
            ability : 5 ,
            passed :20,
            name:"سارا رضایی "
        }
    
    }
    
    render(){
        const {name,doing,ability,passed,chatNumber} = this.state ;
        const number = persify(10) ;
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
                        height: SCREEN_HEIGHT/3.5,
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
                        <View style={styles.header_btn}>
                            <TouchableOpacity style={{margin:15, width : 50 , height: 50 ,justifyContent:"center", alignContent:'center'}}>
                                <Image source={require('../../../../assets/img/app_icons/chat.png')}  style={{width: 32, height: 32 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                                <View style={{ alignItems:"center",justifyContent:"center", width : 15 , height:15 , borderRadius:15/2 , backgroundColor : "#E3707F" ,position:"absolute",top:"55%",left:"60%"}}><Text style= {{fontSize:10, fontFamily:"IRANSansWeb", color:"#FFFFFF"}}>{ persify(chatNumber)}</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{margin:15, width : 50 , height: 50 ,justifyContent:"center", alignContent:'center'}}>
                                <Image source={require('../../../../assets/img/app_icons/controls.png')}  style={{width: 32, height: 32 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                            </TouchableOpacity>
                         </View>
                         {/* image box */}
                         <View style={styles.header_image}>
                            <TouchableOpacity >
                            <Image source={require('../../../../assets/img/profilepic.jpeg')}  style={{width: 100, height: 100 , borderRadius:120/2 }} />
                            </TouchableOpacity>
                            <Text style={{  padding:5,fontSize:22,color:'#ffffff',fontFamily:'Lalezar-Regular',alignItems: "center",}}>{name}</Text>
                         </View>
                    </View>
                    {/* content */}
                    <View style={styles.main_content}>
                        <View style={styles.main_info}>
                            {/* info box  */}
                            <View style={{flex:1 }}>
                                <View style={{margin:2, flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/unmute.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' }}/></View>
                                <View style={{margin:2,flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:10}} >دوره های در حال انجام</Text></View>
                                <View style={{margin:2,flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} >{persify(doing)}</Text></View>
                            </View>
                            <View style={{flex:1 }}>
                                <View style={{margin:2, flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/unmute.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' }}/></View>
                                <View style={{margin:2,flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:10}} >توانایی شما</Text></View>
                                <View style={{margin:2,flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} >{persify(ability)+'/'+number}</Text></View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{margin:2, flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/unmute.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' }}/></View>
                                <View style={{margin:2,flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:10}} >دوره های گذرانده شده</Text></View>
                                <View style={{margin:2,flex:1 ,justifyContent:'center' ,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} >{persify(passed)}</Text></View>
                            </View>
                        </View>
                        {/* navigation content */}
                        <View style={styles.main_navigation}>
                            <TouchableOpacity>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} >{persify(passed)}</Text></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/unmute.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >دوره های من</Text></View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} >{persify(passed)}</Text></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/unmute.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >علاقه مندی ها</Text></View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} >{persify(passed)}</Text></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/unmute.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >گروه های شما</Text></View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} >{persify(passed)}</Text></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/unmute.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:13}} >معرفی به دوستان</Text></View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} >{persify(passed)}</Text></View>
                                    <View style={{ flex:1 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/unmute.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >سوالات متداول</Text></View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header_btn:{
        width: SCREEN_WIDTH,
        height: 60,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop:5
    },
    header_image:{
        width:SCREEN_WIDTH,
        height:"60%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    main_content:{
        width: SCREEN_WIDTH,
        height: "100%",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    main_info:{
        flexDirection:"row",
        width : SCREEN_WIDTH -40,
        height:85, 
        borderRadius:25,
        backgroundColor:'#ffffff',
        marginTop: 22,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    main_navigation:{
        marginTop:12, 
        width:SCREEN_WIDTH-40 ,
        height:"100%", 
        flexDirection:'column',
        alignContent:"center",
        justifyContent:'flex-start',
    },
    nav_style:{
    
    width: SCREEN_WIDTH-40,
    height: 50,
    borderColor : 'black',
    borderWidth: .2, 
    padding:5,
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 12
    }
})

export default withNavigation(Profile);