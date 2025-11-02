///TODO: cú pháp array : tên biến: type[]

let myArr: string[] = []; /// list String
let myArr1: (string | number | boolean) [] = [] /// list hỗn hợp mixed type; thứ tự type mixed không ảnh hưởng tới value
let myArrr2 = [99]; /// list tự xác định kiểu dữ liệu của array


let test: string[] = ['shiamrin'];

test.push('thích chơi game'); // add item mới vào vị trí cuối của array

console.log("hỏi dân it: ", test, "show size: ",  test.length);

test.pop(); // remove item ở vị trí cuối cùng trong array

console.log("hỏi dân it: ", test, "show size: ",  test.length);