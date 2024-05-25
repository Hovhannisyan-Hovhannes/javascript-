// 1
// տրված են իրարից տարբեր a, b, c և d թվերը։ Կազմել բլոկ-սխեմա և ծրագիր, որոնք կարտածեն տրված թվերից մեծագույնի արժեքը
// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let max = a;
// let numbers = [a,b,c,d]

// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] > max)
//         max = numbers[i]
// }

// console.log(max);

// ==============================================================================================================================

// 2
// տրված են իրարից տարբեր a, b, c և d թվերը։ Կազմել բլոկ-սխեմա և ծրագիր, որոնք կարտածեն տրված թվերից փոքրագույնի արժեքը

// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let min = a;
// let numbers = [a,b,c,d]

// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] < min)
//         min = numbers[i]
// }

// console.log(min);

// ==================================================================================================================================

// 3
// տրված են իրարից տարբեր a, b, c և d թվերը։ Կազմել բլոկ-սխեմա և ծրագիր, որոնք կարտածեն true, եթե տրված թվերից գոնե մեկը
// հավասար է մեկի, այլապես՝ false: 

// let a = 1;
// let b = 20;
// let c = 30;
// let d = 40;
// let t = false;
// let numbers = [a,b,c,d]

// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i]===1){
//         
//     } return  true;     
// }
// console.log(t);

// ====================================================================================================================================

// 4
// տրված են իրարից տարբեր a, b, c և d թվերը։ Կազմել բլոկ-սխեմա և ծրագիր, որոնք եթե տրված թվերից երկուսի գումարը հավասար է
// մյուս երկուսի գումարին, ապա կարտածեն true, հակառակ դեպքում` false:

// function checkSum(a, b, c, d) {
//     const sum1 = a + b;
//     const sum2 = c + d;
//     let t = sum1 === sum2;

//     return t;
// }

// const a = 5;
// const b = 10;
// const c = 9;
// const d = 6;
// const result = checkSum(a, b, c, d);
// console.log("Result:", result);

// 5
// տրված են իրարից տարբեր a, b, c և d թվերը։ Կազմել բլոկ-սխեմա և ծրագիր, որոնք  եթե տրված թվերից մեկը հավասար է
// մյուս երեք թվերի գումարին, ապա կարտածեն true, հակառակ դեպքում` false:

// function checkSum(a, b, c, d) {
//     const sum1 = a;
//     const sum2 = b + c + d;
//     let t = sum1 === sum2;

//     return t;
// }

// const a = 25;
// const b = 10;
// const c = 9;
// const d = 6;
// const result = checkSum(a, b, c, d);
// console.log("Result:", result);

// 6

// տրված են իրարից տարբեր a, b, c և d թվերը։ Կազմել բլոկ-սխեմա և ծրագիր, որոնք եթե տրված թվերից գոնե երկուսը
// կենտ են, ապա կարտածեն մեկ, հակառակ դեպքում երկուս։


function checkNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    let result;
    if (count >= 2) {
        result = 1;
    } else {
        result = 2;
    }
    return result;
}


const numbers = [2, 3, 4, 1];

const result = checkNumbers(numbers);
console.log("Result:", result);
