// useUserId.js
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default useUserId = () => {
  const [userId, setUserId] = useState(null);

  const getUserId = async () => {
    const id = await AsyncStorage.getItem('userId');
    setUserId(id);
  }
  
  useEffect(() => {
    
    getUserId();
  }, []);
  console.log("Id ở trong useUserId: ", userId);
  return userId;
}