import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../feathers/userdetailSlice';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const [users , setUser] = useState({});
    const Navigate = useNavigate()
    const getUserDetails = (e) =>{
        setUser({...users ,[e.target.name] : e.target.value})
    }
    const dispatch = useDispatch() ;
    //Form Submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log("User...",users)
        dispatch(createUser(users));
        Navigate("/")
    }
    return (
        <>
            <div className='text-center my-3'><h2>Adduser</h2></div>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Enter Name</label>
                    <input type="text" name='name' className="form-control" onChange={getUserDetails} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter E-mail</label>
                    <input type="email" name='email' className="form-control" onChange={getUserDetails} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Age</label>
                    <input type="text" name='age' className="form-control" onChange={getUserDetails} />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="Male" onChange={getUserDetails} />
                    <label className="form-check-label">
                         Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="Female" onChange={getUserDetails} />
                    <label className="form-check-label">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Adduser