function bmiCalculator (weight, height) {
  height = Math.pow(2);
  
  interpretation =  weight/height;
  
  if(interpretation<18.5)
  {
   alert('Your BMI is ' + interpretation + ',so you are underweight.');  
  }
  
  if(interpretation >= 18.5 && interpretation<= 24.9)
  {
    alert('Your BMI is ' + interpretation + ',so you have a normal weight.');   
  }
  
  else(interpretation > 24.9)
  {
   alert('Your BMI is ' + interpretation + ',so you have overweight.');
  }
  return interpretation;
}

bmiCalculator (60,2); 