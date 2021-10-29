const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppen = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(tinyArray);
let resultsInser = perf.stop();
perf.start();   
 
doublerAppend(smallArray);
let resultsAppe = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(smallArray);
let resultsInse = perf.stop();

doublerAppend(mediumArray);
let resultsApp = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(mediumArray);
let resultsIns = perf.stop();

doublerAppend(largeArray);
let resultsAp = perf.stop();  // Stops timer and save time results
perf.start();
doublerInsert(largeArray);
let resultsIn = perf.stop();



                 // Starts timer


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


console.log('Results for the smallArray');
console.log("insert", resultsInser.preciseWords);
console.log("append", resultsAppen.preciseWords);

console.log('Results for the tinyArray');
console.log("insert", resultsInse.preciseWords);
console.log("append", resultsAppe.preciseWords);


console.log('Results for the mediumArray');
console.log("insert", resultsIns.preciseWords);
console.log("append", resultsApp.preciseWords);

console.log('Results for the largeArray');
console.log("insert", resultsIn.preciseWords);
console.log("append", resultsAp.preciseWords);


// The smallarray scales fine as there isn't a large disparity between the insert and the append



function addtoZero(num){
    n = []
    for (i = 0; i < num.length; i++){
        if (num.includes(num[i] & Math.abs(num[i]))){
           
        }else{
            n.push(num[i])
        }
    }

}

console.log(addtoZero([1,-1,2]))


function hasUniqueChars(word){
    n = []
    for (i = 0; i < word.length; i++){
        if (n.includes(word[i])){
            
        }else {
            n.push(word[i])
        }
    }
    n = n.join('')
   
    if (n === word){
        return true
    } else {
        return false
    }
        
}

console.log(hasUniqueChars('woord'))