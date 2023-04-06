import React, { useEffect, useState } from 'react';
import Product from './Product'
import Cart from './Cart/Cart';
import { addToDb, getShoppingCart } from './fakeData/fakedb';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cartProduct,setCartProduct]=useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const cartHandeler = (cartProducts)=>{
        
        const data = [...cartProduct,cartProducts]
        setCartProduct(data)
        addToDb(cartProducts.id)
    }
   
    useEffect(()=>{
        const saveCart = []
        const storeCart = getShoppingCart()
        
        for(const id in storeCart){
            const addProduct = products?.find(singleProduct => singleProduct.id === id)
                if(addProduct){
                    const quantity = storeCart[id]
                    addProduct.quantity = quantity
                    saveCart.push(addProduct)
                }
            setCartProduct(saveCart)
        }
    },[products])

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className='md:col-span-9'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                        {
                            products.map(product => <Product cartHandeler={cartHandeler} key={product.length} product={product}/>)
                        }
                    </div>
                </div>
                <div className='md:col-span-3'>
                    <Cart cart={cartProduct} cartHandeler={cartHandeler} />
                </div>
            </div>
        </div>
    );
};

export default Shop;

// grid md:grid-cols-3 sm:grid-cols-2  gap-10