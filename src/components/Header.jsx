import React from 'react';
import logo from '../img/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-sky-950'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center p-1.5'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='menu'>
                        <ul className='flex gap-x-6 flex-wrap'>
                            <li className='font-bold text-white'> <Link to='/' className=''>shop</Link></li>
                            <li className='font-bold text-white'> <Link to='/orders' className='review'>Order Review</Link></li>
                            <li className='font-bold text-white'> <Link to='/inventory' className=''>Inventory</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;