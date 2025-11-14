const sum = (a: number, b: number) => {
    return a + b;
} // func trả về 1 giá trị

const handlesLogs = (message: string) => {
    console.log(">> message: ", message);
} // khi func không trả về gì thì sẽ là void type

const handlesLogs2 = (message: string): void => {
    console.log(">> message: ", message);
} // khi func không trả về gì thì sẽ là void type

// tương tự các ngôn ngữ khác void type thường dùng cho func thay vì biến
/** any vs void
 * any không quan tâm trả về gì, sao cũng được
 * void không trả về giá trị gì.
 * void chỉ thường dùng cho func.
 * void giúp code tường mình hơn, không phải đi soi return từng hàm.
 */

