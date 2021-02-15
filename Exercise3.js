function ConvertToDecimal(str, base){
   //Convert to upper case to avoid issues with different letters and codes
   str = str.toUpperCase();
   console.log(`Convert the string "${str}" from base ${base} to integer decimal`);
   let values = [];
   //Create an array of values for each character of the string and validate if the characters are valid for that base
   for(let i=0; i<str.length; i++){
      let val = value(str.charCodeAt(i));
      if(val>=base){
         console.log(`Invalid value ${str.charAt(i)} for base ${base}`)
         process.exit(1);
      }
      values.push(val);
   }
   //Result starts with 0 so we can sum to this value
   let result = 0;
   //Power starts with 1 because we start at the position 0 and any number elevated at power 0 is 1 (n^0=1)
   let power = 1;

   //We loop the array in reverse because the conversion goes from right to left
   while(values.length>0){
      let val = values.pop();
      result+= val*power;
      power*=base;
   }

   return result;
}

function value(charCode){
   //The constants for the charcodes of 0, 9 and A which work as control symbols
   const CodeFor0 = 48, CodeFor9 = 57, CodeForA = 65;
   if(charCode >= CodeFor0 && charCode <= CodeFor9){
      return charCode - CodeFor0;//substract the code for 0 to get the real value of the char
   }else{
      return charCode - CodeForA+10;//add an offset of 10 so the letters come after the numbers (10 numbers from 0 to 9)
   }
}

var myArgs = process.argv.slice(2);
if(!myArgs[0] || !myArgs[1]){
   console.log(`Did not send the 2 values (${myArgs})`);
   process.exit(1);
}

if(Number.isNaN(myArgs[1]*1)){
   console.log(`The base is not a number (${myArgs})`);
   process.exit(1);
}

console.log(`Result: ${ConvertToDecimal(myArgs[0], myArgs[1]*1)}`);