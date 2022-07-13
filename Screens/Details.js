import React from 'react';
import { View,StyleSheet,Text,TextInput,ImageBackground,ScrollView,Button,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Dimensions } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


// import { MaterialIcons } from '@expo/vector-icons'; 





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const image1 = { uri: "https://www.egypttoday.com/siteimages/Larg/202103260248594859.jpg" };
const image2 = { uri: "https://images.adsttc.com/media/images/6077/f070/f91c/81f9/7400/04e2/newsletter/Pyramid-Wall.jpg?1618473065" };
const image3 = { uri: "https://grandegyptianmuseum.org/wp-content/uploads/2019/09/29BA12C3-3256-4F82-A8B6-C2E97C161533.jpg" };
const image4 = { uri: "https://preview.redd.it/j9mlslrp3u361.jpg?auto=webp&s=1ba39845e8ca8caed0a957ae4d68ea0ffac6f4ab" };
const image5 = { uri: "https://www.wantedinafrica.com/i/preview/storage/uploads/2020/04/Grand_Egyptian_Museum_opening_shifted_to_2021.jpg" };



function Details({navigation}) {
    
    return (

        <View style={styles.background}>

                <ImageBackground source={image1} style={styles.image}>
                    <View style={styles.BlackLayer}>
                        <View   keyboardType='ascii-capable' style={[styles.inputPadding99]} maxLength={11} ></View> 

                        <View style={styles.skip}>
                        <MaterialIcons name="keyboard-arrow-left" onPress={() =>  navigation.navigate('HomePage')} size={30} color="white" />            
                    </View>

            <View style={styles.Under}>

                <View keyboardType='decimal-pad' style={styles.input} >
                        <Foundation name="heart" size={25} color="rgba(255, 35, 71, 0.8)" style={{position:'absolute',left:'33%',top:'10%'}} />
                </View> 
                <View keyboardType='decimal-pad' style={styles.input} >
                        <Entypo name="share" size={25} color="#A4E4F6" style={{position:'absolute',left:'25%',top:'10%'}} />
                </View> 

            </View>
                    
        
            <View  style={[styles.KlamKteer]} >
                    <Text style={{color:'white',fontSize:25,fontFamily: 'Mesa',fontWeight:'600'}}> The Grand Museum </Text>
        
                
                        <View style={{flexDirection:'column',alignItems:'flex-end'}}> 
                        <Text style={{color:'#FD7323',fontFamily: 'Mesa',fontSize:20,}}> Starts From </Text>

                        <Text style={{color:'white',fontFamily: 'Mesa',fontSize:20,fontWeight:'900'}}> 100 L.E </Text>
                        {/* <Text style={{color:'white',fontFamily: 'Mesa',fontSize:20,}}> Per Person </Text> */}
        
        
                        </View>
                
                
            </View> 
                        </View>
                </ImageBackground>

             <View style={styles.shadow}></View>   

                <ScrollView vertical={true}>

   <View style={styles.BlueLayer} >

            <View  style={[styles.KlamKteer99]}>
                    <Text style={{color:'white',fontSize:20,fontFamily: 'Mesa',fontWeight:'600',padding:10}}> 
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos esse, soluta dignissimos, est quod obcaecati ab dolorum delectus culpa repellat sit praesentium
</Text>
        
                
                       
            <Text style={{color:'#FD7323',fontFamily: 'Mesa',fontSize:20,padding:10}}>Gallery</Text>

         <View style={{flexDirection:'row'}}>

         <ScrollView horizontal={true}>
            <ImageBackground source={image5} style={styles.image99}></ImageBackground>
            <ImageBackground source={image2} style={styles.image99}></ImageBackground>
            <ImageBackground source={image3} style={styles.image99}></ImageBackground>
            <ImageBackground source={image4} style={styles.image99}></ImageBackground>
        </ScrollView>
         </View>            
        
                         
            </View> 

            <Text style={{color:'#FD7323',fontFamily: 'Mesa',fontSize:20,paddingHorizontal:10}}>Number of spots</Text>
            <Text style={{color:'white',fontFamily: 'Mesa',fontSize:20,paddingHorizontal:10}}>13/30</Text>
            <Text style={{color:'gray',fontFamily: 'Mesa',fontSize:20,paddingHorizontal:10,paddingBottom:10}}>Minmum spots:7</Text>

   <View style={{flexDirection:'row',justifyContent:'space-between',width:windowWidth}}>
           <Text style={{color:'#FD7323',fontFamily: 'Mesa',fontSize:20,padding:10}}>The Route</Text>
            <Text style={{color:'#FD7323',fontFamily: 'Mesa',fontSize:20,textDecorationLine: 'underline',padding:10}} >Start Direction</Text>
   </View>



     </View>
 

<View style={{padding:20}}>

        <View style={styles.route}>

           <View style={styles.input99} >
               <FontAwesome name="car" size={24} color="rgba(192,192,192,0.8)" style={{position:'absolute',left:'17%',top:'20%'}} />
            </View> 
            <Text style={styles.RouteTitle}>Arkan Plaza</Text>

        </View>

        <View style={styles.bar}></View>

        <View style={styles.route}>

           <View style={styles.inputSmall} >
               {/* <FontAwesome name="car" size={24} color="white" style={{position:'absolute',left:'17%',top:'20%'}} /> */}
            </View> 
            <Text style={styles.RouteTitle}>Lunch Break</Text>

        </View>

        <View style={styles.bar}></View>

         <View style={styles.route}>

           <View style={styles.input99} >
               {/* <FontAwesome name="car" size={24} color="white" style={{position:'absolute',left:'17%',top:'20%'}} /> */}
               {/* <Fontisto name="ship" size={24} color="rgba(192,192,192,0.8)" style={{position:'absolute',left:'25%',top:'20%'}} /> */}
               <MaterialIcons name="museum" size={24} color="rgba(192,192,192,0.8)" style={{position:'absolute',left:'23%',top:'20%'}} />
            </View> 
            <Text style={styles.RouteTitle}>The Grand Museum</Text>

        </View>

        <View style={styles.bar}></View>

        <View style={styles.route}>

           <View style={styles.inputSmall} >
               {/* <FontAwesome name="car" size={24} color="white" style={{position:'absolute',left:'17%',top:'20%'}} /> */}
            </View> 
            <Text style={styles.RouteTitle}>Dinner Break</Text>

        </View>

        <View style={styles.bar}></View>
        
        <View style={styles.route}>

           <View style={styles.input99} >
               {/* <FontAwesome name="car" size={24} color="white" style={{position:'absolute',left:'17%',top:'20%'}} /> */}
               {/* <Fontisto name="ship" size={24} color="rgba(192,192,192,0.8)" style={{position:'absolute',left:'25%',top:'20%'}} /> */}
               {/* <MaterialIcons name="museum" size={24} color="rgba(192,192,192,0.8)" style={{position:'absolute',left:'23%',top:'20%'}} /> */}
               <FontAwesome5 name="home" size={24} color="rgba(192,192,192,0.8)" style={{position:'absolute',left:'20%',top:'20%'}} />
            </View> 
            
            <Text style={styles.RouteTitle}>Home Sweat Home</Text>

        </View>
</View>


     
     


    </ScrollView>

    <TouchableOpacity  style={styles.Button}>
            <Text style = {styles.ButtonText}>
               BOOK NOW
            </Text>
    </TouchableOpacity>





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

    image: {
        // flex: 1,
        // resizeMode: '',
        // wdith:1,
        justifyContent: 'center',
        paddingStart:40,
        color:'white',
        // backgroundColor:'#2F3D47',
        borderStyle:'solid',
        borderColor:'#A4E4F6',
        fontSize:17,
        padding:10 ,
        // paddingHorizontal:20,
        // height:50,
        // borderWidth:3,
        // borderRadius:30,
        fontFamily: 'Mesa',
        width:'110%',
        height:300,
        overflow:'hidden',
        
        // flex:0.5,
      },


      image99: {
        // flex: 1,
        // resizeMode: '',
        // wdith:1,
        justifyContent: 'center',
        paddingStart:40,
        color:'white',
        // backgroundColor:'#2F3D47',
        borderStyle:'solid',
        borderColor:'#A4E4F6',
        fontSize:17,
        padding:10 ,
        // paddingHorizontal:20,
        // height:50,
        // borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
        width:150,
        height:150,
        overflow:'hidden',
        margin:10,
        
        // flex:0.5,
      },

      KlamKteer:{
        // color:'white',
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-evenly',
        position:'absolute',
        top:'70%',
        left:'2%',
        width:'90%',
        // backgroundColor:'red',
    },

    KlamKteer99:{
        // color:'white',
        // backgroundColor:'red',
        flexDirection:'column',
        justifyContent:'flex-start',
        width:windowWidth,

        // position:'absolute',
        // top:'70%',
        // left:'2%',
        // width:'90%',
        // backgroundColor:'red',
    },

    BlackLayer:{
        // width:'100%',
        // height:100,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        position:'absolute',
        top:0,
        bottom:0,
        start:-10,
        end:-10,
    },

    BlueLayer:{
        // width:'100%',
        // height:100,
        // position:'relative',
        // top:-20,
        backgroundColor:'rgba(6, 23, 33, 0.4)',

        // shadowColor: "rgba(6, 23, 33, 0.3)",
        // shadowOffset: {
        //     width: 0,
        //     height: 12,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.00,
        
        // elevation: 24,
        // position:'absolute',
        // top:0,
        // bottom:0,
        // start:-10,
        // end:-10,
    //     shadowColor: 'red',
    // shadowOffset: {width: 0, height: 50},
    // shadowOpacity: 1,
    // shadowRadius: 100,
    },

    skip:{
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'flex-start',
        width:'100%',
        marginTop:50 ,
        marginStart:20 ,
        // padding:10,
    },

    input:{
        color:'white',
        backgroundColor:'#2F3D47',
        borderStyle:'solid',
        borderColor:'#A4E4F6',
        fontSize:17,
        // padding:10 ,
        // paddingHorizontal:20,
        height:40,
        width:60,
        borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
        // position:'absolute',
        // left:'70%',
        // top:'20%',
        margin:10,
    }  ,

    input99:{
        color:'white',
        backgroundColor:'#2F3D47',
        borderStyle:'solid',
        borderColor:'#FD7323',
        fontSize:17,
        // padding:10 ,
        // paddingHorizontal:20,
        height:50,
        width:50,
        borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
        // flexDirection:'row',
        // position:'absolute',
        // left:'70%',
        // top:'20%',
        marginHorizontal:10,
    }  ,

    inputSmall:{
        color:'white',
        backgroundColor:'#2F3D47',
        borderStyle:'solid',
        borderColor:'#FD7323',
        fontSize:17,
        // padding:10 ,
        // paddingHorizontal:20,
        height:20,
        width:20,
        borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
        marginHorizontal:10,
        marginStart:23,

    }  ,
    route:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    
    RouteTitle:{
       fontSize:20,
       color:'white',
       fontFamily: 'Mesa',
    },
    Under:{
        flexDirection:'column',
        position:'absolute',
        left:'70%',
        top:'20%',
        // backgroundColor:'red',
    },
    bar:{
        width:5,
        height:30,
        backgroundColor:'rgba(192,192,192,0.3)',
        borderRadius:30,
        marginStart:30,
        marginVertical:5,
    },
    Button:{
        // borderColor:'#FD7323',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FD7323',
        borderRadius:30,
        height:50,
        width:windowWidth,
        marginTop:20,
        marginVertical:20,
    } ,

    ButtonText:{
        color:'white',
        fontSize:20,
        fontFamily:'Font',
    },
    shadow:{
        position:'absolute',
        backgroundColor:'rgba(6,23,33,0.5)',
        width:windowWidth,
        height:40,
        top:270,

//         shadowColor: "#007ac2",
// shadowOffset: {
//   width: 0,
//   height: 18,
// },
// shadowOpacity:  0.25,
// shadowRadius: 20.00,
// elevation: 24
    }
})

export default Details;