import { StyleSheet, Dimensions } from 'react-native';

import * as Font from "expo-font";
import Apploading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    'Comfortaa-Regular': require("./assets/fonts/Comfortaa/static/Comfortaa-Regular.ttf"),
    // limelight: require("./assets/fonts/Limelight/Limelight-Regular.ttf"),
    // indie: require("./assets/fonts/Indie_Flower/IndieFlower-Regular.ttf"),
  });

const { height, width } = Dimensions.get('window');
const desiredWidth = width * 0.9;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hidden: {
    // overflow: 'hidden',
    display: 'none',
  },
  container: {
    flex: 1, // 1:1 ratio
    marginTop: 90,
  },
  header: {
    color: '#4B3F3F',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 'auto', // Canh lề bên trái
    marginRight: 'auto', // Canh lề bên phải
  },
  dssp: {
    color: '#4B3F3F',
    fontSize: 15,
    marginTop: 40,
    marginLeft: 10,
    marginBottom: 20,
  },
  contentContainer: {
      height: 570,
  },

  // tabs.js
  // tabsText: {
  //   color: focused ? '#e32f45' : '#748c94',
  //   fontSize: 15,
  // },

  listProduct: {
    width: desiredWidth,
    height: 120,
    backgroundColor: '#d9d9d9',
    marginVertical: 5,
    // marginHorizontal: 10,
    marginLeft: 'auto', // Canh lề bên trái
    marginRight: 'auto', // Canh lề bên phải
    borderRadius: 10,
  },
  productImage: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    width: 100,
    height: 100,
    marginRight: 10,
    marginTop: 10,
  },
  nameProduct: {
    width: 230,
    color: '#B51818',
    fontSize: 20, 
    fontWeight: 'bold', 
    marginLeft: 10, 
    marginTop: 10,
    marginBottom: 10,
  },  
  describeProduct: {
    textAlign: 'justify',
    fontSize: 16, 
    marginLeft: 10,
    marginRight: 10, 
    // marginTop: 10,
    lineHeight: 22,
    // fontVariant: ["lining-nums"],
    fontWeight: "400",

  }, 
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 5,
  },
  stockButton: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 14,
    marginHorizontal: 5,
  },
  stockButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
  }, 
  stockCount: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: .25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBarElement: {
    alignItems: 'center', 
    justifyContent: 'center', 
    top: 0,
  },

    // CategoryScreen
    category: {
        marginTop:250,
        marginBottom: 250,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryTouch: {
        width: desiredWidth,
        height: 70,
        backgroundColor: '#CF4F4F',
        marginLeft: 'auto', // Canh lề bên trái
        marginRight: 'auto', // Canh lề bên phải'
        marginTop:'auto',
        marginBottom:'auto',
        borderRadius: 10,
    },
    categoryText: {
        color: '#52B6DF',
        fontSize: 20, 
        fontWeight: 'bold', 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto', 
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    // AddProductScreen
    formInputProduct: {
        marginTop: 50,
        width: desiredWidth,
        marginLeft: 'auto', // Canh lề bên trái
        marginRight: 'auto', // Canh lề bên phải

    },
    inputProduct: {
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      height: 43,
      margin: 12,
      borderRadius: 15,
      padding: 10,
      marginBottom: 20,
      elevation: 20,
    },
    focusedInput: {
      borderColor: 'red',
      borderWidth: 2,
      height: 60,
    },
    textInputProduct: {
        color: '#100E0E',
        fontSize: 16,
        fontWeight: 'regular',
        letterSpacing: 0.3,
        marginLeft: 12,
    },
    imagePicker: {
      height: 60,
      width: 270,
      borderRadius: 10,
      marginHorizontal: 10,
      paddingHorizontal: 24,
      paddingVertical: 12,
      backgroundColor: '#fff',
      color: '#52B6DF',
      fontSize: 20,
      fontWeight: 'regular',
      letterSpacing: 0.3,
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
      marginTop: 10,
      marginBottom: 30,
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Canh lề giữa
      textAlignVertical: 'center', // Canh lề giữa
      borderWidth: 2,
      borderColor: '#52B6DF',
    },
    addProductButton: {
      width: 200,
      height: 60,
      backgroundColor: '#CF4F4F',
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
      marginTop: 10,
      borderRadius: 10,
      marginBottom: 100,
    },
    addProductText: {
      color: '#52B6DF',
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    notifyContainer: {
      position: 'absolute',
      top: 0, 
      left: 0,
      right: 0,
      bottom: 0
    },
    successMessage: {
      width: 340,
      height: 400,
      backgroundColor: '#fff',
      paddingHorizontal: 10, 
      paddingVertical: 20,
      borderRadius: 15,
      marginVertical: 10,
      position: 'absolute',
      left: '50%',
      top: 170,
      marginLeft: -170, // Đưa về giữa màn hình
    },
    component1Icon: {
      width: 150,
      height: 150,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      marginBottom: 20,
    },
    component1Text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      marginBottom: 20,
    },
    closeButton: {
      width: 250,
      height: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#52B6DF',
    },
    closeButtonText: {
      color: '#52B6DF',
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },

    // DetailProductScreen
    detailHeader: {
      color: '#4B3F3F',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
    },
    productDetail: {
      width: desiredWidth,
      height: 525,
      backgroundColor: '#C0C9C1',
      marginVertical: 10,
      marginTop: 70,
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
      borderRadius: 10,
    },
    discriptionHeader: {
      color: '#4B3F3F',
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 10,
      marginBottom: 10,
    },
    discriptionContainer: {
      width: 320, 
      height: 320,  
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
    },
    
    // DeleteProductScreen
    contentContainerDelete: {
      marginTop: 50,
      height: 650,
    },
    
    deleteContainer: {
      position: 'absolute', 
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
      // justifyContent: 'center',
      // alignItems: 'center',
      // textAlign: 'center', // Canh lề giữa
      // textAlignVertical: 'center', // Canh lề giữa

    },
    productInfo: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Canh lề giữa
      textAlignVertical: 'center', // Canh lề giữa
      
      position: 'absolute',
      marginLeft: 'auto', // Đưa về giữa màn hình
      marginRight: 'auto', // Canh lề bên phải
      paddingLeft: 20,
      marginTop: 'auto',
      marginBottom: 'auto',
      paddingTop: 150,
    },
    buttonDeleteScreen: {
        width: 120,
        height: 60,
        backgroundColor: '#d9d9d9',
        margin: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#52B6DF',
    },
    buttonDeleteText: {
        color: '#000',
        fontSize: 20, 
        fontWeight: 'bold', 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto', 
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    // AccountScreen
    profileLayout: {
      marginTop: 20,
      marginHorizontal: 15,
      paddingVertical: 15,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: '#F1F5F9'
    },
    imageProfile: {
      width: 70,
      height: 70,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: '#F1F5F9',
      
    },
    welcome: {
      marginTop: 'auto', // Canh lề bên trái
      marginBottom: 'auto', // Canh lề bên phải
      marginLeft: -80,
    },
    welcomeText: {
      lineHeight: 30,
      color: '#64748B',
      fontSize: 17,
    },
    nameUser: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 30,
      letterSpacing: 0.2,
    },
    logout: {
      width: 45,
      height: 45,
      marginTop: 'auto', // Canh lề bên trái
      marginBottom: 'auto', // Canh lề bên phải
      marginRight: 10,
      borderWidth: 2,
      borderColor: '#F1F5F9',
      borderRadius: 50,
      backgroundColor: '#F1F5F9',
    },
    logoutIcon: {
      marginTop: 'auto', // Canh lề bên trái
      marginBottom: 'auto', // Canh lề bên phải
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    accountItems: {
      marginTop: 20,
      marginHorizontal: 15,
      paddingVertical: 15,

    },
    iconAccount: {
      width: 45,
      height: 45,
      marginTop: 'auto', // Canh lề bên trái
      marginBottom: 'auto', // Canh lề bên phải
      marginRight: 10,
      borderRadius: 50,
      backgroundColor: '#DCF0F9',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Canh lề giữa
      textAlignVertical: 'center', // Canh lề giữa

    },
    iconPassword: {
      width: '17%',
      height: '100%',
      marginTop: 'auto', // Canh lề bên trên
      marginBottom: 'auto', // Canh lề bên dưới
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Canh lề giữa
      textAlignVertical: 'center', // Canh lề giữa
    },
    accountItemsText: {
      position: 'absolute',
      left: 60,
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 30,
      letterSpacing: 0.2,
      marginTop: 21,
    },

    // CreateAccountScreen
    backgroundLinearGradient: {
      borderStyle: "solid",
      flex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      overflow: "hidden",
    },
    createAccountContainer: {
      backgroundColor: "#89D765",
      marginTop: -250,
      height: 700,
      width: width,
      top: "50%",
      position: "absolute",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    createAccountForm: {
      marginTop: 50,
      width: desiredWidth,
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
    },
    createText: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 30,
    },
    createAccountInputContainer: {
      marginTop: 20,
    },
    createAccountText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'regular',
      letterSpacing: 0.3,
      marginLeft: 12,
    },
    createAccountInput: {
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      height: 43,
      margin: 12,
      borderRadius: 15,
      marginBottom: 20,
      elevation: 20,
    },
    createAccountButtonContainer: {
      marginTop: 20,
    },
    createAccountButton: {
      width: 240,
      height: 45,
      backgroundColor: '#1D3133',
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
      marginTop: 10,
      borderRadius: 15,
      marginBottom: 100,
    },
    createAccountButtonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
      letterSpacing: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },

    // LoginScreen
    LoginText: {
      color: '#C18740',
      letterSpacing: 0.5,
      fontSize: 17,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
    },

    // EditProfileScreen
    EditProfileForm: {
      marginTop: 10,
      width: desiredWidth,
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
    },
    EditProfileFormRow: {
      marginTop: 10,
    },
    updateProfileText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'regular',
      letterSpacing: 0.3,
      marginLeft: 12,
    },
    updateButtonContainer: {
      marginTop: 20,
    },
    updateButton: {
      width: 240,
      height: 55,
      backgroundColor: '#52B6DF',
      marginLeft: 'auto', // Canh lề bên trái
      marginRight: 'auto', // Canh lề bên phải
      marginTop: 10,
      borderRadius: 10,
      marginBottom: 100,
    },
    updateButtonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
      letterSpacing: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },

    gender: {
      width: 80,
      height: 45,
      backgroundColor: '#fff',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      borderRadius: 15,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Canh lề giữa
      textAlignVertical: 'center', // Canh lề giữa
      borderWidth: 2,
      borderColor: '#52B6DF',
    },
    genderSelected: {
      width: 80,
      height: 45,
      backgroundColor: '#52B6DF',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      borderRadius: 15,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center', // Canh lề giữa
      textAlignVertical: 'center', // Canh lề giữa
      borderWidth: 2,
      borderColor: '#52B6DF',
    },
    EditProfileFormColumn: {
      marginTop: 10,
    },
    imageEditProfile: {
      width: 140,
      height: 140,
      borderRadius: 70,
      borderWidth: 3,
      borderColor: '#F1F5F9',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 30,
      marginBottom: 20,
    },
    inputEditProfile: {
      backgroundColor: '#F1F5F9',
      opacity: 0.7,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      height: 43,
      margin: 12,
      borderRadius: 15,
      padding: 10,
      marginBottom: 20,
      elevation: 20,
    },

    // SearchScreen
    searchForm: {
      width: width,
      flexDirection: 'row',
      justifyContent: 'center',
      height: 70,
      marginTop: 30,
    },
    searchContainer: {
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      height: 50,
      marginLeft: 15,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },  
    searchIcon: {
      marginRight: 5,
      opacity: 0.6,
    },
    cancelIcon: {

    },
    searchInput: {
      width: '80%',

    },
    noResult: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      marginBottom: 20,
    },

    textCenterBold: {
      textAlign: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 30,
    },
}); 


export default styles;