document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.getElementById("page-title");
  const pageSubtitle = document.getElementById("page-subtitle");
  const redirectBtn = document.getElementById("redirect-btn");
  const redirectBtnText = document.getElementById("redirect-btn-text");
  const countdownContainer = document.getElementById("countdown-container");
  const countdownSeconds = document.getElementById("countdown-seconds");

  // Hàm xác định link đích
  function getTargetUrl() {
    // Nếu cho phép nhận link qua tham số ?to=
    if (CONFIG.allowUrlParam) {
      const urlParams = new URLSearchParams(window.location.search);
      const toParam = urlParams.get("to");
      if (toParam) {
        return toParam.startsWith("http://") || toParam.startsWith("https://")
          ? toParam
          : `https://${toParam}`;
      }
    }

    // Link mặc định được cấu hình cố định
    return CONFIG.targetUrl || "https://w9.vty36.net/";
  }

  const activeUrl = getTargetUrl();

  // Áp dụng nội dung từ cấu hình
  if (CONFIG.title) pageTitle.textContent = CONFIG.title;
  if (CONFIG.subtitle) pageSubtitle.textContent = CONFIG.subtitle;
  if (CONFIG.buttonText) redirectBtnText.textContent = CONFIG.buttonText;

  // Thực hiện chuyển hướng
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

  // Sự kiện khi bấm nút
  redirectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    doRedirect();
  });

  // Tự động chuyển nếu có cấu hình đếm ngược
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
});
