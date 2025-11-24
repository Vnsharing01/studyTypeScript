/// lesson 20
// -- if else -- //
let age: number= 15;
if (age > 18) {
    console.log(" bạn có thể xem JAV ...!");
} else {
    console.log(" về xem hoạt hình thiếu nhi đi bé ...!");
}
// if() mà truyền vào 1 biến thì nó sẽ quy về boolean => Boolean();
// =>> if(name) vs name ='shiamrin' -> if(Boolean('shimairn')) == if(true)
/// câu lệnh if else dùng y như các ngôn ngữ khác. 

/// lesson 21
// -- switch case -- //
const age21: number = 25;

switch (age21) {
    case 25:
        console.log("đủ tuổi đi làm!");
        break;
    case 20:
    case 19:
        console.log("đủ tuổi đi học!");
        break;
    default:
        console.log(">>> run default <<<");

}
/** mô hình thác nước:
 * tất cả các case không có code bloc ở phía trên sẽ tính là cùng 1 điểu kiện
 *  tương đương với ||
 *  case 20:
    case 19:
    case 18:
        console.log("đủ tuổi đi học!");
    giống với
    if(20 || 19 || 18) console.log("đủ tuổi đi học!");
 */

/// câu lệnh switch case dùng y như các ngôn ngữ khác. 