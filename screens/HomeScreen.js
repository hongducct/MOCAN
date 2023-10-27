import React, { useState, useEffect } from 'react';
// import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';

import AsyncStorage from '@react-native-async-storage/async-storage';

import DeleteProduct from './DeleteProductScreen';
import AddProductScreen from './AddProductScreen';

import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';
// import UpdateProduct from './UpdateProductScreen';

const HomeScreen = ({onDeleteSuccess, onAddSuccess}) => {
  // const serverIP = process.env.SERVER_IP || '192.168.1.120';
  // const serverPort = process.env.SERVER_PORT || 3000;

  const navigation = useNavigation();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('userId');
  
      if(!token) {
        navigation.navigate('LoginScreen'); 
      }
    }
    
    checkLogin();
  }, []);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    // Gửi yêu cầu API để lấy danh sách sản phẩm
    axios.get(`http://${SERVER_IP}:${SERVER_PORT}/products`)
    // axios.get('http://192.168.1.120:3000/products')
      .then(response => {
        setProducts(response.data); // Lưu danh sách sản phẩm vào state.
      })
      .catch(error => {
        console.error('Lỗi yêu cầu API:', error);
      });
  }

  useEffect(() => {
    // Gửi yêu cầu API để lấy danh sách sản phẩm khi màn hình được tải.
    getProducts();
  }, [products]); // Chỉ gọi API khi giá trị trong mảng thay đổi. 

  const handleDeleteSuccess = () => {
    console.log('Callback onDeleteSuccess được gọi');
    getProducts();
  } 

  const handleAddSuccess = () => {
    console.log('Callback onAddSuccess được gọi');
    getProducts();
  }

  const updateQuantity = (productId, newQuantity) => {
    // Gửi yêu cầu API PUT để cập nhật giá trị quantity cho sản phẩm
    axios
    // .put(`http://192.168.1.13:3000/update-product/${productId}`, {
    .put(`http://${SERVER_IP}:${SERVER_PORT}/update-quantity/${productId}`, {
      // .put(`http://192.168.1.14:3000/update-product/${productId}`, {
        quantity: newQuantity,
      })
      .then(response => {
        // Cập nhật lại giá trị quantity trong danh sách sản phẩm ở client
        const updatedProducts = [...products];
        const updatedProductIndex = updatedProducts.findIndex(p => p.product_id === productId);
        if (updatedProductIndex !== -1) {
          updatedProducts[updatedProductIndex].quantity = newQuantity;
          setProducts(updatedProducts);
        }
      })
      .catch(error => {
        console.error('Lỗi cập nhật giá trị quantity:', error);
      });
  };

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundLinearGradient}>
      
        <Text style={styles.header}>MỘC AN THẢO MỘC</Text>
        <Text style={styles.dssp}>DANH SÁCH SẢN PHẨM</Text>

        <View style={[styles.contentContainer, {marginBottom: 100}]}>
        <ScrollView>
          {products.map((product, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('DetailProduct', 
                    {productId: product.product_id})}
            >
              <View style={[styles.listProduct, styles.row]}>
                <View>
                  <Text style={styles.nameProduct}>{product.product_name}</Text>
                  <Text style={styles.describeProduct}>Giá: {product.price}</Text>
                  <View style={styles.row}>
                    <Text style={styles.describeProduct}>Stock: {product.quantity}</Text>
                    <View style={styles.stockContainer}>
                    <TouchableOpacity
                      style={styles.stockButton}
                      onPress={() => {
                        if (product.quantity > 0) {
                          updateQuantity(product.product_id, product.quantity - 1);
                        }
                      }}
                    >
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>{product.quantity}</Text>
                    <TouchableOpacity
                      style={styles.stockButton}
                      onPress={() => updateQuantity(product.product_id, product.quantity + 1)}
                    >
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Image source={{ uri: product.image }} style={styles.productImage} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        </View>
          
        <DeleteProduct onDeleteSuccess={handleDeleteSuccess} style={styles.hidden} />
        <AddProductScreen onAddSuccess={handleAddSuccess} style={styles.hidden} />
        <StatusBar style="auto" />
    </ImageBackground>
  )
}

export default HomeScreen