// import distConvert from './convert_dist';
// import tempConvert from './convert_temp';

import * as temp from './temp-util';
import * as dist from './dist-util';

function printResult(symbol, result, elementId) {
  document.getElementById(`${elementId}`).innerHTML = `Result: ${result} ${symbol}`;
}

function process(elementId, func) {
  const element = document.getElementById(elementId).value;
  const result = func(element);
  return `${result}`;
}

document.getElementById('btnConvertToCels').addEventListener('click', () => { printResult('°C', process('tempToConvert', temp.convToCel), 'tempConversionOutput');  });
document.getElementById('btnConvertToFahr').addEventListener('click', () => { printResult('°F', process('tempToConvert', temp.convToFahr), 'tempConversionOutput');  });
document.getElementById('btnConvertToMiles').addEventListener('click', () => { printResult('miles', process('distToConvert', dist.kmToMiles), 'distConversionOutput');  });
document.getElementById('btnConvertToKm').addEventListener('click', () => { printResult('km', process('distToConvert', dist.milesToKm), 'distConversionOutput');  });
