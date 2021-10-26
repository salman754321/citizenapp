import React from 'react'

import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import bgimg from "../assets/weather-bg-01.png"
import logo from "../assets/logo_new-01.png"
import emailpng from "../assets/d-01.png"
import passpng from "../assets/dfsd-01.png" 

export default function Login({navigation}) {
  
    return (
      <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={bgimg} style={styles.image} imageStyle={{opacity:0.3}}>
            <Image source={logo} style={{ width: 150,opacity:0.9, height: 150 ,marginTop:"12%"}} /> 
            <View style={styles.text}>
            <Text style={{ fontSize:19,fontWeight:"bold" ,opacity:0.9,}}>Welcome !</Text>
            </View>
          <View style={{marginTop:'10%'}}></View>
            <View style={styles.sectionStyle}>
            <Image
              source={emailpng}
              style={styles.imageStyle}
            />
            <TextInput
              style={{flex: 1 , width:315 , height:42 , color:"#000"}}
              placeholder="John@gmail.com"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image
              source={passpng}
              style={styles.imageStyle}
            />
            <TextInput
              style={{flex: 1 , width:315 , height:42 , color:"#000"}}
              placeholder="Password"
              underlineColorAndroid="transparent"
              textContentType={'password'}
              secureTextEntry={true}
            />
            </View>
            <View style={styles.for}>
              <TouchableOpacity onPress = {()=>navigation.navigate("ForgotPassword")} >
              <Text style={{fontWeight:"bold" , fontSize:12}}>forgot Password?</Text>
              </TouchableOpacity>
            </View>
  
            <View style={{marginTop:'5%' }}>
              <TouchableOpacity style={{backgroundColor:"#18224f" ,  shadowColor: '#000', shadowOffset: {width: -5, height: 4}, shadowOpacity: 0.9, shadowRadius: 9, elevation: 20 , width:123 , height:39 , justifyContent:"center" , borderRadius:25}} >
    
                <Text style={{color:"#fff" , alignSelf:"center" ,fontWeight:"bold", fontSize:17}}>Sign In</Text>
              </TouchableOpacity>
            </View>
  
            <View style={{marginTop:'5%'}}>
             <Text style={{fontSize:15}}>
               or connect using
             </Text>
            </View>
            <View style={{flexDirection:"row", alignContent:"flex-start" , marginLeft:'27%', marginTop:'5%', width:'100%' , flex:1 , flexGrow:1}}>
            <TouchableOpacity style={{backgroundColor:"#45619d",marginRight:'5%', flexDirection:"row" , width:82 , height:30 , justifyContent:"center" , borderRadius:5}} >
               <Entypo name="facebook" color="#fff" style={{alignSelf:"center" ,marginLeft:3 , marginRight:"4%"}} />
                <Text style={{color:"#fff" , alignSelf:"center" , fontSize:12}}>Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:"#1cb7eb" ,marginRight:'5%', width:82 , flexDirection:"row" , height:30 , justifyContent:"center" , borderRadius:5}} >
              <Entypo name="twitter" color="#fff" style={{alignSelf:"center" ,marginLeft:3, marginRight:"4%"}} />
                <Text style={{color:"#fff" , alignSelf:"center" , fontSize:12}}>Twitter</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:"#ea4335", flexDirection:"row" ,marginRight:'5%', width:82, height:30 , justifyContent:"center" , borderRadius:5}} >
              <Entypo name="mail" color="#fff" style={{alignSelf:"center" ,marginLeft:3, marginRight:"4%"}} />
                <Text style={{color:"#fff" , alignSelf:"center" , fontSize:12}}>Google  </Text>
              </TouchableOpacity>
            </View>

            <View style={{flex:0.5 , flexDirection:"row"}}>
                <Text style={{fontSize:12}}>Don't Have Account ?  </Text>
               <TouchableOpacity  onPress={()=>navigation.navigate("Register")}> 
                 <Text style={{fontWeight:"bold" , fontSize:12}}>Create One</Text>
                 </TouchableOpacity>
            </View>

           
     </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
    
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    height:'100%',
    width:"100%",
    alignItems:"center",
  

  }

  ,
  text:{
    opacity:1,
    justifyContent:"center",
    marginTop:'10%',
    width:"100%",
    alignItems:"center"
  }
  ,
  sectionStyle: {
    opacity:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 42,
    borderRadius: 25,
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
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  for:{
    opacity:1,
    alignItems:"flex-end",
    width:'75%',
    fontWeight:"bold"
    
  },
  sbt:{
    opacity:1,
    borderRadius:25,
    backgroundColor:"#007"
  }

});
