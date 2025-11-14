/** any chỉ nên dùng khi và chỉ khi không chắc chắn được kiểu dữ liệu của biến là gì
 * TODO: any type bỏ qua việc check type của biến
 * thường dùng khi convert js -> ts
 * các logic phức tạp , kết hợp BE, API thì dùng any
 * hạn chế dùng any. 
 */
let namev2: any = "shimarin";

namev2 = true;

namev2 = 96;

