import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddProductScreen from '../screens/AddProductScreen';

import styles from '../style';

const Stack = createStackNavigator();

export default function Stack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

