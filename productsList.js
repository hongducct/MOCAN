import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {Text, View, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const productsList = () => {
return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
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
                <Image source={require('./assets/TRÀ-SƠN-MẬT-0591OK.png')} style={styles.productImage} />
            </View>

            
            </ScrollView>
);
}
export default productsList;