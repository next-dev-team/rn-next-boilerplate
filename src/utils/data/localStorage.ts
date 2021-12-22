import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';

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

export type MMKVOption = {
  id: string;
  cryptKey: string;
};

const { AppModule } = NativeModules;

export const MMKVStorage = {
  setString: async (key: string, value: string, option?: MMKVOption) => {
    const res: boolean = await AppModule.mmkvSetString(
      key,
      value,
      option?.id ?? undefined,
      option?.cryptKey ?? undefined
    );
    return res;
  },
  setNumber: async (key: string, value: number, option?: MMKVOption) => {
    const res: boolean = await AppModule.mmkvSetNumber(
      key,
      value,
      option?.id ?? undefined,
      option?.cryptKey ?? undefined
    );
    return res;
  },
  setBoolean: async (key: string, value: boolean, option?: MMKVOption) => {
    const res: boolean = await AppModule.mmkvSetBoolean(
      key,
      value,
      option?.id ?? undefined,
      option?.cryptKey ?? undefined
    );
    return res;
  },
  getString: async (key: string, option?: MMKVOption) => {
    const res: string | null = await AppModule.mmkvGetString(
      key,
      option?.id ?? undefined,
      option?.cryptKey ?? undefined
    );
    return res;
  },
  getNumber: async (key: string, option?: MMKVOption) => {
    const res: number = await AppModule.mmkvGetNumber(key, option?.id ?? undefined, option?.cryptKey ?? undefined);
    return res;
  },
  getBoolean: async (key: string, option?: MMKVOption) => {
    const res: boolean = await AppModule.mmkvGetBoolean(key, option?.id ?? undefined, option?.cryptKey ?? undefined);
    return res;
  },
  getAllKeys: async (option?: MMKVOption) => {
    const res: Array<string> = await AppModule.mmkvGetAllKeys(option?.id ?? undefined, option?.cryptKey ?? undefined);
    return res;
  },
  clearAll: async (option?: MMKVOption) => {
    const res: Array<string> = await AppModule.mmkvClearAll(option?.id ?? undefined, option?.cryptKey ?? undefined);
    return res;
  },
  delete: async (key: string, option?: MMKVOption) => {
    const res: boolean = await AppModule.mmkvDelete(key, option?.id ?? undefined, option?.cryptKey ?? undefined);
    return res;
  },
};
