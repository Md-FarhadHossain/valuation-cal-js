const cash = document.getElementById("cash")
const percentage = document.getElementById("percentage")
const valuation = document.getElementById("valuation")
const calculateBtn = document.getElementById("calculateBtn")




calculateBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const cashValue = parseFloat(cash.value)
    const percentageValue = parseFloat(percentage.value)

    const divide = cashValue / percentageValue

    console.log(divide * 100)


})