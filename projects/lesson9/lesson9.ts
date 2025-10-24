let nameTS: string = `'Shimarin' và "TypeScript"`;
let name1TS = 'Miku và "tôi"';

let checkTemplateString = `TypeScript ${nameTS} ${name1TS}`;

console.log(">> check name: ", name1TS + nameTS);
console.log('>> check template string: ',  checkTemplateString);

///TODO: để thêm '' vào chuỗi string có thể thêm trực tiếp nếu chuỗi nằm trong "" và ngươc lại hoăc dùng ( \' || \")
/// hoặc có thể dùng `` để bọc chuỗi string thì có thể thêm cả '' và "" bên trong chuỗi;
/// `` nó thể hiện như 1 đoạn văn bản 
/// để có thể truyển value vào chuỗi string thì nên dùng `` để có thể sử dụng ${}; '' và "" không thêm ${} được