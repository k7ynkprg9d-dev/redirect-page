// ======================================================
// CẤU HÌNH TRANG CHUYỂN TIẾP TRUNG GIAN CHO BTY9276.COM
// ======================================================

const CONFIG = {
  // 1. Link trang web đích
  targetUrl: "https://bty9276.com/",

  // 2. Tiêu đề và mô tả hiển thị trên trang
  title: "BTY9276.COM",
  subtitle: "Nhấn vào nút bên dưới để đăng ký tài khoản chính thức.",

  // 3. Chữ hiển thị trên nút bấm
  buttonText: "Đăng kí tài khoản",

  // 4. Mở trong tab hiện tại ("_self") hay tab mới ("_blank")
  targetWindow: "_self",

  // 5. Tự động chuyển sau X giây (0 = chỉ chuyển khi người dùng bấm nút)
  autoRedirectSeconds: 0, 

  // 6. Cho phép ghi đè link qua tham số ?to=... nếu cần
  allowUrlParam: true
};
