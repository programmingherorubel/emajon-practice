import React from 'react';


const SingleOrderProduct = ({singleData,handelRemoveCart}) => {
    
    return (
        <div className='flex justify-between content-center shadow p-3 mt-14 mb-3'>
            <div className='flex justify-start'>
                <img src={singleData.img} className='w-24 ' alt="" />
                <div className='m-4'>
                    <h4 className='text-2xl'>{singleData.name}</h4>
                    <h5 className='text-xl'>Price:$ {singleData.price}</h5>
                    <h5 className='text-xl'>Shiping Charge:$ {singleData.shipping}</h5>
                </div>
            </div>
            <i onClick={()=>handelRemoveCart(singleData.id)} class="font-semibold text-white  h-10 p-3 bg-red-600 rounded-full fa-solid fa-trash"></i>
        </div>
        
    );
};

export default SingleOrderProduct;