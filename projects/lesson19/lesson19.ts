/** Aliases type cho phép tạo 1 kiểu type mới từ những type đã tồn tại 
 * - gọn code hơn.
 * - Aliases type chưa tất cả các type hợp lệ trong typeScript
 * - Aliases type là tạo 1 định nghĩa type mới cho 1 dãy union type
 * =>> cú pháp: type aliases =  number | string | boolean | ... | ... ;
 */

type shiamrinType = number | string | boolean; // Aliases type
function addAliases(a: shiamrinType, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    if (typeof a === 'boolean' && typeof b === 'string') {
        return a.toString().concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(addAliases(1, 2)); // Output: 3
console.log(addAliases('Hello ', 'World')); // Output: HelloWorld