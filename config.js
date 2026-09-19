// ======================================================
// CẤU HÌNH TRANG CHUYỂN TIẾP TRUNG GIAN
// ======================================================

const CONFIG = {
  // 1. Link trang web đích
  targetUrl: "https://w9.vty36.net/",

  // 2. Tiêu đề và mô tả hiển thị trên trang
  title: "Đang Chuyển Hướng",
  subtitle: "Nhấn vào nút bên dưới để tiếp tục truy cập an toàn.",

  // 3. Chữ hiển thị trên nút bấm
  buttonText: "Truy cập ngay",

  // 4. Mở trong tab hiện tại ("_self") hay tab mới ("_blank")
  targetWindow: "_self",

  // 5. Tự động chuyển sau X giây (0 = chỉ chuyển khi người dùng bấm nút)
  autoRedirectSeconds: 0, 

  // 6. Cho phép ghi đè link qua tham số ?to=... nếu bạn muốn linh hoạt (true/false)
  allowUrlParam: true
};
