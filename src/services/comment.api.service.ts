import axios, {AxiosResponse} from "axios";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {}
});

const commentApiService ={
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get("/comments");
    }
}

export {
    commentApiService
}