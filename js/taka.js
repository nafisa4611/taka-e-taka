function getInput(inputId){
    const inputIdValue = document.getElementById(inputId);
    const inputIdNew = inputIdValue.value;
    const input = parseFloat(inputIdNew);
    if (input > 0){
        // inputIdValue.value = '';
        return input;
    }
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const income = getInput('income-input');
    const foodExpense = getInput('food-input');
    const rentExpense = getInput('rent-input');
    const clothExpense = getInput('cloth-input');
    const savePercent = getInput('save-input');
    

    const totalExpensesInput = foodExpense + rentExpense + clothExpense;
    if (totalExpensesInput > 0 && income > totalExpensesInput){
        document.getElementById('total-expenses-input').innerText = totalExpensesInput;
    }
    

    const balance = income - totalExpensesInput;
    if (balance > 0 && income > totalExpensesInput){
        document.getElementById('balance-input').innerText =  balance;
    }
    
})
document.getElementById('save-btn').addEventListener('click', function(){
    const income = getInput('income-input');
    const foodExpense = getInput('food-input');
    const rentExpense = getInput('rent-input');
    const clothExpense = getInput('cloth-input');
    const savePercent = getInput('save-input');
    const totalExpensesInput = foodExpense + rentExpense + clothExpense;
    const balance = income - totalExpensesInput;

    const savingAmount = (savePercent * income) / 100;
    if (savePercent > 0 && savingAmount < totalExpensesInput){
        document.getElementById('saving-amount').innerText = savingAmount;
    }

    const remainingBalance = balance - savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
})