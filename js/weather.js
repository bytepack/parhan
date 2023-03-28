import "../node_modules/@lottiefiles/lottie-player/dist/lottie-player.js"
import {differenceInCalendarDays} from 'date-fns'

const weatherSection = document.querySelector(".weather")
const weatherTodayCircle = document.querySelector(".weather__today.weather__circle")
const weatherTodayLottie = document.querySelector("[data-weather='today'] .weather__lottie")
const weatherForecastLotties = document.querySelectorAll("[data-weather='forecast'] .weather__lottie")
const loading = document.querySelector("[data-loading]")
const weatherForecast = document.querySelector(".weather__forecast")
const weatherToday = document.querySelector(".weather__today")


const API_KEY = "f0ec30e01082c2ba26695eb9c01c8b58"
const URL_NOW = `https://api.openweathermap.org/data/2.5/weather?q=Babol&appid=${API_KEY}`
const URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=babol&appid=${API_KEY}`


export function setupWeather() {
    getCurrentWeather().then(result => {
        if (result) {
            renderWeather(result)
            getForecastWeather().then(forecastResult => {
                renderForecastWeather(forecastResult)
            })
        }
        hideLoading()
    })
}


async function getCurrentWeather() {
    try {
        const response = await fetch(URL_NOW)
        if (!response.ok) {
            console.log("Response wasn't ok")
            return {}
        }
        const data = await response.json()
        const icon = data.weather[0].icon
        const condition = data.weather[0].main
        const day = icon.slice(-1) === "d"

        return {icon: icon, condition: condition, day: day}

    } catch (err) {
        console.error("Yo, some errors happened, err.message:", err.message)
        return {}
    }

}

async function getForecastWeather() {
    const response = await fetch(URL_FORECAST)
    const data = await response.json()
    const oneDayLater = []
    const twoDayLater = []
    const threeDayLater = []
    data.list.map(forecast => {
        if (isTheDay(forecast.dt, 1)) {
            oneDayLater.push(forecast.weather[0].icon)
        } else if (isTheDay(forecast.dt, 2)) {
            twoDayLater.push(forecast.weather[0].icon)
        } else if (isTheDay(forecast.dt, 3)) {
            threeDayLater.push(forecast.weather[0].icon)
        }
    })


    return forecast(oneDayLater, twoDayLater, threeDayLater)


}

function forecast(oneDayLater, twoDayLater, threeDayLater) {
    // TODO you need to seperate day and night forecast
    oneDayLater = normalizeIconNamedForecast(oneDayLater)
    twoDayLater = normalizeIconNamedForecast(twoDayLater)
    threeDayLater = normalizeIconNamedForecast(threeDayLater)
    const result = []
    result.push(findMostCommonIcon(threeDayLater))
    result.push(findMostCommonIcon(twoDayLater))
    result.push(findMostCommonIcon(oneDayLater))

    return result
}

function findMostCommonIcon(theArray) {
    const theObject = {}
    theArray.forEach(icon => {
        theObject[icon] = (theObject[icon] || 0) + 1
    })
    const [mostCommonIconWithNumber] = Object.entries(theObject).sort((a, b) => b[1] - a[1])
    return mostCommonIconWithNumber[0]
}

function renderWeather({icon, condition, day}) {
    console.log(icon, condition, day)
    icon = normalizeIconName(icon)
    if (icon == null) return

    weatherTodayLottie.load(`lottiefiles/${icon}.json`)
    weatherSection.classList.add("weather--show")
    if (day && condition === "Clouds") {
        document.body.classList.add("body--cloudy")
    } else if (!day) {
        document.body.classList.add("body--night")
        weatherTodayCircle.classList.add("weather__circle--night")

    }

    weatherToday.addEventListener("click", () => {
        weatherForecast.classList.toggle("weather__forecast--hidden")
    })

}

function renderForecastWeather(icons) {
    weatherForecastLotties.forEach((lottie, index) => {
        lottie.load(`lottiefiles/${icons[index]}.json`)
    })
}

function isTheDay(timestamp, distance) {
    const now = new Date()
    const date = new Date(timestamp * 1000)
    return differenceInCalendarDays(date, now) === distance
}

function normalizeIconName(icon) {
    const nightsLikeDays = ["03n", "04n", "09n", "10n", "11n", "13n", "50n"]
    const others = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d", "01n", "02n"]
    if (nightsLikeDays.includes(icon)) {
        // to change night icon name to day when they're the same
        icon = icon.slice(0, 2) + "d"
    } else if (!others.includes(icon)) {
        // to not show any weather stuff if icon names has changed
        icon = null
    }
    return icon
}

function normalizeIconNamedForecast(icons) {
    return icons.map(ic => {
        return ic.slice(0, 2) + "d"
    })
}

function hideLoading() {
    loading.classList.add("loading--hide")
}

// TODO add three days weather prediction
// TODO once the current weather clicked, if the forecast isn't fetched, fetch it