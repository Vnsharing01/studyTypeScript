/// TODO: muốn bắt đầu 1 kiểu type thì dùng keyword [tên biến]: type
/// gọi là type annotation

let nameS6: string = "Shimarin";

// nameS6 =  10; // error vì nameS6 đã được khai báo kiểu string

console.log(">> show nameS6: ", nameS6)

let ageS6: string[] = ["Shimarin", "Megumi", " Miku"]; // khai bảo mảng là type[]

// ageS6.push(25); // error vì ageS6 đã được khai báo kiểu string[]

ageS6.push("TypeScript")

console.log(">> show ageS6: ", ageS6)