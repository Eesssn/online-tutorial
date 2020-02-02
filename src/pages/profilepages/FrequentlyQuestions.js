import React from 'react';
import { View ,Text , StyleSheet , Dimensions , ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,Image,
    LayoutAnimation,} from 'react-native'
import persify from "persify"

class ExpandableItemComponent extends React.Component {
    //Custom Component for the Expandable List
    constructor() {
      super();
      this.state = {
        layoutHeight: 0,
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.item.isExpanded) {
        this.setState(() => {
          return {
            layoutHeight: null,
          };
        });
      } else {
        this.setState(() => {
          return {
            layoutHeight: 0,
          };
        });
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.layoutHeight !== nextState.layoutHeight) {
        return true;
      }
      return false;
    }
   
    render() {
      return (
        <View>
          {/*Header of the Expandable List Item*/}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.onClickFunction}
            style={styles.nav_style}>
            

           
                <View style={{flex:2 ,justifyContent:"flex-start", flexDirection:'row',margin:5,alignItems:'center'}}>{this.props.item.isExpanded == false ? (<Image source={require('../../../assets/img/app_icons/next.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/>):(<Image source={require('../../../assets/img/app_icons/down.png')} style={{ width:12,height:12,resizeMode: 'contain',margin:2 }}/>)}</View>
                <View style={{ flex:1.5 , margin : 5,flexDirection:"row-reverse" ,alignItems:'center'}}><Image source={require('../../../assets/img/app_icons/question.png')} style={{borderRadius:20/2, width:20,height:20,resizeMode: 'contain',margin:2 }}/><Text style={{color:"#707070", margin:5,textAlign:"center" ,fontFamily:'IRANSansWeb' ,fontSize:13}} >{this.props.item.category_name}</Text></View>
           
          </TouchableOpacity>
          <View
            style={{
              height: this.state.layoutHeight,
              overflow: 'hidden',
            }}>
            {/*Content under the header of the Expandable List Item*/}
            {this.props.item.subcategory.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={styles.content}
                //onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}
                >
                <Text style={styles.text}>
                   {item.val}
                </Text>
               
              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
    }
  }

class FrequentlyQues extends React.Component{

    static navigationOptions = {
        headerShown: false,
    };

    constructor(props) {
        super(props);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
          }
          this.state = { listDataSource: CONTENT };
    }

    onPressheader= ()=>{
        this.props.navigation.goBack();
      }

      updateLayout = index => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...this.state.listDataSource];
        array.map((value, placeindex) =>
          placeindex === index
            ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
            : (array[placeindex]['isExpanded'] = false)
        );
        this.setState(() => {
          return {
            listDataSource: array,
          };
        });
      };

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
                             <View style={{ alignItems :"center", flexDirection:'row-reverse', height :28 , width: 180 }}>
                               <Text style={{  padding:5,fontSize:18,color:'#ffffff',fontFamily:'Lalezar-Regular',alignItems: "center",}}>سوالات متداول</Text>
                            </View>
                            <View style={{
                                 flex:1,
                                 height: 60,
                                 alignItems:"center",
                                 justifyContent:'flex-end',
                                

                                flexDirection: "row",
                             }}>

                                    <TouchableOpacity >
                                    </TouchableOpacity>
                             </View>
                </View>

                <View style={styles.content}>
                    {/* ques */}
                <ScrollView>
                    {this.state.listDataSource.map((item, key) => (
                        <ExpandableItemComponent
                        key={item.category_name}
                        onClickFunction={this.updateLayout.bind(this, key)}
                        item={item}
                        />
                    ))}
                </ScrollView>
                   
                </View>
                
            </View>
        )
    }
}

const SCREEN_WIDTH =  Dimensions.get('window').width;

const styles = StyleSheet.create({
    Container:{
        width:SCREEN_WIDTH,
        flex:1,
        backgroundColor:'#F5FCFF'
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
    text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
      },
       
      
        qheader: {
            backgroundColor: '#F5FCFF',
            padding: 16,
          },
          headerText: {
            fontSize: 16,
            fontWeight: '500',
          }, 
          qcontent: {
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#F5FCFF',
          },
          nav_style:{
    
            width: SCREEN_WIDTH-20,
            height: 50,
            borderColor : 'black',
            borderWidth: .2, 
            padding: 16,
            justifyContent:"flex-end",
            flexDirection:"row",
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 12,
            marginHorizontal: 10
            },
    })

export default FrequentlyQues;

const CONTENT = [
    {
      isExpanded: false,
      category_name: 'عنوان فرضی اول',
      subcategory: [{ id: 1, val: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' }],
    },
    {
      isExpanded: false,
      category_name: 'عنوان فرضی دوم',
      subcategory: [{ id: 4, val: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' }],
    },
    {
      isExpanded: false,
      category_name: 'عنوان فرضی سوم',
      subcategory: [{ id: 7, val: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' }],
    },
    {
      isExpanded: false,
      category_name: 'عنوان فرضی چهارم',
      subcategory: [{ id: 10, val: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' }],
    },
    {
        isExpanded: false,
        category_name: 'عنوان فرضی پنجم',
        subcategory: [{ id: 10, val: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' }],
      },
   
  ];