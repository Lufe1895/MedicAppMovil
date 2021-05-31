import { createNavigator } from "react-navigation";

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
        let query = null;
        try {
            await fetch('http://lys-medicapp.herokuapp.com/api/people/login', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(response => {
                query = response;
                //console.log(response);
            }).catch(err => {
                console.log(err);
            })
        } catch(e) {
            console.log(e);
        }

        //console.log("datos" + JSON.stringify(query.url));
        return query.json();
    }
}

export default new API()