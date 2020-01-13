import React from 'react';
import { Dimensions, View ,Text ,TouchableOpacity ,StyleSheet,Image,TextInput,FlatList } from 'react-native'
import { withNavigation } from 'react-navigation';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
            ]
        }
       
       
    
    }
  
    render() {
        const {name} = this.state
        return (
        
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
                            onPress={this.handleChosePhoto}/>  
                        <View 
                        style={{justifyContent:"center",alignItems:"center" }}>
                            <Text style={styles.TextHeader} > سلام {name} </Text>
                        </View>           
                    
                    </View>
                   
                
                    </View>
                    <View style={{ width:SCREEN_WIDTH ,backgroundColor:"#8AA9FC"}}>
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
                                    <View style={{padding:10, margin:5, borderRadius:15, backgroundColor:"#ffff" ,width :SCREEN_WIDTH/5 ,height : SCREEN_WIDTH/5 ,justifyContent :"center" ,alignItems:'center'}}>
                                        <Text style={{fontFamily:'IRANSansWeb' ,fontSize:9}}>{item.title}</Text>
                                        <View style={{justifyContent: "center", width :SCREEN_WIDTH/5 ,padding:5, alignItems:"flex-end"}}>
                                        <Text style={{textAlign:"right", fontFamily:'IRANSansWeb' ,fontSize:7}}>{item.chapter}</Text></View>
                                    </View>
                                )}/>

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
        width: SCREEN_WIDTH, 
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
            height:130,
            backgroundColor:'#8aa9fc',
            borderBottomLeftRadius:35
        },
    
})


export default withNavigation(Home);