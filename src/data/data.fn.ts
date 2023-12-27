import { AxiosRequestConfig } from "axios";
import axios from "../utils/axios"


//  REQUESTS

export const getRequest = (url: string, config?: AxiosRequestConfig) =>
  axios.get(url, config).then((res) => res.data);

export const postRequest = <T>(
  url: string,
  payload: T,
  config?: AxiosRequestConfig
) => axios.post(url, payload, config)

export const patchRequest = <T>(
  url: string,
  payload: T,
  config?: AxiosRequestConfig
) => axios.patch(url, payload, config)

export const putRequest = <T>(
  url: string,
  payload: T,
  config?: AxiosRequestConfig
) => axios.put(url, payload, config)

export const deleteRequest = (url: string, config?: AxiosRequestConfig) =>
  axios.delete(url, config)
