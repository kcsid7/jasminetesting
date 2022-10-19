
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 10,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('106.07')
});
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 5000,
    years: 5,
    rate: 2.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('88.74')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 500000,
    years: 30,
    rate: 4.9,
  };
  expect(calculateMonthlyPayment(values)).toEqual('2653.63')
});

/// etc
