const api = {
    apiKey: '2f7dc9aa4ed4eaec932e99724f9cd6a1',
    base: 'api.openweathermap.org/data/2.5/'
}
let btn = document.getElementById('btn');
btn.addEventListener('click', ajaxFun);
let input = document.getElementById('input');
let ul = document.querySelector('ul');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');

let p = document.querySelector('p');


function ajaxFun(){
    let cityName = input.value;
    console.log(cityName);
    
    fetch(`https://${api.base}weather?q=${cityName}&units=metric&APPID=${api.apiKey}`)
    .then((apiData)=>{
        console.log(apiData);
        return apiData.json();
    }).then((realData)=>{
        console.log(realData);
        console.log(realData.main.temp);   
        console.log(realData.name); 
        h3.innerText = `${realData.name}, ${realData.sys.country}`;
        h1.innerHTML = `${Math.round(realData.main.temp)}<span>&#176;C </span>`;
        p.innerText = currentDate();
        h2.innerText = realData.weather[0].main;
        h4.innerHTML = `${Math.round(realData.main.temp_min)}<span>&#176;C </span> /  ${Math.round(realData.main.temp_max)}<span>&#176;C </span>`;
        input.value = "";
    }).catch((err)=>{
        console.log(err);
    });
    
}

function currentDate(){
    var WeekDay = new Date;
    let week = ["Sunday","Monday", "Tuesday", "Wednday", "Thrusday", "Friday", "Saturday"];
    let month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = WeekDay.getDate();
    return `${week[WeekDay.getDay()]}/ ${day}  ${month[WeekDay.getMonth()]} / ${WeekDay.getFullYear()}`;
}
