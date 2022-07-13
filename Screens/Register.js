import React, { useState } from 'react';
import { View,StyleSheet,Text,TextInput,TouchableOpacity,Modal,Pressable, LogBox,Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';



function Register({ navigation }) {
    const [flag, setflag] = useState(false);

  
    const [city, setCity] = useState(false);


    const [country2, setCountry2] = useState(false);

    const [Nat, setNat] = useState(false);


    const [name,setName]=useState() 
    const [phone,setPhone]=useState() 
    const [email,setEmail]=useState()
    const [pass1,setPass1]=useState()
    const [pass2,setPass2]=useState()


    const [styleName, setStyleName] = useState({});
    const [stylePhone, setStylePhone] = useState({});
    const [styleEmail, setStyleEmail] = useState({});
    const [stylePass1, setStylePass1] = useState({});
    const [stylePass2, setStylePass2] = useState({});

    const [styleCountry, setStyleCountry] = useState('+20');

    const [styleCountry2, setStyleCountry2] = useState('Egypt');

    const [styleCity, setStyleCity] = useState('Cairo'); 

    const [styleNat, setStyleNat] = useState('KSA'); 
 



    function ValideName(e){
        setName(e)
        var Regex =/^\S+$/
        if(Regex.test(e)){
            console.log('valid')
            setStyleName({borderColor: 'green'});
        }
        else{
          console.log('not valid')
          setStyleName({borderColor: 'red'});
        }
      
     
    }


    function ValidePhone(e){
        setPhone(e)
        var Regex =/^01(0|1|2|5)[0-9]{8}$/
        if(Regex.test(e)){
            console.log('valid')
            setStylePhone({borderColor: 'green'});
        }
        else{
          console.log('not valid')
          setStylePhone({borderColor: 'red'});
        }
    }


    function ValideEmail(e){
        setEmail(e)
        var Regex =/^[a-z0-9]{1,200}@(gmail.com|hotmail.com|yahoo.com)$/
        if(Regex.test(e)){
            console.log('valid')
            setStyleEmail({borderColor: 'green'});
        }
        else{
          console.log('not valid')
          setStyleEmail({borderColor: 'red'});
        }
    }


    function ValidPass1(e){
        setPass1(e)
        console.log(e)
        if (e==''){
            setStylePass1({borderColor: 'red'});
        }
        else{
            setStylePass1({borderColor: 'green'});
        }
    
    }


    function ValidPass2(e){
        setPass2(e)
        if(pass1==e){
            setStylePass2({borderColor: 'green'});
        }
        else {
            setStylePass2({borderColor: 'red'});
        }
    }

    function setflagFake(e,id){
        setflag(!flag)
        console.log(id)
        setStyleCountry(id);

    }


    function setCityFake(e,id){
        setCity(!city)
        console.log(id)
        setStyleCity(id);
    }

    function setCountryFake(e,id){
        setCountry2(!country2)
        console.log(id)
        setStyleCountry2(id);
    }

    function setnNatFake(e,id){
        setNat(!Nat)
        console.log(id)
        setStyleNat(id);
    }


    function AllDetails(){
        console.log('asdasd')
       console.log(name,phone,email,styleCity,styleNat,styleCountry2,pass1,pass2)
       navigation.navigate('LoginScreen')
    }

    
    

     // const [loaded] = useFonts({
    //     Font: require('../assets/fonts/font2.ttf'),
    //     Mesa: require('../assets/fonts/Mesa.otf'),
    //   });
    return (

    
      <View style={styles.Parent}>

    <Modal
          animationType="slide"
          transparent={true}
          visible={flag}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setflag(!flag);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Select Country Code</Text>  

        <View style={styles.ManyFlags}>



        
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setflagFake(e,'+966')} 
              >
                <Text style={styles.textStyle}>KSA</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setflagFake(e,'+20')} 
              >
                <Text style={styles.textStyle}>EGY</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setflagFake(e,'+1')} 
              >
                <Text style={styles.textStyle}>USA</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setflagFake(e,'+971')} 
              >
                <Text style={styles.textStyle}>UAE</Text>
              </Pressable>


        </View>
            </View>
          </View>
    </Modal>



    <Modal
          animationType="slide"
          transparent={true}
          visible={city}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setCity(!city);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Select City</Text>  

        <View style={styles.ManyFlags}>



        
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setCityFake(e,'Cairo')} 
              >
                <Text style={styles.textStyle}>Cairo</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setCityFake(e,'Alexendria')} 
              >
                <Text style={styles.textStyle}>Alexendria</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setCityFake(e,'Asiut')} 
              >
                <Text style={styles.textStyle}>Asiut</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setCityFake(e,'Mansoura')} 
              >
                <Text style={styles.textStyle}>Mansoura</Text>
              </Pressable>


        </View>
            </View>
          </View>
    </Modal>


    <Modal
          animationType="slide"
          transparent={true}
          visible={country2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setCountry2(!country2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Select Country</Text>  

        <View style={styles.ManyFlags}>



        
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setCountryFake(e,'KSA')} 
              >
                <Text style={styles.textStyle}>KSA</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setCountryFake(e,'EGYPT')} 
              >
                <Text style={styles.textStyle}>EGYPT</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setCountryFake(e,'USA')} 
              >
                <Text style={styles.textStyle}>USA</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setCountryFake(e,'UAE')} 
              >
                <Text style={styles.textStyle}>UAE</Text>
              </Pressable>


        </View>
            </View>
          </View>
    </Modal>

    <Modal
          animationType="slide"
          transparent={true}
          visible={Nat}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setCountry2(!Nat);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Select Nationality</Text>  

        <View style={styles.ManyFlags}>



        
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setnNatFake(e,'KSA')} 
              >
                <Text style={styles.textStyle}>KSA</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setnNatFake(e,'EGYPT')} 
              >
                <Text style={styles.textStyle}>EGYPT</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setnNatFake(e,'USA')} 
              >
                <Text style={styles.textStyle}>USA</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={(e) => setnNatFake(e,'UAE')} 
              >
                <Text style={styles.textStyle}>UAE</Text>
              </Pressable>


        </View>
            </View>
          </View>
    </Modal>



<View style={styles.skip}>
     <MaterialIcons name="keyboard-arrow-left" onPress={() =>  navigation.navigate('LoginScreen')} size={30} color="white" />            
</View>

<View style={{borderRadius:90,padding:30,backgroundColor:'#2F3D47'}}>
    <FontAwesome5 name="user-alt" size={30} color="#A4E4F6" />
</View>

<View style={styles.Inputs}>    
<View  style={{marginVertical:10}}>
<Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Name</Text>
<TextInput onChangeText={(e) => ValideName(e)} keyboardType='ascii-capable' style={[styles.input,styleName]} placeholder={'Name...'}   placeholderTextColor="rgba(164, 228, 246,0.4)" ></TextInput> 
</View>

<View style={{marginVertical:10}}>
<Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Phone Number</Text>
<TextInput  onChangeText={(e) => ValidePhone(e)} keyboardType='decimal-pad' style={[styles.inputPadding,stylePhone]} maxLength={11} placeholder={'Phone Number'} placeholderTextColor="rgba(164, 228, 246,0.4)"></TextInput> 
<TextInput  onFocus={() => setflag(true)} style={[styles.country]} showSoftInputOnFocus={false}  placeholder={styleCountry} placeholderTextColor="rgba(164, 228, 246,0.4)"></TextInput> 
{/* <TouchableOpacity OnPress={() => console.log('work man')} style={[styles.Button,styles.country]}>
</TouchableOpacity> */}
<FontAwesome5 name="flag-usa" size={20} color="white"  style={styles.flag}/>
</View>



<View style={styles.Inputs2}>    
<View  style={{marginVertical:10}}>
    <Text  style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Email Address</Text>
    <TextInput  onChangeText={(e) => ValideEmail(e)} keyboardType='ascii-capable' style={[styles.inputHalf,styleEmail]} placeholder={'Email...'}   placeholderTextColor="rgba(164, 228, 246,0.4)" ></TextInput> 
</View>

<View style={{marginVertical:10}}>
    <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>City</Text>
    <TextInput onFocus={() => setCity(true)} showSoftInputOnFocus={false} keyboardType='ascii-capable' style={styles.inputHalf} secureTextEntry={true} placeholder={styleCity} placeholderTextColor="rgba(164, 228, 246,0.4)"></TextInput> 
    
     <MaterialIcons name="keyboard-arrow-right" size={30} color="white" style={styles.OpenBar}/>            

</View>



</View>

<View style={styles.Inputs2}>    
<View  style={{marginVertical:10}}>
    <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Nationality</Text>
    <TextInput onFocus={() => setNat(true)}  showSoftInputOnFocus={false} keyboardType='decimal-pad' style={styles.inputHalf} placeholder={styleNat}   placeholderTextColor="rgba(164, 228, 246,0.4)" ></TextInput> 
    <MaterialIcons name="keyboard-arrow-right" size={30} color="white" style={styles.OpenBar}/>            
</View>

<View style={{marginVertical:10}}>
    <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Country</Text>
    <TextInput onFocus={() => setCountry2(true)}  showSoftInputOnFocus={false} keyboardType='ascii-capable' style={styles.inputHalf} secureTextEntry={true} placeholder={styleCountry2} placeholderTextColor="rgba(164, 228, 246,0.4)"></TextInput> 
    <MaterialIcons name="keyboard-arrow-right" size={30} color="white" style={styles.OpenBar}/>            
</View>



</View>


<View style={styles.Inputs2}>    
<View  style={{marginVertical:10}}>
    <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Password</Text>
    <TextInput  onChangeText={(e) => ValidPass1(e)} keyboardType='ascii-capable' style={[styles.inputHalf,stylePass1]} placeholder={'Password...'} secureTextEntry={true}  placeholderTextColor="rgba(164, 228, 246,0.4)" ></TextInput> 
</View>

<View style={{marginVertical:10}}>
    <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Confirm Password</Text>
    <TextInput  onChangeText={(e) => ValidPass2(e)} keyboardType='ascii-capable' style={[styles.inputHalf,stylePass2]} secureTextEntry={true} placeholder={'Password...'} placeholderTextColor="rgba(164, 228, 246,0.4)"></TextInput> 
</View>



</View>



{/* <View style={styles.Inputs2}>    
<View  style={{marginVertical:10}}>
    <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Gender</Text>
    <TextInput keyboardType='decimal-pad' style={styles.inputHalf} placeholder={'Gender...'}   placeholderTextColor="rgba(164, 228, 246,0.4)" ></TextInput> 
</View>

<View style={{marginVertical:10}}>
    <Text style={{color:'white',padding:5,fontFamily: 'Mesa',fontSize:17}}>Birthdate</Text>
    <TextInput keyboardType='ascii-capable' style={styles.inputHalf} secureTextEntry={true} placeholder={'Birthdate...'} placeholderTextColor="rgba(164, 228, 246,0.4)"></TextInput> 
</View>



</View> */}


</View>


<TouchableOpacity onPress={() => AllDetails()} style={styles.Button}>
<Text style = {styles.ButtonText}>
   SIGN UP
</Text>
</TouchableOpacity>







</View>





    );
}

const styles = StyleSheet.create({
    Parent:{
        backgroundColor:'#061721',
        height:'100%',
        width:'100%' ,
        alignItems:'center',
    },

    skip:{
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'flex-start',
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

      Inputs:{
        padding:10,
        margin:5,
        width:'100%',
        // flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center',
        // flexWrap:'wrap'
    },



    input:{
        // marginHorizontal:10,
        //  textAlign: "Left",  
        paddingStart:20,
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


    inputPadding:{
        // marginHorizontal:10,
        //  textAlign: "Left",  
        paddingStart:120,
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

    country:{
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
        width:'30%',
        position:'absolute',
        top:'38%',
        paddingLeft:50,
        // textAlign:'right'
    },


    
    Inputs2:{
        // padding:10,
        // margin:20,
        // backgroundColor:'white',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        // justifyContent:'center',
        // alignItems:'center',
        // flexWrap:'wrap'
    },



    inputHalf:{
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
        width:180,
    }  ,

    Button:{
        borderColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FD7323',
        borderRadius:30,
        height:50,
        // marginHorizontal:5,
        width:'95%',
    } ,

    ButtonText:{
        color:'white',
        fontSize:20,
        fontFamily:'Font',
    },

    OpenBar:{
        position:'absolute',
        left:'75%',
        top:'50%',
    },
    flag:{
        position:"absolute",
        left:'5%',
        top:'55%',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 500
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
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
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:17,
      },
      ManyFlags:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        
      }
    
})
export default Register;