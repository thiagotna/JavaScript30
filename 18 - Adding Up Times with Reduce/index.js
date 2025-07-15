const timeToSeconds = (timeString) => {
  const parts = timeString.split(':').map(Number)

  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts
    return hours * 3600 + minutes * 60 + seconds
  } else if (parts.length === 2) {
    const [minutes, seconds] = parts
    return minutes * 60 + seconds
  } else {
    console.warn(`Formato de tempo inválido: ${timeString}`)
    return 0
  }
}

const secondsToTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const hh = String(hours).padStart(2, '0')
  const mm = String(minutes).padStart(2, '0')
  const ss = String(seconds).padStart(2, '0')

  return `${hh}:${mm}:${ss}`
}

initialValue = 0
const dataTimes = []
const videoListItems = document.querySelectorAll('.videos [data-time]')
const videoList = Array.from(videoListItems)

videoList.forEach((video) => {
  const stringDataTime = video.dataset.time
  const secondsDataTime = timeToSeconds(stringDataTime)

  dataTimes.push(secondsDataTime)
})

const totalTime = dataTimes.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
)

const total = secondsToTime(totalTime)

console.log(total)
