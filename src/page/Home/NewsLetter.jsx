
import { IoBookmarksOutline, IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import './Newscard.css'


const NewsLetter = ({ news }) => {

    const { _id, title, details, image_url, total_view, rating, author } = news;
    return (
        <div className="card bg-base-100 shadow-sm mb-12 p-4 border">

            {/* Author , img, date */}

            <div className="flex justify-between mb-6 bg-slate-50">

                <div className="flex">
                    <div>
                        <img className="authorImg mr-4" src={author.img} alt="" />
                    </div>
                    <div>
                        <p className="text-lg font-bold">{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>

                <div className="">
                    <IoBookmarksOutline></IoBookmarksOutline>
                </div>

            </div>

            {/* title details img */}

            <div className="border-b-2 mb-6">
                <h2 className="text-2xl mb-4 font-bold">{title}</h2>
                <figure><img className="mb-4" src={image_url} alt="" /></figure>


                {
                    details.length > 220 ?

                        <p>{details.slice(0, 220)}<Link to={`/news/${_id}`} className="text-red-400">Read More...</Link></p>
                        :
                        <p>{details}</p>
                }
            </div>

            {/* rating */}

            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="ml-3">{rating.number}</p>
                </div>
                {/* view */}
                <div className="flex">
                    <IoEye className="text-2xl mr-3"></IoEye>
                    <p>{total_view}</p>
                </div>
            </div>

            {/* end rating */}


        </div>
    );
};

export default NewsLetter;