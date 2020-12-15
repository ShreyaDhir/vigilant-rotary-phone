var output = [];
var count = 1;
function fizzBuzz()
{   
  if(count%3===0)
  {
      output.push("Fizz"); 
     
  }
  
  if(count%5===0)
  {
     output.push("Buzz");
     
  }

if(count%3===0 && count%5===0)
  {
      output.push("fizzBuzz"); 
  }

   else
    {
     output.push(count);  
    }
  
}  
    
        
  
 