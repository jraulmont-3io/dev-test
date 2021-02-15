
function AddNumber(number1, number2){
   console.log(`Adding ${number1} and ${number2}`);
   let result = sum(number1, number2);
   console.log(`Result: ${result}`);
}

function sum(n1, n2){
   //To sum 2 numbers without arithmetic operators we can use bitwise operations
   // n1 will contain the common set bits between previous n1 and n2, shifted by 1 until its 0
   // n2 will contain the XOR operators between previous n1 and n2 which will be generating the sum of both numbers
   if (!n1)
      return n2;
   else
      return sum((n1 & n2) << 1, n1 ^ n2);
}

var myArgs = process.argv.slice(2);
if(!myArgs[0] || !myArgs[1]){
   console.log(`Did not send the 2 numbers to sum (${myArgs})`);
   process.exit(1);
}

if(Number.isNaN(myArgs[0]*1) || Number.isNaN(myArgs[1]*1)){
   console.log(`One of the 2 numbers is not a number (${myArgs})`);
   process.exit(1);
}

AddNumber(myArgs[0]*1, myArgs[1]*1);
