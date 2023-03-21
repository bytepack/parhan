import "../node_modules/@lottiefiles/lottie-player/dist/lottie-player.js"

const weatherSection = document.querySelector(".weather")
const weatherCircle = document.querySelector("[data-weather]")
const weatherToday = document.querySelector("[data-weather='today'] .weather__lottie")

const API_KEY = "f0ec30e01082c2ba26695eb9c01c8b58"
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Babol&appid=${API_KEY}`


export function setupWeather() {
    getWeather().then(result => {
        if (result.icon) renderWeather(result)
    })
}


async function getWeather() {
    try {
        const response = await fetch(URL)
        if (!response.ok) {
            console.log("Response wasn't ok")
            return {}
        }
        const data = await response.json()
        console.log(data)
        const icon = data.weather[0].icon
        const condition = data.weather[0].main
        // const icon = '03n'
        // const condition = 'Clear'
        const day = icon.slice(-1) === "d"

        return {icon: icon, condition: condition, day: day}

    } catch (err) {
        console.error("Yo, some errors happened, err.message:", err.message)
        return {}
    }

}

function renderWeather({icon, condition, day}) {
    console.log(icon, condition, day)
    icon = normalizeIconName(icon)
    if (icon == null) return

    weatherToday.load(`lottiefiles/${icon}.json`)
    weatherSection.classList.add("weather--show")
    if (day && condition==="Clouds"){
        document.body.classList.add("body--cloudy")
    }
    else if (!day){
        document.body.classList.add("body--night")
        weatherCircle.classList.add("weather__circle--night")
    }

}

function normalizeIconName(icon) {
    const nightsLikeDays = ["03n", "04n", "09n", "10n", "11n", "13n", "50n"]
    const others = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d", "01n", "02n"]
    if (nightsLikeDays.includes(icon)) {
        icon = icon.slice(0, 2) + "d"
    } else if (!others.includes(icon)) {
        // to not show any weather stuff if icon names has changed
        icon = null
    }
    return icon
}

// TODO add three days weather prediction