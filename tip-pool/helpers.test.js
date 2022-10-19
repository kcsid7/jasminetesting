describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 25;
    });
  
    it('should sum total the tip amount for all payments: sumPaymentTotal()', function () {
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(25);

        billAmtInput.value = 100;
        tipAmtInput.value = 100;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(125);
    });

    it('should sum total the bill amount for all payments: sumPaymentTotal()', function () {
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 100;
        tipAmtInput.value = 100;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(200);
    });

    it('should calculate the correct tip: calculateTipPercent()', function () {
        expect(calculateTipPercent(200, 10)).toEqual(5);
        expect(calculateTipPercent(100, 50)).toEqual(50);
    });

    it('should create a new Td: testing appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'bill');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('bill');
    });

  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = "";
      tipAmtInput.value = "";
      allPayments = {};
      paymentTbody.innerHTML = "";
      serverTbody.innerHTML = "";
      paymentId = 0;
    
      for (let i = 0; i < 3; i++) {
        summaryTds[i].innerHTML = ""
      }
    });
  });