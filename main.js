const form = document.forms[0]
const enviar = form.elements[0]

form.onsubmit = e => {
    e.preventDefault()
    buscarClimaPorCiudad(enviar.value)
    const tituloPronostico = document.querySelector("#tituloPronostico")
    tituloPronostico.classList.remove("noMostrar")
}

const buscarClimaPorCiudad = (ciudad) => {

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=ea942384626993fc1f02a9234e7791cc`)
.then(res => res.json())
.then(data => { 
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&units=metric&appid=ea942384626993fc1f02a9234e7791cc`)
    .then(ext => ext.json())
    .then(info => {
        console.log(info)
   
const contenedor = document.querySelector("#contenedor")
const contenedorExtendido = document.querySelector("#contenedorExtendido")


data.weather.forEach(element => {
    let subtitulo = element.description
    let SubMayuscula = subtitulo.charAt(0).toUpperCase() + subtitulo.slice(1)
    let temperatura = data.main.temp
    let humedad = data.main.humidity
    let viento = data.wind.speed
    let presion = data.main.pressure

    contenedor.innerHTML = `
<div class = "card">
<div>
<h1>${data.name}</h1>
<h4 class="subtitulo">${SubMayuscula}</h4>
</div>

<div class = "main">
<div class = "imagen">
<img src="http://openweathermap.org/img/wn/${element.icon}@2x.png"class="icono">
<p>${temperatura} <span class="celcius"><sup>C°</sup></span></p>
</div> 

<div class="info">
<p>Humedad: ${humedad}%</p>
<p>Viento: ${viento} km/h</p>
<p>Presión: ${presion} </p>
</div>
</div>
</div>

`
});

let acc = "";
info.list.forEach(res => {

let hora = new Date(res.dt*1000).toLocaleString()
let temperatura = res.main.temp
let viento = res.wind.speed
let presion = res.main.pressure

acc += `

<div id="cardExtendido">
<div>
<p class="hora">${hora}</p>
<img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png">
</div>
<div class="infoExtendido">
    <p>${temperatura} <span>C°</span></p>
    <p>${viento} <span>m/s</span></p>
    <p>${presion}</p>
</div>
</div>
`
contenedorExtendido.innerHTML= acc 
})
})
})
}