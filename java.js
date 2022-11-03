let firstNumberData = null
let secondNumberData = null
let answer = ''
let operatorData = null
let secondOperatorData = null

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const enterDisplay = document.getElementById('displayContainer')
const finalDisplay = document.getElementById('operationHolder')
const equalsButton = document.getElementById('equalsButton')
const clearButton = document.getElementById('opClear')

console.log(numberButtons)

numberButtons.forEach((button) =>
    button.addEventListener('click', () =>
    appendNumber(button.textContent))
)
operatorButtons.forEach((button) =>
    button.addEventListener('click', () =>
    appendOperator(button.textContent))
)
equalsButton.addEventListener('click', () =>
    equals()
)
clearButton.addEventListener('click', () =>
    clear()
)

function appendNumber(number) {
    enterDisplay.textContent += number
}

function appendOperator(operator) {
    if (operatorData == null ){
    firstNumberData = enterDisplay.textContent
    enterDisplay.textContent += operator;
    operatorData = operator
    finalDisplay.textContent += enterDisplay.textContent
    clearScreen()
    } else {
        secondOperatorData = operator
    }
}
function clearScreen() {
    enterDisplay.textContent = ''
}
function equals() {
    if (secondOperatorData == null){
    secondNumberData = enterDisplay.textContent
    finalDisplay.textContent += secondNumberData + ' = '
    clearScreen()
    sum(firstNumberData, operatorData, secondNumberData)
    } else {
        secondNumberData = enterDisplay.textContent
        finalDisplay.textContent = ''
        enterDisplay.textContent = ''
        sum(firstNumberData, operatorData, secondNumberData)
        finalDisplay.textContent += " " + secondOperatorData
        operatorData = secondOperatorData
        secondOperatorData = null
        firstNumberData = answer
        answer = ''
    }
}
function add(a, b) { 
    let c = a + b
    answer = c
    finalDisplay.textContent += ' ' + answer
  };
  
  function subtract(a, b) { 
    let c = a - b
    answer = c
    finalDisplay.textContent += ' ' + answer
  };
  
  function multiply(a, b) { 
    let c = a * b
    answer = c
    finalDisplay.textContent += ' ' + answer
  };
  
function divide(a, b){
    if (a == 0 || b == 0){
    finalDisplay.textContent = 'NO ÷ BY ZERO'
    } else {
        let c = a / b
        answer = c
        if (answer.length >= 6){
            answer = Math.round(answer * 1000) / 1000
            finalDisplay.textContent += ' ' + answer
        } else {
            finalDisplay.textContent += ' ' + answer
        }
    }
};
function clear(){
    enterDisplay.textContent = ''
    finalDisplay.textContent = ''
    firstNumberData = null
    secondNumberData = null
    operatorData = null
    secondOperatorData = null
    answer = ''
}
function sum(a, operator, b) {
    let numA = Number(a)
    let numB = Number(b)
    if (operator == '+') {
        add(numA, numB)
    } else if (operator == '-') {
        subtract(numA, numB)
    } else if (operator == '÷') {
        divide(numA, numB)
    } else if (operator == 'x') {
        multiply(numA, numB)
    }
}