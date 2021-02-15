function printPermutations(str){
   if(str.length>50){
      console.log(`The string is longer than 50 characters`);
      process.exit(1);
   }
   console.log(`Print all permutations from "${str}":`);
   permutation(str, 0, str.length-1);
}

function permutation(str, idx, end){
   if(idx==end){
      console.log(str);
   }else{
      for(let i=idx; i<=end; i++){
         str = swap(str, idx, i); // Swap the characters to permutate
         permutation(str, idx+1, end); //Create new permutations using this permutation
         str = swap(str, idx, i); // Return to original string
      }
   }
}

function swap(str, idx1, idx2){
   let chars = str.split('');
   let tmp = chars[idx1]+''; // modify the value concatenating an empty string to avoid reference modifications
   chars[idx1] = chars[idx2]+'';
   chars[idx2] = tmp;
   return chars.join('');
}


var myArgs = process.argv.slice(2);
if(!myArgs[0]){
   console.log(`Did not send a string`);
   process.exit(1);
}

printPermutations(myArgs[0]);