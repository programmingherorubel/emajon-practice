import React from 'react';

const Cart = ({cart}) => {
    let totalPrice = 0
    let shiping = 0
    let quantity = null
    
        for (let product of cart){
            product.quantity = product.quantity || 1
            totalPrice = totalPrice + product.price * product.quantity
            shiping = parseInt(shiping + product.shipping)
            quantity = quantity + product.quantity
        }
    const tax = totalPrice * 7 / 100 
    const grandTotal = totalPrice + shiping + tax 
        
    return (
        <div className='p-4'>
            <h5 className='mt-2 text-stone-950 text-center font-medium text-2xl'>Order Summary </h5><hr />
            <h6 className='mt-2 text-stone-950 font-medium text-xl'>selected Product:{quantity}</h6>
            <h6 className='mt-2 text-stone-950 font-medium text-xl'>Total Price: <b>$ {totalPrice.toFixed(2)}</b></h6>
            <h6 className='mt-2 text-stone-950 font-medium text-xl'>Total Shiping Charge:$ {shiping}</h6>
            <h6 className='mt-2 text-stone-950 font-medium text-xl'>Tax Product: $ {tax.toFixed(2)}</h6>
            <h3 className='mt-2 text-stone-950 font-medium text-2xl'>Grand Total ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;