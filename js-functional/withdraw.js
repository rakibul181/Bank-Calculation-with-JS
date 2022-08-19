document.getElementById("withdraw").addEventListener('', function(){
    const newWithdraw = valueFromInput('new-withdraw')

    const previousWithdraw = amountFromID('previous-withdraw')

    

    

    const previousTotal = amountFromID('current-balance')
    
    if(newWithdraw<=previousTotal){
        const totalWithdraw = newWithdraw + previousWithdraw
        setNewValue('previous-withdraw',totalWithdraw)
        const newbalance = previousTotal- newWithdraw

        setNewValue('current-balance',newbalance)
    }
    else{
        newbalance = 
        alert('Tor baper Bank a ato Taka nai :)')

    }

    

     
})