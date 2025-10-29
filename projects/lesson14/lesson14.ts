/// TODO: tương tự các ngôn ngữ lập trình khác.

enum API_STATUS {
    PEDDING,
    FULFILLED,
    REJECTED, // promise
} // =>> numeric enum -> giá trị enum = index trong mảng 
enum API_STATUS2 {
    PEDDING = 'pedding',
    FULFILLED = 'fulfilled',
    REJECTED = ' rejected', // promise
} // =>> string enum -> giá trị enum = chuỗi string được gán

let a1 = API_STATUS2.PEDDING;
let a2 = API_STATUS2.FULFILLED

console.log(">> show a1: " , a1, ">> show a2: " , a2)
