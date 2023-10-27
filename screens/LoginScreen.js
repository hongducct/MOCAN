import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import PasswordInputText from 'react-native-hide-show-password-input';
import styles from '../style';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_IP, SERVER_PORT } from '@env';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = () => {
    const navigation = useNavigation();

    const setUserId = async (userId) => {
        await AsyncStorage.setItem('userId', userId.toString());
    }

    const loginSuccess = async (userId) => {
        // Lưu token hoặc thông tin đăng nhập vào AsyncStorage
        console.log("-------------------------")
        navigation.replace('Tabs');
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [focusedEmail, setFocusedEmail] = useState(false)
    const [focusedPassword, setFocusedPassword] = useState(false)
    
    // const [users, setUsers] = useState([])

    const handleLogin = () => {
        console.log("Bấm nút login rồi nè")
        // axios.get('http://192.168.1.13:3000/users')
        axios.get(`http://${SERVER_IP}:${SERVER_PORT}/users`)
        .then(res => {
            // setUsers(res.data);
            res.data.map((user) => {
                if (user.email == email && user.password == password) {
                    console.log("Login successfully");
                    setUserId(user.user_id);
                    loginSuccess(user.user_id);
                }else {
                    console.log("Login failed");
                    // alert("Sai email hoặc mật khẩu")
                }
            })
        })
        .catch(err => {
            console.log(err);
        })
        
    }
    const [hidePass, setHidePass] = useState(false);
    
    return (
        <LinearGradient
            style={styles.backgroundLinearGradient}
            locations={[0, 0.25]}
            colors={["#d0e4b6", "#E4B6B6"]}
        >
            <View style={[styles.createAccountContainer,]}>
                <View style={styles.createAccountForm}>
                    <Text style={styles.createText}>Login</Text>
                    <View>
                        <View style={styles.createAccountInputContainer}>
                            <Text style={styles.createAccountText}>EMAIL</Text>
                            <TextInput style={[
                                styles.inputProduct,
                                focusedEmail ? styles.focusedInput : {} // Nếu input đang focus thì sẽ có viền đỏ
                            ]}
                                placeholder="hongduc@gmail.com"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                onFocus={() => setFocusedEmail(true)}
                                onBlur={() => setFocusedEmail(false)}
                            />
                        </View>
                        <View style={styles.createAccountInputContainer}>
                            <Text style={styles.createAccountText}>PASSWORD</Text>
                            <View style={[styles.row, styles.createAccountInput,focusedPassword ? styles.focusedInput : {}]}>
                                <TextInput
                                    style={[{width: '83%', paddingLeft: 15 },]}                                    
                                    placeholder="Nhập mật khẩu ..."
                                    value={password}
                                    secureTextEntry={hidePass ? true : false}
                                    onChangeText={(text) => setPassword(text)}
                                    onFocus={() => setFocusedPassword(true)}
                                    onBlur={() => setFocusedPassword(false)}
                                />
                                <TouchableOpacity style={styles.iconPassword} onPress={() => setHidePass(!hidePass)}>
                                    <MaterialIcons  name={hidePass ? "visibility-off" : "visibility"} size={26} color="#000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.createAccountButtonContainer}>
                        <TouchableOpacity 
                            style={styles.createAccountButton}
                            onPress={handleLogin}
                        >
                            <Text style={styles.createAccountButtonText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.LoginText}>Continue as Consumer</Text>
                    </View>
                </View>
            </View>
            
        </LinearGradient>
    )
}

export default LoginScreen