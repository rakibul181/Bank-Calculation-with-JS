document.getElementById('withdraw').addEventListener('click',function(){
    //1-Get new Withdrawe Ammount
    const newWithdraw = document.getElementById('new-Withdraw')
    const newWithdrawAmount = newWithdraw.value
    const newWithdrawAmountNum = parseFloat(newWithdrawAmount)

    //2-get previus Withdraw amount
    const previousWithdraw = document.getElementById('previous-Withdraw')
    const previousWithdrawAmount = previousWithdraw.innerText

    // 3- convert Withdraw to number
    const previousWithdrawAmountNum = parseFloat(previousWithdrawAmount)


   


    

    // 6- get current total number
    const currentBalance = document.getElementById('current-balance')
    const currentBalanceAmount = currentBalance.innerText

    //7-- convert balance into number
    const currentBalanceAmountNum = parseFloat(currentBalanceAmount)

    // 8 - sum tatal balance
    if(newWithdrawAmountNum<=currentBalanceAmountNum){
         //4- sum tatal Withdraw amount on Withdraw
        const totalWithdraw = previousWithdrawAmountNum + newWithdrawAmountNum


        // 5- set total Withdraw
         previousWithdraw.innerText = totalWithdraw
        newWithdraw.value = ''


        const totalBalance = currentBalanceAmountNum - newWithdrawAmountNum
        // 9- set tatal new balance
        currentBalance.innerText = totalBalance
    }
    else{
        alert('Tor Baaper Bank a ato Taka nai :)')
        newWithdraw.value = ''
    }
    

  
})