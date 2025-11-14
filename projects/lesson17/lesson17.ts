/**Giới thiệu về Never Keyword
 * Any: trả về bất cứ thứ gì (áp dụng cho function và variable)
 * Void: không cần trả ra dữ liệu, không cần keyword return
 * -> (áp dụng chủ yếu cho function). 
 * -> nếu gán func void cho 1 biến. Thì biến đó sẽ trả về undefined type
 * Never: “không bao giờ” trả ra giá trị. Promise!
 * 
 * =>> Kiểu dữ liệu ‘never’ được sử dụng 
 *  khi chúng ta “chắc chắn” rằng một điều gì đấy không bao giờ sẽ xảy ra. 
 * (không cần trả ra kết quả, giống void ???)
 */

/** Phân biệt Never và Void
 * khi sử dụng void cho function, thực ra nó trả ra ‘undefined’ :v
 * 
 * => never type được dùng để ‘ám chỉ’:
 * một giá trị sẽ không bao giờ xảy ra (ví dụ về exception error)
 * hoặc
 * một giá trị sẽ không bao giờ được trả về (ví dụ về loop infinity)
 */

function handleException(errorMessage: string): never {
    throw new Error(errorMessage);

}

/** “Một hàm trả về kiểu never không thể có một điểm kết thúc có thể đạt tới.”
 * (Nghĩa là: hàm never phải luôn ném lỗi hoặc không bao giờ kết thúc,
 *  nên chương trình không thể chạy đến cuối hàm được.) 
 * =>> never thường sử dụng khi ta muốn xử lý lỗi
 * */