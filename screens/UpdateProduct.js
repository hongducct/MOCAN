import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, ImageBackground, 
  ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../style';

import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';

const UpdateProduct = () => {
    const route = useRoute();
    const { productId } = route.params;
    console.log('Received product ID:', productId);

    const [focusedName, setFocusedName] = useState(false);
    const [focusedDescription, setFocusedDescription] = useState(false);
    const [focusedPrice, setFocusedPrice] = useState(false);
    const [focusedQuantity, setFocusedQuantity] = useState(false);

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null); // Lưu đường dẫn ảnh

    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        axios.get(`http://${SERVER_IP}:${SERVER_PORT}/products/${productId}`)
        .then(response => {
            console.log('API response:', response.data);
            setProduct(response.data); // Lưu danh sách sản phẩm vào state.
            console.log('Product1 : ', product);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setQuantity(response.data.quantity);
            console.log('quantity of data: ', response.data.quantity);
            setImage(response.data.image);
            setProductName(response.data.product_name);
            setImage(response.data.image);
            console.log('quantity: ', product.quantity);
        })
        .catch(error => {
          console.error('Lỗi yêu cầu API:', error);
        });
    }, []);

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

    const handleUpdateProduct = () => {
        const productData = {
          product_name: productName,
          description: description,
          price: price,
          quantity: parseInt(quantity),
          image: image,
        };
      
        axios
          // .put(`http://  
            .put(`http://${SERVER_IP}:${SERVER_PORT}/update-product/${productId}`, productData)
            .then(response => {
                setShowSuccess(true);
                console.log(showSuccess);
                console.log('Trước khi gọi callback onAddSuccess');
                // onAddSuccess(); // Callback để cập nhật lại danh sách sản phẩm
                console.log('Sau khi gọi callback onAddSuccess'); 
                }
            )
            .catch(error => {
                console.error('Lỗi yêu cầu API:', error);
            }
        );
    }

    const handleReset = () => {
        setProductName(product.product_name);
        setDescription(product.description);
        setPrice(product.price);
        setQuantity(product.quantity);
        setImage(product.image);
        setShowSuccess(false);
    }


    return (
        <LinearGradient
            style={styles.backgroundLinearGradient}
            locations={[0, 0.8]}
            colors={["#d0e4b6", "#E4B6B6"]}
        >
            <View style={styles.container}>
                <View style={[styles.formInputProduct,{opacity: showSuccess ? 0.2 : 1}]}>
                <ScrollView>
                <View>
                <Text style={styles.textInputProduct} >TÊN SẢN PHẨM</Text>
                <TextInput
                    style={[
                    styles.inputProduct,
                    focusedName ? styles.focusedInput : {} // Nếu input đang focus thì sẽ có viền đỏ
                    ]}
                    placeholder={product.product_name}
                    onFocus={() => setFocusedName(true)}
                    onBlur={() => setFocusedName(false)}
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
                    placeholder={product.description}
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
                    placeholder={product.price}
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
                    placeholder={`${product.quantity}`}
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
                    onPress={handleUpdateProduct}
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
                            <Text style={styles.component1Text}>Cập nhật sản phẩm thành công</Text>
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
        </LinearGradient>
    )
}

export default UpdateProduct;