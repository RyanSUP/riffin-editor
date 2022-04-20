let inputGrid = document.querySelector('#inputGrid')
let dashGrid = document.querySelector('#dashGrid')

// TODO: CALCULATE THIS
let firstCol = [0, 41, 82, 123, 164, 205]
let lastCol =  [40, 81, 122, 163, 204]
let secondToLastCol = [38, 79, 120, 161, 202, 243]

// The values could be a function?
// legal values: p h x / ~ ^ space d arrows
let legalCharacters = {
  " ": true,
  "~": true, // vibrato
  "/": true, // slide
  "^": true, // bend
  "x": true, // mute
  "p": true, // pull off
  "h": true, // hammer on
  "d": true, // duplicate
  "0": true,
  "1": true,
  "2": true,
  "3": true,
  "4": true,
  "5": true,
  "6": true,
  "7": true,
  "8": true,
  "9": true,
  "ArrowDown" : true,
  "ArrowLeft" : true,
  "ArrowRight" : true,
  "ArrowUp" : true,
  "Backspace" : true,
}

/* ----------- FUNCTIONS ------------ */


// @param textArea
// The textArea that will be filled
// @param c
// The value to  fill the area with.
const fillTextArea = (textArea, c) => {
  for(let i = 0; i < 251; i++) {
    if(i%40 === 0 && i !== 0) textArea.value += '\n'
    textArea.value += c
  }
}


// TODO Insert input character at position
const insertOnInputGrid = () => null
// TODO Insert a dash at position
const insertOnDashGrid = () => null
// TODO Remove character at position
const removeOnInputGrid = () => null
// TODO Remove dash at position
const removeOnDashGrid = () => null


/* ----------- LISTENERS ------------ */
inputGrid.addEventListener('keydown', e => {
  if(legalCharacters[e.key]) {
    console.log('DO Stuff')
  }
})

inputGrid.addEventListener('paste', e => {
  e.preventDefault();
});

/* ----------- MAIN ------------ */

// fillTextArea(inputGrid, ' ')
fillTextArea(dashGrid, '-')
