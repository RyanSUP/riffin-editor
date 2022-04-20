let inputGrid = document.querySelector('#inputGrid')
let dashGrid = document.querySelector('#dashGrid')

// TODO: CALCULATE THIS
const firstColumnIndexes = [0, 41, 82, 123, 164, 205]
const lastColumnIndexes =  [40, 81, 122, 163, 204]
const secondToLastCol = [38, 79, 120, 161, 202, 243]
const LAST_INPUT_POSITION = 245

const legalCharacters = {
  " ": handleAddCharacter,
  "~": handleAddCharacter, // vibrato
  "/": handleAddCharacter, // slide
  "^": handleAddCharacter, // bend
  "x": handleAddCharacter, // mute
  "p": handleAddCharacter, // pull off
  "h": handleAddCharacter, // hammer on
  "d": handleDuplicate, // duplicate
  "0": handleAddCharacter,
  "1": handleAddCharacter,
  "2": handleAddCharacter,
  "3": handleAddCharacter,
  "4": handleAddCharacter,
  "5": handleAddCharacter,
  "6": handleAddCharacter,
  "7": handleAddCharacter,
  "8": handleAddCharacter,
  "9": handleAddCharacter,
  "Backspace" : handleRemoveCharacter,
}

const arrows = {
  "ArrowDown" : true,
  "ArrowLeft" : true,
  "ArrowRight" : true,
  "ArrowUp" : true,
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

const updateCursorPosition = (newPosition) => {
  inputGrid.selectionStart = newPosition
  inputGrid.selectionEnd = newPosition
}

const updateGrid = (currentValue, cursorPosition, character) => {
  let currentValueAsArray =  [...currentValue]
  currentValueAsArray[cursorPosition] = character
  return currentValueAsArray.join('')
}

function handleAddCharacter(character) {
  let cursorPosition = inputGrid.selectionStart
  if(cursorPosition === LAST_INPUT_POSITION) return
  if(lastColumnIndexes.includes(cursorPosition)) return
  inputGrid.value = updateGrid(inputGrid.value, cursorPosition, character)
  dashGrid.value = updateGrid(dashGrid.value, cursorPosition, " ")
  updateCursorPosition(cursorPosition + 1)
}

function handleRemoveCharacter() {
  let cursorPosition = inputGrid.selectionStart - 1
  if(firstColumnIndexes.includes(cursorPosition)) return
  inputGrid.value = updateGrid(inputGrid.value, cursorPosition, " ")
  dashGrid.value = updateGrid(dashGrid.value, cursorPosition, "-")
  updateCursorPosition(cursorPosition)
}

function handleDuplicate() {
  console.log('duplicate')
}

/* ----------- LISTENERS ------------ */
inputGrid.addEventListener('keydown', e => {
  if(arrows[e.key]) return // Arrows can perform default action
  e.preventDefault()
  if(e.key in legalCharacters) {
    legalCharacters[e.key](e.key)
  }
})

inputGrid.addEventListener('paste', e => {
  e.preventDefault();
});

/* ----------- MAIN ------------ */

fillTextArea(inputGrid, ' ')
fillTextArea(dashGrid, '-')
