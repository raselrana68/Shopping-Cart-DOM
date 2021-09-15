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