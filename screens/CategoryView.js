import { View, Text, TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import styles from '../style';

const CategoryScreen = ({ setCurrentScreen }) => {
  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.container}>

    <View style={styles.category}>
        <TouchableOpacity 
            style={styles.categoryTouch}
            onPress={() => setCurrentScreen('AddProduct')}
        >
            <Text style={styles.categoryText}>Thêm Sản Phẩm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryTouch}>
            <Text style={styles.categoryText}>Xóa Sản Phẩm</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

export default CategoryScreen