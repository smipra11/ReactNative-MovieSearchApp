import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View ,FlatList,Button, SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
import {AuthContext} from "../contex"
import {firebase} from "../Firebase/congig"


const SignIn = ({navigation}) =>{
    const[email,setEmail] =useState("")
    const[password,setPassword] = useState("")

    const{SignIn} = React.useContext(AuthContext)

    const loginUser = () =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((response) => {
    SignIn()
  })
  .catch((error) => {
   console.log(error)
  });

    }
    return(
       <SafeAreaView style={{flex:1,backgroundColor:"#252525"}}>
           <View style={styles.container}>


          <View style={{paddingVertical:10}}>
          <View style=
          {{flexDirection:'row',alignItems:'center',padding:5,
          justifyContent:'center',backgroundColor: 'rgba(81, 81, 81, 0.76)',borderRadius:5}}>
            <TextInput 
            value={email} placeholder="Email" 
            onChangeText ={(text)=>setEmail(text)} placeholderTextColor="white"/>
           </View>
           </View>

           <View style={{paddingVertical:10}}>
           <View style=
          {{flexDirection:'row',alignItems:'center',padding:5,
          justifyContent:'center',backgroundColor: 'rgba(81, 81, 81, 0.76)',borderRadius:5}}>
            <TextInput 
            value={password} placeholder="Password" 
            onChangeText ={(text)=>setPassword(text)} placeholderTextColor="white"/>
           </View>
           </View>


           <TouchableOpacity style={styles.btn}onPress={()=>loginUser()}>
               <Text style={styles.txt}>Log In</Text>
           </TouchableOpacity>
           <View style={{flexDirection:'row',alignItems:'center'}}>
               <Text style={{color:"white" ,fontSize:15}}>Don't have a account?</Text>
               <TouchableOpacity onPress ={()=>navigation.navigate("SignUp")}>
                   <Text style={{color: '#E50914', paddingHorizontal: 5,fontSize:15}} >Sign Up here</Text>
               </TouchableOpacity>
           </View>


           </View>
       </SafeAreaView>
    )
}
export default SignIn

const styles= StyleSheet.create({
    container:{
        flex:2,
        justifyContent:"center",
        marginHorizontal:30,
        padding:30
    },
    btn:{
        width:200,
        
        backgroundColor:'red',
       alignItems:'center',
       margin:20,
       borderRadius:5
    },
    txt:{
        color:'white',
        fontSize:17,
        paddingVertical:5


    }

})