import React, { useState, useEffect } from 'react';
import { BlurView } from 'react-native-blur';
// import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../../style';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserId from '../useUserId';

import {Picker} from '@react-native-picker/picker'
import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';

import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const EditProfile = () => {
    const [focusedName, setFocusedName] = useState(false);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedDateOfBirth, setFocusedDateOfBirth] = useState(false);
    const [focusedAddress, setFocusedAddress] = useState(false);
    const [focusedPhoneNumber, setFocusedPhoneNumber] = useState(false);
    const [focusedGender, setFocusedGender] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");

    const [image, setImage] = useState(null);

    const handleChooseImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
          setImage(result.assets[0].uri);
          console.log('Đã chọn ảnh');
        }else{
          setImage(null);
          console.log('Chưa chọn ảnh');
        }
    };
    
    const [userId, setUserId] = useState(null);
    const getUserId = async () => {
        const id = await AsyncStorage.getItem('userId');
        console.log("Id ở trong getUserId: ", id);
        setUserId(id);
    }

    const [profileData, setProfileData] = useState([]); // Lưu trữ dữ liệu lấy về từ API
    const getProfile = () => {
        getUserId();
        console.log("Id ở trong getProfile: ", userId);
        // axios.get(`http://192.168.1.13:3000/users/${userId}`)
        // axios.get('http://192.168.1.13:3000/users/' + userId)
        axios.get(`http://${SERVER_IP}:${SERVER_PORT}/users/` + userId)
        .then(res => {
            console.log("GetData:",res.data);
            setProfileData(res.data);
            setName(res.data.name);
            setEmail(res.data.email);
            setDateOfBirth(res.data.birthday);
            setAddress(res.data.address);
            setGender(res.data.gender);
            setPhoneNumber(res.data.phone_number);
            setImage(res.data.image);
        })
        .catch(err => {
            console.log('Lỗi ở đây nè:', err);
        })
    }
    useEffect(() => {
        getProfile();
    }, [userId]);

    const [showSuccess, setShowSuccess] = useState(false);
    const handleReset = () => {
        // Đặt lại trạng thái và dữ liệu nhập
        setShowSuccess(false);
        getProfile();
    }

    const handleUpdateProfile = () => {
        const data = {
            userId: userId,
            name: name,
            email: email,
            birthday: birthday,
            address: address,
            phone: phone,
            gender: gender,
            image: image
        }
        console.log("Image: ", image);
        console.log("Data: ", data);
        // axios.put('http://192.168.1.13:3000/update-account-profile/'+userId, data)
        axios.put(`http://${SERVER_IP}:${SERVER_PORT}/update-account-profile/`+userId, data)
        .then(res => {
            console.log("Đã update thành công");
            console.log(res.data);
            setShowSuccess(true);
        })
        .catch(err => {
            console.log("Đã update lỗi");
            console.log(err);
        })
    }

    return (
        <LinearGradient
            style={styles.backgroundLinearGradient}
            locations={[0, 0.8]}
            colors={["#d0e4b6", "#E4B6B6"]}
        >   
            <View style={styles.container}>
                <View style={[{opacity: showSuccess ? 0.2 : 1}]}>
                <ScrollView>
                    {/* <Image source={require('../../assets/kytu.jpg')} 
                    style={styles.imageEditProfile} /> */}
                    <TouchableOpacity
                        onPress={handleChooseImage}
                    >   
                        <Image source={{uri: image}}
                            style={styles.imageEditProfile}
                        />
                    </TouchableOpacity>
                    <View style={styles.EditProfileForm}>
                        <View style={styles.EditProfileFormRow}>
                            <Text style={styles.updateProfileText}>Name</Text>
                            <TextInput style={[styles.inputEditProfile, 
                                focusedName ? styles.focusedInput : null
                                ]} 
                                placeholder={profileData.name} 
                                value={name}
                                onChangeText={(text) => setName(text)}
                                onFocus={() => setFocusedName(true)}
                                onBlur={() => setFocusedName(false)}

                            />
                        </View>
                        <View style={styles.EditProfileFormRow}>
                            <Text style={styles.updateProfileText}>Email</Text>
                            <TextInput style={[styles.inputEditProfile, 
                                    focusedEmail ? styles.focusedInput : null
                                ]} 
                                placeholder={profileData.email}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                onFocus={() => setFocusedEmail(true)}
                                onBlur={() => setFocusedEmail(false)}
                                />
                        </View>
                        <View style={styles.EditProfileFormRow}>
                            <Text style={styles.updateProfileText}>Birthday</Text>
                            <TextInput 
                                style={[styles.inputEditProfile, 
                                    focusedDateOfBirth ? styles.focusedInput : null
                                ]} 
                                placeholder={profileData.birthday} 
                                value={birthday}
                                onChangeText={(text) => setDateOfBirth(text)}
                                onFocus={() => setFocusedDateOfBirth(true)}
                                onBlur={() => setFocusedDateOfBirth(false)}

                            />
                        </View>
                        <View style={styles.EditProfileFormRow}>
                            <Text style={styles.updateProfileText}>Phone number</Text>
                            <TextInput style={[styles.inputEditProfile, 
                                    focusedPhoneNumber ? styles.focusedInput : null
                                ]} 
                                placeholder={profileData.phone_number} 
                                value={phone}
                                onChangeText={(text) => setPhoneNumber(text)}
                                onFocus={() => setFocusedPhoneNumber(true)}
                                onBlur={() => setFocusedPhoneNumber(false)}

                                />
                        </View>
                        <View style={[styles.EditProfileFormRow, styles.column]}>
                            <Text style={styles.updateProfileText}>Gender:</Text>
                            <Picker
                                placeholder={profileData.gender}
                                selectedValue={profileData.gender}
                                onValueChange={(itemValue) => setGender(itemValue)}  
                                >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                            {/* <TouchableOpacity
                                style={gender === 'Male' ? styles.genderSelected : styles.gender}
                                onPress={() => setGender('Male')}
                            >
                                <Text>Male</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={gender === 'Female' ? styles.genderSelected : styles.gender}
                                onPress={() => setGender('Female')}  
                                >
                                <Text>Female</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View style={styles.EditProfileFormRow}>
                            <Text style={styles.updateProfileText}>Address</Text>
                            <TextInput style={[styles.inputEditProfile, 
                                    focusedAddress ? styles.focusedInput : null
                                ]}
                                placeholder={profileData.address}
                                    value={address}
                                    onChangeText={(text) => setAddress(text)}
                                    onFocus={() => setFocusedAddress(true)}
                                    onBlur={() => setFocusedAddress(false)}

                                />
                        </View>

                        <View style={styles.updateButtonContainer}>
                            <TouchableOpacity 
                                style={styles.updateButton}
                                onPress={handleUpdateProfile}
                            >
                                <Text style={styles.updateButtonText}>Update Profile</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
                </View>

                <View style={styles.notifyContainer}>
                    {showSuccess ? (
                        <View style={styles.successMessage}>
                            <Image 
                                source={require('../../assets/successComponent.png')}
                                style={styles.component1Icon}
                                contentFit="cover"
                            />
                            <Text style={styles.component1Text}>Cập nhật tài khoản thành công</Text>
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
        </LinearGradient>
    )
}

export default EditProfile