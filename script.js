
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourhand = document.querySelector('.hour-hand')
console.log(secondHand,minHand,hourhand)
const setDate = () => {
    // console.log('hello','hi')
    const now = new Date()
    const second = now.getSeconds()
    const secondsDegrees = ((second / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes()
    const minitsDegrees = ((minutes / 60) * 360 + 88)
    minHand.style.transform = `rotate(${minitsDegrees}deg)`

    const hourse = now.getHours()
    const hourseDegree = ((hourse / 12) * 360 + 85)
    hourhand.style.transform = `rotate(${hourseDegree}deg)`
    // console.log(hourse,minutes,second)
}
setInterval(setDate, 1000);