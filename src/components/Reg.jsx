import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProviders';

const Reg = () => {
    const {createUser} = useContext(AuthContext)
    const [update,setUpdate] = useState({})
    const handelOnchange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value 
        setUpdate(newValue)
    }

    const hadelReg = e =>{
        e.preventDefault()
        if(update.password !== update.password1){
            
            return
        }
        createUser(update.email,update.password)
        .then(result => {
            const user = result.user
            
            console.log(user)
        })
        .catch(err =>{
            const errorMessage = err.message
         
            console.log(errorMessage)
        }) 
    }


    return (
        <div className='conatiner mx-auto text-center'>
        <h2 className='mt-10 text-4xl'>Registration</h2>

        <form  onSubmit={hadelReg}>
            <input name='name' onChange={handelOnchange} type="text" placeholder="Name" className="p-2 border-gray border-2 mt-5 input w-full max-w-xs border-inherit"  /> <br />

            <input name='email' onChange={handelOnchange} type="email" placeholder="Email" className="p-2 border-gray border-2 mt-5 input w-full max-w-xs border-inherit"  /> <br />

            <input name='password' onChange={handelOnchange} type="password" placeholder="Password" className="p-2 border-gray border-2 mt-5 input w-full max-w-xs border-inherit"  /> <br />

            <input name='password1' onChange={handelOnchange} type="password" placeholder="Confirm-Password" className="p-2 border-gray border-2 mt-5 input w-full max-w-xs border-inherit"  /> <br />
            
            <Link className='text-red-700' to='/forget'><p className='text-xs mt-2'>Forget Password</p></Link>
            <button type='submit' className="bg-emerald-600 px-3 py-2 text-white mt-5 mx-4 btn btn-outline btn-success">Registration</button>
        </form>
    </div>
    );
};

export default Reg;