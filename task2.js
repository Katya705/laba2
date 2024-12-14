function calculateTask2() {
    const number = parseInt(document.getElementById('number').value);
    if (number >= 1000 && number <= 9999) {
        const digits = Array.from(String(number), Number);
        const sum = digits.reduce((a, b) => a + b, 0);
        const product = digits.reduce((a, b) => a * b, 1);
        document.getElementById('result2').textContent = `Сумма цифр: ${sum}, Произведение цифр: ${product}`;
    } else {
        document.getElementById('result2').textContent = 'Ошибка: Введите корректное четырехзначное число';
    }
}
