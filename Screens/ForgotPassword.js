import React from 'react'
import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import bgimg from "../assets/weather-bg-01.png"
import emailpng from "../assets/d-01.png"
import backarrow from "../assets/arr-01.png"
import { AntDesign , Entypo} from '@expo/vector-icons';
export default function ForgotPassword({navigation}) {
    return (
       <>
          <View
      style={{ flex: 1 }}>
      <ImageBackground source={bgimg} style={styles.image} imageStyle={{opacity:0.3}}>
   <TouchableOpacity onPress={()=>navigation.goBack() } style={{alignSelf:"flex-start"}}>
   <Image source={backarrow}  style={{marginLeft:'7%' ,width:30.5,height:10, marginTop:'10%' , alignSelf:"flex-start" }} />
      </TouchableOpacity>

      <Text style={{fontSize:19 , fontWeight:"bold" , marginTop:'10%'}}>Forgot ypor password!</Text>
      <Text style={{fontSize:13}}> Confirm your email so we can send the </Text>
            <Text style={{fontSize:13}}> instructions to reset your password. </Text>

            <View style={{marginTop:'10%'}}></View>
            <View style={styles.sectionStyle}>
            <Image
              source={emailpng}
              style={styles.imageStyle}
            />
            <TextInput
              style={{flex: 1 , width:315 , height:42 , color:"#000"}}
              placeholder="Email"
              underlineColorAndroid="transparent"
            />
          </View>
            
          <View style={{marginTop:'10%' }}>
              <TouchableOpacity style={{backgroundColor:"#18224f" ,  shadowColor: '#000', shadowOffset: {width: -5, height: 4}, shadowOpacity: 0.9, shadowRadius: 9, elevation: 20 , width:200 , height:39 , justifyContent:"center" , borderRadius:25}} >
    
                <Text style={{color:"#fff" , alignSelf:"center" ,fontWeight:"bold", fontSize:17}}>Reset Password</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row", alignContent:"flex-start" , marginLeft:'27%', marginTop:'10%', width:'100%' , flex:1 , flexGrow:1}}>
            <TouchableOpacity style={{backgroundColor:"#45619d",marginRight:'5%', flexDirection:"row" , width:82 , height:30 , justifyContent:"center" , borderRadius:5}} >
               <Entypo name="facebook" color="#fff" style={{alignSelf:"center" , marginRight:"2%"}} />
                <Text style={{color:"#fff" , alignSelf:"center" , fontSize:12}}>Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:"#1cb7eb" ,marginRight:'5%', width:82 , flexDirection:"row" , height:30 , justifyContent:"center" , borderRadius:5}} >
              <Entypo name="twitter" color="#fff" style={{alignSelf:"center" , marginRight:"2%"}} />
                <Text style={{color:"#fff" , alignSelf:"center" , fontSize:12}}>Twitter</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:"#ea4335", flexDirection:"row" ,marginRight:'5%', width:82, height:30 , justifyContent:"center" , borderRadius:5}} >
              <Entypo name="mail" color="#fff" style={{alignSelf:"center" , marginRight:"2%"}} />
                <Text style={{color:"#fff" , alignSelf:"center" , fontSize:12}}>Google  </Text>
              </TouchableOpacity>
            </View>

            <View style={{flex:4 , flexDirection:"row"}}>
                <Text style={{fontSize:12}}>Don't Have Account ?  </Text>
               <TouchableOpacity  onPress={()=>navigation.navigate("Register")}> 
                 <Text style={{fontWeight:"bold" , fontSize:12}}>Create One</Text>
                 </TouchableOpacity>
            </View>






      </ImageBackground>
      </View>
       </>
    )
}


const styles = StyleSheet.create({
    
    image: {
      flex: 1,
      resizeMode: 'contain',
      height:'100%',
      width:"100%",
      alignItems:"center",
    
  
    },
    sectionStyle: {
      opacity:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 42,
      borderRadius: 21,
      margin: 10,
      width:315,
      shadowColor: '#000',
      shadowOffset: {width: -5, height: 4},
      shadowOpacity: 0.9,
      shadowRadius: 7,
      elevation: 20
  
    },
    imageStyle: {
        opacity:1,
        padding: 10,
        margin: 5,
        height: 21,
        width: 21,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
});