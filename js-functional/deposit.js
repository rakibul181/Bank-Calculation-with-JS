document.getElementById("deposit").addEventListener('click', function(){
    const newDeposit = valueFromInput('new-deposit')

    // console.log(newDeposit)
    // console.log(typeof newDeposit)

    const previousDeposit = amountFromID('previous-deposit')

    if(isNaN(newDeposit)){
        alert('Please Enter Valid Amount of Deposite')
    }
    else{
        const totalDeposit = newDeposit + previousDeposit

        setNewValue('previous-deposit',totalDeposit)

        const previousTotal = amountFromID('current-balance')
    

        const newbalance = previousTotal+ newDeposit

        setNewValue('current-balance',newbalance)
    }
    
})