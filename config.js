// ======================================================
// CẤU HÌNH TRANG CHUYỂN TIẾP TRUNG GIAN
// ======================================================

const CONFIG = {
  // 1. Link trang web đích muốn chuyển tới (Thay link của bạn vào đây)
  // Ví dụ: "https://google.com" hoặc "https://facebook.com"
  targetUrl: "https://example.com",

  // 2. Tiêu đề và mô tả hiển thị trên trang
  title: "Đang Chuyển Hướng",
  subtitle: "Nhấn vào nút bên dưới để tiếp tục chuyển đến trang đích an toàn.",

  // 3. Chữ hiển thị trên nút bấm
  buttonText: "Tiếp tục đến trang đích",

  // 4. Mở trong tab mới ("_blank") hay tab hiện tại ("_self")
  targetWindow: "_self",

  // 5. Tự động chuyển sau X giây (Đặt 0 nếu CHỈ muốn chuyển khi người dùng BẤM NÚT)
  autoRedirectSeconds: 0, 

  // 6. Cho phép nhận link từ tham số URL: ?to=https://... (true/false)
  // Nếu bật, bạn có thể tạo link dạng: index.html?to=https://link-cua-ban.com
  allowUrlParam: true
};
