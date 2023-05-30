import React from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../components/hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
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
        <div className='mx-3'>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle heading={"WANNA ADD MORE?"}
                subHeading={"My Cart"}
            ></SectionTitle>
            <div className="">
                <div className="flex justify-between  items-center my-2 px-2">
                    <h2 className='md:text-3xl'>Total Items: {cart.length} </h2>
                    <h2 className='md:text-3xl'>Total Price: ${total}</h2>
                    <button className="btn md:btn-sm btn-xs btn-warning">Pay</button>
                </div>
                <div className="">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>

                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {/* row 1 */}
                                {
                                    cart.map((item, index) => <tr key={item._id}>
                                        <th>
                                            <label>
                                                <p>{index + 1}</p>
                                            </label>
                                        </th>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                            <div>
                                                <div className="font-bold">{item.name}</div>

                                            </div>

                                        </td>

                                        <td>${item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item)} className='btn btn-error'><FaTrashAlt className='text-xl text-white'></FaTrashAlt></button>
                                        </th>
                                    </tr>)
                                }



                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;