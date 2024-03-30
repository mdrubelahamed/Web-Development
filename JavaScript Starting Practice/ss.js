function bmiCalculator (weight, height) {
  bmi = Math.round((weight / Math.pow(height)))
  if (bmi < 18.5) {
      return "Your BMI is" + bmi + ", so you are underweight."
  }
  else if (bmi > 18.5 && bmi <= 24.9) {
      return "Your BMI is" + bmi + ", so you have a normal weight"
  }
  else if (bmi > 24.9) {
      return "Your BMI is" + bmi + ", so you are overweight."
  }
}

bmiCalculator(74.05, 1.6)



