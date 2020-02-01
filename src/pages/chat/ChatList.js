import React from 'react';
import { View ,Text , StyleSheet , Dimensions ,TouchableOpacity,Image, FlatList} from 'react-native'
import persify from "persify"

class ChatList extends React.Component{

    static navigationOptions = {
        headerShown: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            curseTitle:[
                {id:0,title:"دوره مقدماتی درآمدزایی آمازون" , teacher:'استاد حسینی', nfStudent: 521, notifmod:1 },
                {id:1,title:"دوره متوسط درآمدزایی آمازون" , teacher:'استاد حسینی', nfStudent: 521 ,notifmod:0},
                {id:2,title:"دوره پیشرفته درآمدزایی آمازون" , teacher:'استاد حسینی', nfStudent: 521 ,notifmod: 0},
                {id:3,title:"دوره مقدماتی درآمدزایی آمازون" , teacher:'استاد حسینی', nfStudent: 521 , notifmod:1 },
                {id:4,title:"دوره مقدماتی درآمدزایی آمازون" , teacher:'استاد حسینی', nfStudent: 521 ,notifmod:1},
            ],

        };
    }

    onPressheader= ()=>{
        this.props.navigation.goBack();
      }

    render(){
        
        return(
            <View style={styles.Container}>
                <View style={styles.header}>
                    {/* header */}
                    <View style={{
                                 flex:1,
                                 height:60,
                                 alignItems:"center",
                                 justifyContent:'flex-start',
                                 
                                 flexDirection: 'row'
                             }}>
                                 <TouchableOpacity style={{margin:0, width : 50 , height: 50 ,justifyContent:"center", alignContent:'center'}}
                                    onPress={this.onPressheader} >
                                    <Image source={require('../../../assets/img/app_icons/undo.png')}  style={styles.back} />
                                 </TouchableOpacity>
                             </View>
                             <View style={{ alignItems :"center", flexDirection:'row-reverse', height :28 , width: 100 }}>
                               <Text style={{  padding:5,fontSize:20,color:'#ffffff',fontFamily:'Lalezar-Regular',alignItems: "center",}}>گروه های من</Text>
                            </View>
                            <View style={{
                                 flex:1,
                                 height: 60,
                                 alignItems:"center",
                                 justifyContent:'flex-end',
                                

                                flexDirection: "row",
                             }}>

                                    <TouchableOpacity >
                                      <Image source={require('../../../assets/img/profilepic.jpeg')}  style={{width: 45, height: 45 , borderRadius:45/2 }} />
                                    </TouchableOpacity>
                             </View>
                </View>

                <View style={styles.content}>
                    {/* chat list */}
                    <FlatList 
                                style={{marginTop:5,flexDirection:'row-reverse', marginBottom:5}}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={this.state.curseTitle}
                                keyExtractor={(item,index)=> index.toString()}
                                renderItem ={({item})=>(
                                    <>
                                    <TouchableOpacity
                                      onPress={() =>{ this.props.navigation.navigate('ChatBox' ,{ChatName:item.title})}}
                                     >
                                        <View style={styles.nav_root}>
                                           

                                            <View style={styles.nav_style}>
                                                <View style={{flex:2, height: 70  }}> 
                                                    <View style={{flex:4 , height: 70 ,justifyContent:'center',alignItems:'center'}}> 
                                                        <Text style={{marginTop:5 ,color:"#251A51",textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:12}}>دانشجویان</Text>
                                                        <Text style={{marginTop:5,color:"#251A51", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:12}}>{persify(item.nfStudent)}</Text>
                                                    </View>
                                                </View>
                                                    <View style={{flex:4 , height: 70 ,justifyContent:'center'}}> 
                                                        <Text style={{marginTop:5,color:"#251A51" ,fontFamily:'IRANSansWeb' ,fontSize:12}}>{item.title}</Text>
                                                        <Text style={{marginTop:5,color:"#251A51", margin:5 ,fontFamily:'IRANSansWeb' ,fontSize:12}}>{item.teacher}</Text>
                                                    </View>
                                                <View style={{flex:1 , height: 70  , alignItems:'center',justifyContent:'center'}}> 
                                                    <Image 
                                                        source={require('../../../assets/img/app_icons/idea.png')}
                                                        style={{borderRadius:35/2, width:35,height:35,  alignItems: 'center' ,justifyContent: 'center',resizeMode: 'contain' ,}}
                                                    />  
                                                </View>
                                            </View>

                                            <View style={styles.notif} >
                                                {item.notifmod == 0 ? (<Image 
                                                    source={require('../../../assets/img/app_icons/mute.png')}
                                                    style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' ,}}
                                                /> ):(<Image 
                                                    source={require('../../../assets/img/app_icons/unmute.png')}
                                                    style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' ,}}
                                                /> )}
                                                
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                   
                                    </>
                                )}/>
                </View>
                
            </View>
        )
    }
}

const SCREEN_WIDTH =  Dimensions.get('window').width;

const styles = StyleSheet.create({
    Container:{
        width:SCREEN_WIDTH,
        flex:1
    },
    header:{
        width:SCREEN_WIDTH,
        height: 70 ,
        borderBottomLeftRadius: 25,
        backgroundColor: '#8AA9FC',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent:'center',
        padding:5
    },
    back:{
        
        width: 25,
        height: 25,
        marginHorizontal :20
    },
    content:{
        width:SCREEN_WIDTH,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent:'center',
    },
    nav_style:{
    
        width: SCREEN_WIDTH-60,
        height: 80,
        borderColor : 'black',
        borderWidth: .2, 
        padding:5,
        
        flexDirection:"row",
        alignItems: 'center',
        borderRadius: 5,
        
        },
       nav_root :{
    
            width: SCREEN_WIDTH,
            height: 90,   
            flexDirection:"row",
            alignItems: 'center',
           justifyContent:'center',
            marginTop: 12
            },
        notif:{
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:'#FFFF', 
            borderRadius:30/2, width: 30, 
            height: 30, 
            position: 'absolute' ,
            left: "5%",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }
    })

export default ChatList;