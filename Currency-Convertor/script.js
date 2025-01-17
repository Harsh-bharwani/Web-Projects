import {countryList} from './codes.js';

let amt=document.querySelector("#amt");

let dropdown=document.querySelector(".dropdown");


console.log(countryList);



for(select of dropdown){
    for(code in countryList){g
        console.log(code, countryList[code]);
    }
}
