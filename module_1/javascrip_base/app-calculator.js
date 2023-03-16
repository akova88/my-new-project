function clearScreen() {
    document.getElementById('result').value = "";
}

function display(value) {
document.getElementById('result').value += value;
}

function calculator() {
    let p = document.getElementById('result').value;
    q = eval(p);
    document.getElementById('result').value = q;

}
