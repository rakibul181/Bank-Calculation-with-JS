// 1-- function to get vslure from Input field

function valueFromInput(input){
    const inputValue = document.getElementById(input)
    const inputValueStr = inputValue.value
    const inputValueAmount = parseFloat(inputValueStr)
    inputValue.value = ''
    return inputValueAmount
}

function amountFromID(id){
    const amount = document.getElementById(id)
    const amountValue = parseFloat(amount.innerText)
    return amountValue
}

function setNewValue(id, value){
    const targetID = document.getElementById(id)
    targetID.innerText = value
}