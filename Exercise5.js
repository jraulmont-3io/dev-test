function getRomanNumeral(num){
   console.log(`Get roman number from ${num}`);
   let roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
   let decEquivalents = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
   let result = '';
   for(let idx=0; num>0; idx++){
      //Divide the number by the next biggest possible value and floor it to get the previous integer
      // with this we will know how many of that number concatenate
      let intDiv = Math.floor(num/decEquivalents[idx]);
      //Concatenate the next biggest possible roman symbol the times that the division results
      for(let i=0; i<intDiv; i++){
         result+=roman[idx];
      }
      //modify the number so we ignore the values already added and don't repeat symbols
      num = num%decEquivalents[idx];
   }

   return result;
}

var myArgs = process.argv.slice(2);
if(!myArgs[0]){
   console.log(`Did not send a a number`);
   process.exit(1);
}
let num = myArgs[0]*1;
if(Number.isNaN(num)){
   console.log(`The value sent is not a number (${myArgs[0]})`);
   process.exit(1);
}
if(num<1 || num>3999){
   console.log(`The value sent is not between 1 and 3999 (${num})`);
   process.exit(1);
}

console.log(`Result: ${getRomanNumeral(num)}`);