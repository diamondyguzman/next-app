import React from 'react';
import {products} from '../../data/productData';
import {useRouter} from 'next/router';
import DetailStyles from '../../styles/Details.module.css';
export default function ProductViewPage(){
    const router = useRouter();
    const {productId} = router.query;
    const currentProduct = products.find(product => product.id === productId);


    if(!currentProduct){
        return (
            <>
                <h1>Sorry, we couldnt find that product</h1>
            </>
        );
    }

    return(
        <>
            <div className={DetailStyles.detailInfo}>
                <img  src={`/images/${currentProduct.image}`}/>
           
                <div className={DetailStyles.desc}>
                    <h1>{currentProduct.name}</h1>

                    <p>{currentProduct.description}</p>
                </div>
            </div>
        </>
    )
}