  function convertToCelsius(tempInFahr) {
    const f = Number(tempInFahr);
    const result = (f - 32) * 55 / 100;
    return result;
  }
  
  function convertToFahrenheit(tempInCels) {
    const c = Number(tempInCels);
    const result = (c * 9 / 5) + 32;
    return result;
  }
  
  export {convertToCelsius as convToCel, convertToFahrenheit as convToFahr};