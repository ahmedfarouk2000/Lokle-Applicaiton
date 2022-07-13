import React, { useEffect, useState } from 'react';
import { View,StyleSheet,Text, TextInput, Button,TouchableOpacity,Image,Modal,Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

import { Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Register from './Register';
import * as Font from 'expo-font';



// import { Users } from "./DataBase"

import Users from "./DataBase";







function LoginScreen({ navigation }) {
    // const fs = require('fs');

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const [popUp, setPopUp] = useState(false);

      

    //   if (!loaded) {
    //     return null;
    //   }

    const [checked, setChecked] = React.useState(false);
    function onPress(){
        setChecked(!checked);
    }


// const [data, setData] = useState([]);
// const getMovies = async () => {
//     console.log('aaaaaaa')
//   try {
//    const response = await fetch('https://www.getpostman.com/collections/4460c9c18f0d3b6c4f51');
//    const json = await response.json();
//    setData(json);
//    console.log(data.item[0].item[0].item[2])
//  } catch (error) {
//    console.error(error);
//  }
// }




// async function PostMe() {
//     // POST request using fetch with async/await
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     const response = await fetch('https://reqres.in/api/posts', requestOptions);
//     const data = await response.json();
//     this.setState({ postId: data.id });
// }


   Font.loadAsync({
        Font: require('../assets/fonts/font2.ttf'),
        Mesa: require('../assets/fonts/Mesa.otf'),
       })
 

    // const [loaded] = useFonts({
    //     Font: require('../assets/fonts/font2.ttf'),
    //     Mesa: require('../assets/fonts/Mesa.otf'),
    //   });


    function LoginProcess(){
        // console.log(name)
        // console.log(pass.length)
        if(pass.length==0 || name.length==0){
               setPopUp(true)
        }
        else {
            let AllUsers=Users.user
            console.log(Users.user.length)
            
            let UserTemp={
                'name':name,
                'password':pass,
            }
            AllUsers.push(UserTemp)

           
            // fs.writeFile('Database.json', AllUsers, (err) => {
            //     if (err) {
            //         throw err;
            //     }
            //     console.log("JSON data is saved.");
            // });
            // console.log(U)

            navigation.navigate('HomePage')
           
        }
    }

    return (
        <View style={styles.background}>


<Modal
          animationType="slide"
          transparent={true}
          visible={popUp}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setPopUp(!popUp);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <MaterialIcons name="error" size={50} color="red" />
              <Text style={styles.modalText}> Please Fill Both Entiries !!</Text>  

        
        <View style={styles.ManyFlags}>


      
        
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setPopUp(false)}
              >
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>


        </View>
            </View>
          </View>
    </Modal>

            <View style={styles.skip} >
            <Text style={styles.skipText}  onPress={() =>  navigation.navigate('HomePage')}>Skip</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />            

            </View>

            <View>
            <Text style={styles.logo}>Lokle</Text>
            <View style={styles.arrow1}></View>
            <View style={styles.arrow2}></View>
            </View>

    <View style={styles.Inputs}> 

        <View  style={{marginVertical:10}}>
        <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Mobile Number</Text>
        <TextInput onChangeText={(e) => setName(e)} keyboardType='decimal-pad' style={styles.input} placeholder={'Enter Mobile Number'}   placeholderTextColor="rgba(164, 228, 246,0.4)" ></TextInput> 
        </View>

        <View style={{marginVertical:10}}>
        <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Password</Text>
        <TextInput  onChangeText={(e) => setPass(e)} keyboardType='ascii-capable' style={styles.input} secureTextEntry={true} placeholder={'Enter Password'} placeholderTextColor="rgba(164, 228, 246,0.4)"></TextInput> 
        <FontAwesome name="low-vision" size={24} color="white" style={styles.visable}/>
        </View>


      <View style={styles.OneLine}> 

        <View style={styles.Left}>

        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={'green'}
            uncheckColor={'red'}
            tintColors={{ true: 'white' }}
         
         />
         <Text style={{color:'white',fontSize:17,fontFamily: 'Mesa',}}>Remember Me</Text>
        </View>


        <View style={styles.Right}>
        <Text style={{color: 'white',fontSize:17,textDecorationLine: 'underline',fontFamily: 'Mesa',}}
         >
            Forgot Password?
        </Text>

        </View>



      </View>

   
         <TouchableOpacity  onPress={() => LoginProcess()} style={styles.Button}>
            <Text style = {styles.ButtonText}>
               LOGIN
            </Text>
         </TouchableOpacity>


    <View style={styles.register}>
    <Text style={{color: 'white',fontSize:17,fontFamily: 'Mesa',}}> Dont have an account? </Text>
    <Text style={{color: '#A4E4F6',fontSize:17,textDecorationLine: 'underline',fontFamily: 'Mesa',}}
            onPress={() =>  navigation.navigate('Register')}>
            Sign Up Here
        </Text>


    </View>


  

    


    </View>
    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal:10}}>
        <View style={{flex: 1, height: 2, backgroundColor: 'white'}} />
        <View>
            <Text style={{ textAlign: 'center' ,color:'white',paddingHorizontal:10,fontFamily: 'Mesa',fontSize:17}}>You Can Login With</Text>
        </View>
        <View style={{flex: 1, height: 2, backgroundColor: 'white'}} />
    </View>

        <View style={styles.Icons}>
        <TouchableOpacity style={styles.Icon}>
        <FontAwesome5 name="facebook-f" size={24} color="white" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.Icon}>
         <Ionicons name="logo-google" size={24} color="white" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.Icon}>
         <Fontisto name="apple" size={24} color="white" />
         </TouchableOpacity>
           
         </View>
    

         <Image source={require('../assets/bottom.png')}  style={{width:'100%'}}/>



        </View>
    );
}

// const AppNavigator = createStackNavigator({
//     Login: LoginScreen,
//   });

// const AppNavigator = createStackNavigator(
//     {
//         Login: LoginScreen,
//         Register: Register,
//     },
//     {
//         initialRouteName: 'Login',
//     }
//     );




const styles = StyleSheet.create({
    skip:{
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'flex-end',
        width:'100%',
        marginTop:50 ,
        padding:3,
    },

    skipText:{
        color:'white' ,
        fontSize:20 ,
        fontWeight:'200' ,
        fontFamily: 'Mesa',
    } ,
    logo:{
        // backgroundColor:'black',
        fontFamily: 'Font',
        color:'#A4E4F6',
        padding: 15 ,
        fontSize:70, 
        // fontWeight:'100' ,
       
        
    } ,
    background:{
        backgroundColor:'#061721',
        height:'100%',
        width:'100%' ,
        alignItems:'center',
    },

    Inputs:{
        padding:20,
        width:'100%',
        
        // backgroundColor:'pink',
    },

    input:{
        color:'white',
        backgroundColor:'#2F3D47',
        borderStyle:'solid',
        borderColor:'#A4E4F6',
        fontSize:17,
        padding:10 ,
        paddingHorizontal:20,
        // height:50,
        borderWidth:3,
        borderRadius:30,
        fontFamily: 'Mesa',
    }  ,
    OneLine:{
    flexDirection:'row' ,
    justifyContent:'space-between',
    // padding:10,
    },
    Left:{
        flexDirection:'row',
        alignItems:'center',
        color:'white',
        fontSize:20 ,
    } ,

    Right:{
        flexDirection:'row',
        alignItems:'center',
        color:'white',
        fontSize:20 ,
        textDecorationLine: 'underline'
    } ,
    Button:{
        borderColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FD7323',
        borderRadius:30,
        height:50,
        marginTop:20,
    } ,

    ButtonText:{
        color:'white',
        fontSize:20,
        fontFamily:'Font',
    },
    register:{
      flexDirection:'row',  
      justifyContent:'center' ,
      padding:20,
    },

    Icons:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center' ,
        width:'100%',
        // backgroundColor:'white',
    },
    Icon:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2F3D47',
        borderRadius:30,
        width:'30%',
        height:50,
        marginTop:20,
    },
    visable:{
        position:'absolute',
        top:'55%',
        left:'87%',
        opacity:0.5,
    },
    arrow1:{
        backgroundColor:'#FD7323',
        width:30,
        height:10,
        borderRadius:10,
        position:'absolute',
        top:'70%',
         left:'-3%'
    },

    arrow2:{
        backgroundColor:'#FD7323',
        width:10,
        height:30,
        borderRadius:10,
        position:'absolute',
        top:'70%',
        left:'3%'
    },

    ManyFlags:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        
      },

      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:17,
        fontFamily: 'Mesa',
      },
      modalView: {
        marginTop:'150%',
        marginHorizontal:50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },

      button: {
        borderRadius: 30,
        padding: 10,
        elevation: 2,
        margin:5 ,
        width:'40%',
        textAlign:'center',
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#FD7323",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize:20,
        fontFamily:'Font',
      },
})
// export default createAppContainer(AppNavigator);
export default LoginScreen;