function separateAndValidate(str){
   //Separate the string into an array of characters to validate if there are repeated characters
   // if there are no repeated characters return the array to be used in the comparison
   let characters = [];
   for(let i=0; i<str.length; i++){
      let c = str.charAt(i);
      if(characters.indexOf(c)>=0){
         console.log(`String ${str} has repeated characters`);
         process.exit(1);
      }
      characters.push(c)
   }
   return characters;
}

function repeatedCharacters(str1, str2){
   console.log(`Comparing "${str1}" and "${str2}"`);
   let chars1 = separateAndValidate(str1.toLowerCase());
   let chars2 = separateAndValidate(str2.toLowerCase());
   //Separate the 2 strings into arrays and compare one of the arrays against the other
   // if there is a repeated add to a new array
   let repeated = [];

   for(let c of chars2){
      if(chars1.indexOf(c)>=0){
         repeated.push(c);
      }
   }
   return repeated;
}

/**
 *  ------------------------------------------------------------------
 * For a more efficient way
 *  ------------------------------------------------------------------
 */
function betterComparisonNoValidation(str1, str2){
   console.log(`Comparing "${str1}" and "${str2}"`);
   //Convert to Lowercase to avoid cases where the user puts Uppercase and Lowercase repeated characters, then separate the 2 strings into arrays
   let char1 = str1.toLowerCase().split(""), char2 = str2.toLowerCase().split("");
   //Create a dictionary using the first string to make a validation without using indexOf
   let dict = {};
   for(let c1 of char1){
      dict[c1] = true;
   }
   let repeated = [];
   //loop through the second string to check for repeated characters
   for(let c2 of char2){
      if(dict[c2]){
         //Turn off the character validation in the dictionary so it does not get repeated in the final result
         dict[c2]=false;
         repeated.push(c2)
      }
   }
   //At the end it does not matter if its not validated, all the measures are done to avoid repetition
   return repeated;
}

var myArgs = process.argv.slice(2);
if(!myArgs[0] || !myArgs[1]){
   console.log(`Did not send the 2 strings to compare (${myArgs})`);
   process.exit(1);
}

console.log('Repeated (without validation): ', betterComparisonNoValidation(myArgs[0],myArgs[1]));
console.log('Repeated (with validation)   : ', repeatedCharacters(myArgs[0],myArgs[1]));