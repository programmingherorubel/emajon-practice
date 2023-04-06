import React, { useState } from 'react';
import SingleOrderProduct from './SingleOrderProduct';
import { useLoaderData } from 'react-router-dom';
import ReviewOrder from './ReviewOrder';
import { removeFromDb } from './fakeData/fakedb';


const Orders = () => {
    const data = useLoaderData()
    const [info,setInfo] = useState(data)

    const handelRemoveCart = (id)=>{
        const updateData = info.filter(deleteProduct => deleteProduct.id !== id)
        setInfo(updateData)
        removeFromDb(id)
    }

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className='md:col-span-8 sm:col-span-7 '>
                    {
                        info.map(singleData => <SingleOrderProduct handelRemoveCart={handelRemoveCart} key={singleData.length} singleData={singleData} />)
                    }
                </div>
                <div className='md:col-span-4 sm:col-span-5 px-8'>
                    <ReviewOrder cart={info} />
                </div>
            </div>
        </div>
    );
};

export default Orders;