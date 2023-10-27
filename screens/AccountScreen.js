import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../style';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import Icon from 'react-native-ico';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

const AccountScreen = () => {
  const navigation = useNavigation();

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const navigateToEditAccount = () => {
    navigation.navigate('EditAccount');
  };
  const navigateToSetting = () => {
    navigation.navigate('Setting');
  };
  const navigateToAbout = () => {
    navigation.navigate('About');
  };
  const navigateToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };
  const logout = async () => {
    // Xóa thông tin đăng nhập
    await AsyncStorage.removeItem('userId');
  
    // Điều hướng về màn hình đăng nhập
    navigation.reset({
      index: 0, 
      routes: [{ name: 'LoginScreen' }]
    });
  }

  const accountItems = [
    {icon: 'person', text: 'Profile', action: navigateToEditProfile},
    {icon: 'account-circle', text: 'Account', action: navigateToEditAccount},
    {icon: 'settings', text: 'Setting', action: navigateToSetting},
    {icon: 'help', text: 'About', action: navigateToAbout},
    {icon: 'person-add', text: 'Create account for new user', action: navigateToCreateAccount},

  ];

  const renderSettingsItem = ({icon, text, action}) => (
    <TouchableOpacity
      onPress={action}
      style={[styles.row, styles.accountItems]}
      hoverOpacity={0.8}

    >
      <MaterialIcons style={styles.iconAccount} name={icon} size={24} color="#4B3F3F" />
      <Text style={styles.accountItemsText}>{text}</Text>
      <MaterialIcons style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: 5 }}
       name="keyboard-arrow-right" size={24} color="#4B3F3F" />
    </TouchableOpacity>
  )
  return (
    <LinearGradient
            style={styles.backgroundLinearGradient}
            locations={[0, 0.8]}
            colors={["#d0e4b6", "#E4B6B6"]}
    >
      
      <Text style={styles.header}>MỘC AN THẢO MỘC</Text>
      <View style={[styles.row,styles.profileLayout]}>
        <Image source={require('../assets/kytu.jpg')} style={styles.imageProfile} />
        <View style={[styles.column, styles.welcome]}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.nameUser}>Nguyễn Hồng Đức</Text>
        </View>
        <TouchableOpacity 
          style={styles.logout}
          onPress={logout}  
        >
          <MaterialIcons style={styles.logoutIcon} name='logout' size={24} color="#4B3F3F" />
        </TouchableOpacity>
      </View>
      
      <View>
        {
          accountItems.map((item, index) => (
            <React.Fragment key={index}>
              {renderSettingsItem(item)}
            </React.Fragment>
          ))
        }
      </View>
    </LinearGradient>
    // <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
    // </ImageBackground>
  )
}

export default AccountScreen