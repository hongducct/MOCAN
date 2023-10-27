import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from '../style';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = React.createRef();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    // Gửi yêu cầu API để lấy danh sách sản phẩm khi màn hình được tải.
    getProducts();
  }, [products]); // Chỉ gọi API khi giá trị trong mảng thay đổi.


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

  const handleSearch = (queryText) => {
    setSearchQuery(queryText);
    console.log(queryText);
    console.log(searchQuery);
    if (searchQuery == '') {
      setFilteredProducts(products);
    };
    const filteredProduct = products.filter(product => {
      return product.product_name.toLowerCase().includes(queryText.toLowerCase());
    });
    // console.log(filteredProduct);
    setFilteredProducts(filteredProduct);
    // console.log(filteredProducts);
    // console.log(filteredProducts.length);
    // console.log(filteredProducts[0]);
    // console.log(products);
  }
  


  const updateQuantity = (productId, newQuantity) => {
    // Gửi yêu cầu API PUT để cập nhật giá trị quantity cho sản phẩm
    axios
    // .put(`http://192.168.1.13:3000/update-product/${productId}`, {
    .put(`http://${SERVER_IP}:${SERVER_PORT}/update-product/${productId}`, {
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
      <SafeAreaView style={styles.searchForm}>
        <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={24} color="#000" style={styles.searchIcon} />
            <TextInput
              ref={searchRef}
              style={styles.searchInput}
              placeholder="Tìm kiếm sản phẩm ..."
              clearButtonMode='always'
              autoCapitalize='none'
              autoCorrect={false}
              value={searchQuery}
              onChangeText={(queryText) => handleSearch(queryText)}
            />
            {searchQuery == '' ? null :
              <TouchableOpacity style={styles.searchButton} 
                onPress={() => handleSearch('')}>
                <MaterialIcons name="cancel" size={24} color="#000" style={styles.cancelIcon}/>
              </TouchableOpacity>
            }
        </View>
      </SafeAreaView>
      {/* {searchQuery == '' ?
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
      </View>
      :  */}
      { filteredProducts.length == 0 ? 
      <View style={styles.contentContainer}>
        <Text style={styles.noResult}>Không tìm thấy kết quả</Text>
      </View>
      :
      <View style={styles.contentContainer}>
      <ScrollView>
        {filteredProducts.map((product, index) => (
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
      }
      {/* } */}
    </ImageBackground>
  )
}

export default SearchScreen