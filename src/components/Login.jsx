import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthProviders';

const Login = () => {
    const {LoginUser} = useContext(AuthContext)
    const [update,setUpdate] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.from?.state?.pathname || '/'
   
    const handelOnchange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value 
        setUpdate(newValue)
    }

    const handelLogin = e =>{
        e.preventDefault()
        
        LoginUser(update.email,update.password)
        .then(result =>{
            const user = result.user 
           navigate(from,{replace:true})
        })
        .catch(err =>{
            const errorMessage = err.message
        })
    }

    return (
        <div className='conatiner mx-auto text-center'>
        <h2 className='mt-10 text-4xl'>Login</h2>

        <form onSubmit={handelLogin}>
            
            <input onChange={handelOnchange} name='email' type="email" placeholder="Email" className="p-2 border-gray border-2 mt-5 input w-full max-w-xs border-inherit"  /> <br />

            <input onChange={handelOnchange} name='password' type="password" placeholder="Password" className="p-2 border-gray border-2 mt-5 input w-full max-w-xs border-inherit"  /> <br />

            <Link className='text-red-700' to='/forget'><p className='text-xs mt-2'>Forget Password</p></Link>
            <button type='submit' className="bg-emerald-600 px-3 py-2 text-white mt-5 mx-4 btn btn-outline btn-success">Login</button>
        </form>
    </div>
    );
};

export default Login;