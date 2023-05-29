import React, { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)
    const { user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const from = event.target
        const email = from.email.value
        const password = from.password.value
        console.log(email, password)
        login(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => console.log(error))
    }
    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error => console.log(error))
    }
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
                        <form onSubmit={handleLogin}>
                            <h1 className="text-5xl font-bold">Login now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />

                                </label>
                                <input ref={captchaRef} type="text" name='captcha' placeholder="Type the above captcha " className="input input-bordered" />
                                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2' >Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn btn-primary">Login</button>
                            </div>
                            <div className="text-center my-3">
                                <p className='text-sm'>New here?<Link to="/signUp"><span className='font-bold text-yellow-500'> Create a New Account</span></Link></p>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div className="">
                                    <button onClick={handleGoogleLogin} className='btn w-full btn-outline btn-accent  text-xl font-bold'>G</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;