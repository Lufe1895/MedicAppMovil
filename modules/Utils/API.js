const URL = 'https://yts.mx/api/v2/list_movies.json';

class API {
    async getData() {
        const query = await fetch(URL);
        const data = query.json();
        //console.log("datos", data);
        return data;
    }
}

export default new API()