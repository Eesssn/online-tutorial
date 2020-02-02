import React from 'react';
import { View , Text , TouchableOpacity,Image, StyleSheet,Dimensions,FlatList } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import persify from "persify";
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HIGHT = Dimensions.get('window').height
class Nbuy extends React.Component{
    static navigationOptions = {
        headerShown: false,
       
    };
        constructor(props){
            super(props);

            this.state={
                curseTitle:[
                    {id:0,title:"چگونه بتوانیم سریع یادبگیریم؟"},
                    {id:1,title:"چگونه بتوانیم سریع یادبگیریم؟"},
                    {id:2,title:"چگونه بتوانیم سریع یادبگیریم؟"},
                    {id:3,title:"چگونه بتوانیم سریع یادبگیریم؟"},
                    {id:4,title:"چگونه بتوانیم سریع یادبگیریم؟"},
                ],

            }
        }

    onPressheader= ()=>{
        this.props.navigation.goBack();
      }
    render(){
        const {navigation} = this.props
        return(
            <View style={styles.container}>
                <View style={styles.shadow}>
                    {/* header */}
                   
                    <View style={styles.header}>
                        <View style={{width:SCREEN_WIDTH  , height: 40 ,marginTop:10, alignItems:"center",justifyContent:"flex-start",flexDirection:"row"}}>
                            <TouchableOpacity style={{flex:1, height:20 ,alignItems:"flex-start",justifyContent:'flex-start'}} onPress={this.onPressheader}>
                                <Image
                                    style={styles.back}
                                    source={require('../../../assets/img/app_icons/undo.png')}
                                    />
                            </TouchableOpacity>
                            <View style={{flex:1, height:25 ,alignItems:"flex-end",marginHorizontal:10,justifyContent:'flex-end'}}>
                              
                                {navigation.getParam('target')== 1 ? (
                                    <View style={styles.btn_isoffer}>
                                        <Text style={styles.offer_text}>دوره هدف </Text>
                                    </View>
                                ):( <></>)}
                            </View>
                        </View>
                        <View style={{width:SCREEN_WIDTH, height: 160, justifyContent:'flex-start',alignItems:'center', flexDirection:'column'}} >
                            <Image source={navigation.getParam('src')}  style={{width: 65, height: 65 , borderRadius:65/2,marginTop:-10,resizeMode:"cover" }} />
                            <View style={{width:SCREEN_WIDTH,height:20 ,marginTop:10, alignItems:'center',justifyContent:"center"}}><Text style={styles.title_text}>{navigation.getParam('title')}</Text></View>
                            <View style={{width:SCREEN_WIDTH,height:20 ,marginTop:10, alignItems:'center',justifyContent:"center"}}><Text style={styles.teacher_text}> استاد دوره :  {navigation.getParam('teacher')}</Text></View>
                            
                        </View>

                        <TouchableOpacity style={styles.btn_login} 
                            onPress={() =>{ this.props.navigation.navigate('Buy',{'chapternumber':5 , part: 5,'courseid':navigation.getParam('id'),"src":navigation.getParam('src'),teacher:navigation.getParam('teacher'),title:navigation.getParam('title')})}}>

<Text style={styles.btn_title}>{navigation.getParam('price') == 0 ? ("شروع دوره"):("خرید دوره")  }</Text>
{navigation.getParam('price') == 0 ? (
<View style={{
            width : 70,
            height :18,
            borderRadius:45,
            backgroundColor:'#9DFB45',
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            bottom:-10,right:5
            } }>
    <Text style={{fontSize:10, fontFamily:"Lalezar-Regular", color:"#251A51"}}> رایگان</Text>
</View>
        ):( <View style={{
            width : 70,
            height :18,
            borderRadius:45,
            backgroundColor:'#9DFB45',
            alignItems:'center',
            justifyContent:'center',
            position:'absolute',
            bottom:-12,right:"35%"
            } }>
    <Text style={{fontSize:10, fontFamily:'IRANSansWeb', color:"#251A51"}}> {persify( navigation.getParam('price'))} تومان </Text>
</View>)}

</TouchableOpacity>

                    </View>
                    
                    <View style={styles.header_content}>
                        <View style={{marginTop:40, alignItems:'center',flexDirection:'row-reverse', justifyContent: 'space-between',}}>
                            <Text style={{marginHorizontal:10, color:'#251A51',fontFamily:"IRANSansWeb",}}>سرفصل های دوره</Text>
                        </View>
                        <View style={{height: "60%", alignItems:'center',flexDirection:'row-reverse', justifyContent: 'space-between',}}>
                        <FlatList 
                                style={{marginTop:5,flexDirection:'row-reverse', marginBottom:5}}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={this.state.curseTitle}
                                keyExtractor={(item,index)=> index.toString()}
                                renderItem ={({item})=>(
                                    <>
                                    
                                    <View style={{marginTop:12, alignItems:'center',flexDirection:'row-reverse', justifyContent: 'space-between',}}>
                                        <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}></View><Text style={{marginHorizontal:5, color:'#251A51',fontFamily:"IRANSansWeb",}}>{item.title}</Text>
                                    </View>
                                    
                                    </>
                                )}/>
                        </View>

                    </View>
                </View>
                
                <View style={styles.comment}>
                    {/* comment box */}
                    <View style={{marginTop:10, alignItems:'center',flexDirection:'row-reverse', justifyContent: 'space-between'}}>
                            <Text style={{marginHorizontal:10, color:'#251A51',fontFamily:"IRANSansWeb",}}>نظرات کاربران درباره دوره </Text>
                        </View>
                    <View style={{flex:1,width:SCREEN_WIDTH, alignItems:'center',flexDirection:'row', justifyContent: 'center',}}>
                        <FlatList 
                                style={{marginTop:5,flexDirection:'row-reverse', marginBottom:5}}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={this.state.curseTitle}
                                keyExtractor={(item,index)=> index.toString()}
                                renderItem ={({item})=>(
                                    <>
                                    
                                    <View style={styles.comment_card}>
                                       
                                       <View>
                                         <Image source={require('../../../assets/img/profilepic.jpeg')}  style={{width: 45, height: 45 , borderRadius:45/2 }} />
                                       </View>
                                       <View style={{height:65,width:"85%",flexDirection:'column',}}>
                                       <Text style ={styles.user_text}>فاطمه رضایی</Text>
                                       <Text style ={styles.comment_text}>بنظرم دوره خیلی خوب و مناسبی بود.پیشنهاد میکنم به همه دوستان که حتما شرکت کنند.</Text>
                                       <View style={{flexDirection:"row",marginTop:-12}}>
                                            {/* <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/>
                                            <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/>
                                            <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/>
                                            <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/>
                                            <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/> */}
                                            
                                            <Rating
                                                type='star'
                                                ratingCount={5}
                                                readonly={true}
                                                startingValue= {4}
                                                imageSize={15}
                                                defaultRating={5}
                                                isDisabled={true}
                                                onFinishRating={this.ratingCompleted}
                                            />
                                       </View>
                                       </View>
                                    </View>
                                    
                                    </>
                                )}/>
                        </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-start'

    },
    shadow:{
        flex:1.5,
        width:SCREEN_WIDTH,
        flexDirection:'column',
        borderBottomLeftRadius: 25,
        backgroundColor: "#ffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    comment:{
        flex:1,
        width: SCREEN_WIDTH,
      
    },
    header:{
        flex:1,
        width: SCREEN_WIDTH,
        flexDirection:'column',
        justifyContent:"flex-start",
        alignItems:'center',
        backgroundColor:'#EDC483',
        borderBottomLeftRadius:25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,   

    },
    header_content:{
        flex:1,
        width: SCREEN_WIDTH,
        borderBottomLeftRadius:25,
        

    },
    back:{
    
        width: 25,
        height: 25,
        marginHorizontal :20
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
        marginTop:5,
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
    title_text:{
        fontFamily:'IRANSansWeb' ,
        fontSize:20,
        color:'#FFFF',
    },
    teacher_text:{
        fontFamily:'IRANSansWeb' ,
        fontSize:10,
        color:'#FFFF',
    },
    btn_login: {
        flexDirection:'row',
        width : 250,
        height :45,
        margin:5,
        marginTop:10,
        borderRadius:45,
        backgroundColor:'#8AA9FC',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        position:'absolute',
        top: "85%"
    },
    btn_title: {
        padding : 5,
        textAlign: 'center',
        color: '#FFFF',
        fontFamily:"IRANSansWeb",
        fontSize: 20
      },
      comment_card:{
          padding:10,
          marginTop:10,
          marginBottom:5,
          marginHorizontal:10,
          width: SCREEN_WIDTH-20,
          height:80,borderRadius:25, 
          alignItems:'flex-start',
          flexDirection:'row-reverse', 
          justifyContent: 'flex-start',
          backgroundColor:"#FFFF",
           shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,   


    },
    user_text:{
        fontFamily:'IRANSansWeb' ,
        fontSize:10,
        color:'#6A437C'
    },
    comment_text:{
        fontFamily:'IRANSansWeb' ,
        fontSize:12,
        color:'#707070',
        padding:2
    },
})

export default Nbuy;


