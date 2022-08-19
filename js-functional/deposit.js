document.getElementById("deposit").addEventListener('click', function(){
    const newDeposit = valueFromInput('new-deposit')

    const previousDeposit = amountFromID('previous-deposit')

    const totalDeposit = newDeposit + previousDeposit

    setNewValue('previous-deposit',totalDeposit)

    const previousTotal = amountFromID('current-balance')
    

    const newbalance = previousTotal+ newDeposit

    setNewValue('current-balance',newbalance)

    console.log(totalDeposit)
})