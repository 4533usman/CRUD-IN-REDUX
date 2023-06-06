import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../feathers/userdetailSlice'
import { useNavigate ,Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUser());
  }, []);
  if (loading) {
    return <h1 className='my-5 text-center'>loading...</h1>
  }
  else {


    return (
      <div className='container'>
        <h1 className='text-center text-muted my-4'>Our Users</h1>

        {/* Displaying The User */}

        {user.map((ele) => (
          < div key = {ele.id} className="card my-2" >
            <div className="card-header">
              <b>Name: </b> {ele.name}
            </div>
            <div className="card-body">
              <p className="card-title"><b>Email Address: </b> {ele.email}</p>
              <p className="card-text"><b>Age: </b> {ele.age}</p>
              <p className="card-text"><b>Gender: </b> {ele.gender}</p>
              <Link  className="btn btn-primary" onClick={()=>dispatch(deleteUser(ele.id))}>Del</Link>
              <Link to={`/edit/${ele.id}`} className="btn btn-primary mx-2">Edit</Link>

            </div>
          </div>
        ))}

      </div>
    )
  }
}


export default Home