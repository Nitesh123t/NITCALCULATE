let currentInput = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = '';
}
