import React, {FC} from 'react';

export interface IProductProps{
    id?: number,
    title?: string,
    description?: string,
    price?:number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?: string,
    thumbnail?: string,
    images?: string[]

}

export type IProductTypeProps=IProductProps & {children?:React.ReactNode}
const Product:FC<IProductTypeProps> = ({id,title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
    return (
        <div>
            <h2>{id}.{title}.{price}.{brand}</h2>
            <h4>{discountPercentage}</h4>
            <h4>{rating}</h4>
            <h4>{stock}</h4>
            <h4>{category}</h4>
            <h4>{thumbnail}</h4>
            <p>{description}</p>
            <ul>
                {
                    images?.map((image:string,index) =><li key={index}>{image}</li>)
                }
            </ul>
        </div>
    );
};

export default Product;