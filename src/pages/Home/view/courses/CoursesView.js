import React from 'react';
import { View ,Text,TouchableOpacity,Dimensions,FlatList ,StyleSheet,Image } from 'react-native';
import persify from "persify"
import { withNavigation } from 'react-navigation';




const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class CoursesView extends React.Component{
    constructor(props) {
        super(props)   
        
        this.state = {
            BlogData :[
                {id: 0 , src: require('../../../../../assets/img/youroffer/2.jpg'),color:'#EDC483',title:'دوره مقدماتی درآمدزایی آمازون',teacher:'رضا حسینی',type:'مقدماتی', price:0,numberos:'52'},
                {id: 1 , src: require('../../../../../assets/img/youroffer/1.jpg'),color:'#8AA9FC',title:'دوره پیشرفته درآمدزایی آمازون',teacher:'رضا حسینی',type:'پیشرفته', price:300000,numberos:'52'},
                {id: 2 , src: require('../../../../../assets/img/youroffer/2.jpg'),color:'#E3707F',title:'دوره مقدماتی درآمدزایی آمازون',teacher:'رضا حسینی',type:'مقدماتی', price:0,numberos:'52'},

            ]
            }

    }
    render(){
        return(
            <View style ={styles.container}>

                <FlatList
                    data={this.state.BlogData}
                    keyExtractor = {(item,index)=>index.toString()}
                    showsVerticalScrollIndicator = {false}
                    renderItem = {({item})=>(
                        <TouchableOpacity>
                        <View style={{alignItems:"center", margin:10, width:SCREEN_WIDTH-25 ,height:SCREEN_HEIGHT/5.5,borderRadius:25, }}>
                              <View style={{backgroundColor:item.color,flexDirection:'row' ,alignItems:"center", margin:10, width:SCREEN_WIDTH-25 ,height:SCREEN_HEIGHT/6,borderRadius:25, }}>
                                <View style={{alignItems:"center", flex:1,borderRadius:25 ,opacity:.5  ,height:SCREEN_HEIGHT/6,backgroundColor:"#FFF",flexDirection:'column'}}>
                                    <Image 
                                        source={require('../../../../../assets/img/app_icons/information.png')}
                                        style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain' ,marginTop:20}}
                                    /> 
                                    <Text style={{
                                                        fontFamily:'IRANSansWeb' ,
                                                        fontSize:18,
                                                        color:"#251A51",
                                                        marginTop:15
                                                        }} >

                                                            {persify(item.numberos)}
                                                </Text>
                                    <Text style={{
                                            fontFamily:'IRANSansWeb' ,
                                            fontSize:10,
                                            color:"#251A51",
                                            
                                            }} >

                                                دانشجویان دوره 
                                    </Text>
                                </View>
                                <View style={{flex:2 ,height:SCREEN_HEIGHT/6,flexDirection:"column"}}>
                                    <View style={{ flex:1 ,flexDirection: "column"}}>
                                    <Text style={{
                                                    fontFamily:'IRANSansWeb' ,
                                                    fontSize:14,
                                                    color:"#FFFF",
                                                    marginTop:15
                                                    }} >

                                                        {item.title}
                                            </Text>
                                            <Text style={{
                                                    fontFamily:'IRANSansWeb' ,
                                                    fontSize:10,
                                                    color:"#FFFF",
                                                    
                                                    }} >

                                                        استاد دوره : استاد {item.teacher}
                                            </Text>
                                    </View>
                                    <View style={{alignItems:"center", flex:1 ,flexDirection:"row-reverse"}}>
                                    <Text style={{
                                                    fontFamily:'IRANSansWeb' ,
                                                    fontSize:12,
                                                    color:"#FFFF",                                                
                                                    marginHorizontal:10
                                                    }} >

                                                        {item.type}
                                            </Text>
                                    <Text style={{
                                                    fontFamily:'IRANSansWeb' ,
                                                    fontSize:12,
                                                    color:"#FFFF",                                                    
                                                    marginHorizontal:10
                                                    
                                                    }} >
                                                        {item.price == 0 ?("رایگان"):(persify(item.price)+" تومان")}
                                                        
                                            </Text>
                                    
                                    </View>
                                </View>
                                <View style={{flex:.75,height:SCREEN_HEIGHT/6 ,alignItems:"center"}}>
                                <Image source={item.src}  style={{width: 55, height: 55 , borderRadius:55/2,marginTop:15,resizeMode:"cover" }} />
                                </View>
                             </View>
                             <View>
                             {item.price == 0 ? (
                                <View style={{
                                            width : 70,
                                            height :18,
                                            borderRadius:45,
                                            backgroundColor:'#9DFB45',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            position:'absolute',
                                            bottom:"10%",left:90
                                            } }>
                                    <Text style={{fontSize:10, fontFamily:"Lalezar-Regular", color:"#251A51"}}> رایگان</Text>
                                </View>
                                        ):( <></>)}
                             </View>
                         </View>
                         </TouchableOpacity>
                    )}/>
            </View>
            )
    }
}


const styles = StyleSheet.create({
    container:{
        width:SCREEN_WIDTH ,
        height: SCREEN_HEIGHT-180,
        flexDirection:'column',
        alignItems:"center",
        justifyContent: "center",
        marginTop:10
    
    },
    cardItem:{
        padding:10,
        width:SCREEN_WIDTH-40 ,
        height: 120,
        alignItems:'center',
        justifyContent:'flex-start',
        margin:5,
        borderRadius : 5,
        backgroundColor : "#ffffff",
      },
      cardContent:{
    
        width:SCREEN_WIDTH-60 ,
        height: 80,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"column",
        margin:5,
        borderRadius : 5,
        backgroundColor : "#ffffff",
        position:'absolute',
        bottom: 1,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
      },
})
export default withNavigation(CoursesView);