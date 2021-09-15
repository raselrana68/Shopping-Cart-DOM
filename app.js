function productNumberUpdate(product, price, isChanging){
    const productInputField = document.getElementById(product+'-inputfield');
    let productNumber = productInputField.value;

    if(isChanging == true){
        productNumber = parseInt(productNumber)+1
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber)-1
    }
    productInputField.value = productNumber;

    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product+'-inputfield');
    const productNumber = productInput.value;
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10 ;
    const total = subTotal + tax ;

    //  
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = total;
}

//Mobile Handler
document.getElementById('phone-plus').addEventListener('click', function(){
    productNumberUpdate('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    productNumberUpdate('phone', 1219, false);
})
//case Handler
document.getElementById('case-plus').addEventListener('click', function(){
    productNumberUpdate('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    productNumberUpdate('case', 59, false);
})