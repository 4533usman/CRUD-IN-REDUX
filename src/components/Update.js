import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../feathers/userdetailSlice';

const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, loading } = useSelector((state) => state.app)
    const [update, setUpdate] = useState()
    useEffect(() => {
        if (id) {
            const singleUser = user.filter((ele) => ele.id === id);
            setUpdate(singleUser[0]);
        }
    }, []);
    // console.log(update);
    //onChange Handler
    const editData = (e) =>{
        setUpdate({...update , [e.target.name]: e.target.value});
        // console.log(update);
    }
    //form submission
    const handleSubmit = (e) => { 
        e.preventDefault();
        dispatch(updateUser(update));
        navigate("/");
    }
    return (
        <form className='w-50 mx-auto'
         onSubmit={handleSubmit}
        >
            <div className="mb-3">
                <label className="form-label">Enter Name</label>
                <input type="text" name='name' className="form-control"
                value={update && update.name}
                onChange={editData} 
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Enter E-mail</label>
                <input type="email" name='email' className="form-control"
                value={update && update.email}
                onChange={editData} 
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Age</label>
                <input type="text" name='age' className="form-control"
                value={update && update.age}
                onChange={editData}  
                />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="Male"
                checked ={update && update.gender ===   'Male'}
                onChange={editData} 
                />
                <label className="form-check-label">
                    Male
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" value="Female"
                checked ={update && update.gender === "Female"}
                onChange={editData}  
                />
                <label className="form-check-label">
                    Female
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Update