let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');

let deg = 6;

setInterval(() =>{
    let date = new Date();
    let h = date.getHours() * 30;
    let minute = date.getMinutes() * deg;
    let second = date.getSeconds() * deg;
    sec.style.transform = `rotateZ(${h + (minute/12)}deg)`
    sec.style.transform = `rotateZ(${second}deg)`
    min.style.transform = `rotateZ(${minute}deg)`
} , 1000)