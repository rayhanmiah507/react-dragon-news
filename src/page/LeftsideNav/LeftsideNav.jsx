import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LeftNews from "./LeftNews";


const LeftsideNav = () => {

    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div className="space-y-2 p-4">
            <h2 className="text-2xl font-semibold mb-4">All Categories</h2>

            {
                categories.map(category => <NavLink className="block text-lg ml-4 font-semibold bg-slate-100 rounded-xl p-4 m-4" key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
            }

            <div>
                {
                    news.map(news => <LeftNews key={news._id} news={news}></LeftNews>)
                }
            </div>
        </div>


    );
};

export default LeftsideNav;