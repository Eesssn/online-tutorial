import React from 'react';
import { View ,Text ,TouchableOpacity ,Image,Dimensions ,StyleSheet ,FlatList,ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';
import persify from "persify"


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
                {id: 0 ,title:"چرا آمازون",chapter:"سه فصل",teacher :"استاد حسینی", src: require('../../../../assets/img/youroffer/1.jpg') },
                {id: 1,title:"برترین شو",chapter:"پنج فصل",teacher :"استاد حسینی", src: require('../../../../assets/img/youroffer/2.jpg') },
                {id: 2,title:"یادگیری آسان",chapter:"پنج فصل",teacher :"استاد حسینی", src: require('../../../../assets/img/youroffer/3.jpg') },
                {id: 3,title:"آماده باش",chapter:"پنج فصل",teacher :"استاد حسینی", src: require('../../../../assets/img/youroffer/4.jpg') } , 
                               
            ],
            hederChatName:[
                {id: 0 , chatname:'چرا آمازون |دوره آموزشی حرفه ای آمازون وکسب در آمد', notifmod: 1},
                {id: 1 , chatname:'چرا آمازون |دوره آموزشی حرفه ای آمازون وکسب در آمد', notifmod: 0},
            ],
            offer:[
                {id:0 , src: require('../../../../assets/img/youroffer/1.jpg') , isoffer :1},
                {id:1 , src: require('../../../../assets/img/youroffer/2.jpg') , isoffer :0},
                {id:2 , src: require('../../../../assets/img/youroffer/3.jpg') , isoffer :0},
                {id:3 , src: require('../../../../assets/img/youroffer/4.jpg') , isoffer :1},
            ],
            SuggestedSourses:[
                {id:0 , src: require('../../../../assets/img/suggest/1.jpg') , numbrof :5 , title:"چرا آمازون", teacher :"استاد حسینی",price : 350000,target:0},
                {id:1 , src: require('../../../../assets/img/suggest/2.jpg') ,  numbrof :5 , title:"چرا آمازون", teacher :"استاد حسینی",price : 0,target:1},
                {id:2 , src: require('../../../../assets/img/suggest/3.jpg') ,  numbrof :5 , title:"چرا آمازون", teacher :"استاد حسینی",price : 350000,target:1},
                {id:3 , src: require('../../../../assets/img/suggest/4.jpg') ,  numbrof :5 , title:"چرا آمازون", teacher :"استاد حسینی",price : 0,target:0},
            ]

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
    
    render(){
        const {name} = this.state
        return(
           
            <ScrollView  >
                <View
                    style={styles.shadow}>
                    <View style={styles.header}>
                        <View style={styles.topHeader}>
                            {/* profile&serch */}
                            <View style={{padding:15, flex: 1.5, height:100, alignItems:"center", justifyContent:"center", flexDirection:"row-reverse"}}>
                                <Image source={require('../../../../assets/img/profilepic.jpeg')}  style={{ width: 65, height: 65 , borderRadius:65/2 ,marginTop:10}} />
                                <Text style={styles.text_profile} >سلام  {name} </Text>
                            </View>
               
                            <TouchableOpacity 
                            style={{padding:10, flex :2 ,height:100, alignItems:"center", justifyContent:"flex-end", flexDirection:"row-reverse"}} 
                            onPress={()=> this.props.navigation.navigate('Search',{from:'home'})}>
                                <View style={{ alignItems :"center", flexDirection:'row-reverse', height :28 , width: 100 , borderRadius :35 , backgroundColor :"#ffff" ,}}>
                                        <Image source={require('../../../../assets/img/app_icons/magnifying-glass.png')}  style={{width: 12, height: 12 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                                        <Text  style={{alignItems:"center", width: 50, height:25,color:'#707070' , fontSize:12, textAlign: 'right',fontFamily:"IRANSansWeb"}}>جستجو</Text>
                                    </View>
                            </TouchableOpacity>
                   
                        </View>
                        <View style={styles.last_courses}>
                            {/* last courses */}
                            <View style={{width: SCREEN_WIDTH,height:20,flexDirection:'row-reverse',alignItems:'center',justifyContent:"flex-end",}}>
                                <View style={{marginHorizontal:10, flex: 1.5, height:100, alignItems:"center", justifyContent:"flex-start", flexDirection:"row-reverse"}}>
                                  <Text style={{ color:'#251A51',fontFamily:"IRANSansWeb",}}>آخرین دوره ها </Text>
                                </View>
                
                                <View style={{padding:10, flex :2 ,height:100, alignItems:"center", justifyContent:"flex-end", flexDirection:"row-reverse"}} >
                                    <TouchableOpacity style={styles.btn_login} 
                                        onPress={()=> this.props.navigation.navigate('ViewAll')}>
                                        <Text style={styles.btn_title}> نمایش همه </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:2,justifyContent:'flex-start',alignItems:"center"}}>
                                <FlatList 
                                    horizontal
                                    inverted={true}
                                    data={this.state.lastRound}
                                    contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
                                    keyExtractor={(item,index)=> index.toString()}
                                    renderItem ={({item})=>(
                                                            <TouchableOpacity style={{padding:10, margin:6, borderRadius:20, backgroundColor:"#ffff" ,width :SCREEN_WIDTH/5 ,height : SCREEN_WIDTH/5 ,justifyContent :"center" ,alignItems:'center' ,flexDirection:"column"}}
                                                            onPress={() =>{ this.props.navigation.navigate('Buy',{'chapternumber':5 , part: 5,'courseid':item.id,"src":item.src,teacher:item.teacher,title:item.title})}}
                                                            
                                                                >
                                                                <Image 
                                                                source={require('../../../../assets/img/app_icons/idea.png')}
                                                                style={{borderRadius:25/2, width:25,height:25,  alignItems: 'center' ,justifyContent: 'center',resizeMode: 'contain' ,}}
                                                                />  
                                                                <Text style={{ width :SCREEN_WIDTH/5.5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:10}}>{item.title}</Text>
                                                                <View style={{justifyContent: "center", width :SCREEN_WIDTH/5.5 ,padding:8,paddingTop:2, alignItems:"flex-end"}}>
                                                                <Text style={{textAlign:"right", fontFamily:'IRANSansWeb' ,fontSize:5}}>{item.chapter}</Text></View>
                                                            </TouchableOpacity>
                                )}/>


                            </View>
                            
                        </View>
                    </View>
                    <View style={styles.chat_box}>
                        <View style={{marginTop:15,width: SCREEN_WIDTH,height: 20,flexDirection:'row-reverse',alignItems:'center',justifyContent:"flex-end",}}>
                                    <View style={{marginHorizontal:10, flex: 1.5, height:100, alignItems:"center", justifyContent:"flex-start", flexDirection:"row-reverse"}}>
                                    <Text style={{ color:'#251A51',fontFamily:"IRANSansWeb",}}>گروه های شما </Text>
                                    </View>
                    
                                    <View style={{padding:10, flex :2 ,height:100, alignItems:"center", justifyContent:"flex-end", flexDirection:"row-reverse"}} >
                                        <TouchableOpacity style={styles.btn_login} onPress={() =>{ this.props.navigation.navigate('ChatList')}}>
                                            <Text style={styles.btn_title}> نمایش همه </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{flex:2,justifyContent:'flex-start',alignItems:"flex-end"}}>
                                   
                                <FlatList 
                                                   
                                        data={this.state.hederChatName}
                                        
                                        keyExtractor={(item,index)=> index.toString()}
                                        renderItem ={({item})=>(
                                            <TouchableOpacity style={styles.chatnf}>
                                                
                                                <View style={{
                                                                flex: .5,
                                                                flexDirection: 'row',
                                                                
                                                                alignItems:"center",
                                                                justifyContent:"center"
                                                            }}>
                                                                <View style={{ alignItems:"flex-start",justifyContent:"center",width: 20, height: 30,flex:1}} >
                                                                    {item.notifmod == 0 ? (<Image 
                                                                        source={require('../../../../assets/img/app_icons/mute.png')}
                                                                        style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' ,}}
                                                                    /> ):(<Image 
                                                                        source={require('../../../../assets/img/app_icons/unmute.png')}
                                                                        style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' ,}}
                                                                    /> )}
                                                                    
                                                                </View>
                                                                <View style={{flex:6,alignItems:"center",justifyContent:"center", width: 215, height: 30}} > 
                                                                    <Text numberOfLines={1} ellipsizeMode="middle" style={{textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:9}}>{item.chatname}</Text>
                                                                </View>
                                                                <View style={{flex:1,alignItems:"center",justifyContent:"center", width: 30, height: 30}} >
                                                                    <Image 
                                                                        source={require('../../../../assets/img/app_icons/idea.png')}
                                                                        style={{borderRadius:25/2, width:25,height:25,resizeMode: 'contain' ,}}
                                                                    /> 
                                                                </View>
                                                            </View>
                                                
                                                        
                                                    
                                                    
                                                
                                            </TouchableOpacity>
                                            
                                        )}/>

                                </View>
                        </View>
                   
                    </View>
                    {/* content */}
                    
                    
                    <View style={{marginTop:5, width:SCREEN_WIDTH+10}}>
                                                    <View style={{marginHorizontal: 12, alignItems:'center',flexDirection:'row-reverse', justifyContent: 'space-between',}}>
                                                        <Text style={{marginHorizontal:10, color:'#251A51',fontFamily:"IRANSansWeb",}}>پیشنهاد به شما</Text>
                                                    </View>

                                                    <View style={{marginLeft:5, width:SCREEN_WIDTH-10,height:90 ,marginTop:4}}>
                                                        <View style={styles.list}>
                                                            <FlatList 
                                                            showsHorizontalScrollIndicator={false}
                                                            inverted={true}
                                                            data={this.state.offer}
                                                            contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
                                                            keyExtractor={(item,index)=> index.toString()}
                                                            horizontal
                                                            renderItem ={({item})=>(
                                                                <TouchableOpacity >
                                                                    <Image source={item.src} style={styles.cardItem} />
                                                                    {item.isoffer == 1 ? (
                                                                        <View style={styles.btn_isoffer} onPress={this.onPressSignUp}>
                                                                            <Text style={styles.offer_text}>تخفیف ویژه </Text>
                                                                        </View>
                                                                    ):( <></>)}
                                                                </TouchableOpacity>
                                                            )}
                                                            />
                                                        </View>


                                                    </View>
                                                </View>
                                                <View style={{marginTop:5, width:SCREEN_WIDTH+10}}>
                                                <View style={{marginHorizontal: 12, alignItems:'center',flexDirection:'row-reverse', justifyContent: 'space-between',}}>
                                                        <Text style={{marginHorizontal:10, color:'#251A51',fontFamily:"IRANSansWeb",}}>دوره های پیشنهادی</Text>
                                                </View>

                                                    <View style={{ marginLeft:5, width:SCREEN_WIDTH-10,height:150 ,}}>
                                                        <View>
                                                            <FlatList 
                                                            showsHorizontalScrollIndicator={false}
                                                            inverted={true}
                                                            data={this.state.SuggestedSourses}
                                                            contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
                                                            keyExtractor={(item,index)=> index.toString()}
                                                            horizontal
                                                            renderItem ={({item})=>(
                                                                <TouchableOpacity   onPress={() =>{ this.props.navigation.navigate('Nbuy',{'courseid':item.id,'price':item.price,'target':item.target,"src":item.src,teacher:item.teacher,title:item.title})}}>
                                                                     <Image source={item.src} style={styles.cardimage} />
                                                                    <View style={{width :110 ,height:10}}></View>
                                                                    <View style={{flexDirection: 'column' ,justifyContent:'center', alignContent:'center', marginTop:30, borderRadius:25, width :100 ,height: 110 , backgroundColor:"#251A5133" ,margin:8}}>
                                                                        <Text style={styles.suggest_text2}>{item.title}</Text>
                                                                        <Text style={styles.suggest_text}>تعداد جلسات :{item.numbrof}</Text>
                                                                        <Text style={styles.suggest_text}>مدرس : {item.teacher}</Text>
                                                                    </View>
                                                                    <View style={{width :110 ,height:20}}></View>
                                                                    {item.price == 0 ?(<View style={styles.view_price} >
                                                                        <Text style={styles.btn_title ,{fontFamily:"Lalezar-Regular",color:"#251A51"}}>رایگان</Text>
                                                                    </View>):(
                                                                        <View style={styles.view_price} >
                                                                        <Text style={styles.btn_title,{fontSize:10, fontFamily:"IRANSansWeb", color:"#251A51"}}> { persify(item.price)} تومان</Text>
                                                                    </View>
                                                                    )}
                                                                </TouchableOpacity>
                                                            )}
                                                            />
                                                        </View>


                                                    </View>
                                                    
                                                    </View>
                                                    <View style={{marginTop:15 , width:SCREEN_WIDTH, height: 25}}/>
                                                    
                                                


                </ScrollView>    
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width :SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        flexDirection: "column",
    },
    shadow:
        {
            backgroundColor:"#FFFF",
            width: SCREEN_WIDTH+10,
            height: '54%',
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
        },
        header:{
            backgroundColor:"#8AA9FC",
            width: SCREEN_WIDTH+10,
            height:'60%',
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

        },
        chat_box:{
            backgroundColor:"#FFFF",
            width: SCREEN_WIDTH+10,
            flex:1,
            flexDirection:"column",
            marginLeft:0, marginRight:-5,marginTop:-5,
            borderBottomLeftRadius: 35,
            
            
        },
        topHeader:{
            
            width: SCREEN_WIDTH,
           height:"40%",
            flexDirection:'row-reverse',
            alignItems:'center',
            justifyContent:"flex-end",
           
            

        },
        last_courses:{
            width: SCREEN_WIDTH,
            height: '50%',
            flexDirection:"column",
            marginTop:0
            

        },
        text_profile:{
            padding:5,
            fontSize:20,
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
              chatnf:{
                padding:10,
                margin:5,
                borderBottomLeftRadius:20 ,
                borderTopLeftRadius:20, 
                backgroundColor:"#ffffff" ,
                width :SCREEN_WIDTH/10*9,
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
            
            },
            cardItem:{
                height:80,
                width:190,
                alignItems:'center',
                justifyContent:'center',
                margin:5,
                borderRadius : 15,
                backgroundColor : "#ffffff",
              },
              btn_isoffer: {
                width : 90,
                height :28,
                top: 50,
                left:95,
                position: "absolute",
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
                offer_text:{
                    padding : 5,
                    textAlign: 'center',
                    color: '#707070',
                    fontFamily:"IRANSansWeb",
                    fontSize: 14
                },
                cardimage:{
                    height:50,
                    width:50,
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    borderRadius : 17,
                    backgroundColor : "#ffffff",
                    position:'absolute', left : "25%" ,top :12
                },
                suggest_text:{
                    
                    textAlign: 'center',
                    color: '#251A51',
                    fontFamily:"IRANSansWeb",
                    fontSize: 10
                },
                suggest_text2:{
                    
                    textAlign: 'center',
                    color: '#251A51',
                    fontFamily:"IRANSansWeb",
                    fontSize: 14
                },
                view_price:{
                width : 70,
                height :18,
                borderRadius:45,
                backgroundColor:'#9DFB45',
                alignItems:'center',
                justifyContent:'center',
                position:'absolute',
                top:"78%",left:"20%"
                }
        
    

})

export default withNavigation(Home);