import React from 'react';

const FoodCard = ({item}) => {
    const{price,image,recipe,name,_id} = item

    return (
        <div className=" card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white absolute right-5 top-2 p-2 rounded-xl font-bold '>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline text-yellow-500 hover:text-yellow-500 font-bold border-0 border-b-4 hover:border-b-4 hover:border-yellow-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;