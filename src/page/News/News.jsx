import RightSideNav from "../RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbars from "../Shared/Navbars/Navbars";


const News = () => {
    return (
        <div>

            <Header></Header>
            <Navbars></Navbars>
            <div className="grid md:grid-cols-4">

                <div className="col-span-3">
                    <h2 className="text-lg font-semibold">Dragon News</h2>
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;