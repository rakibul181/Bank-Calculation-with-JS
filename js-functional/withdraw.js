document.getElementById("withdraw").addEventListener('click', function(){
    const newWithdraw = valueFromInput('new-withdraw')

    const previousWithdraw = amountFromID('previous-withdraw')
    

    const previousTotal = amountFromID('current-balance')
    console.log(previousTotal)
    
    if(isNaN(newWithdraw)){
        alert('Enter a Valid withdraw Amount')
    }

    else{
        if(previousTotal>=newWithdraw){
            const totalWithdraw = newWithdraw + previousWithdraw
            setNewValue('previous-withdraw',totalWithdraw)
            const newbalance = previousTotal- newWithdraw
    
            setNewValue('current-balance',newbalance)
        }
        else{ 
            alert('Tor baper Bank a ato Taka nai :)')
    
        }
    }

     
})