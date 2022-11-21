const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const KEY='1dfc360782259fa5d50064e63d588af5';
const getData=async(city)=>{
    const base='https://api.openweathermap.org/data/2.5/weather'
    const query=`?q=${city}&units=metric&appid=${KEY}`
    const req=await fetch(base+query)
    const data= await req.json()
    return data
}
getData('London').then((data)=>console.log(data))
