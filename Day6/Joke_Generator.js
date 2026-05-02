import chalk from 'chalk';
import http from 'http';

const getjokes = () =>{
    const url = `https://official-joke-api.appspot.com/random_joke`
    http.get(url,(response) =>{
        response.on(`data`,(chunk) => {
            
        })
    })
}