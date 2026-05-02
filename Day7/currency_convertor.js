import https from "https";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const cr = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const api = "3e169005f7716cd5f35fc0e3";
const url = `https://v6.exchangerate-api.com/v6/${api}/latest/USD`;

const convertCurrency = (amount,rate) =>{
    return (amount * rate).toFixed(2);
}

https.get(url,(response) =>{
    let data = "";
    response.on('data',(chunk) =>{
        data += chunk;
    })
    response.on('end',() =>{
        const rate = JSON.parse(data).conversion_rates;
        cr.question('Enter the Amount: ',(amount) =>{
            cr.question('Enter the taget currency eg[INR,NPR,PKR]: ',(currency) =>{
                const currencyRate = rate[currency.toUpperCase()];
                console.log(currencyRate);
                if(currencyRate){
                    console.log(`${amount} use is approximately ${convertCurrency(amount,currencyRate)} ${currency}`);
                }else{
                    console.log("invalid");
                }
                cr.close();
            })
        })
    })
})