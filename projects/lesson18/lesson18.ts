function addNumberOrString(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(addNumberOrString(1, 2)); // Output: 3
console.log(addNumberOrString('Hello', 'World')); // Output: HelloWorld

// Error: Parameters must be numbers or strings
// lỗi khi running
// console.log(addNumberOrString(1, 'Hello')); 

/// hàm với biến có union type
function addUnion(a: number | string | boolean, b: number | string) {
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
console.log(addUnion(1, 2)); // Output: 3
console.log(addUnion('Hello', 'World')); // Output: HelloWorld
console.log(addUnion(true, 'yolo')); // hết lỗi 