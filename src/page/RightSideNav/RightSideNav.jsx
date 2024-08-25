import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import swimming from '../../assets/images/qZone1.png';
import qzone2 from '../../assets/images/qZone2.png';
import qzone3 from '../../assets/images/qZone3.png'
import bgImage from '../../assets/images/bg.png'
import { useState } from 'react';

const RightSideNav = () => {

    const [showText, setshowFultext] = useState(false);
    const text = " Discover thousands of options, easy to customize layouts, one-click to import demo and much more.";
    const truncatedText = text.length > 40 ? `${text.slice(0, 40)}...` : text;

    const toggleText = () => {
        setshowFultext(!showText)
    }

    return (
        <div>

            {/* Login with part */}

            <div className="space-y-3 p-4">
                <h2 className="font-bold text-xl">Login With</h2>
                <button className="btn btn-outline border-blue-500 w-full text-blue-500">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with GitHub
                </button>

            </div>

            {/* Find us on part */}


            <div className=" p-4">
                <h2 className="font-bold text-xl mb-3">Find Us On</h2>

                <a className='flex items-center border rounded-t-lg p-4' href=''>
                    <FaFacebook className='mr-2 text-blue-500'></FaFacebook>
                    <span className='text-lg'>Facebook</span>
                </a>

                <a className='flex items-center border-x p-4' href="">
                    <FaTwitter className='mr-2 text-blue-800'></FaTwitter>
                    <span className='text-lg'>Twitter</span>
                </a>
                <a className='flex items-center border rounded-b-lg p-4' href="">
                    <FaInstagram className='mr-2 text-red-500'></FaInstagram>
                    <span className='text-lg'>Instragram</span>
                </a>
            </div>

            {/* Q-Zone */}

            <div className="bg-base-200">
                <h2 className="font-bold text-2xl mb-4 p-4">Q-Zone</h2>

                <img src={swimming} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />

            </div>

            {/* Learn More */}

            <div className='bg-cover w-full mx-auto p-4 m-4' style={{ backgroundImage: `url(${bgImage})` }}>
                <h2 className="text-lg text-center mb-3 text-white">Create an <br /> Amazing <br />Newspaper</h2>
                <p className='text-center text-white mb-4'>
                    {showText ? text : truncatedText}
                </p>
                {
                    text.length > 40 && <button className="btn bg-red-400 px-8 m-4 font-bold text-xl text-center ml-8" onClick={toggleText}>
                        {showText ? 'Read Less' : 'Read More'}
                    </button>
                }

            </div>

        </div>
    );
};

export default RightSideNav;