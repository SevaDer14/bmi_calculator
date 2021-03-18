const calculateMetricBMI = (weight, height) => {
    let result 
    result = (weight / ((height/100)*(height/100))).toFixed(1)
    return result
}

const getBMIClassification = (BMI) => {
    if (BMI < 18.5){
        return  "Underweight"
        }else  if (BMI < 25){
        return  "Healthy"
        }else  if (BMI <30){
        return  "Overweight"
        }else if (BMI >=30){
            return "Obese"
        }
}