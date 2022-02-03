import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './axios';

type IConfig<T> = ({ formData?: any } & AxiosRequestConfig<T>) | undefined;

export async function requestAxios<T>(url = '', config?: IConfig<T>) {
  const axiosConfig = {
    ...config,
    formData: undefined,
    method: 'GET',
  } as IConfig<T>;

  try {
    if (axiosConfig?.method === 'post' || axiosConfig?.method === 'POST') {
      const resPost = await axiosInstance?.post<T>(url, axiosConfig?.formData, axiosConfig);
      console.log('request success', resPost);
      return resPost;
    } else {
      delete axiosConfig?.formData;
      const resGet = await axiosInstance?.get<T>(url, axiosConfig);
      console.log('request success', resGet?.data);
      return resGet;
    }
  } catch (error) {
    console.error('request error', error);
    return error as undefined;
  }
}
