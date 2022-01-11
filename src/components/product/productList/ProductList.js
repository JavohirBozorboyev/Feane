import React from 'react'
import './productList.css'
import ProductCart from '../productCart/ProductCart'

function ProductList({data}) {
    // console.log(data);
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
                           
                            />
                        )
                    })
                }
                
            </div>
        </>
    )
}

export default ProductList
