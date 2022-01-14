import React, {useState, useEffect} from 'react'
import './productList.css'
import ProductCart from '../productCart/ProductCart'
import Basket from '../../../pages/basket'





function ProductList({data}) {
    const [products, setProducts]=useState([]);
    
    console.log(data.indexOf(0));
    const addToCart=(item)=>{
        console.log(data);
    }
    
    
    
    return (
        <>
            <div className="p-title">
                <h1>Our Menu</h1>
            </div>
            <div className='list'>
               
                {
                    data.map(item => {
                        
                        return(
                            <ProductCart 
                                key={item.idMeal} 
                                name={item.strMeal}
                                img={item.strMealThumb} 
                                addToCart={addToCart}
                            />
                        )
                    })
                }
                
            </div>
        </>
    )
}

export default ProductList
