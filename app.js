const cash = document.getElementById("cash")
const percentage = document.getElementById("percentage")
const valuation = document.getElementById("valuation")
const cashType = document.getElementById("cashType")
const calculateBtn = document.getElementById("calculateBtn")




calculateBtn.addEventListener("click", (e) => {
    e.preventDefault()
    

    if(cashType.value === "lakh") {
        const lakh = cash.value + "00000"
        const cashValue = parseFloat(lakh)
        console.log(cashValue)
        return cashValue
    }
    if(cashType.value === "crore") {
        const crore = cash.value + "0000000"
        const cashValue = parseFloat(crore)
        console.log(cashValue)
        return cashValue
    }

    console.log(cashValue)
    const percentageValue = parseFloat(percentage.value)


    const divide = cashValue / percentageValue;
    
    valuation.innerHTML = divide
    // console.log(divide * 100)


})