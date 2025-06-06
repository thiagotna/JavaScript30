class DrumPiece {
  constructor(number) {
    this.piece = document.querySelectorAll(`[data-key="${number}"]`) //Object with key and audio elements
    this.pieceSet = this.piece //declaring a variable for the constructor
    this.keyBoardDiv = this.pieceSet[0] // returns a div with the class key
    this.audioHTMLtag = this.pieceSet[1] // return corresponding audio html tag
    this.keyBoardDivChildren = this.keyBoardDiv.children // returns kbd and span with sound class span
    this.key = this.keyBoardDivChildren[0] // returns kbd element
  }

  registerKey() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault()

      const keyCodeName = e.code.replace('Key', '')
      const keyToUpperCase = this.key.textContent.toLocaleUpperCase()

      if (keyCodeName !== keyToUpperCase) return

      this.play()
    })
  }

  registerClick() {
    this.keyBoardDiv.addEventListener('click', (e) => {
      e.preventDefault()
      this.play()
    })
  }

  addTransition() {
    this.keyBoardDiv.classList.add('playing')
  }

  removeTransition() {
    this.keyBoardDiv.addEventListener('transitionend', function (e) {
      if (e.propertyName !== 'transform') return
      this.classList.remove('playing')
    })
  }

  play() {
    this.addTransition()
    this.audioHTMLtag.currentTime = 0
    this.audioHTMLtag.play()
    this.removeTransition()
  }
}

//Mounting Drums
const Clap = new DrumPiece(65)
const Hihat = new DrumPiece(83)
const Kick = new DrumPiece(68)
const Openhat = new DrumPiece(70)
const Boom = new DrumPiece(71)
const Ride = new DrumPiece(72)
const Snare = new DrumPiece(74)
const Tom = new DrumPiece(75)
const Tink = new DrumPiece(76)

const drums = [Clap, Hihat, Kick, Openhat, Boom, Ride, Snare, Tom, Tink]

//Making Drum ready to Play
drums.forEach((drumPiece) => {
  drumPiece.registerKey()
  drumPiece.registerClick()
})
