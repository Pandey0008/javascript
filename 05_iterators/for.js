for (let i = 1; i <=20; i++){
    console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++){
    console.log(`${i} x ${j} = ${i*j}`);
  }    
}//table of 1 to 20
// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);//3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);//flash batman superman  
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break//break ka use hota hai loop ko break karne ke liye
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue//continue ka use hota hai us point par loop ko skip karne ke liye
    }
   console.log(`Value of i is ${index}`);
    
}