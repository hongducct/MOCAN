import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style';

import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';

const DeleteProduct = ({onDeleteSuccess}) => {
  const [products, setProducts] = useState([]);

  const handleDeleteProduct = async () => {
    console.log('select:', selectedProduct.product_id);
    // Gửi yêu cầu API DELETE để xóa sản phẩm
    axios.delete(`http://${SERVER_IP}:${SERVER_PORT}/delete-product/${selectedProduct.product_id}`)
    .then(response => {
      console.log('Xóa sản phẩm thành công');
      // Sau khi xóa xong thì cập nhật lại danh sách sản phẩm
      getProducts();
      setSelectedProduct(false);
      console.log('Trước khi gọi callback onDeleteSuccess');
  
      onDeleteSuccess();  // Callback để cập nhật lại danh sách sản phẩm
  
      console.log('Sau khi gọi callback onDeleteSuccess');
    })
    .catch(error => {
      console.error('Lỗi yêu cầu API:', error);
    });
  };

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

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    console.log('Selected product ID:', product.product_id);
    setSelectedProduct(product);
  }


  const DarkOverlay = ({opacity}) => {
    return (
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black', 
        opacity: opacity
      }}>
      </View>
    )
  }

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundLinearGradient}>
      <View style={styles.container}>
        <DarkOverlay opacity={selectedProduct ? 0.5 : 0} />
          <View style={[styles.contentContainerDelete, {opacity: selectedProduct ? 0.2 : 1}]}>
          <ScrollView>
            {products.map((product, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectProduct(product)}
              >
                <View style={[styles.listProduct, styles.row]}>
                  <View>
                    <Text style={styles.nameProduct}>{product.product_name}</Text>
                    <Text style={styles.describeProduct}>Giá: {product.price}</Text>
                    <View style={styles.row}>
                      <Text style={styles.describeProduct}>Stock: {product.quantity}</Text>
                    </View>
                  </View>
                  <Image source={{ uri: product.image }} style={styles.productImage} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          </View>
          {selectedProduct && (
            <View style={styles.deleteContainer}>
              <View style={styles.productInfo}>
                <View style={[styles.listProduct, styles.row]}>
                  <View>
                    <Text style={styles.nameProduct}>{selectedProduct.product_name}</Text>
                    <Text style={styles.describeProduct}>Giá: {selectedProduct.price}</Text>
                    <View style={styles.row}>
                      <Text style={styles.describeProduct}>Stock: {selectedProduct.quantity}</Text>
                    </View>
                  </View>
                  <Image source={{ uri: selectedProduct.image }} style={styles.productImage} />
                </View>
                <View style={[styles.row, ]}>
                  <TouchableOpacity
                    onPress={() => setSelectedProduct(false)}
                    style={styles.buttonDeleteScreen}
                  >
                    <Text style={styles.buttonDeleteText}>Hủy</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => handleDeleteProduct()}
                    style={styles.buttonDeleteScreen}
                  >
                    <Text style={styles.buttonDeleteText}>Xóa</Text>
                  </TouchableOpacity>
                </View>
              </View>
        
            </View>
          )}
          <StatusBar style="auto" />
      </View>
    </ImageBackground>
  )
}

export default DeleteProduct