function longestWord(sentence){
   console.log(`Sentence to validate "${sentence}"`);
   //Separate the sentence by space to get the words
   let words = sentence.split(" ");
   let longestWords = [""];
   let longestSize = 0;
   for(let word of words){
      //If the length of the current word is longer than the last, override the array with the new length and word
      if(word.length > longestSize){
         longestWords = [word];
         longestSize = word.length;
         continue;
      }
      //If the length is the same as the current longest word check if it's already in the array, if not add the word to the array and keep the word size as is
      if(word.length == longestSize && longestWords.indexOf(word)<0){
         longestWords.push(word);
      }
   }
   //If the length of the array is bigger than 1 there is more than 1 non repeated word of the same length, return the array
   if(longestWords.length>1){
      return longestWords;
   }

   //If the array is not returned, return the first element of the array
   return longestWords[0];
}

var myArgs = process.argv.slice(2);
if(!myArgs[0]){
   console.log(`Did not send the sentence`);
   process.exit(1);
}

console.log("Result: ", longestWord(myArgs[0]));