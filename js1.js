function inputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueByString = inputField.value;
    const inputValue = parseInt(inputFieldValueByString); 
    return inputValue;
}
function getElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseInt(elementValueString);
    return elementValue;

}
function setTextElementValueById(elementId , newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const cashPrice = inputField('cash-price');
    const downPayment = inputField('down-payment')
    const amountToPay = cashPrice - downPayment;
    // console.log(amountToPay);
    setTextElementValueById('amount-to-pay', amountToPay);

    const interest = inputField('interest');
    const dueAmount = getElementValueById('amount-to-pay');
    const interestAmount1 = parseInt((dueAmount * interest)/100)
    // console.log(interestAmount);
    setTextElementValueById('interest-amount1', interestAmount1);

    const addInterest1 = getElementValueById('interest-amount1');
    // const dueAmount1 = getElementValueById('amount-to-pay');
    const firstAddedValue = dueAmount + addInterest1;
    setTextElementValueById('add-1st-interest', firstAddedValue);

    const installment = inputField('installment');
    const installmentWithInterest1 = installment + addInterest1;
    setTextElementValueById('installment-with-interest1',installmentWithInterest1);

    // const addedValue = getElementValueById('add-1st-interest');
    // const add
    const openingBalance1 = firstAddedValue - installmentWithInterest1 ;
    setTextElementValueById ('opening-balance',openingBalance1);

    const interestAmount2 = parseInt((openingBalance1 * interest)/100)
    // console.log(interestAmount);
    setTextElementValueById('interest-amount2', interestAmount2);

    const secondAddedValue = openingBalance1 + interestAmount2;
    setTextElementValueById('add-2st-interest',secondAddedValue);

    const installmentWithInterest2 = installment + interestAmount2;
    setTextElementValueById('installment-with-interest2',installmentWithInterest2);

    const openingBalance2 = secondAddedValue - installmentWithInterest2 ;
    setTextElementValueById ('opening-balance2',openingBalance2);

})



