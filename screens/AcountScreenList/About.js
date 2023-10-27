import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../../style';
import { LinearGradient } from 'expo-linear-gradient';

import axios from 'axios';

const About = () => {
    return (
        <LinearGradient
            style={styles.backgroundLinearGradient}
            locations={[0, 0.8]}
            colors={["#d0e4b6", "#E4B6B6"]}
        >
        <View style={styles.container}>
            <Text style={styles.textCenterBold}>About</Text>
        </View>

        </LinearGradient>
    )
}

export default About