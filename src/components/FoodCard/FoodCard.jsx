import React from 'react';

import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAuth from '../hooks/useAuth';

const FoodCard = ({ item }) => {
    const { price, image, recipe, name, _id } = item
    const { user } = useAuth()
    const [cart, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation();
    
    const handleAddToCard = (item) => {
        // console.log(item) 
        if (user && user.email) {
            const cartItem = {
                menuItemID : _id,
                name,
                image,
                price,
                email: user.email
            }
            fetch("https://bistro-boss-server-rjk-jami.vercel.app/carts", {
                method:"POST",
                headers:{
                    "content-type" : "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //  refetch cart to update the number of cart
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Food Added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
    Swal.fire({
        title: 'Please login to order food ',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
    }).then((result) => {
        if (result.isConfirmed) {
            navigate('/login', {state:{from:location}})
        }
    })
}
    }
    
return (
    <div className=" card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='bg-slate-900 text-white absolute right-5 top-2 p-2 rounded-xl font-bold '>${price}</p>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
                <button onClick={() => handleAddToCard(item)} className="btn btn-outline text-yellow-500 hover:text-yellow-500 font-bold border-0 border-b-4 hover:border-b-4 hover:border-yellow-500">Add to Cart</button>
            </div>
        </div>
    </div>
);
};

export default FoodCard;