function calculateTask1() {
    const x = parseFloat(document.getElementById('x').value);
    if (x >= 0) {
        const y = 6 * x ** 2 - 3 * Math.sqrt(x) - 7;
        document.getElementById('result1').textContent = `Результат: для функции y = 6x² - 3√x - 7, y = ${y.toFixed(2)}`;
    } else {
        document.getElementById('result1').textContent = 'Ошибка: x должен быть неотрицательным';
    }
}
