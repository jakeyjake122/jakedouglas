function calculateMileage() {
  const distance = parseFloat(document.getElementById('distance').value);
  const fuel = parseFloat(document.getElementById('fuel').value);

  if (!isNaN(distance) && !isNaN(fuel) && fuel !== 0) {
    const mileage = distance / fuel;
    document.getElementById('result').innerText = `Your mileage is ${mileage.toFixed(2)} miles per gallon.`;
  } else {
    document.getElementById('result').innerText = 'Please enter valid values (non-zero fuel).';
  }
}
// JavaScript Document