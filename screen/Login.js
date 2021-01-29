import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View ,FlatList,Button,ImageBackground,SafeAreaView,TouchableOpacity} from 'react-native';
export default function  Login ({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground  source={require("../Images/img.jpg")} style={styles.image}/>

            <View style={styles.imagecontainer}>
                <TouchableOpacity style={styles.but} 
                onPress={() => {
                    navigation.navigate("SignIn");
                  }}>
            
                    <Text style={styles.text}> LogIn</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.but} 
                onPress={() => {
                    navigation.navigate("SignUp");
                  }}>
            
                    <Text style={styles.text}> Register</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
        
    )
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    imagecontainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center'
    },

    image:{
       
       width:"100%",
       height:"100%",
      
     
        
    },
    but:{
        width:250,
        height:50,
        backgroundColor:'red',
        marginTop:20,
        marginBottom:20,
      
        borderRadius:5,
        padding:10,
       alignItems:'center'

    },
    text:{
        color:'white',
        fontSize:17,
        paddingHorizontal:10
    }
})