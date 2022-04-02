// Widthdraw and Deposit 

document.getElementById('deposit-button').addEventListener('click', function(){

    // Getting deposit Amount 

    const depositInput = document.getElementById('deposit-input');

    const depositAmount = depositInput.value;


    // getting deposit current amount and update

    const depositCurrent = document.getElementById('deposit-total');

    
    const depositCurrentTotal = parseFloat(depositAmount) + parseFloat(depositCurrent.innerText);

    depositCurrent.innerText = depositCurrentTotal;

    depositInput.value = '';

// getting balance and update 


    const currentBalance = document.getElementById('balance-total');
    
    const newCurrentBalance = parseFloat(currentBalance.innerText) + parseFloat(depositAmount);
    
    currentBalance.innerText = newCurrentBalance;


})

// Withdraw amount getting and update 

document.getElementById('withdraw-button').addEventListener('click', function(){

    // Getting withdraw amount 
    
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    console.log(withdrawAmount);

    // Total withdraw Amount

    const withdrawTotal = document.getElementById('withdraw-total');
    
    console.log(withdrawTotal.innerText);

    withdrawTotal.innerText = parseFloat(withdrawAmount) + parseFloat(withdrawTotal.innerText);

    withdrawInput.value = '';

    // Total balance after withdraw

    const currentBalance = document.getElementById('balance-total');

    currentBalance.innerText = parseFloat(currentBalance.innerText) - parseFloat(withdrawAmount);

})