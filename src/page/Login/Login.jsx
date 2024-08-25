import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginImg from '../../assets/images/login.jpg'
import Navbars from '../Shared/Navbars/Navbars';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvide';

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    console.log('login', location)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        // login

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                /// navigate

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <Navbars></Navbars>
            <div className="hero mt-32">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    {/* Login form */}
                    <div className="card shrink-0 w-full lg:w-2/5  ">
                        <h1 className="text-3xl font-bold mb-5 text-center">Login your account</h1>

                        <div className=" shadow-2xl bg-base-100 w-full">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                        <p className='my-3 text-center'>Don't Have An Account? Please <Link className="text-blue-600" to="/register">Register</Link></p>

                    </div>

                    {/* Login img */}

                    <div className="text-center lg:text-left mt-5 lg:mt-0">

                        <img src={LoginImg} alt="" className="mx-auto lg:ml-0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;