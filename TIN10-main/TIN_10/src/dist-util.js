const milesToKilometers = (distInMiles) => {
    return 1.609344 * distInMiles;
  };
  
  const kilometersToMiles = (distInKm) => {
   return 0.62148 * distInKm; 
  };
  
  export {milesToKilometers as milesToKm, kilometersToMiles as kmToMiles};
