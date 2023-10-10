function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        const kelvin = celsius + 273.15;
        document.getElementById('result').innerHTML = `
            ${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F<br>
            ${celsius}°C is equal to ${kelvin.toFixed(2)} K
        `;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid temperature.';
    }
}
