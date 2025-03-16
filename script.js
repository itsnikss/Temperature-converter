function convertTemperature() {
    let tempInput = document.getElementById('temp-input').value;
    let unit = document.getElementById('unit').value;
    let resultDiv = document.getElementById('result');
  
    if (isNaN(tempInput) || tempInput === '') {
      resultDiv.innerHTML = 'Please enter a valid number for the temperature.';
      return;
    }
  
    tempInput = parseFloat(tempInput); 
  
    
    let convertedTemp;
    let outputUnit;
    
    if (unit === 'Celsius') {
      
      convertedTemp = {
        Fahrenheit: (tempInput * 9/5) + 32,
        Kelvin: tempInput + 273.15
      };
      outputUnit = 'Celsius';
    } else if (unit === 'Fahrenheit') {
      
      convertedTemp = {
        Celsius: (tempInput - 32) * 5/9,
        Kelvin: (tempInput - 32) * 5/9 + 273.15
      };
      outputUnit = 'Fahrenheit';
    } else if (unit === 'Kelvin') {
      
      convertedTemp = {
        Celsius: tempInput - 273.15,
        Fahrenheit: (tempInput - 273.15) * 9/5 + 32
      };
      outputUnit = 'Kelvin';
    }
  
    
    resultDiv.innerHTML = `
      <p>${tempInput} ${outputUnit} is:</p>
      <p>${convertedTemp.Celsius.toFixed(2)} Celsius</p>
      <p>${convertedTemp.Fahrenheit.toFixed(2)} Fahrenheit</p>
      <p>${convertedTemp.Kelvin.toFixed(2)} Kelvin</p>
    `;
  }
  