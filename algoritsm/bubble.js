// // // let arr = [7,8,6,5,1]

// // function bubbleSort(arr){

// //     for( let i=0; i<arr.length-1; i++ ){
// //         for(let j=0; j<arr.length-i-1; j++){
// //             if(arr[j]<arr[j+1]){
// //                 temp = arr[j]
// //                 arr[j] = arr[j+1]
// //                 arr[j+1] = temp
// //             }            
// //         }

// //     }
// //     console.log(arr);
// // }

// // bubbleSort(arr)

// // let arr2 = [80, 96, 75, 82, 96, 92, 100]

// // function chooseArr(arr){

// //     for (let i=0; i<arr.length-1; i++){
// //         for(let j=i; j<arr.length-1; j++){
// //             if(arr[j]>arr[j+1]){
// //             temp = arr[j]
// //             arr[j] = arr[j+1]
// //             arr[j+1] = temp
// //             console.log(arr)
// //             }
           
// //         }
// //     }

// //     console.log(arr)

// // }

// // function three(arr2){

// //     let result = 0;

// //     for(let i=0; i<arr2.length; i++){
// //         for(let j=i+1; j<arr2.length; j++){
// //             if(arr2[i]<arr2[j]){
// //                 temp = arr2[i]
// //                 arr2[i] = arr2[j]
// //                 arr2[j] = temp
// //             }
// //         }
// //     }

// //     console.log(arr2)

// //     for(let i=0; i<arr2.length; i++){

// //             if(i==0){
// //                 result ++
// //             }else if(arr2[i] == arr2[i+1]){
// //                 result = result + 0
// //             }else{
// //                 result ++ 
// //             }

// //             if(result == 3){
// //                 return console.log(arr2[i])
// //             }
        
// //     }
// // }

// // three(arr2)

let arr = [8,5,6,2,4]
function insert(arr){

    let j = 1;
    while(j == arr.length-1){
        for(let k=0; k<arr.length-1; k++){
            if(j != k && arr[j]<arr[k]){
                temp = arr[j]
                arr[j] = arr[k]
                arr[k] = temp 
            }
        } 
        j++       
    }
    console.log(arr)

}
insert(arr)

// let Narr = [8,5,17,8,4,9,12,4,7,19,5,19,8,15,11,12,1,4,17,18]

// function main(S,N) {

//     // let [S,N] = prompt("S,N").split(" ").map(x => Number(x));
//     let cache = new Array(S).fill(0);
//     console.log(cache)
//     console.log(Narr)
//     for(let i=0; i<Narr.length; i++){

//         let undefined_boolean = false;

//         for(let j=0; j<cache.length-1; j++){
//             if(Narr[i] == cache[j]){
//                 undefined_boolean = true;
//             }
//         }

//         if(undefined_boolean == false){
//             cache.unshift(Narr[i])
//             cache.pop()
//         }else if(undefined_boolean == true){
//             cache.unshift(Narr[i])
//             cache.pop(Narr[i])
//         }else{

//         }
//         // if(cache.includes(Narr[i]) == undefined){
//         //     cache.unshift(Narr[i])
//         //     cache.pop()
//         // }else if(cache.includes(Narr[i]) != undefined){
//         //     cache.unshift(Narr[i])
//         //     cache.pop(Narr[i])
//         // }else{

//         // }
 
//     }
//     //1. 모든 배열을 0으로 채운다
//     //2-1. 배열에 같은 숫자가 없는 경우 unshift 그 숫자와 shift 마지막 숫자
//     //2-2. 배열에 같은 숫자가 있는 경우 unshift 그 숫자와 그 숫자 삭제
//     console.log(cache)
//     //0. 첫 숫자는 가만히 두고
//     //1. 그 숫자가 Narr배열의 이제껏 앞에 없었으면 그 숫자를 배열의 처음에 둔다.


// }
// main(5,20)
// 1 2 3 2 6 2 3 5 7
// 1
// 21
// 321
// 231
// 6231
// 2631
// 3261
// 53261
// 753261