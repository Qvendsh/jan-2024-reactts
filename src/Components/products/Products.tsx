import React, {useEffect, useState, FC} from 'react';
import Product, {IProductProps, IProductTypeProps} from "../product/Product";

const Products: FC = () => {

    const [products, setProducts] = useState<IProductTypeProps[]>([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products})=>{

              setProducts(products)
            })
    },[]);


    return (
        <div>
            {
                products.map(({id, title, price, brand, discountPercentage, rating, stock, category, thumbnail, description,images}:IProductTypeProps, )=>(
                    <Product id={id}
                             title={title}
                             price={price}
                             brand={brand}
                             discountPercentage={discountPercentage}
                             rating={rating}
                             stock={stock}
                             category={category}
                             thumbnail={thumbnail}
                             description={description}
                             images={images}
                    />))
            }
        </div>
        );
};

export default Products;