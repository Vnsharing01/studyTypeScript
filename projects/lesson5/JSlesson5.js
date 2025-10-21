 namejs = "lesson5";

console.log(">> show name length: ",  namejs.length);
console.log(">> show name toUpperCase: ",  namejs.toUpperCase());


// lỗi khi gán kiểu khác 
namejs = 3;
console.log(">> show name length: ",  namejs.length);
console.log(">> show name toUpperCase: ",  namejs.toUpperCase());

/// javasccript không xác định kiểu dữ liệu biến nên khi code sẽ không có nhắc code với IDE
/// và khi chạy code sẽ không báo lỗi kiểu dữ liệu biến
/// dẫn đến lỗi runtime khó debug