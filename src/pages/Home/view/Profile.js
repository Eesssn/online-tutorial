import React from 'react';
import { View ,Text ,TouchableOpacity ,Image,Dimensions ,StyleSheet ,Switch,Share,ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';
import persify from "persify"



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
            name:"سارا رضایی ",
            switchValue:false
        }
    
    }
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
     }
     onPress(value){
         if (value == 'form'){
             this.props.navigation.navigate('Form',{pageName :'profile'});
         }
     }

     onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'App test| www.vistaapp.ir',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    
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
                        width: SCREEN_WIDTH,
                        height: 180,
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
                            <TouchableOpacity style={{margin:15, width : 25 , height: 25 ,justifyContent:"center", alignContent:'center'}}
                                onPress={()=> this.props.navigation.navigate('ChatList')}>
                                <Image source={require('../../../../assets/img/app_icons/chat.png')}  style={{width: 32, height: 32 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                                <View style={{ alignItems:"center",justifyContent:"center", width : 15 , height:15 , borderRadius:15/2 , backgroundColor : "#E3707F" ,position:"absolute",top:"60%",right: -20}}><Text style= {{fontSize:10, fontFamily:"IRANSansWeb", color:"#FFFFFF"}}>{ persify(chatNumber)}</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{margin:25, width : 25 , height: 25 ,justifyContent:"center", alignContent:'center'}} onPress={() =>{ this.props.navigation.navigate('Setting')}}>
                                <Image source={require('../../../../assets/img/app_icons/controls.png')}  style={{width: 32, height: 32 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                            </TouchableOpacity>
                         </View>
                         {/* image box */}
                         <View style={styles.header_image}>
                            <TouchableOpacity >
                            <Image source={require('../../../../assets/img/profilepic.jpeg')}  style={{width: 65, height: 65 , borderRadius:65/2 }} />
                            </TouchableOpacity>
                            <Text style={{  padding:5,fontSize:20,color:'#ffffff',fontFamily:'Lalezar-Regular',alignItems: "center",}}>{name}</Text>
                         </View>
                    </View>
                  
                    {/* content */}
                    <View style={styles.main_content}>
                        <ScrollView contentContainerStyle={{alignItems:'center'}} style={{width:SCREEN_WIDTH-10,}}>
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
                            <View>
                                <View style={styles.no_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} ></Text></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Text style={{color:"#707070", margin:0,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >تنظیمات کاربر</Text></View>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => this.onPress('form')}>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/next.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/man.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >اطلاعات کاربر</Text></View>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Switch thumbColor="#8AA9FC" onValueChange={this.toggleSwitch} value={this.state.switchValue} /></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/notification.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >دریافت اعلانات</Text></View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.no_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Text style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:18 ,color:"#8AA9FC"}} ></Text></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Text style={{color:"#707070", margin:0,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >تنظیمات نرم افزار</Text></View>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() =>{ this.props.navigation.navigate('FQues')}}>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/next.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/question.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:13}} >سوالات متداول</Text></View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={this.onShare}>
                                <View style={styles.nav_style}>
                                     <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/next.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/></View>
                                    <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../../assets/img/app_icons/share.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:14}} >معرفی به دوستان</Text></View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:120}}/>
                        </ScrollView>
                       
                        
                    
                    </View>
                   
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header_btn:{
        width: SCREEN_WIDTH,
        height: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop:10
    },
    header_image:{
        width:SCREEN_WIDTH,
        height:"60%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    main_content:{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        flex: 1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    main_info:{
        flexDirection:"row",
        width : SCREEN_WIDTH -40,
        height:75, 
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
    },
    no_style:{
    
        width: SCREEN_WIDTH-40,
        height: 25,
        marginTop:5,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems: 'center',
        
        }
})

export default withNavigation(Profile);