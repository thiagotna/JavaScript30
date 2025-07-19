const msg = new SpeechSynthesisUtterance()
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

msg.text = document.querySelector('[name="text"]').value

const populatedVoices = (e) => {
  voices = e.target.getVoices()
  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`,
    )
    .join('')
}

const setVoice = (e) => {
  msg.voice = voices.find((voice) => voice.name === e.target.value)
}

const toggle = (startOver = true) => {
  speechSynthesis.cancel()
  if (startOver) speechSynthesis.speak(msg)
}

const setOptions = (e) => {
  msg[e.target.name] = e.target.value
  toggle()
}

speechSynthesis.addEventListener('voiceschanged', populatedVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach((option) => option.addEventListener('change', setOptions))
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false))
