document.addEventListener("DOMContentLoaded", () => {
  // Lấy các element trên giao diện
  const pageTitle = document.getElementById("page-title");
  const pageSubtitle = document.getElementById("page-subtitle");
  const redirectBtn = document.getElementById("redirect-btn");
  const redirectBtnText = document.getElementById("redirect-btn-text");
  const destinationPreview = document.getElementById("destination-preview");
  const countdownContainer = document.getElementById("countdown-container");
  const countdownSeconds = document.getElementById("countdown-seconds");

  // Elements của modal cài đặt nhanh
  const settingsBtn = document.getElementById("settings-btn");
  const settingsModal = document.getElementById("settings-modal");
  const targetUrlInput = document.getElementById("target-url-input");
  const saveSettingsBtn = document.getElementById("save-settings-btn");
  const cancelSettingsBtn = document.getElementById("cancel-settings-btn");

  // Hàm lấy URL đích (ưu tiên: Tham số URL > LocalStorage > config.js)
  function getTargetUrl() {
    // 1. Kiểm tra tham số ?to= trên thanh địa chỉ nếu cho phép
    if (CONFIG.allowUrlParam) {
      const urlParams = new URLSearchParams(window.location.search);
      const toParam = urlParams.get("to");
      if (toParam) {
        try {
          // Thêm http/https nếu người dùng gõ thiếu
          return toParam.startsWith("http://") || toParam.startsWith("https://")
            ? toParam
            : `https://${toParam}`;
        } catch (e) {
          console.error("Lỗi parse URL param:", e);
        }
      }
    }

    // 2. Kiểm tra cấu hình đã lưu trong LocalStorage (nếu người dùng bấm Cài đặt)
    const storedUrl = localStorage.getItem("custom_redirect_target_url");
    if (storedUrl && storedUrl.trim() !== "") {
      return storedUrl.trim();
    }

    // 3. Sử dụng link mặc định trong config.js
    return CONFIG.targetUrl || "https://example.com";
  }

  // Khởi tạo thông tin lên giao diện
  let activeUrl = getTargetUrl();

  pageTitle.textContent = CONFIG.title || "Đang Chuyển Hướng";
  pageSubtitle.textContent = CONFIG.subtitle || "Nhấn vào nút bên dưới để tiếp tục.";
  redirectBtnText.textContent = CONFIG.buttonText || "Tiếp tục đến trang đích";
  destinationPreview.textContent = activeUrl;

  // Hành động chuyển hướng
  function doRedirect() {
    let url = activeUrl;
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    if (CONFIG.targetWindow === "_blank") {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  }

  // Sự kiện khi bấm nút chuyển hướng
  redirectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    doRedirect();
  });

  // Xử lý đếm ngược tự động nếu được bật trong config.js
  if (CONFIG.autoRedirectSeconds && CONFIG.autoRedirectSeconds > 0) {
    countdownContainer.style.display = "block";
    let timeLeft = CONFIG.autoRedirectSeconds;
    countdownSeconds.textContent = timeLeft;

    const timer = setInterval(() => {
      timeLeft -= 1;
      countdownSeconds.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        doRedirect();
      }
    }, 1000);
  }

  // --- Modal cài đặt URL nhanh ngay trên trình duyệt ---
  settingsBtn.addEventListener("click", () => {
    targetUrlInput.value = activeUrl;
    settingsModal.style.display = "flex";
  });

  cancelSettingsBtn.addEventListener("click", () => {
    settingsModal.style.display = "none";
  });

  saveSettingsBtn.addEventListener("click", () => {
    let newUrl = targetUrlInput.value.trim();
    if (newUrl) {
      if (!newUrl.startsWith("http://") && !newUrl.startsWith("https://")) {
        newUrl = "https://" + newUrl;
      }
      localStorage.setItem("custom_redirect_target_url", newUrl);
      activeUrl = newUrl;
      destinationPreview.textContent = activeUrl;
      settingsModal.style.display = "none";
      alert("Đã lưu link đích thành công!");
    }
  });

  // Đóng modal khi click ra ngoài
  window.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.style.display = "none";
    }
  });
});
