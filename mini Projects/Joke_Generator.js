import chalk from 'chalk';
import https from 'https';

const getjokes = () =>{
    const url = `https://official-joke-api.appspot.com/random_joke`
    let data = '';
    https.get(url,(response) =>{

        response.on('data',(chunk) => {
            data += chunk;
        })

        response.on('end',() =>{
            const joke = JSON.parse(data);
            // console.log(joke);
            console.log("random Joke");
            console.log(chalk.yellow(joke.setup));
            console.log(chalk.green(joke.punchline));
        })
    })
}

getjokes();