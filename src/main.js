// src/main.js

// Lấy các phần tử DOM
const bookingContainer = document.querySelector(".booking-container");
const contactSection = document.getElementById("contactSection");
const aboutSection = document.getElementById("aboutSection");
const contactLink = document.getElementById("contactLink");
const aboutBtn = document.getElementById("aboutBtn");
const homeLink = document.querySelector(".navbar-menu li:nth-child(1) a"); // Liên kết "Trang chủ"

// Hàm để ẩn tất cả các section
function hideAllSections() {
  bookingContainer.classList.add("hidden");
  contactSection.classList.add("hidden");
  aboutSection.classList.add("hidden");
  // Không ẩn modal
}

// Hàm để hiển thị một section cụ thể
function showSection(section) {
  hideAllSections();
  section.classList.remove("hidden");
}

// Xử lý sự kiện click cho liên kết "Trang chủ"
homeLink.addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  showSection(bookingContainer);
});

// Xử lý sự kiện click cho liên kết "Liên hệ"
contactLink.addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  showSection(contactSection);
});

// Xử lý sự kiện click cho liên kết "Về chúng tôi"
aboutBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  showSection(aboutSection);
});

// Xử lý form đặt vé (hàm searchTrip đã có trong HTML)
function searchTrip() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const tickets = document.getElementById("tickets").value;

  if (!from || !to || !date) {
    alert("Vui lòng điền đầy đủ thông tin điểm đi, điểm đến và ngày đi!");
    return;
  }

  alert(
    `Tìm chuyến xe từ ${from} đến ${to} vào ngày ${date} với ${tickets} vé.`
  );
  // Ở đây bạn có thể thêm logic để tìm kiếm chuyến xe, ví dụ gọi API hoặc hiển thị danh sách chuyến xe.
}

// Xử lý form liên hệ
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !subject || !message) {
    alert("Vui lòng điền đầy đủ các trường bắt buộc!");
    return;
  }

  alert("Cảm ơn bạn đã gửi email! Chúng tôi sẽ liên hệ lại sớm.");
  this.reset();
});

// Hiển thị modal khi nhấn nút "Đăng nhập/Đăng ký"
document.getElementById("loginBtn").addEventListener("click", () => {
  const modal = document.getElementById("authModal");
  modal.classList.remove("hidden");
  document.getElementById("authTitle").textContent = "Đăng nhập";
  document.querySelector(".submit-btn").textContent = "Đăng nhập";
  document.getElementById("toggleAuth").innerHTML =
    'Chưa có tài khoản? <span class="toggle-link">Đăng ký</span>';
});

// Đóng modal khi nhấn nút đóng
document.getElementById("closeAuthModal").addEventListener("click", () => {
  document.getElementById("authModal").classList.add("hidden");
});

// Đóng modal khi nhấn ra ngoài modal
document.getElementById("authModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("authModal")) {
    document.getElementById("authModal").classList.add("hidden");
  }
});

// Xử lý chuyển đổi giữa Đăng nhập và Đăng ký
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-link")) {
    const isLogin = document.getElementById("authTitle").textContent === "Đăng nhập";
    document.getElementById("authTitle").textContent = isLogin ? "Đăng ký" : "Đăng nhập";
    document.querySelector(".submit-btn").textContent = isLogin ? "Đăng ký" : "Đăng nhập";
    document.getElementById("toggleAuth").innerHTML = isLogin
      ? 'Đã có tài khoản? <span class="toggle-link">Đăng nhập</span>'
      : 'Chưa có tài khoản? <span class="toggle-link">Đăng ký</span>';
  }
});

