import React, { useContext } from 'react';

import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import loginImg from '../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'

const SignUp = () => {

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin,
        updateUserProfile } = useContext(AuthContext)

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)

                updateUserProfile(data.name, data.photo)
                    .then(result => {
                        const savedUser = { name: data.name, email:data.email, photo:data.photo}
                        fetch('http://localhost:5000/users', {
                        method:"POST",
                        headers:{
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                  

                                    reset();

                                    Swal.fire({
                                        position: 'top',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                        
                                    })
                                    navigate(from, { replace: true });
                                }
                            })


                    })
                    .catch(error => {console.log(error) })
                
                // window.location.href = from;


            })
            .catch(error => console.log(error))
    };

    console.log(user)
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 my-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} className="w-2/3 mx-auto" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className="text-5xl font-bold">Sign Up!</h1>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input placeholder="Name" className="input input-bordered" type='name' {...register("name", { required: true })} />
                                    {errors.name && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input placeholder="Photo URL" className="input input-bordered" type='photo' {...register("photo", { required: true })} />
                                    {errors.name && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input placeholder="email" className="input input-bordered" type='email' {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-600'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input placeholder="Password" className="input input-bordered" type='password' {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/ })} />
                                    {errors.password && <span className='text-red-600'>This field is required</span>}
                                    {errors.password?.type === "minLength" && <span className='text-red-600'>password must be 6 characters</span>}
                                    {errors.password?.type === "maxLength" && <span className='text-red-600'>password  not more than 20 characters</span>}
                                    {errors.password?.type === "pattern" && <span className='text-red-600'>password must one Uppercase, one lowercase, one number and one digit</span>}

                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <div className="text-center my-3">
                                    <p className='text-sm'>Already registered? <Link to="/login"><span className='font-bold text-yellow-500'>Go to log in</span></Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;