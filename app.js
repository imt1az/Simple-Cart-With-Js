function perItemCost(items) {
    const perItem = document.getElementById(items);
    const perItemText = perItem.innerText;
    const perItemValue = parseInt(perItemText);
    console.log(perItemValue);
    return perItemValue;
}

function updateCaseNumber(isIncreasing, input, items, cost) {
    const phoneInput = document.getElementById(input);
    let phoneInputText = phoneInput.value;
    if (isIncreasing == true) {
        phoneInput.value = parseInt(phoneInputText) + 1;
        const itemCost = perItemCost(items) + cost;
        calculateTotal();
        // console.log(itemCost);
        document.getElementById(items).innerText = itemCost;
    } else if (phoneInputText > 0) {
        phoneInput.value = parseInt(phoneInputText) - 1;
        const itemCost = perItemCost(items) - cost;
        document.getElementById(items).innerText = itemCost;
        calculateTotal();
    }
}
//Case adding
document.getElementById("case-plus").addEventListener("click", function () {
    updateCaseNumber(true, "caseInput", "perItem", 2);
});
//Case decreasing
document.getElementById("case-minus").addEventListener("click", function () {
    updateCaseNumber(false, "caseInput", "perItem", 2);
});

//Phone Adding
document.getElementById("phone-plus").addEventListener("click", function () {
    updateCaseNumber(true, "phoneInput", "perMobile", 3);
});

//Phone Minus
document.getElementById("phone-minus").addEventListener("click", function () {
    updateCaseNumber(false, "phoneInput", "perMobile", 3);
});


function getInputValue(param){
   const inputValue = document.getElementById(param).value;
    const input = parseInt(inputValue);
    // console.log(input);
    return input;
}


//Sub Total
function calculateTotal(){
    const caseTotal = getInputValue('caseInput') * 2;
    const phoneTotal = getInputValue('phoneInput') * 3;
   const subTotal = caseTotal + phoneTotal;
   const tax = subTotal/10;
   const total = subTotal + tax;
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('total').innerText = total;
    // document.getElementById('sub-total').innerText = caseTotal;
}