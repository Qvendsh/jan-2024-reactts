import axios, {AxiosResponse} from "axios";
import {IPostmodel} from "../models/IPostmodel";

let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {}
});

const postApiService ={
    getAllPosts: (): Promise<AxiosResponse<IPostmodel[]>> =>{
        return axiosInstance.get("/posts");
    }
}

export {
    postApiService
}