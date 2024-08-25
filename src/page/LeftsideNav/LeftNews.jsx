

const LeftNews = ({ news }) => {

    const { thumbnail_url, title } = news;
    return (
        <div className="w-full mx-auto">
            <img src={thumbnail_url} alt="" />
            <h2 className="text-xl mb-4 mt-2 ">{title}</h2>
        </div>
    );
};

export default LeftNews;