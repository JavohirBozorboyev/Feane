import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductList from '../../components/product/productList/ProductList'



function MenuBox() {
    const [data, setdata]=useState([]);
    
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        .then(res=>{
            setdata(res.data.meals)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }, [])

   
    
    
    
    
    
    return (
        <div className='container'>
            <ProductList data={data} />
        </div>
    )
}

export default MenuBox
