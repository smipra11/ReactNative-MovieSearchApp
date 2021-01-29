import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { AuthContext } from "../contex"
import {firebase} from "../Firebase/congig"



const SignUp = ({ navigation }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmPassword] = useState()
    const [loading, setLoading] = useState(false);

    const { SignUp } = React.useContext(AuthContext)


    const RegisterUser = () => {

        if (password !== confirmpassword) {
            alert("Passwords don't match.");
            return;
          }
          setLoading(true)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {

                var uid = response.user.uid;
                const data = {
                    id: uid,
                    name,
                    email
                }


                firebase.database()
                    .ref(`Users/${uid}`)
                    .set({
                        Info: data,
                        Profiles: {
                            0: {
                                name: 'User1',
                            },
                            1: {
                                name: 'User2',
                            },
                            2: {
                                name: 'User3',
                            },
                            3: {
                                name: 'User4',
                            },
                        },
                    })
                    .then(() => {

                        SignUp()
                    })
                    .catch((error) => console.log(error));
            })

            .catch((error) => {
                console.log(error)
            });
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#252525" }}>
            <View style={styles.container}>

                <View style={{ paddingVertical: 20 }}>
                    <View style=
                        {{
                            flexDirection: 'row', alignItems: 'center', padding: 5,
                            justifyContent: 'center', backgroundColor: 'rgba(81, 81, 81, 0.76)', borderRadius: 5
                        }}>
                        <TextInput
                            value={name} placeholder="Full Name"
                            onChangeText={(text) => setName(text)} placeholderTextColor="white" autoCapitalize="none" />
                    </View>
                </View>

                <View style={{ paddingVertical: 20 }}>
                    <View style=
                        {{
                            flexDirection: 'row', alignItems: 'center', padding: 5,
                            justifyContent: 'center', backgroundColor: 'rgba(81, 81, 81, 0.76)', borderRadius: 5
                        }}>
                        <TextInput
                            value={email} placeholder="Email"
                            onChangeText={(text) => setEmail(text)} placeholderTextColor="white" autoCapitalize="none" />
                    </View>
                </View>


                <View style={{ paddingVertical: 20 }}>
                    <View style=
                        {{
                            flexDirection: 'row', alignItems: 'center', padding: 5,
                            justifyContent: 'center', backgroundColor: 'rgba(81, 81, 81, 0.76)', borderRadius: 5
                        }}>
                        <TextInput
                            secureTextEntry
                            value={password} placeholder="Password"
                            onChangeText={(text) => setpassword(text)} placeholderTextColor="white" autoCapitalize="none" />
                    </View>
                </View>

                <View style={{ paddingVertical: 20 }}>
                    <View style=
                        {{
                            flexDirection: 'row', alignItems: 'center', padding: 5,
                            justifyContent: 'center', backgroundColor: 'rgba(81, 81, 81, 0.76)', borderRadius: 5
                        }}>
                        <TextInput
                            secureTextEntry
                            value={confirmpassword} placeholder="Confirm Password" autoCapitalize="none"
                            onChangeText={(text) => setconfirmPassword(text)} placeholderTextColor="white" />
                    </View>
                </View>



                <TouchableOpacity style={styles.btn} onPress={() => RegisterUser()}>
                    <Text style={styles.txt}>Sign Up</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: "white", fontSize: 15 }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                        <Text style={{ color: '#E50914', paddingHorizontal: 5, fontSize: 15 }} >Sign In here</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )
}
export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        marginHorizontal: 30,
        padding: 30
    },
    btn: {
        width: 200,

        backgroundColor: 'red',
        alignItems: 'center',
        margin: 20,
        borderRadius: 5
    },
    txt: {
        color: 'white',
        fontSize: 17,
        paddingVertical: 5


    }

})