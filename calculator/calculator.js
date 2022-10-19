window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});



function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.getElementById("loan-amount");
  const years = document.querySelector("#loan-years");
  const rate = document.querySelector("#loan-rate");
  amount.value = 1000;
  years.value = 5;
  rate.value = 3;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const input = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(input);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const { amount, years, rate } = values;
  const i = (rate / 100) / 12;
  const n = years * 12;
  let num = amount * i;
  let den = 1 - ((1 + i)**(-n));
  return (num/den).toFixed(2).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const mnthlyPayment = document.getElementById("monthly-payment");
  mnthlyPayment.innerText = "$"+ monthly;
}
