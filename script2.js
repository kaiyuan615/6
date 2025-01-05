function calculateFinancialForecast() {
    const currentSavings = parseFloat(document.getElementById("currentSavings").value);
    const currentIncome = parseFloat(document.getElementById("currentIncome").value);
    const savingsGrowthRate = parseFloat(document.getElementById("savingsGrowthRate").value) / 100;
    const incomeGrowthRate = parseFloat(document.getElementById("incomeGrowthRate").value) / 100;
    const years = parseInt(document.getElementById("years").value);

    if (isNaN(currentSavings) || isNaN(currentIncome) || isNaN(savingsGrowthRate) || isNaN(incomeGrowthRate) || isNaN(years)) {
        alert("請填寫所有欄位！");
        return;
    }

    let futureSavings = currentSavings * Math.pow((1 + savingsGrowthRate), years);
    let futureIncome = currentIncome * Math.pow((1 + incomeGrowthRate), years);

    document.getElementById("futureSavings").textContent = futureSavings.toFixed(2);
    document.getElementById("futureIncome").textContent = futureIncome.toFixed(2);
}
