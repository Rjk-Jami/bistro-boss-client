import React, { useContext, useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
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

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
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
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        login(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                // Swal.fire({
                //     title: 'Custom animation with Animate.css',
                //     showClass: {
                //         popup: 'animate__animated animate__fadeInDown'
                //     },
                //     hideClass: {
                //         popup: 'animate__animated animate__fadeOutUp'
                //     }
                // })
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from, {replace:true});
            })
            .catch(error => console.log(error))
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user

                // Swal.fire({
                //     title: 'Custom animation with Animate.css',
                //     showClass: {
                //         popup: 'animate__animated animate__fadeInDown'
                //     },
                //     hideClass: {
                //         popup: 'animate__animated animate__fadeOutUp'
                //     }
                // })
                const savedUser = { name: loggedUser.displayName, email:loggedUser.email, photo:loggedUser?.photoURL}

                fetch('http://localhost:5000/users', {
                        method:"POST",
                        headers:{
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                    Swal.fire({
                                        position: 'top',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                        
                                    })
                                    
                                
                            })
                            navigate(from, { replace: true });
                // Swal.fire({
                //     position: 'top',
                //     icon: 'success',
                //     title: 'Successfully Logged in',
                //     showConfirmButton: false,
                //     timer: 1500
                //   })
                //   navigate(from, {replace:true});

            })
            .catch(error => console.log(error))
       
    }
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
                                    <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the above captcha " className="input input-bordered" />

                                </div>
                                {/* have to make dynamic button for captcha */}
                                <div className="form-control mt-6">
                                    <button disabled={false} className="btn btn-primary">Login</button>
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