//** type annotation */
let count: number; // khai báo biến number không có giá trị khởi tạo
let count1: number = 1; // khai báo biến number có gán giá trị khởi tạo

//** type Inference */
// khai báo biến không có type; ts tự động suy luận type theo giá trị khởi tạo
let count2 = 1;
// =>> count2 được ts suy luận và gán type number

/** type Inference vs type annotation 
 * type annotation : định nghĩa chính xác kiểu dữ liệu cho biến (ép buộc chính xác type)
 * type Inference : TS sẽ đoán kiểu dữ liệu dựa vào "thuật toán của nó" (tự động gán type)
*/