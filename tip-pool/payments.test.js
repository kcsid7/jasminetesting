describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 100;
      tipAmtInput.value = 25;
    });
    
    it('should create a current payment object to add to the allPayments object', function () {
        let bill = {
            billAmt: '100',
            tipAmt: '25',
            tipPercent: 25,
          }
      
        expect(createCurPayment()).toEqual(bill);
    });
    
    it('should add payment info to the allPayments object: submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('25');
        expect(allPayments['payment1'].tipPercent).toEqual(25);
    });
  
    it('should not add a new entry when submitted with an empty input: submitPaymentInfo()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should update the payment table: appendPaymentTable()', function () {
        let bill = createCurPayment();
        allPayments['payment1'] = bill;

        submitPaymentInfo();
        
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$25');
        expect(curTdList[2].innerText).toEqual('25%');
        expect(curTdList[3].innerText).toEqual('X');
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