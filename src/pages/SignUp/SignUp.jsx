import React, { useContext } from 'react';

import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import loginImg from '../../assets/others/authentication1.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const { register, handleSubmit, watch, reset,  formState: { errors } } = useForm();
    const { user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin } = useContext(AuthContext)

        const onSubmit = data => {
            createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                
            })
            .catch(error => console.log(error))
        };

console.log(user)
    return (
        <>
        <Helmet>
                <title>Bistro Boss | Login</title>
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input placeholder="email" className="input input-bordered" type='email' {...register("email", { required: true } )} />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input placeholder="Password" className="input input-bordered" type='password' {...register("password", { required: true ,minLength:6, maxLength:20, pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/} )} />
                                {errors.password && <span className='text-red-600'>This field is required</span>}
                                {errors.password?.type === "minLength" && <span className='text-red-600'>password must be 6 characters</span>}
                                {errors.password?.type === "maxLength" && <span className='text-red-600'>password  not more than 20 characters</span>}
                                {errors.password?.type === "pattern" && <span className='text-red-600'>password must one Uppercase, one lowercase, one number and one digit</span>}
                                
                            </div>
                            
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login"/>
                            </div>
                            <div className="text-center my-3">
                                <p className='text-sm'>New here?<Link to="/signUp"><span className='font-bold text-yellow-500'> Create a New Account</span></Link></p>
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