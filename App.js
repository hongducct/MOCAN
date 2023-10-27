import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tabs';
import styles from './style';
import { ProductProvider } from './ProductContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DetailProduct from './screens/DetailProduct';
import AddProductScreen from './screens/AddProductScreen';
import DeleteProduct from './screens/DeleteProductScreen';
import UpdateProductScreen from './screens/UpdateProductScreen';
import UpdateProduct from './screens/UpdateProduct';
import CategoryScreen from './screens/CategoryScreen';
import SearchScreen from './screens/SearchScreen';
import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';

import EditProfile from './screens/AcountScreenList/EditProfile';
import EditAccount from './screens/AcountScreenList/EditAccount';
import Setting from './screens/AcountScreenList/Setting';
import About from './screens/AcountScreenList/About';
import CreateAccount from './screens/AcountScreenList/CreateAccount';

import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <ProductProvider> */}
      <Stack.Navigator
          screenOptions={{ 
            headerShown: true,
            headerTitleAlign: 'center',
            headerTintColor: '#2e64e5',
            headerBackAccessibilityLabel: 'Back',
            headerBackImage: () => (
              <View style={{ marginLeft: 15 }}>
                <Icon
                  name="arrow-back-ios"
                  size={25}
                  color="#2e64e5"
                />
              </View>
            ),
            headerTransparent: true,
            headerStyle: {
              height: 100,
            },           
          }}
      >

        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}  />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
        <Stack.Screen name="DeleteProductScreen" component={DeleteProduct} />
        <Stack.Screen name="UpdateProductScreen" component={UpdateProductScreen} />
        <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="EditAccount" component={EditAccount} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
          
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false }}/>
      </Stack.Navigator>
    {/* </ProductProvider> */}
    </NavigationContainer>
  );
}


