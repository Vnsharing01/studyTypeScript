// perfect code
const sum = (x, y) => {
    return x + y;
}

console.log(">> show sum1:", sum(5, 10)); // 15


// cần thêm validate kiểu dữ liệu
const sum2 = (x, y) => {
    // validate x,y là number ???
    return x + y;
}

console.log(">> show sum2:", sum2("name ", 10)); // chuỗi String "name 10"