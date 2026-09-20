// ======================================================
// CẤU HÌNH TRANG CHUYỂN TIẾP TRUNG GIAN CHO SÚT BÓNG TV
// ======================================================

const CONFIG = {
  // 1. Link trang web đích
  targetUrl: "https://bit.ly/sutbongtv",

  // 2. Tiêu đề và mô tả hiển thị trên trang
  title: "SÚT BÓNG TV",
  subtitle: "Nhấn vào nút bên dưới để truy cập xem trực tiếp bóng đá.",

  // 3. Chữ hiển thị trên nút bấm
  buttonText: "Truy cập ngay",

  // 4. Mở trong tab hiện tại ("_self") hay tab mới ("_blank")
  targetWindow: "_self",

  // 5. Tự động chuyển sau X giây (0 = chỉ chuyển khi người dùng bấm nút)
  autoRedirectSeconds: 0, 

  // 6. Cho phép ghi đè link qua tham số ?to=... nếu cần
  allowUrlParam: true
};
