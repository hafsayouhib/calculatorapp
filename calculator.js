
let result = '';

function appendToDisplay(value) {
    result += value;
    document.getElementById('input').value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById('input').value = result;
    } catch (error) {
        document.getElementById('input').value = 'Error';
    }
}

function clearResult() {
    result = '';
    document.getElementById('input').value = result;
}

function eliminate() {
    result = result.slice(0, -1);
    document.getElementById('input').value = result;
}
