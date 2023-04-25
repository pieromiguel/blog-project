export const getBlogs = async () => {

    const url = 'https://api.themoviedb.org/3/movie/latest?api_key=27a60e01afd3114ebc98bd830a140f59';
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);

    const blogs = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            overview: item.overview,
            url: item.backdrop_path
        }
    })

    return blogs;
}
