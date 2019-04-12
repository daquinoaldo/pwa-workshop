const API_KEY = "3117f78775abe4ac9ea0e2e67c840c92" // demo

const milan = {
  coords: {
    latitude: 45.46,
    longitude: 9.19
  }
}

const container = document.getElementById("container")

function setContent(content) {
  while (container.firstChild)
    container.removeChild(container.firstChild)
  container.appendChild(content)
}

function getWeather(lat, lon) {
  return new Promise(resolve => {
    url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=" + API_KEY
    const request = new XMLHttpRequest()
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE && request.status === 200)
        resolve(JSON.parse(request.response))
    }
    request.open("GET", url, true)
    request.send()
  })
}

function setWeather(weather) {
  const article = document.createElement("article")

  const h1 = document.createElement("h1")
  h1.innerText = weather.name
  article.appendChild(h1)

  const weatherSec = document.createElement("section")
  const img = document.createElement("img")
  img.src = "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
  img.alt = weather.weather[0].main
  weatherSec.appendChild(img)
  const description = document.createElement("p")
  description.innerText = weather.weather[0].main
  weatherSec.appendChild(description)
  article.appendChild(weatherSec)

  const mainSec = document.createElement("section")
  const temp = document.createElement("p")
  temp.innerText = "Temperature: " + weather.main.temp + " °C"
  mainSec.appendChild(temp)
  const humidity = document.createElement("p")
  humidity.innerText = "Humidity: " + weather.main.humidity + "%"
  mainSec.appendChild(humidity)
  article.appendChild(mainSec)

  setContent(article)
}

getWeather(milan.coords.latitude, milan.coords.longitude)
  .then(setWeather)