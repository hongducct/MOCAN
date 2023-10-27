import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'react-native-blur';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Picker} from '@react-native-picker/picker'
import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';

const UpdateProductScreen = () => {
    const navigation = useNavigation();

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        // Gửi yêu cầu API để lấy danh sách sản phẩm
        axios.get(`http://${SERVER_IP}:${SERVER_PORT}/products`)
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
    }, []);

    return (
        <LinearGradient
            style={styles.backgroundLinearGradient}
            locations={[0, 0.8]}
            colors={["#d0e4b6", "#E4B6B6"]}
        >
        <View style={[styles.container, ]}>
          <View style={styles.contentContainerDelete}>
            <ScrollView>
              {products.map((product, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('UpdateProduct', 
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
        </View>
        </LinearGradient>
    )
}

export default UpdateProductScreen;