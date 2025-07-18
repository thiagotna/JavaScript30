window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

if (!window.SpeechRecognition) {
  alert('Este navegador não suporta reconhecimento de voz.')
} else {
  const recognition = new SpeechRecognition()
  recognition.lang = 'pt-BR'
  recognition.interimResults = true
  //recognition.continuous = true // <- permite sessões mais longas

  let p = document.createElement('p')
  const words = document.querySelector('.words')
  words.appendChild(p)

  recognition.addEventListener('result', (e) => {
    let transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('')

    p.textContent = transcript

    if (e.results[0].isFinal) {
      p = document.createElement('p')
      words.appendChild(p)
    }
  })

  recognition.addEventListener('end', () => {
    setTimeout(() => recognition.start(), 100)
  })

  recognition.addEventListener('error', (e) => {
    console.error('Erro no reconhecimento de voz:', e.error)
    if (e.error === 'not-allowed') {
      alert('Permissão para uso do microfone negada.')
    }
  })

  recognition.start()
}
