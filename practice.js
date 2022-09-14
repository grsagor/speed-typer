function countDown(){
    let counter = 0;
    return function(){
      counter++;
      return counter;
    }
  } 

const counted = countDown();
const counted = countDown();
const counted = countDown();
const final = counted();
console.log(final);