import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex mb-12 bg-slate-100">
            <button className="btn bg-red-400 px-8 m-4 font-bold text-xl ">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12 font-bold" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link className="mr-12 font-bold" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
                <Link className="mr-12 font-bold" to="/">Match Highlights: Germany vs Spain — as it happened</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;