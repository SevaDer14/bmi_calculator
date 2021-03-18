const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(weightInput.nodeValue, heightInput.value)
    let displayResultElement = document.getElementById('results')
    displayResultElement.innerHTML = <h1> Your BMI value is: ${results}</h1>
}

