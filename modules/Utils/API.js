import { createNavigator } from "react-navigation";

class API {
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

    async getPedidos(email){
        let query= null;
        try{
            await fetch('http://lys-medicapp.herokuapp.com/api/people/pedidos',{
                method: 'post',
                mode: 'no-cors',
                headers:{
                    'Aceept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            }).then(response => {
                query = response;
            }).catch(err =>{
                console.log(err);
            })
        }catch(e){
            console.log(e);
        }
        //console.log("datos" + JSON.stringify(query.url));
        return query.json();
    }

    async login(email, password) {
        let query = null;
        try {
            await fetch('https://lys-medicapp.herokuapp.com/api/people/login', {
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
        const data = query.json();
        return data;
    }
}

export default new API()