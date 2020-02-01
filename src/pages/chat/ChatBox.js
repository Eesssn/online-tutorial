import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,

  TextInput,
  FlatList,
  Dimensions,

} from 'react-native';

export default class Chat extends Component {

    static navigationOptions = {
        headerShown: false,
    };
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  type:'in',  message: "سلام چت فعال هست ؟" ,name: 'فاطمه رضایی',src: require('../../../assets/img/profilepic.jpeg')},
        {id:2,  type:'out', message: "سلام چت فعال هست ؟", name: 'علی رضایی ' ,src: require('../../../assets/img/men.jpeg')},
        
      ],
      Message: "",
    };
  }

  renderImage = (src) => {
    return(
      <Image source={src}  style={{width: 45, height: 45 , borderRadius:45/2 }} />
    );
  }

  sendMessage(){
    if (this.state.Message) {
   console.log(this.state.Message)
   let data = this.state.data;
   let massage = this.state.Message;
   data.push({message:massage ,type:'out', src: require('../../../assets/img/men.jpeg') , name: 'علی رضایی'});
      this.setState({Message:''})
  
  
    }else return

  }

  onPressheader= ()=>{
    this.props.navigation.goBack();
  }
  render() {
    const {navigation} = this.props

    return (
      <View style={styles.container}>

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
                               <Text style={{  padding:5,fontSize:14,color:'#ffffff',fontFamily:'Lalezar-Regular',alignItems: "center",}}>{navigation.getParam('ChatName')}</Text>
                            </View>
                            <View style={{
                                 flex:1,
                                 height: 60,
                                 alignItems:"center",
                                 justifyContent:'flex-end',
                                

                                flexDirection: "row",
                             }}>

                                    <TouchableOpacity >
                                      <Image source={require('../../../assets/img/app_icons/idea.png')}  style={{width: 45, height: 45 , borderRadius:45/2 }} />
                                    </TouchableOpacity>
                             </View>
                </View>

        <FlatList style={styles.list}
          data={this.state.data}
          ref="mamad"
          onContentSizeChange={() =>
                this.refs.mamad.scrollToEnd({animated: true})
              }
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
           // console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
               
                
                
                <View style={[styles.balloon]}>
                  <Text style={styles.text_input}>{item.name}</Text>
                  <Text style={styles.text_input2}>{item.message}</Text>
                  
                </View>
                {inMessage && this.renderImage(item.src)}
                {!inMessage && this.renderImage(item.src)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
               
                value={this.state.Message}
                multiline={true}
                numberOfLines={4}
                placeholder="متن پیام ...."
                underlineColorAndroid='transparent'
                onChangeText={val => this.setState({Message:val})}/>
          </View>

            <TouchableOpacity style={styles.btnSend} onPress = {() => this.sendMessage()}>
              <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
 const SCREEN_WIDTH =Dimensions.get('window').width
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:20,
    height:20,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    marginRight:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
    fontFamily:'IRANSansWeb' ,
  },
  balloon: {
    maxWidth: 250,
    padding: 5,
    borderRadius: 20,

  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#FFFF",
    borderRadius:25,
    padding:5,
    alignItems:'flex-start',
    
    
  },
  text_input:{
    
    color:"#6A437C",
    fontFamily:'IRANSansWeb' ,
    fontSize:10
  },
  text_input2:{
    
    color:"#707070",
    fontFamily:'IRANSansWeb' ,
    fontSize:12
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
});  