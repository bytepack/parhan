export default function getWeatherIconClass(iconID) {
    let iconClass = "wi-celsius"
    switch (iconID) {
        case "01d":
            iconClass = "wi-day-sunny"
            break
        case "01n":
            iconClass = "wi-night-clear"
            break
        case "02d":
            iconClass = "wi-day-cloudy"
            break
        case "02n":
            iconClass = "wi-night-alt-cloudy"
            break


    }

    return iconClass
}