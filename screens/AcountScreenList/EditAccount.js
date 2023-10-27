import React, { useState, useEffect } from 'react';
import { BlurView } from 'react-native-blur';
// import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../../style';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserId from '../useUserId';

import {Picker} from '@react-native-picker/picker'
import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';

import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
const EditAccount = () => {
    // const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    // const [focusedOldPassword, setFocusedOldPassword] = useState(false)
    const [focusedNewPassword, setFocusedNewPassword] = useState(false)
    const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [hidePass, setHidePass] = useState(false);

    const [userId, setUserId] = useState(null);
    const getUserId = async () => {
        const id = await AsyncStorage.getItem('userId');
        console.log("Id ở trong getUserId: ", id);
        setUserId(id);
    }
    useEffect(() => {
        getUserId();
    }, [])

    const handleEditAccount = () => {
        console.log("Bấm nút edit account rồi nè")
        if (newPassword != confirmPassword) {
            console.log("Mật khẩu không khớp");
            alert("Mật khẩu không khớp");
            return;
        }
        console.log("userId: ", userId);
        // axios.put('http://192.168.1.13:3000/update-account-password/' + userId, {
        axios.put(`http://${SERVER_IP}:${SERVER_PORT}/update-account-password/` + userId, {
            userId: userId,
            password: newPassword,
        })
        .then(res => {
            console.log(res.data);
            setShowSuccess(true);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleReset = () => {
        setShowSuccess(false);
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <LinearGradient
            style={styles.backgroundLinearGradient}
            locations={[0, 0.8]}
            colors={["#d0e4b6", "#E4B6B6"]}
        >
            <View style={[styles.container]}>
                <View style= {{ marginTop: 150 }}>
                    <View style={{opacity: showSuccess ? 0.2 : 1}}>
                        <View style={styles.EditProfileForm}>
                            {/* <View style={styles.EditProfileFormRow}>
                                <Text style={styles.updateProfileText}>Old Password</Text>
                                <TextInput style={[styles.inputEditProfile, 
                                    focusedOldPassword ? styles.focusedInput : null
                                    ]} 
                                    value={oldPassword}
                                    onChangeText={(text) => setName(text)}
                                    onFocus={() => setFocusedOldPassword(true)}
                                    onBlur={() => setFocusedOldPassword(false)}

                                />
                            </View> */}
                            <View style={styles.EditProfileFormRow}>
                                <Text style={styles.updateProfileText}>New Password</Text>
                                <View style={[styles.row, styles.createAccountInput,focusedNewPassword ? styles.focusedInput : null]}>
                                    <TextInput style={[{width: '83%', paddingLeft: 15 }]} 
                                        value={newPassword}
                                        secureTextEntry={hidePass ? true : false}
                                        onChangeText={(text) => setNewPassword(text)}
                                        onFocus={() => setFocusedNewPassword(true)}
                                        onBlur={() => setFocusedNewPassword(false)}

                                    />
                                    <TouchableOpacity style={styles.iconPassword} onPress={() => setHidePass(!hidePass)}>
                                        <MaterialIcons  name={hidePass ? "visibility-off" : "visibility"} size={26} color="#000" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.EditProfileFormRow}>
                                <Text style={styles.updateProfileText}>Comfirm Password</Text>
                                <View style={[styles.row, styles.createAccountInput,focusedConfirmPassword ? styles.focusedInput : null]}>
                                    <TextInput style={[{width: '83%', paddingLeft: 15 }]} 
                                        value={confirmPassword}
                                        secureTextEntry={hidePass ? true : false}
                                        onChangeText={(text) => setConfirmPassword(text)}
                                        onFocus={() => setFocusedConfirmPassword(true)}
                                        onBlur={() => setFocusedConfirmPassword(false)}
                                    />
                                    <TouchableOpacity style={styles.iconPassword} onPress={() => setHidePass(!hidePass)}>
                                        <MaterialIcons  name={hidePass ? "visibility-off" : "visibility"} size={26} color="#000" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.updateButtonContainer}>
                                <TouchableOpacity 
                                    style={styles.updateButton}
                                    onPress={handleEditAccount}
                                >
                                    <Text style={styles.updateButtonText}>Update Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.notifyContainer}>
                        {showSuccess ? (
                            <View style={styles.successMessage}>
                                <Image 
                                    source={require('../../assets/updatePasswordSuccess.png')}
                                    style={styles.component1Icon}
                                    contentFit="cover"
                                />
                                <Text style={styles.component1Text}>Cập nhật mật khẩu thành công</Text>
                                <TouchableOpacity 
                                    onPress={handleReset}
                                    style={styles.closeButton}

                                >
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>
                </View>
            </View>
            
        </LinearGradient>
    )
}

export default EditAccount