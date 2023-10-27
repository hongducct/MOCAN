import React from 'react';
import {Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,useNavigation  } from '@react-navigation/native';

import AddProductScreen from './AddProductScreen'; // Import your 'AddProductScreen' component
import styles from '../style';

const Stack = createStackNavigator();

const CategoryScreen = () => {
  const navigation  =  useNavigation();

        return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundLinearGradient}>
      <View style={styles.category}>
          <TouchableOpacity title='Add Product' gradient 
            style={[styles.categoryText, styles.categoryTouch]} 
            onPress={() => navigation.navigate('AddProductScreen')}>
            <Text style={styles.categoryText}>Thêm Sản Phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity title='Update Product' gradient 
            style={[styles.categoryText, styles.categoryTouch]}
            onPress={() => navigation.navigate('UpdateProductScreen')}>
            <Text style={styles.categoryText}>Chỉnh Sửa Sản Phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity title='Delete Product' gradient 
            style={[styles.categoryText, styles.categoryTouch]}
            onPress={() => navigation.navigate('DeleteProductScreen')}>
            <Text style={styles.categoryText}>Xóa Sản Phẩm</Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CategoryScreen;
