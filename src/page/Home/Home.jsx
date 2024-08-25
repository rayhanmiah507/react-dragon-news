import { useLoaderData } from "react-router-dom";
import LeftsideNav from "../LeftsideNav/LeftsideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbars from "../Shared/Navbars/Navbars";
import BreakingNews from "./BreakingNews";
import NewsLetter from "./NewsLetter";



const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbars></Navbars>

            <div className="grid lg:grid-cols-4 gap-6">
                <div className="">
                    <LeftsideNav></LeftsideNav>
                </div>


                {/* news container */}
                <div className="col-span-2 ">
                    {
                        news.map(aNews => <NewsLetter key={aNews._id} news={aNews}></NewsLetter>)
                    }

                </div>



                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;