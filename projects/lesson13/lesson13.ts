///TODO: kiểu đặc biệt của array type
/**
 * giúp ép chặt kiểu giữ liệu của từng item trong array
 * hoặc biết rõ số lượng phần tử trong array
 * Hoạt động giống như Array, tuy nhiên, có thêm một vài quy định bắt buộc:
 * - Số phần tử của tuple cần được khai báo trước (cố định)
 * - Type của từng phần tử trong array cần được khai báo trước, và không nhất thiết phải giống nhau
 */

//--- array type ---//
let skill: (string| number)[] = [ 'yêu khoa học', 27];
skill.push('coding');
skill.push(69);

//--- tuple type ---//
let skill1: [string, number] = [ 'yêu khoa học', 27];
skill1.push('coding'); // error
skill1.push(69); // error

///=>> skill1 cần xác định datatype/size/order: type của item; size array; vị trí item.
/// let skill1: [string, number] -> item phải đúng type đúng vị trí được khai báo type và không được vượt quá  size = 2
///skill1.push('coding'); và skill1.push(69); -> error vì add vượt quá số lượng cho phép của array.

let skill3: [boolean,  string, number];
// skill3 = [1,'scode', true]; // error: sai order & datatype item index:1 và index:3
// skill3 = [true,'shimarin' , 22, 'xem code']; // error: size array vượt quá cho phép
skill3 = [true,'skill3', 18]; //success đúng datatype/size/order