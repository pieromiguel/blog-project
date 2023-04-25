import React, { useState, useEffect } from 'react';

export const BlogCards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=dragon ball&limit=4&api_key=LufMignL3C3W6qlkjYNauwiLTuUgP3KG';
        const resp = await fetch(url);
        const { data: blogData } = await resp.json();

        const blogs = blogData.map((item) => {
            return {
                id: item.id,
                title: item.title,
                userName: item.username,
                url: item.images.downsized_medium.url,
            };
        });

        setData(blogs);
    };

    return (
        <div className="columns-2 mb-20 ">
            {data.map((item) => {
                return (
                    <div key={item.id} className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 m-4 ">
                        <a href="#">
                            <img className="rounded-t-lg" src={item.url} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="text-white font-bold text-2xl tracking-tight mb-2">{item.title}</h5>
                            </a>
                            <p className="font-normal text-white mb-3">{item.userName}</p>
                            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                Read more
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
