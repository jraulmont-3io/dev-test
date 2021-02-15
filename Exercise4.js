function createZeros(arr){
   validateArray(arr);
   console.log(`Change zeros for entire rows and colums where there are zeros in the next array:`)
   prettyPrint(arr);
   let rows = [], cols = [];
   //Find the rows and colums to convert to zero
   for(let row = 0; row<arr.length; row++){
      for(let col = 0; col<arr[row].length; col++){
         if(arr[row][col]===0){
            if(rows.indexOf(row)<0) rows.push(row) 
            if(cols.indexOf(col)<0) cols.push(col) 
         }
      }
   }
   //Convert all rows found to zero
   for(let row of rows){
      for(let col = 0; col<arr[row].length; col++){
         arr[row][col]=0;
      }
   }
   //Convert all columns found to zero
   for(let row = 0; row<arr.length; row++){
      for(let col of cols){
         arr[row][col]=0;
      }
   }
   console.log('Result:');
   prettyPrint(arr);
}

function validateArray(arr){
   if(!Array.isArray(arr)){
      console.log(`Did not send a valid array`);
      process.exit(1);
   }
   for(let a of arr){
      if(!Array.isArray(a)){
         console.log(`The array does not contain a valid array`);
         process.exit(1);
      }
   }
}

function prettyPrint(array){
   let result = [];
   for(let i=0; i<array.length; i++){
      result.push(JSON.stringify(array[i]));
   }
   console.log(JSON.stringify(result, null, 3));
}

var myArgs = process.argv.slice(2);
if(!myArgs[0]){
   console.log(`Did not send the array`);
   process.exit(1);
}
createZeros(JSON.parse(myArgs[0]));