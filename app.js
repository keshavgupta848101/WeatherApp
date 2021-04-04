const api = {
    apiKey: '2f7dc9aa4ed4eaec932e99724f9cd6a1',
    url: 'api.openweathermap.org/data/2.5/'
}
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const img = document.querySelector('img');
const p = document.querySelector('p');

btn.addEventListener('click', ajaxFun);
input.addEventListener('keypress',function (e) {
    if (e.keyCode === 13) {
        ajaxFun();
    }
});

function ajaxFun() {
    let cityName = input.value;
    fetch(`https://${api.url}weather?q=${cityName}&units=metric&APPID=${api.apiKey}`)
        .then((apiData) => {
            console.log(apiData);
            return apiData.json();
        }).then((realData) => {

            h3.innerText = `${realData.name}, ${realData.sys.country}`;
            h1.innerHTML = `${Math.round(realData.main.temp)}<span>&#176;C </span>`;
            p.innerText = currentDate();
            h2.innerText = realData.weather[0].main;
            h4.innerHTML = `${Math.round(realData.main.temp_min)}<span>&#176;C </span> /  ${Math.round(realData.main.temp_max)}<span>&#176;C </span>`;
            var iconcode = realData.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            img.src = iconurl;
            input.value = "";
        }).catch((err) => {
            console.log(err);
        });
}

function currentDate() {
    var WeekDay = new Date;
    let week = ["Sunday", "Monday", "Tuesday", "Wednday", "Thrusday", "Friday", "Saturday"];
    let month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = WeekDay.getDate();
    return `${week[WeekDay.getDay()]}/ ${day}  ${month[WeekDay.getMonth()]} / ${WeekDay.getFullYear()}`;
}
