const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

const updateDisplay = (value) => {
    display.value = value;
};

const handleNumberClick = (num) => {
    currentInput += num;
    updateDisplay(currentInput);
};

const handleOperatorClick = (op) => {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput !== '') {
        if (previousInput !== '') {
            currentInput = String(eval(`${previousInput}${operator}${currentInput}`));
        }
        previousInput = currentInput;
        currentInput = '';
        operator = op;
    } else {
        operator = op;
    }
};

const handleEqualsClick = () => {
    if (currentInput === '' || previousInput === '') return;
    currentInput = String(eval(`${previousInput}${operator}${currentInput}`));
    updateDisplay(currentInput);
    previousInput = '';
    operator = '';
};

const handleClearClick = () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
};

document.querySelectorAll('.num').forEach(btn => {
    btn.addEventListener('click', (e) => handleNumberClick(e.target.dataset.value));
});

document.querySelectorAll('.op').forEach(btn => {
    btn.addEventListener('click', (e) => handleOperatorClick(e.target.dataset.value));
});

document.getElementById('equals').addEventListener('click', handleEqualsClick);
document.getElementById('clear').addEventListener('click', handleClearClick);
