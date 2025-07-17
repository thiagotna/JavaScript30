const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')

const getVideo = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      localMediaStream.active = true
      video.srcObject = localMediaStream
      video.play()
    })
    .catch((error) => {
      console.log(error)
    })
}

const paintToCanvas = () => {
  const width = video.offsetWidth
  const height = video.offsetHeight

  canvas.width = width
  canvas.height = height

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height)
    //pixels = redEffect(pixels)
    //pixels = redSplit(pixels)
    //ctx.globalAlpha = 0.8
    pixels = greenScreen(pixels)
    ctx.putImageData(pixels, 0, 0)
  }, 64)
}

const takePhoto = () => {
  //play sound
  snap.currentTime = 0
  snap.play()

  //take data
  const data = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')

  link.href = data
  link.setAttribute('download', 'handsome')
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`
  strip.insertBefore(link, strip.firstChild)
}

const redEffect = (pixels) => {
  for (let index = 0; index < pixels.data.length; index += 4) {
    pixels.data[index + 0] = pixels.data[index + 0] + 100 // RED
    pixels.data[index + 1] = pixels.data[index + 1] - 50 // GREEN
    pixels.data[index + 2] = pixels.data[index + 2] * 0.5 // BLUE
  }

  return pixels
}

const redSplit = (pixels) => {
  for (let index = 0; index < pixels.data.length; index += 4) {
    pixels.data[index - 150] = pixels.data[index + 0] // RED
    pixels.data[index + 100] = pixels.data[index + 1] // GREEN
    pixels.data[index - 50] = pixels.data[index + 2] // BLUE
  }

  return pixels
}

const greenScreen = (pixels) => {
  const levels = {}

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value
  })

  for (let i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0]
    green = pixels.data[i + 1]
    blue = pixels.data[i + 2]
    alpha = pixels.data[i + 3]

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0
    }
  }
  return pixels
}

getVideo()
video.addEventListener('canplay', paintToCanvas)
