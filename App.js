function buttonClick() {
    let space = document.getElementById('window')
    space.innerHTML = '<div class="animate__animated animate__backInDown"><input type="number" id="kg" placeholder="KG (60)"> <br> <input type="number"  id="sm" placeholder="height (1.8)"> <br> <button onclick="calculate()" id = "call" > Calculate </button> <br> <h1 id="result"></h1><img src="/Без названия.jpg" alt=""> </div> '
}

function calculate() {
    let kg = document.getElementById('kg');
    let sm = document.getElementById('sm');
    let result = document.getElementById('result');

    let value1 = Number(kg.value);
    let value2 = Number(sm.value);
    result.innerHTML =   value1 / (value2 * value2);
}