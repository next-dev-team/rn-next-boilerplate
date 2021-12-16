import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: any) => {
  try {
    const jsonVal = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonVal);
  } catch (e) {
    console.log('error setting state');
  }
};

export const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    throw 'value not found';
  } catch (error) {
    return undefined;
  }
};

export const removeItem = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
