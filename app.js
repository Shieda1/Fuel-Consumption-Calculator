// https://www.omnicalculator.com/everyday-life/fuel-consumption

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fuelconsumptionRadio = document.getElementById('fuelconsumptionRadio');
const distancetraveledRadio = document.getElementById('distancetraveledRadio');
const fuelusedRadio = document.getElementById('fuelusedRadio');

let fuelconsumption;
let distancetraveled = v1;
let fuelused = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

fuelconsumptionRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance traveled';
  variable2.textContent = 'Fuel used';
  distancetraveled = v1;
  fuelused = v2;
  result.textContent = '';
});

distancetraveledRadio.addEventListener('click', function() {
  variable1.textContent = 'Fuel consumption';
  variable2.textContent = 'Fuel used';
  fuelconsumption = v1;
  fuelused = v2;
  result.textContent = '';
});

fuelusedRadio.addEventListener('click', function() {
  variable1.textContent = 'Fuel consumption';
  variable2.textContent = 'Distance traveled';
  fuelconsumption = v1;
  distancetraveled = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fuelconsumptionRadio.checked)
    result.textContent = `Fuel consumption = ${computefuelconsumption().toFixed(2)}`;

  else if(distancetraveledRadio.checked)
    result.textContent = `Distance traveled = ${computedistancetraveled().toFixed(2)}`;

  else if(fuelusedRadio.checked)
    result.textContent = `Fuel used = ${computefuelused().toFixed(2)}`;
})

// calculation

function computefuelconsumption() {
  return (Number(fuelused.value) / Number(distancetraveled.value)) * 100;
}

function computedistancetraveled() {
  return Number(fuelused.value) / (Number(fuelconsumption.value) / 100);
}

function computefuelused() {
  return (Number(fuelconsumption.value) / 100) * Number(distancetraveled.value);
}