function caseNumberUpdate(isChanging){
    const caseInputField = document.getElementById('case-input-field');
    let caseNumber = caseInputField.value;

    if(isChanging == true){
        caseNumber = parseInt(caseNumber)+1
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber)-1
    }
    caseInputField.value = caseNumber;

    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59 ;
}

document.getElementById('case-plus-btn').addEventListener('click', function(){
    caseNumberUpdate(true);
})

document.getElementById('case-minus-btn').addEventListener('click', function(){
    caseNumberUpdate(false);
})