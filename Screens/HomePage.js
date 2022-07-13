// import React from 'react';

import { Octicons } from '@expo/vector-icons'; 
import { View,StyleSheet,Text,TextInput,ImageBackground,ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';



import { AsyncStorage } from 'react-native';

import * as Font from 'expo-font';

// import {DevSettings} from 'react-native';
// import RNRestart from 'react-native-restart';
// import { NativeModules } from "react-native";




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const image1 = { uri: "https://www.egypttoday.com/siteimages/Larg/202103260248594859.jpg" };
const image2 = { uri: "https://images.squarespace-cdn.com/content/v1/5cb46fa2b914497d1bb8b39c/1558889127086-7OJY4JTWL45WZB03WWAH/image-asset.jpeg?format=2500w" };
const image3 = { uri: "https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/e481285c-dc5a-613d-b60f-cca39fa24427/630x355.jpg" };
const image4 = { uri: "https://images.prismic.io/mystique/24d6af7e-53ba-47c4-baef-da7de5b49130_86c7e78d-48e2-4414-9c99-60c5ca83c906-13944-cairo-skip-the-line-tickets---pyramids-of-giza-01.webp?auto=compress,format" };





var items=[
{
    name:'The Grand Egyptain Museum',
    price:'100 L.E',
    img: image1,
},

{
    name:'Fayoum',
    price:'500 L.E',
    img: image2,
},

{
    name:'Aswan',
    price:'350 L.E',
    img: image3,
},


{
    name:'Pyramids',
    price:'800 L.E',
    img: image4,
},
]
// 


function HomePage({ navigation }) {
    const [search, setSearch] = useState();

    const [temp, setTemps] = useState([
        {
            name:'The Grand Egyptain Museum',
            price:'100 L.E',
            img: image1,
        },
        
        {
            name:'Fayoum',
            price:'500 L.E',
            img: image2,
        },
        
        {
            name:'Aswan',
            price:'350 L.E',
            img: image3,
        },
        
        
        {
            name:'Pyramids',
            price:'800 L.E',
            img: image4,
        },
    ]
    );

    

   
    useEffect(() => {
        ReadData();
        console.log('llllllllllllllllll')
      }, []);
      

    
  
    //  const [loaded] = useFonts({
    //     Font: require('../assets/fonts/font2.ttf'),
    //     Mesa: require('../assets/fonts/Mesa.otf'),
    //   });

    //   Font.loadAsync({
    //     Font: require('../assets/fonts/font2.ttf'),
    //     Mesa: require('../assets/fonts/Mesa.otf'),
    //    }),

// const fetchFonts = async () =>
//       await Font.loadAsync({
//         Font: require('../assets/fonts/font2.ttf'),
//         Mesa: require('../assets/fonts/Mesa.otf'),
//   });

// Font.loadAsync({
//     Font: require('../assets/fonts/font2.ttf'),
//     Mesa: require('../assets/fonts/Mesa.otf'),
//    }),

    async function SaveData(result){
        try {
            await AsyncStorage.setItem('Experience',JSON.stringify(result) )
            // alert('Data successfully saved')
          } catch (e) {
            // alert('Failed to save the data to the storage')
          }
    }


    async function ReadData() {
        try {
          var value = await AsyncStorage.getItem('Experience');
          if (JSON.parse(value).length==0 ){
             console.log('empty')
            //  alert('No Matching Results')
          }
          else{
            console.log('maaaa hzaaaa')
            console.log(JSON.parse(value).length)
            console.log(JSON.parse(value))
            setTemps(JSON.parse(value))
          }
        

        //   return JSON.parse(value)
      
        //   if (value !== null) {
        //     setInput(value);
        //   }
        } catch (e) {
          alert('Failed to fetch the input from storage');
        }
      };



    function Search(){

        const FindExp = temp.filter(element => {
            // console.log(element.name)
            if (element.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
              return true;
            }
          });
        // console.log(search)
        // console.log(FindExp)
        // console.log('aaaaaaaaaaaaaaaaa')
        
        // items.pop();
        // console.log(search)
        // temp.pop();
        // setTemps(FindExp)
        // console.log(temp)
        // console.log(temp)
        console.log('pppppppppppppppppppp')
        // console.log(e)
        SaveData(FindExp)
        navigation.push('HomePage')
        // render();
        // RNRestart.Restart();
        // DevSettings.reload()
    }

    function ShowAll(){
        SaveData([])
        navigation.push('HomePage')
    }


    return (
<View style={styles.background}> 

        <View style={styles.bars}>
           
            <Octicons name="three-bars" size={24} color="white" />
            <Entypo name="log-out" size={24} color="white" style={{left:windowWidth-80}} onPress={() => navigation.navigate('LoginScreen')}/>
          


            <Text style={styles.logo}>Lokle</Text>
            <View style={styles.arrow1}></View>
            <View style={styles.arrow2}></View>
        </View>

<View style={styles.Inputs}>
        <View style={{marginVertical:10}}>
<Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}></Text>
<TextInput  onChangeText={(e) => setSearch(e)} keyboardType='ascii-capable' style={[styles.inputPadding]} maxLength={11} placeholder={'Search for an experience'} placeholderTextColor="rgba(164, 228, 246,0.4)"></TextInput> 
<AntDesign onPress={() => Search()} name="search1" size={20} color="#A4E4F6"  style={{position:'absolute',top:'57%',left:'4%'}}/>
<TextInput  style={[styles.country]} showSoftInputOnFocus={false}  placeholder={'Filter'} placeholderTextColor="#061721"></TextInput> 
<AntDesign name="filter" size={20} color="#061721" style={{position:'absolute',top:'57%',left:'73%'}}/>

</View>
</View>

<View style={styles.SecondDiv}>

    <View style={styles.Left}>
    <Text style={[styles.logo2,{color:'white'}]}>Our</Text>
    <Text style={styles.logo3}>Experience</Text>

    <View style={styles.Dots}>
       <View style={styles.Dot}></View>
       <View style={styles.Dot}></View>
       <View style={styles.DotLine}></View>
    </View>


    </View>

    <View style={styles.Right}>

    <Text style={{color: '#A4E4F6',fontSize:17,textDecorationLine: 'underline',fontFamily: 'Mesa',}}
            onPress={() => ShowAll()}>
            Show All
        </Text>


  


        
    </View>


</View>

<View style={styles.allExp}>


<ScrollView horizontal={true}>


           {temp.map(item => {
                            return <Text style={styles.Exp} onPress={() =>navigation.navigate('Details')}>
         
                            <ImageBackground source={item.img} style={styles.image}  >
                              <View style={styles.BlackLayer}>
                                 <View   keyboardType='ascii-capable' style={[styles.inputPadding99]} maxLength={11} ></View> 
                                 <View style={styles.stars}>
                                 <FontAwesome name="star" size={20} color="orange"  style={styles.star}/>
                                 <FontAwesome name="star" size={20} color="orange"  style={styles.star}/>
                                 <FontAwesome name="star" size={20} color="orange"  style={styles.star}/>
                                 <FontAwesome name="star" size={20} color="orange"  style={styles.star}/>
                                   <FontAwesome name="star" size={20} color="white"  style={styles.star}/>
                  
                                 
                                 </View>
                  
                  
                                 <View  style={[styles.KlamKteer]} >
                                     <Text style={{color:'white',fontSize:25,fontFamily: 'Mesa',fontWeight:'600',marginBottom:20}}> {item.name} </Text>
                  
                                     <Text style={{color:'orange',fontFamily: 'Mesa',fontSize:20,}}> Starts From </Text>
                                  <View style={{flexDirection:'row',alignItems:'flex-end'}}> 
                                  <Text style={{color:'white',fontFamily: 'Mesa',fontSize:40,fontWeight:'900'}}> {item.price} </Text>
                                  <Text style={{color:'white',fontFamily: 'Mesa',fontSize:20,}}> Per Person </Text>
                  
                  
                  
                                  </View>
                          
                          
                                  </View> 
                                  </View>
                                  </ImageBackground>
                             </Text>;
                        })}
         



        


       


         

          </ScrollView>

</View>


<View style={styles.Inputs}>
        <View style={{marginVertical:10}}>
<Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}></Text>


<View   keyboardType='ascii-capable' style={[styles.inputPadding101]} maxLength={11} placeholder={'Search for an experience'} placeholderTextColor="rgba(164, 228, 246,0.4)"></View> 
<View style={{position:'absolute',flexDirection:'row',top:'40%',bottom:0,start:0,end:0,justifyContent:'space-evenly',alignItems:'center'}}>
    <View>
      <Entypo name="home" size={30} color="white" />
      <View style={[styles.DotSelected,{position:'absolute',start:'30%',top:'55%'}]}></View>

    </View>
<Entypo name="ticket" size={30} color="#89B2BF" />
<AntDesign name="heart" size={30} color="#89B2BF" />
<Ionicons name="person" size={30} color="#89B2BF" />



</View>
</View>
</View>



</View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#061721',
        height:'100%',
        width:'100%' ,
        alignItems:'flex-start',
    },

   

  

    bars:{
        marginTop:50 ,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'40%',
    },

    logo:{
        // backgroundColor:'black',
        fontFamily: 'Font',
        color:'#A4E4F6',
        // padding: 15 ,
        fontSize:30, 
        // fontWeight:'100' ,
       
        
    } ,

    logo2:{
        // backgroundColor:'black',
        fontFamily: 'Font',
        color:'#A4E4F6',
        // padding: 15 ,
        fontSize:25, 
        // fontWeight:'100' ,
       
        
    } ,

    logo3:{
        // backgroundColor:'black',
        fontFamily: 'Font',
        color:'#A4E4F6',
        // padding: 15 ,
        fontSize:30, 
        // fontWeight:'100' ,
       
        
    } ,


    arrow1:{
        backgroundColor:'#FD7323',
        width:15,
        height:7,
        borderRadius:10,
        position:'absolute',
        top:'90%',
        left:'40%',
    },

    arrow2:{
        backgroundColor:'#FD7323',
        width:7,
        height:17,
        borderRadius:10,
        position:'absolute',
        top:'90%',
        left:'48%',
    },

    Dot:{
        backgroundColor:'white',
        width:10,
        height:10,
        borderRadius:10,
        marginHorizontal:2,
        // position:'absolute',
        // top:'120%',
        // left:'10%',
    },

    DotSelected:{
        backgroundColor:'orange',
        width:7,
        height:7,
        borderRadius:10,
        marginHorizontal:2,
        // position:'absolute',
        // top:'120%',
        // left:'10%',
    },

    DotLine:{
        backgroundColor:'white',
        width:35,
        height:10,
        borderRadius:10,
        marginHorizontal:2,
        // position:'absolute',
        // top:'120%',
        // left:'10%',
    },

    Dots:{
        flexDirection:'row',
        // backgroundColor:'black',
        // width:500
    },

    country:{
        color:'#061721',
        backgroundColor:'#A4E4F6',
        borderStyle:'solid',
        borderColor:'#A4E4F6',
        fontSize:17,
        padding:10 ,
        // paddingHorizontal:20,
        // height:50,
        borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
        width:'30%',
        position:'absolute',
        top:'38%',
        left:'70%',
        // paddingLeft:50,
        textAlign:'center'
    },

    inputPadding:{
        // marginHorizontal:10,
        //  textAlign: "Left",  
        paddingStart:40,
        color:'white',
        backgroundColor:'#2F3D47',
        borderStyle:'solid',
        borderColor:'#A4E4F6',
        fontSize:17,
        padding:10 ,
        // paddingHorizontal:20,
        // height:50,
        borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
        width:'100%',
        // flex:0.5,
    }  ,

    inputPadding101:{
        // marginHorizontal:10,
        //  textAlign: "Left",  
        paddingStart:40,
        color:'white',
        backgroundColor:'#2F3D47',
        // borderStyle:'solid',
        // borderColor:'#A4E4F6',
        fontSize:17,
        padding:30 ,
        // paddingHorizontal:20,
        // height:50,
        // borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
        width:'100%',
        // flex:0.5,
    }  ,

    inputPadding99:{
        // marginHorizontal:10,
        //  textAlign: "Left", 
        // marginTop:20, 
        // marginStart:20, 
        // // paddingStart:20,
        // color:'white',
        // backgroundColor:'#2F3D47',
        // borderStyle:'solid',
        // borderColor:'#A4E4F6',
        // fontSize:17,
        padding:140 ,
        // paddingHorizontal:20,
        // height:50,
        // borderWidth:3,
        // borderRadius:30,
        // fontFamily: 'Mesa',
        // width:'70%',
        // flex:0.5,
    }  ,

    image: {
        // flex: 1,
        // resizeMode: '',
        justifyContent: 'center',
        paddingStart:40,
        color:'white',
        backgroundColor:'#2F3D47',
        borderStyle:'solid',
        borderColor:'#A4E4F6',
        fontSize:17,
        padding:10 ,
        // paddingHorizontal:20,
        // height:50,
        borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
        width:300,
        height:300,
        overflow:'hidden',
        
        // flex:0.5,
      },

      BlackLayer:{
        // width:'100%',
        // height:100,
        backgroundColor:'rgba(0, 0, 0, 0.6)',
        position:'absolute',
        top:0,
        bottom:0,
        start:-10,
        end:-10,
    },

    Exp:{
        marginHorizontal:10,
    },

    allExp:{
        flexDirection:'row'
    },

    Inputs:{
        padding:10,
        margin:5,
        width:'100%',
        // flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center',
        // flexWrap:'wrap'
    },

    SecondDiv:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%'
    },

    Left:{
        flexDirection:'column',
        padding:10,
    },

    
    Right:{
        flexDirection:'column',
        padding:10,
    },
    stars:{
    padding:5,
    flexDirection:'row',
    position:'absolute',
    left:'55%',
    top:'10%'


    },
    star:{
        marginHorizontal:2,
    },
    KlamKteer:{
        // color:'white',
        // backgroundColor:'red',
        position:'absolute',
        top:'30%',
        left:'10%',
        width:'70%',
    },

    // Exp:{
      
    // }
  
})


export default HomePage;









