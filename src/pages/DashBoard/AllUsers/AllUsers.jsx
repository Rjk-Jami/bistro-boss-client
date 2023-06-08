import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaTrashAlt, FaUserCog, FaUserFriends } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        // const res = await fetch('https://bistro-boss-server-rjk-jami.vercel.app/users')
        // return res.json();
        const  res = await axiosSecure.get("/users")
        return res.data;
    })

    const handleDelete =(user)=>{

    }

    const handleMakeAdmin = (user) =>{
        fetch(`https://bistro-boss-server-rjk-jami.vercel.app/users/admin/${user._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Make Admin ${user.name}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeUser = (user) =>{
        fetch(`https://bistro-boss-server-rjk-jami.vercel.app/users/user/${user._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Make user ${user.name}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <div>
                <p className='text-3xl font-semibold'>Total Users: {users.length}</p>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map((user, index)=>
                            <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            {/* <td>

                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>


                            </td> */}
                            <td>
                                <div>
                                    <div className="font-bold">{user.name}</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-semibold">{user.email}</div>
                                </div>
                            </td>
                            
                            <th>
                                {
                                    user.role === 'admin' ? <button onClick={()=>handleMakeUser(user)}  className=' btn btn-warning '><FaUserCog className='text-xl text-white'></FaUserCog></button> :
                                     <button onClick={()=>handleMakeAdmin(user)}  className=' btn btn-warning '><FaUserFriends className='text-xl text-white'></FaUserFriends></button>
                                }
                            </th>
                            <th>
                            <button  onClick={()=>handleDelete(user)} className='btn btn-error'><FaTrashAlt className='text-xl text-white'></FaTrashAlt></button>

                            </th>
                        </tr>
                        )
                        
                        }
                        


                    </tbody>


                </table>
            </div>

        </>
    );
};

export default AllUsers;