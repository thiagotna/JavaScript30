const hourHand = document.querySelector('.hour-hand')
const minutesHand = document.querySelector('.min-hand')
const secondsHand = document.querySelector('.second-hand')

function setDate() {
  const currentDate = new Date()
  currentDate.toLocaleTimeString('pt-BR', {
    hour: 'numeric',
  })

  //MINUTES CONFIG
  const minutes = currentDate.getMinutes()
  const minutesRotation = (360 / 60) * minutes + 90
  minutesHand.style.transform = `rotate(${minutesRotation}deg)`
  //HOURS CONFIG
  const hours = currentDate.getHours()
  const hoursRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60) + 90
  hourHand.style.transform = `rotate(${hoursRotation}deg)`
  //SECONDS CONFIG
  const seconds = currentDate.getSeconds()
  const secondsRotation = (360 / 60) * seconds + 90
  secondsHand.style.transform = `rotate(${secondsRotation}deg)`

  if (seconds === 0) {
    secondsHand.style.transition = 'none'
  } else {
    secondsHand.style.transition = 'all 0.5s cubic-bezier(0.1, 2.7, 0.58, 1)'
  }
}

setInterval(setDate, 1000)
