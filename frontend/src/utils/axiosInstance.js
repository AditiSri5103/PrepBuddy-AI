import axios from "axios";
import { BASE_URL } from "./apiPaths";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });

instance.interceptors.response.use(
    (res)=>{
        return res;
    },
    (error)=>{
        if(error.response){
            if(error.response?.status===500){
                console.error("Server Error. Please try again later.")
            }
            else if(error.response.status===401){
                window.location.href = "/";
            }
        }
        else if(error.code==="ECONNABORTED"){
            console.log("Request Timeout. Please try again.")
        }
        return Promise.reject(error);
    }
);

export default instance;