const convertBtn = document.getElementById('convertBtn');
const temperatureInput = document.getElementById('temperature');
const unitFromSelect = document.getElementById('unitFrom');
const celsiusResult = document.getElementById('celsiusResult');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const kelvinResult = document.getElementById('kelvinResult');
const celsiusResultBox = document.getElementById('celsiusResultBox');
const fahrenheitResultBox = document.getElementById('fahrenheitResultBox');
const kelvinResultBox = document.getElementById('kelvinResultBox');

convertBtn.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const unitFrom = unitFromSelect.value;

    if (!isNaN(temperature)) {
        if (unitFrom === 'celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            const kelvin = temperature + 273.15;
            
            celsiusResult.textContent = temperature.toFixed(2);
            fahrenheitResult.textContent = fahrenheit.toFixed(2);
            kelvinResult.textContent = kelvin.toFixed(2);
            
            celsiusResultBox.classList.add('show', 'celsius-box');
            fahrenheitResultBox.classList.add('show', 'fahrenheit-box');
            kelvinResultBox.classList.add('show', 'kelvin-box');
        } else if (unitFrom === 'fahrenheit') {
            const celsius = (temperature - 32) * 5/9;
            const kelvin = (temperature + 459.67) * 5/9;
            
            celsiusResult.textContent = celsius.toFixed(2);
            fahrenheitResult.textContent = temperature.toFixed(2);
            kelvinResult.textContent = kelvin.toFixed(2);
            
            celsiusResultBox.classList.add('show', 'celsius-box');
            fahrenheitResultBox.classList.add('show', 'fahrenheit-box');
            kelvinResultBox.classList.add('show', 'kelvin-box');
        } else if (unitFrom === 'kelvin') {
            const celsius = temperature - 273.15;
            const fahrenheit = (temperature * 9/5) - 459.67;
            
            celsiusResult.textContent = celsius.toFixed(2);
            fahrenheitResult.textContent = fahrenheit.toFixed(2);
            kelvinResult.textContent = temperature.toFixed(2);
            
            celsiusResultBox.classList.add('show', 'celsius-box');
            fahrenheitResultBox.classList.add('show', 'fahrenheit-box');
            kelvinResultBox.classList.add('show', 'kelvin-box');
        }
    } else {
        // Hide the result boxes and show "Invalid input" message
        celsiusResultBox.classList.remove('show', 'celsius-box');
        fahrenheitResultBox.classList.remove('show', 'fahrenheit-box');
        kelvinResultBox.classList.remove('show', 'kelvin-box');
        celsiusResult.textContent = 'Invalid input';
        fahrenheitResult.textContent = 'Invalid input';
        kelvinResult.textContent = 'Invalid input';
    }
});

temperatureInput.addEventListener('input', () => {
    // Hide the result boxes when input changes
    celsiusResultBox.classList.remove('show', 'celsius-box');
    fahrenheitResultBox.classList.remove('show', 'fahrenheit-box');
    kelvinResultBox.classList.remove('show', 'kelvin-box');
    celsiusResult.textContent = '';
    fahrenheitResult.textContent = '';
    kelvinResult.textContent = '';
});
