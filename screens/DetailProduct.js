import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
// import ImagePicker from 'react-native-image-picker'; // Import thư viện image-picker
import * as ImagePicker from 'expo-image-picker';
// import FontAwesome6 from 'react-native-vector-icons';

import styles from '../style';

import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';


const DetailProduct = () => {
  const route = useRoute();
  const { productId } = route.params;

  console.log('Received product ID:', productId);

  const [product, setProduct] = useState({});

  useEffect(() => {
      // axios.get(`http://192.168.1.13:3000/products/${productId}`)
      axios.get(`http://${SERVER_IP}:${SERVER_PORT}/products/${productId}`)
      .then(response => {
        console.log('API response:', response.data);
        setProduct(response.data); // Lưu danh sách sản phẩm vào state.
      })
      .catch(error => {
        console.error('Lỗi yêu cầu API:', error);
      });
  }, []);
  const updateQuantity = (newQuantity) => {
    // Gửi yêu cầu API PUT để cập nhật giá trị quantity cho sản phẩm
    console.log('newQuantity:', newQuantity);
    console.log('productId:', productId);
    axios
      // .put(`http://192.168.1.13:3000/update-product/${productId}`, {
      .put(`http://${SERVER_IP}:${SERVER_PORT}/update-quantity/${productId}`, {
        quantity: newQuantity,
      })
      .then(response => {
        // Cập nhật lại giá trị quantity trong danh sách sản phẩm ở client
          product.quantity = newQuantity;
          setProduct({...product, quantity: newQuantity});
      })
      .catch(error => {
        console.error('Lỗi cập nhật giá trị quantity:', error);
      });
  };

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundLinearGradient}>
      <View style={styles.container}>
      <Text style={styles.detailHeader}>MỘC AN THẢO MỘC</Text>
      <View style={styles.contentContainer}>
          <View style={styles.productDetail}>
            <View style={styles.row}>
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
                          updateQuantity(product.quantity - 1);
                        }
                      }}
                    >
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>{product.quantity}</Text>
                    <TouchableOpacity
                      style={styles.stockButton}
                      onPress={() => updateQuantity(product.quantity + 1)}
                    >
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <Image source={{ uri: product.image }} style={styles.productImage} />
              </View>
              <View>
                    <Text style={styles.discriptionHeader} >Discription:</Text>
                    <ScrollView style={styles.discriptionContainer}>
                      <Text style={styles.describeProduct}>{product.description}</Text>

                    </ScrollView>
              </View>
            </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default DetailProduct