import React from 'react';
import { View ,Text,TouchableOpacity,Dimensions,FlatList ,StyleSheet,Image } from 'react-native';
import persify from "persify"
import { withNavigation } from 'react-navigation';




const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FavoriteView extends React.Component{
    constructor(props) {
        super(props)   
        
        this.state = {
            BlogData :[
                {id: 0 , src: require('../../../../../assets/img/youroffer/2.jpg'),color:'#EDC483',title:'دوره مقدماتی درآمدزایی آمازون',teacher:'رضا حسینی',type:'مقدماتی', price:0,numberos:'52'},
                {id: 1 , src: require('../../../../../assets/img/youroffer/1.jpg'),color:'#8AA9FC',title:'دوره پیشرفته درآمدزایی آمازون',teacher:'رضا حسینی',type:'پیشرفته', price:300000,numberos:'52'},
                {id: 2 , src: require('../../../../../assets/img/youroffer/2.jpg'),color:'#E3707F',title:'دوره مقدماتی درآمدزایی آمازون',teacher:'رضا حسینی',type:'مقدماتی', price:0,numberos:'52'},

            ],
            BlogData2 :[
                {id: 0 , src: require('../../../../../assets/img/student.jpg'),likeNumber:456 ,liked:0 , title : "چگونه در آمازون پیشرفت کنیم ؟",text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."},
                {id: 2 , src: require('../../../../../assets/img/student.jpg'),likeNumber:456 ,liked:1 , title : "چگونه در آمازون پیشرفت کنیم ؟",text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."},
                {id: 3 , src: require('../../../../../assets/img/student.jpg'),likeNumber:456 ,liked:1 , title : "چگونه در آمازون پیشرفت کنیم ؟",text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."},
                {id: 4 , src: require('../../../../../assets/img/student.jpg'),likeNumber:456 ,liked:1 , title : "چگونه در آمازون پیشرفت کنیم ؟",text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."},
                {id: 5 , src: require('../../../../../assets/img/student.jpg'),likeNumber:456 ,liked:1 , title : "چگونه در آمازون پیشرفت کنیم ؟",text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."},
            ]
            }

    }
    render(){
        
        return(
           <View>
               {this.props.id == "content" ? (
                <View style ={styles.container}>

<FlatList
    data={this.state.BlogData2}
    keyExtractor = {(item,index)=>index.toString()}
    showsVerticalScrollIndicator = {false}
    renderItem = {({item})=>(
                        <View style={{alignItems:"center", margin:5, width:SCREEN_WIDTH-25 ,height:SCREEN_HEIGHT/4 }}>
                            <View style={{flex : 3}}><TouchableOpacity >
                                <Image source={item.src} style={styles.cardItem} />
                                
                            
                            </TouchableOpacity></View>
                            <View style={{flex: 1,width:SCREEN_WIDTH-30,height:25}}><Text></Text></View>

                                <View style={styles.cardContent}>
                                    <View style={{flexDirection:'row',alignItems:"center",width:SCREEN_WIDTH-80 ,height:20}}>
                                        <View style={{flexDirection:'row',flex:1,height:20 ,alignItems:"center"}}>
                                        {/* Dont forget change like icon */}
                                        <Image source={require('../../../../../assets/img/app_icons/like.png')} style={{marginHorizontal:5 ,width:15,height:15,resizeMode: 'contain' }}/>
                                            <Text style={{
                                                    fontFamily:'IRANSansWeb' ,
                                                    fontSize:12,
                                                    color:'#707070',
                                                    }} >

                                                        {persify(item.likeNumber)}
                                            </Text>
                                        </View>
                                        <View style={{flex:2,height:20,justifyContent:'center'}}>
                                            <Text style={{
                                                    fontFamily:'IRANSansWeb' ,
                                                    fontSize:12,
                                                    color:"#707070"
                                                    }} >

                                                        {item.title}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ margin:5,padding:2,width:SCREEN_WIDTH-80 ,height: 35}}>
                                        <Text numberOfLines={2} ellipsizeMode="middle" 
                                            style={{
                                                textAlign:"center" ,
                                                fontFamily:'IRANSansWeb' ,
                                                fontSize:10,
                                                color:'#707070',
                                                opacity:0.7}} >

                                                    {item.text}
                                        </Text>
                                    </View> 
                                </View>
                            </View>
                    )}/>
                </View>
                      ):(
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
               )}
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
export default withNavigation(FavoriteView);