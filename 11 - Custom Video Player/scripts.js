const videoPlayer = document.querySelector('.player__video')
const controls = document.querySelector('.player__controls')
const playButtons = document.querySelectorAll('.player__button')
const playerSliders = document.querySelectorAll('.player__slider')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
let videoProgression = (videoPlayer.currentTime / videoPlayer.duration) * 100

progressBar.style.flexBasis = `${videoProgression}%`

const isVideoPlaying = (video) => {
  return (
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState >= 2
  )
}
const handlePlay = (e) => {
  if (e.target.classList.contains('toggle')) {
    if (isVideoPlaying(videoPlayer)) {
      videoPlayer.pause()
      e.target.innerHTML = '►'
    } else {
      videoPlayer.play()
      e.target.innerHTML = '⏸︎'
    }
  }
}
const handleSkip = (e) => {
  const elementDataSkip = +e.target.dataset.skip

  if (e.target.dataset.skip) {
    videoPlayer.currentTime += elementDataSkip
  }
}
const handleSlides = (e) => {
  let inputValue = e.target.value
  const videoControlName = e.target.getAttribute('name')

  if (videoControlName && videoControlName === 'volume') {
    videoPlayer.volume = inputValue
  } else {
    videoPlayer.playbackRate = inputValue
  }
}
const handleProgress = (e) => {
  const videoProgression =
    (videoPlayer.currentTime / videoPlayer.duration) * 100

  progressBar.style.flexBasis = `${videoProgression}%`
}
const scrub = (e) => {
  const scrubTIme = (e.offsetX / progress.offsetWidth) * videoPlayer.duration
  videoPlayer.currentTime = scrubTIme
}
playButtons.forEach((button) =>
  button.addEventListener('click', (e) => {
    handlePlay(e)
    handleSkip(e)
  }),
)
playerSliders.forEach((slide) => slide.addEventListener('input', handleSlides))
videoPlayer.addEventListener('timeupdate', handleProgress)
let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => (mousedown = true))
progress.addEventListener('mouseup', () => (mousedown = false))
