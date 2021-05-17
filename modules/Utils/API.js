class API {
    async getData() {
        let URL = 'https://yts.mx/api/v2/list_movies.json?limit=50';
        const query = await fetch(URL);
        const data = query.json();
        //console.log("datos", data);
        return data;
    }

    async getMovie(id) {
        let URL = 'https://yts.mx/api/v2/movie_details.json?movie_id=' + id;
        const query = await fetch(URL);
        const data = query.json();
        return data;
    }

    async getFav() {
        let URL = 'https://yts.mx/api/v2/list_movies.json?limit=3';
        const query = await fetch(URL);
        const data = query.json();
        //console.log("datos", data);
        return data;
    }
}

export default new API()