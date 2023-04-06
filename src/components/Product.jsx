import React from 'react';

const Product = ({product,cartHandeler}) => {
    const {id,category,name,seller,price,stock,ratings,ratingsCount,img,shipping,quantity} = product

    return (
        
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src={img} alt={name} />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        {ratings}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>

                        <button  onClick={()=>cartHandeler(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                    </div>
                </div>
            </div>

    );
};

export default Product;