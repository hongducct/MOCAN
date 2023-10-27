import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';

import axios from 'axios';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu API để lấy danh sách sản phẩm khi màn hình được tải.
    axios.get('http://192.168.1.14:3000/products')
      .then(response => {
        setProducts(response.data); // Lưu danh sách sản phẩm vào state.
      })
      .catch(error => {
        console.error('Lỗi yêu cầu API:', error);
      });
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    // Gửi yêu cầu API PUT để cập nhật giá trị quantity cho sản phẩm
    axios
      .put(`http://192.168.1.14:3000/update-product/${productId}`, {
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
  const [isDecreasing, setIsDecreasing] = useState(false);

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
          <Text style={styles.header}>MỘC AN THẢO MỘC</Text>
          <Text style={styles.dssp}>DANH SÁCH SẢN PHẨM</Text>

        <View style={styles.contentContainer}>
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
          {/* <ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate('DetailProduct')}>
                <View style={[styles.listProduct, styles.row]}>
                    <View>
                        <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                        <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                        <View style={styles.row}>
                        <Text style={styles.describeProduct}>Stock: 20</Text>
                        <View style={styles.stockContainer}>
                            <TouchableOpacity style={styles.stockButton}>
                            <Text style={styles.stockButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.stockCount}>1</Text>
                            <TouchableOpacity style={styles.stockButton}>
                            <Text style={styles.stockButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                    <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
                </View>
            </TouchableOpacity>

          <View style={[styles.listProduct, styles.row]}>
              <View>
                <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                <View style={styles.row}>
                  <Text style={styles.describeProduct}>Stock: 20</Text>
                  <View style={styles.stockContainer}>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>1</Text>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
          </View>

          <View style={[styles.listProduct, styles.row]}>
              <View>
                <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                <View style={styles.row}>
                  <Text style={styles.describeProduct}>Stock: 20</Text>
                  <View style={styles.stockContainer}>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>1</Text>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
          </View>

          <View style={[styles.listProduct, styles.row]}>
              <View>
                <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                <View style={styles.row}>
                  <Text style={styles.describeProduct}>Stock: 20</Text>
                  <View style={styles.stockContainer}>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>1</Text>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
          </View>

          <View style={[styles.listProduct, styles.row]}>
              <View>
                <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                <View style={styles.row}>
                  <Text style={styles.describeProduct}>Stock: 20</Text>
                  <View style={styles.stockContainer}>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>1</Text>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
          </View>

          <View style={[styles.listProduct, styles.row]}>
              <View>
                <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                <View style={styles.row}>
                  <Text style={styles.describeProduct}>Stock: 20</Text>
                  <View style={styles.stockContainer}>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>1</Text>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
          </View>

          <View style={[styles.listProduct, styles.row]}>
              <View>
                <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                <View style={styles.row}>
                  <Text style={styles.describeProduct}>Stock: 20</Text>
                  <View style={styles.stockContainer}>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>1</Text>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
          </View>

          <View style={[styles.listProduct, styles.row]}>
              <View>
                <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                <View style={styles.row}>
                  <Text style={styles.describeProduct}>Stock: 20</Text>
                  <View style={styles.stockContainer}>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>1</Text>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
          </View>

          <View style={[styles.listProduct, styles.row]}>
              <View>
                <Text style={styles.nameProduct}>Sản phẩm 1</Text>
                <Text style={styles.describeProduct}>Giá: 100.000đ</Text>
                <View style={styles.row}>
                  <Text style={styles.describeProduct}>Stock: 20</Text>
                  <View style={styles.stockContainer}>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.stockCount}>1</Text>
                    <TouchableOpacity style={styles.stockButton}>
                      <Text style={styles.stockButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image source={require('../assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
          </View>

          </ScrollView> */}
          </View>
          
          <StatusBar style="auto" />
      </ImageBackground>
  )
}

export default HomeScreen