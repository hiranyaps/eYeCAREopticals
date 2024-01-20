import React, { useEffect } from 'react';
import styles from '../styles/Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import loginImg from '../images/login.jpg';

const LoginScreen = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <br /><br /><br />
            <img src={loginImg} alt="Home cover" className='logpic'/>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white" style={{borderRadius:"1rem"}}>

                            <form>
                                <div class="card-body p-5 text-center">
                                    
                                    <div class="mb-md-5 mt-md-4 pb-5">

                                        <h2 class="fw-bold mb-2"><strong>Login</strong></h2><br /><br />
                                        <p class="mb-5">Please enter your login and password!</p>

                                        <div class="form-outline form-white mb-4">
                                        <label class="form-label" for="typeEmailX">Email</label>
                                            <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='Enter email' required/>
                                            
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <label class="form-label" for="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='Enter password' required/>
                                            
                                        </div>

                                        <p class="small mb-3 pb-lg-2"><a href="#!">Forgot password?</a></p>

                                        <button class="btn btn-success btn-block btn-lg text-body" type="submit">Login</button>

                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!"><i class="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!"><i class="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p style={{marginTop:"-50px"}}>Don't have an account? <a href="#!" class="fw-bold">Sign Up</a>
                                        </p>
                                    </div>

                                </div>
                            </form>
                            
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default LoginScreen;