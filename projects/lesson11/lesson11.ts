let person: object; // khởi tạo 1 biến object 
let abc: {}; // khởi tạo 1 biến object 

person = { name: "Shiamrin" };

/// khai báo biến object có set kiểu dữ liệu cho giá trị khởi tạo và gán giá trị khởi tạo từ đầu
let checkObject: { name: string; age: number; } = {
    name: "Miku", age: 25,
}

console.log('>> show object: ', checkObject);

/** ví dự:
 * let employee: {name: string; age: number; job: string;}
 * 
 * emplyee = {
 * name: 'Boy',
 * age: 27,
 * job: flutter mobile,
 * }
 *  =>> show ra thông tin của nhân viên: {name: 'Boy', age: 27, job: 'flutter mobie}
 */