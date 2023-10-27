import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import styles from '../style';

import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';

const AddProductScreen = ({onAddSuccess}) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null); // Lưu đường dẫn ảnh

  const handleChooseImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log('Đã chọn ảnh');
    }else{
      setImage(null);
      console.log('Chưa chọn ảnh');
    }
  };
  
  const [showSuccess, setShowSuccess] = useState(false);
  const handleAddProduct = () => {
    const productData = {
      product_name: productName,
      description: description,
      price: price,
      // price: parseFloat(price),
      quantity: parseInt(quantity),
      image: image,
    };
  
    axios
      // .post('http://192.168.1.13:3000/add-product', productData)
      .post(`http://${SERVER_IP}:${SERVER_PORT}/add-product`, productData)
      .then(response => {
        setShowSuccess(true);
        console.log(showSuccess);
        console.log('Trước khi gọi callback onAddSuccess');
        onAddSuccess(); // Callback để cập nhật lại danh sách sản phẩm
        console.log('Sau khi gọi callback onAddSuccess'); 
      })
      .catch(error => {
        console.log('Lỗi yêu cầu API:', error);
        // Xử lý lỗi ở đây
      });
    // Gọi hàm để gửi thông tin sản phẩm đến máy chủ API ở đây
    // Sử dụng biến productName, description, price, quantity, và image
    // Ví dụ: addProduct(productName, description, price, quantity, image);
  };


  const [focusedName, setFocusedName] = useState(false);
  const [focusedDescription, setFocusedDescription] = useState(false);
  const [focusedPrice, setFocusedPrice] = useState(false);
  const [focusedQuantity, setFocusedQuantity] = useState(false);

  const handleReset = () => {
    // Đặt lại trạng thái và dữ liệu nhập
    setProductName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setImage(null);
    setShowSuccess(false);
  };

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundLinearGradient}>
    <View style={styles.container}>
      <View style={[styles.formInputProduct, {opacity: showSuccess ? 0.2 : 1}]}>
      <ScrollView>
        <View>
        <Text style={styles.textInputProduct} >TÊN SẢN PHẨM</Text>
        <TextInput
          style={[
            styles.inputProduct,
            focusedName ? styles.focusedInput : {} // Nếu input đang focus thì sẽ có viền đỏ
          ]}
          onFocus={() => setFocusedName(true)}
          onBlur={() => setFocusedName(false)}
          placeholder="TÊN SẢN PHẨM"
          value={productName}
          onChangeText={(text) => setProductName(text)}
        />
        <Text style={styles.textInputProduct} >MÔ TẢ</Text>
        <TextInput
          style={[
            styles.inputProduct,
            focusedDescription ? styles.focusedInput : {} // Nếu input đang focus thì sẽ có viền đỏ
          ]}
          onFocus={() => setFocusedDescription(true)}
          onBlur={() => setFocusedDescription(false)}
          placeholder="MÔ TẢ"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <Text style={styles.textInputProduct} >GIÁ</Text>
        <TextInput
          style={[
            styles.inputProduct,
            focusedPrice ? styles.focusedInput : {} // Nếu input đang focus thì sẽ có viền đỏ
          ]}
          onFocus={() => setFocusedPrice(true)}
          onBlur={() => setFocusedPrice(false)}
          placeholder="GIÁ"
          value={price}
          onChangeText={text => setPrice(text)}
          // keyboardType="numeric"
        />
        <Text style={styles.textInputProduct} >SỐ LƯỢNG</Text>
        <TextInput
          style={[
            styles.inputProduct,
          focusedQuantity ? styles.focusedInput : {} // Nếu input đang focus thì sẽ có viền đỏ
          ]}
          onFocus={() => setFocusedQuantity(true)}
          onBlur={() => setFocusedQuantity(false)}
          placeholder="SỐ LƯỢNG"
          value={quantity}
          onChangeText={text => setQuantity(text)}
          keyboardType="numeric"
        />
        </View>
        <TouchableOpacity onPress={handleChooseImage}>
          <View style={{ alignItems: 'center' }}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, marginBottom: 10 }}
              />
            )}
              <Text style={styles.imagePicker}>Chọn ảnh sản phẩm</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleAddProduct}
          style={styles.addProductButton}
        >
          <Text style={styles.addProductText}>Thêm sản phẩm</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>

      <View style={styles.notifyContainer}>
                  {showSuccess ? (
                      <View style={styles.successMessage}>
                          <Image 
                              source={require('../assets/successComponent.png')}
                              style={styles.component1Icon}
                              contentFit="cover"
                          />
                          <Text style={styles.component1Text}>Thêm sản phẩm thành công</Text>
                          <TouchableOpacity 
                              onPress={handleReset}
                              style={styles.closeButton}

                          >
                              <Text style={styles.closeButtonText}>Close</Text>
                          </TouchableOpacity>
                      </View>
                  ) : null}
      </View>
    </View>
    </ImageBackground>
  );
};

export default AddProductScreen;
