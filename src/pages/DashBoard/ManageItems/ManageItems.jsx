import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../components/hooks/useMenu';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
const [axiosSecure] =useAxiosSecure()
    const handleUpdate =(item)=>{

    }
    const handleDelete=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                .then(res=>{
                    console.log('deleted res',res.data)
                    refetch()
                    if(res.data.deletedCount){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })


              
            }
          })
    }
    return (
        <div>
            <SectionTitle subHeading={"MANAGE ALL ITEMS"} heading={"Hurry Up!"}></SectionTitle>
            <div className="w-11/12 mx-auto ">
                <h2 className='text-3xl font-medium uppercase'>Total Items: {menu.length}</h2>
                {/* table */}
                <div className=" ">
                    <div  className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead className='bg-[#D1A054]'>
                                <tr className='uppercase ' >
                                    <th>
                                        
                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                   
                                    
                                </tr>
                            </thead>
                            {
                        menu.map((item, index)=>
                            <tbody key={item._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                    </td>

                                    <td>
                                   <div className="font-bold">{item.name}</div>
                                    </td>
                                    <td>
                                   <div className="font-medium">{item.category}</div>
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <th>
                                    <button onClick={() => handleUpdate(item)} className='btn bg-[#D1A054] btn-warning'><FaRegEdit className='text-xl text-white'></FaRegEdit></button>
                                    </th>
                                    <th>
                                    <button onClick={() => handleDelete(item)} className='btn btn-error'><FaTrashAlt className='text-xl text-white'></FaTrashAlt></button>
                                    </th>
                                </tr>
                                
                                
                            </tbody>
                            )}
                           

                        </table>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default ManageItems;