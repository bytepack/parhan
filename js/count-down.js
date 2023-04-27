const expiration = new Date(2023, 4, 24, 1, 48)

const days = document.querySelector(".count-down__days")
const hours = document.querySelector(".count-down__hours")
const minutes = document.querySelector(".count-down__minutes")
const seconds = document.querySelector(".count-down__seconds")

let intervalID;

export function setupCounter(){
    intervalID = setInterval(count, 1000)
}

function count() {
    let daysPart = 0
    let hoursPart = 0
    let minutesPart = 0
    let secondsPart = 0
    if (getRemainingDays() > 0) {
        daysPart = Math.floor(getRemainingDays())

        const extraHoursOFaDay = (getRemainingDays() - Math.floor(getRemainingDays())) * 24
        hoursPart = Math.floor(extraHoursOFaDay)

        const extraMinutesOFanHour = (extraHoursOFaDay - Math.floor(extraHoursOFaDay)) * 60
        minutesPart = Math.floor(extraMinutesOFanHour)

        const extraSecondsOFaMinute = (extraMinutesOFanHour - Math.floor(extraMinutesOFanHour)) * 60
        secondsPart = Math.floor(extraSecondsOFaMinute)
    } else {
        clearInterval(intervalID)
    }

    renderCounter(daysPart, hoursPart, minutesPart, secondsPart)

}

function renderCounter(d, h, m, s) {
    days.innerText = zeroForOneDigit(d)
    hours.innerText = zeroForOneDigit(h)
    minutes.innerText = zeroForOneDigit(m)
    seconds.innerText = zeroForOneDigit(s)
}

function getRemainingDays() {
    const remainingMilliseconds = expiration - new Date()
    return remainingMilliseconds / (86400 * 1000)
}

function zeroForOneDigit(number) {
    return ("0" + number).slice(-2)
}
