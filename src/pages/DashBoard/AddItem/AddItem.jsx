import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        // console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url,{
            method:'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgResponse =>{
                // console.log(imgResponse)
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {category,recipe,price,name} = data
                const newItem = {name,price:parseFloat(price),category, image:imgURL,recipe}
                // console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data=>{
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
            })

    }


    return (
        <div>
            <SectionTitle subHeading={"What's new?"} heading={"ADD AN ITEM"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#F3F3F3]  p-6 w-11/12 mx-auto flex flex-col gap-3' >
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="First name" className="input input-bordered w-full "  {...register("name", { required: true, maxLength: 80 })} />


                </div>
                <div className=" md:flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Category*</span>
                        </label>
                        
                        <select className="select select-bordered" {...register("category", { required: true })}>
                           
                            <option value='pizza'>Pizza</option>
                            <option value='soup'>Soup</option>
                            <option value='salad'>Salad</option>
                            <option value='dessert'>Dessert</option>
                            <option value='drinks'>Drinks</option>
                        </select>

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Price*</span>
                        </label>

                        <input type="text" placeholder="Price" className="input input-bordered " {...register("price", { required: true })} />


                    </div>
                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Recipe Details*</span>
                    </label>
                    <textarea  placeholder="Bio" className="textarea textarea-bordered h-40 w-full "{...register("recipe", { required: true })} ></textarea>


                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold text-lg">Photo*</span>

                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input  file-input-bordered w-full max-w-xs" />
                </div>

                <div className="">
                    <input type="submit" className="btn btn-neutral md:w-1/4 w-1/2" value="Add Items" />
                   

                </div>
            </form >
        </div >
    );
};

export default AddItem;