$('#search').addEventListener('submit',(e)=>{
    e.preventDefault()
    const cityName=search.city.value.trim()
    $('#search').reset()
    
    getWeather(cityName).then((data)=>updateUi(data))
})

const getWeather =async (city)=>{
    const data=await getData(city)
    return data

}
const updateUi=(weather)=>{
    $('.mars').innerHTML=`<div class="d-flex">                
    <h2 class="text-light">Not found</h2>
    
    </div>
<h2 class="text-light ms-3">Not found</h2>
<h2 class="text-light">Not found</h2>


<div class="d-flex">
<h2 class="fs">°C</h2>
<img class=" ms-4 bg-primary rounded rounded-circle" src="http://openweathermap.org/img/wn/04d@2x.png" alt="" width="160px">
</div>`
    
    $('.mars').innerHTML=`                        
    <h2 class="text-light">${weather.name}, </h2>
    
    
    <h2 class="text-light ms-3"> ${weather.sys.country}</h2>

<h1 class="text-light">${weather.weather[0].main}</h1>


<div class="d-flex">
<h2 class="fs">${Math.round(weather.main.temp)}°C</h2>
<img class="ms-4 bg-primary rounded rounded-circle" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="" width="160px">
</div>`

}


