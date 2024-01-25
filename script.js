function countVowels(str){
let count = 0;
for(const char of str){
    if(char === "a" || char === "e" || char === "i" ||char === "o" || char === "u" ) {
        count ++;
    }
}
    console.log(count);
}


/*...........................................................................................................*/

let nums = [67,52,39];

let newArr = nums.map((val) => {
    return val * 2;
});

console.log(newArr);

let calaSquare = (num) => {
    console.log(num * num);
}

/*...........................................................................................................*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let evenArr = arr.filter((val) =>{
    return val % 2 === 0;

});

console.log(evenArr);


/*............................................................................................................*/

let arr1 = [1, 2, 4, 5, 7, 8, 9]

const output = arr1.reduce((prev, curr) =>{
    return prev + curr;
});

console.log(output);

/*..............................................................................................................*/

let marks = [89,78,56,99,44];

let toppers = marks.filter((val) =>{
    return val > 70;
});

console.log(toppers);

/*..................................................................................................................*/

let n = prompt("enter a number : ");
let arr3 =[];

for( let i=1; i<= n; i++){
    arr3[i-1] = i;
}

console.log(arr3);


/*....................................................................................................................*/


let num1 = prompt("enter a number : ");
let arr4 =[];

for( let i=1; i<= n; i++){
    arr4[i-1] = i;
}

console.log(arr4);

let sum1 = arr4.reduce((res, curr1) =>{
    return res + curr1;
})

console.log(sum1)

