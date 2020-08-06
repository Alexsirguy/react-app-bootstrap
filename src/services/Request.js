import AuthServices from "./AuthServices";

const axios = require("axios").default;

axios.defaults.baseURL = 'https://moonsat.org/eyen/public/';


export const API_BASE_URL = "https://moonsat.org/eyen/public/"
    //export const API_BASE_URL = "http://localhost/api.eyen/public/"

export const FILE_BASE_URL = "https://moonsat.org/eyen/public/files/"

class Request {

    constructor() {
        const auth = new AuthServices()
        axios.defaults.headers.common['Authorization'] = "bearer " + auth.getToken();
    }

    async post(url, data) {
        try {
            return await axios.post(url, data)
        } catch (err) {
            console.log(err);
        }
    }

    async put(url, data) {
        try {
            return await axios.put(url, data);
        } catch (err) {
            console.log(err)
        }
    }

    async get(url) {
        try {
            return await axios.get(url)
        } catch (err) {
            console.log(err)
        }

    }

    async delete(url) {
        try {
            return await axios.delete(url)
        } catch (err) {
            console.log(err)
        }
    }
}

export default Request