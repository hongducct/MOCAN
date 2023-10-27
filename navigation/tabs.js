import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../style';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{ 
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,

                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 75,
                    ...styles.shadow
                }
             }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ 
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarElement}>
                        <Image 
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 17}}>Trang chủ</Text>
                    </View>
                )
             }} />
            <Tab.Screen name="Category" component={CategoryScreen} options={{ 
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarElement}>
                        <Image 
                            source={require('../assets/icons/category.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 17}}>Danh mục</Text>
                    </View>
                )
             }}  />
            <Tab.Screen name="Search" component={SearchScreen} options={{ 
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarElement}>
                        <Image
                            source={require('../assets/icons/search.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 17}}>Tìm kiếm</Text>
                    </View>
                )
             }}  />
            <Tab.Screen name="Account" component={AccountScreen} options={{ 
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarElement}>
                        <Image
                            source={require('../assets/icons/account.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                        />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 17}}>Tài khoản</Text>
                    </View>
                )
             }}  />
        </Tab.Navigator>
    );
}

export default Tabs;