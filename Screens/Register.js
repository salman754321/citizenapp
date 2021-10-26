import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import bgimg from "../assets/weather-bg-01.png"
import emailpng from "../assets/d-01.png"
import passpng from "../assets/dfsd-01.png" 
import { AntDesign , Entypo} from '@expo/vector-icons';
import backarrow from "../assets/arr-01.png"
import {COUNTREIS} from '../utils/Countries';

export default function Register({navigation}) {


 
  const [Country, setCountry] = useState("")
  let countries = COUNTREIS.map((c)=>c.name);

    return (
    
        <View
      style={{ flex: 1 }}>
      <ImageBackground source={bgimg} style={styles.image} imageStyle={{opacity:0.3}}>
   <TouchableOpacity onPress={()=>navigation.goBack() } style={{alignSelf:"flex-start"}}>
   <Image source={backarrow}  style={{marginLeft:'7%' ,width:30.5,height:10, marginTop:'10%' , alignSelf:"flex-start" }} />
      </TouchableOpacity>
            <Text style={{fontSize:19 , fontWeight:"bold" , marginTop:'10%'}}>Let's Get Started!</Text>
            <Text style={{fontSize:13}}> Join our Community.</Text>

            <View style={{marginTop:'10%'}}></View>
            <View style={styles.sectionStyle}>
            <Image
              source={emailpng}
              style={styles.imageStyle}
            />
            <TextInput
              style={{flex: 1 , width:315 , height:42 , color:"#000"}}
              placeholder="David"
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
              placeholder="Hubusky"
              underlineColorAndroid="transparent"
            
            />
            </View>
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
          <View style={styles.sectionStyle}>
           <Image
            source={emailpng}
              style={styles.imageStyle}
            />
            <TextInput
              style={{flex: 1 , width:315 , height:42 , color:"#000"}}
              placeholder="Password"
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
              placeholder="Confirm Password"
              underlineColorAndroid="transparent"
            />
          </View>

        <View style={{flexDirection:"row"}}>
        <View style={styles.sectionStylei}>
           
           <TextInput
             style={{flex: 1 , width:80 , height:42 , color:"#000"}}
             placeholder="Select Country"
             
             underlineColorAndroid="transparent"
           />
            <Image
             source={passpng}
             style={styles.imageStyle}
           />
         </View>
              <Text style={{marginTop:23 , marginLeft:5 , fontSize:10}}>
                Over the age of 18
              </Text>
              <Switch style={{marginTop:6}}
        trackColor={{ false: "gray"}}
        thumbColor={"#000"}
        ios_backgroundColor="#3e3e3e"
        
        value={true}
      />
        </View>
    
<View>

</View>
<View style={{marginTop:'5%' }}>
              <TouchableOpacity style={{backgroundColor:"#18224f" ,  shadowColor: '#000', shadowOffset: {width: -5, height: 4}, shadowOpacity: 0.9, shadowRadius: 9, elevation: 20 , width:123 , height:39 , justifyContent:"center" , borderRadius:25}} >
    
                <Text style={{color:"#fff" , alignSelf:"center" ,fontWeight:"bold", fontSize:17}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
  
            <View style={{marginTop:'5%'}}>
             <Text style={{fontSize:15}}>
               or register using
             </Text>
            </View>
            <View style={{flexDirection:"row", alignContent:"flex-start" , marginLeft:'27%', marginTop:'5%', width:'100%' , flex:1 , flexGrow:1}}>
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

            <View style={{flex:0.5 , flexDirection:"row"}}>
                <Text style={{fontSize:12}}>Already have an account?  </Text>
               <TouchableOpacity  onPress={()=>navigation.navigate("Register")}> 
                 <Text style={{fontWeight:"bold" , fontSize:12}}>Sign in here</Text>
                 </TouchableOpacity>
            </View>

 

      </ImageBackground>
      </View>
      
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
    sectionStylei: {
      marginTop:10,
      opacity:1,
      flexDirection: 'row',
      alignContent:"flex-start",
      alignItems:"flex-start",
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 42,
      borderRadius: 25,
      width:190,
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
    dropdown: {
      backgroundColor: 'white',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      marginTop: 20,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
textItem: {
    flex: 1,
    fontSize: 16,
},
});