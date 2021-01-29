import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View ,FlatList,Button} from 'react-native';
import SignIn from "./screen/SignIn"
import SignUp from "./screen/SignUp"
import Login from "./screen/Login"
import Home from "./screen/Home"
import { createDrawerNavigator } from '@react-navigation/drawer';
import {firebase} from "./Firebase/congig"
import {AuthContext} from "./contex"
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const AuthDone = createStackNavigator()

const AuthDoneScreen = () =>{
  return(
  <AuthDone.Navigator headerMode="none">
    <AuthDone.Screen name="Home" component={Home}/>
  </AuthDone.Navigator>
  )
}
const AuthNotDone = createStackNavigator()

const AuthNotDoneScreen = () =>{
  return(
  <AuthNotDone.Navigator headerMode="none">
    
    <AuthNotDone.Screen name="Login" component={Login}/>
    <AuthNotDone.Screen name="SignUp" component={SignUp}/>
    <AuthNotDone.Screen name="SignIn" component={SignIn}/>
    
  </AuthNotDone.Navigator>
  )
}



export default function App() {
  const[initializing,setInitializing] = useState(true)
  const[user,setUser] = useState()
  const authContex = React.useMemo(()=>({
    SignIn: async() =>{
      const subscriber= firebase.auth().onAuthStateChanged(onAuthStateChanged)
    },
    SignOut: async() =>{
      setInitializing(true)

      const subscriber= firebase.auth().onAuthStateChanged(onAuthStateChanged)
    },
    SignUp: async() =>{
      const subscriber= firebase.auth().onAuthStateChanged(onAuthStateChanged)
    },

  }))

  function onAuthStateChanged(user){
    setUser(user)
    if(initializing) setInitializing(false)

  }

  useEffect(() => {
    const subscriber  = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
    
   
  }, [])
  if(initializing) return null
  
 
  return (
    
    <AuthContext.Provider value={authContex}>
    {!user?(
      <NavigationContainer>
        <AuthNotDoneScreen/>
      </NavigationContainer>
    ):(
      <NavigationContainer>
        <AuthDoneScreen/>
      </NavigationContainer>
    )}
    </AuthContext.Provider>
    
    
    
   
  );
}

