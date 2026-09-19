# Hướng Dẫn Sử Dụng Trang Web Trung Gian (Redirect Page)

🌐 **Link Website Online (Có thể mở từ bất kỳ đâu):**
👉 **https://k7ynkprg9d-dev.github.io/redirect-page/**

- Mã nguồn local: `/Users/crack/.gemini/antigravity/scratch/redirect-landing-page`
- Kho lưu trữ GitHub: https://github.com/k7ynkprg9d-dev/redirect-page

---

## 📌 Cách mở trang web để xem thử
- Bạn có thể nhấp đúp trực tiếp vào file [`index.html`](file:///Users/crack/.gemini/antigravity/scratch/redirect-landing-page/index.html) để mở trên trình duyệt.
- Hoặc mở bằng lệnh trong Terminal:
  ```bash
  open /Users/crack/.gemini/antigravity/scratch/redirect-landing-page/index.html
  ```

---

## ⚙️ 3 Cách Cài Đặt Link Chuyển Tiếp (Target URL)

### Cách 1: Chỉnh sửa file `config.js` (Khuyên dùng)
Mở file [`config.js`](file:///Users/crack/.gemini/antigravity/scratch/redirect-landing-page/config.js) và thay đổi giá trị của `targetUrl`:
```javascript
const CONFIG = {
  // Điền link web đích của bạn vào đây:
  targetUrl: "https://your-website.com",

  // Tiêu đề và lời nhắn
  title: "Đang Chuyển Hướng",
  subtitle: "Nhấn vào nút bên dưới để tiếp tục.",

  // Chữ trên nút bấm
  buttonText: "Tiếp tục đến trang đích",

  // Mở trang trong tab mới ("_blank") hay cùng tab ("_self")
  targetWindow: "_self",

  // Đặt số giây để tự động chuyển tiếp (đặt 0 nếu chỉ muốn chuyển khi bấm nút)
  autoRedirectSeconds: 0,
};
```

### Cách 2: Chỉnh sửa nhanh trực tiếp trên giao diện web
- Khi mở trang web trên trình duyệt, bạn sẽ thấy biểu tượng bánh răng **⚙️** ở góc trên bên phải thẻ nội dung.
- Bấm vào đó, nhập link web đích của bạn và bấm **Lưu**. Link này sẽ được lưu trên trình duyệt của bạn.

### Cách 3: Truyền link động qua tham số URL (`?to=...`)
Rất thích hợp khi bạn muốn dùng 1 trang trung gian duy nhất cho nhiều link khác nhau:
- Ví dụ: `index.html?to=https://facebook.com`
- Hoặc: `https://yourdomain.com/?to=https://google.com`
Trang web sẽ tự động lấy link phía sau `?to=` làm trang đích!
