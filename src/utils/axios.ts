import axios from "axios";

export const baseUrl = "https://test.olimjohn.uz/"

const instance = axios.create({
    baseURL: baseUrl + "api/"
})

export default instance 