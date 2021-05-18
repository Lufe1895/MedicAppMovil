class API {
    async getData() {
        let URL = 'https://yts.mx/api/v2/list_movies.json?limit=50';
        const query = await fetch(URL);
        const data = query.json();
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
        return data;
    }

    async getMedicines(){
        let URL = 'https://lys-medicapi.herokuapp.com/';
        const query = await fetch(URL);
        const data = query.json();
        //console.log("datos", data)
        return data;
    }

    async getMedicinesItem(id){
        let URL = 'https://lys-medicapi.herokuapp.com/' + id;
        const query = await fetch(URL);
        const data = query.json();
        //console.log("datos", data)
        return data;
    }

    async login(email, password) {
        const query = await fetch('http://192.168.1.67:8000/api/people/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        console.log("datos", "hola")
        return query;
    }
}

export default new API()