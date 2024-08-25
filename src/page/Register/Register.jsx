import { Link, useNavigate } from "react-router-dom";
import Navbars from "../Shared/Navbars/Navbars";
import registerImg from '../../assets/images/register.png'
import registerbtn from '../../assets/images/registerbtn.png'
import './register.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvide";
import { IoMdEyeOff } from "react-icons/io";
import { GoEye } from "react-icons/go";


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [showpassword, setShowpassword] = useState(null)
    const [error, setError] = useState([]);
    // const [success, setSuccess] = useState([])

    const navigate = useNavigate();
    // async (e)
    const handleLogin = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        const accepted = e.target.terms.checked
        console.log(name, photo, email, password, accepted)

        // reset error

        setError(null);
        // setSuccess();

        //validation

        if (password.length < 6) {
            setError("Password must be at least 6 caracter or longer")
            return;
        }
        else if (!/[A-Z]+@/.test(password)) {
            setError("password should have at least one upper case and @")
            return;
        }
        else if (!accepted) {
            setError("Please accept our terms and condition")
            return;
        }

        // create user

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate("/login")
                // setSuccess("Login success")

            })
            .catch(error => console.log(error))

        // try {
        //     // Create user
        //     await createUser(email, password);
        //     navigate("/login");
        // } catch (error) {
        //     console.error(error);
        //     setError("Error occurred during registration. Please try again.");
        // }

    }
    return (
        <div>
            <Navbars></Navbars>
            <div className="hero mt-32">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    {/* Login form */}
                    <div className="card shrink-0 w-full lg:w-2/5  ">
                        {/* <h1 className="text-3xl font-bold mb-5 text-center">Login your account</h1> */}
                        <img className="imgbtn mx-auto lg:ml-6" src={registerbtn} alt="" />


                        <div className=" shadow-2xl bg-base-100 w-full">
                            <form onSubmit={handleLogin} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                </div>

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


                                    <div className="relative">
                                        <input
                                            type={showpassword ? 'text' : 'password'}
                                            name='password'
                                            placeholder="password"
                                            className="input input-bordered w-full" required />
                                        <span onClick={() => setShowpassword(!showpassword)} className="absolute top-4 right-4 text-lg">
                                            {
                                                showpassword ? <IoMdEyeOff></IoMdEyeOff> : <GoEye></GoEye>
                                            }
                                        </span>
                                    </div>


                                </div>

                                <div className="mt-4">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <span className="ml-2">Accept our terms & condition</span>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                        <p className='my-3 text-center'>Already have an account? Please <Link className="text-blue-600" to="/login">Login</Link></p>

                        {/* {
                            success && <p className="text-green-700 text-2xl">{success}</p>
                        } */}
                        {
                            error && <p className="text-red-700 text-2xl">{error}</p>
                        }

                    </div>

                    {/* Login img */}

                    <div className="text-center lg:text-left mt-5 lg:mt-0">

                        <img src={registerImg} alt="" className="mx-auto lg:ml-0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;