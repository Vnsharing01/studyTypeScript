let test: number = 9.6;

test = 19999; // vẫn hợp lệ 

const a1: number = 123;

let a2: number;

/// TODO:  ts không có kiểu int;float hay double mà chỉ có 1 kiểu duy nhất là number
/// int||float||double => number
/// dù value gán vào là int hay double thì vẫn tính là number hợp lệ không báo lỗi;
/// nếu biến đó có const key thì bắt buộc khai báo value cho biến