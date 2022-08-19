document.getElementById('deposit').addEventListener('click',function(){
    //1-Get new deposite Ammount
    const newDeposit = document.getElementById('new-deposit')
    const newDepositAmount = newDeposit.value
    const newDepositAmountNum = parseFloat(newDepositAmount)

    //2-get previus deposit amount
    const previousDeposit = document.getElementById('previous-deposit')
    const previousDepositAmount = previousDeposit.innerText

    // 3- convert deposit to number
    const previousDepositAmountNum = parseFloat(previousDepositAmount)


    //4- sum tatal deposit amount on deposit
    const totalDeposit = previousDepositAmountNum + newDepositAmountNum


    // 5- set total deposit
    previousDeposit.innerText = totalDeposit
    newDeposit.value = ''

    // 6- get current total number
    const currentBalance = document.getElementById('current-balance')
    const currentBalanceAmount = currentBalance.innerText

    //7-- convert balance into number
    const currentBalanceAmountNum = parseFloat(currentBalanceAmount)

    // 8 - sum tatal balance
    const totalBalance = currentBalanceAmountNum + newDepositAmountNum

    // 9- set tatal new balance
    currentBalance.innerText = totalBalance
})