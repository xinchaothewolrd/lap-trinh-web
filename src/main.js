// src/main.js

// Lấy các phần tử DOM
const bookingContainer = document.querySelector(".booking-container");
const contactSection = document.getElementById("contactSection");
const scheduleSection = document.getElementById("scheduleSection");
const ticketSection = document.getElementById("ticketSection");
const newsSection = document.getElementById("newsSection");
const aboutSection = document.getElementById("aboutSection");
const contactLink = document.getElementById("contactLink");
const aboutBtn = document.getElementById("aboutBtn");
const homeLink = document.querySelector(".navbar-menu li:nth-child(1) a"); // Liên kết "Trang chủ"
const scheduleLink = document.getElementById("scheduleLink");
const ticketLink = document.getElementById("ticketLink");
const newsLink = document.getElementById("newsLink");

// Hàm để ẩn tất cả các section
function hideAllSections() {
  bookingContainer.classList.add("hidden");
  contactSection.classList.add("hidden");
  aboutSection.classList.add("hidden");
  scheduleSection.classList.add("hidden");
  ticketSection.classList.add("hidden");
  newsSection.classList.add("hidden");
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

scheduleLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(scheduleSection);
});

ticketLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(ticketSection);
});

newsLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(newsSection);
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
    const isLogin =
      document.getElementById("authTitle").textContent === "Đăng nhập";
    document.getElementById("authTitle").textContent = isLogin
      ? "Đăng ký"
      : "Đăng nhập";
    document.querySelector(".submit-btn").textContent = isLogin
      ? "Đăng ký"
      : "Đăng nhập";
    document.getElementById("toggleAuth").innerHTML = isLogin
      ? 'Đã có tài khoản? <span class="toggle-link">Đăng nhập</span>'
      : 'Chưa có tài khoản? <span class="toggle-link">Đăng ký</span>';
  }
});

// lich trinh
// **************************           JavaScript cho trang lịch trình
document.addEventListener("DOMContentLoaded", function () {
  // Thiết lập ngày mặc định là ngày hiện tại
  const today = new Date();
  const formattedDate = today.toISOString().substr(0, 10);
  document.getElementById("travel-date").value = formattedDate;

  // Xử lý sự kiện nút tìm kiếm
  document.getElementById("search-btn").addEventListener("click", function () {
    const departure = document.getElementById("departure").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("travel-date").value;

    // Kiểm tra nếu người dùng chưa chọn điểm đi hoặc điểm đến
    if (!departure || !destination) {
      alert("Vui lòng chọn điểm đi và điểm đến");
      return;
    }

    // Kiểm tra nếu điểm đi và điểm đến giống nhau
    if (departure === destination) {
      alert("Điểm đi và điểm đến không được trùng nhau");
      return;
    }

    // Ở đây sẽ thêm code để gọi API hoặc lọc dữ liệu
    alert(
      `Đang tìm kiếm chuyến xe từ ${departure} đến ${destination} vào ngày ${date}`
    );
    // Trong thực tế, bạn sẽ gọi API hoặc lọc dữ liệu từ backend
  });

  // Xử lý sự kiện nút đặt vé
  const bookButtons = document.querySelectorAll(".book-btn");
  bookButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const row = this.closest("tr");
      const route = row.querySelector(".route-main").textContent;
      const time = row.cells[1].textContent;
      const price = row.cells[3].textContent;

      alert(
        `Bạn đang đặt vé cho chuyến ${route} khởi hành lúc ${time} với giá ${price}`
      );
      // Trong thực tế, bạn sẽ chuyển hướng đến trang đặt vé hoặc mở modal đặt vé
    });
  });
});
// *****************************          JavaScript cho trang tra cứu vé
document.addEventListener("DOMContentLoaded", function () {
  // Xử lý chuyển đổi giữa các phương thức tra cứu
  const methodTabs = document.querySelectorAll(".method-tab");
  const ticketCodeForm = document.getElementById("ticket-code-form");
  const phoneForm = document.getElementById("phone-form");
  const idCardForm = document.getElementById("id-card-form");

  methodTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Xóa active class từ tất cả các tab
      methodTabs.forEach((t) => t.classList.remove("active"));
      // Thêm active class vào tab được click
      this.classList.add("active");

      // Ẩn tất cả các form
      ticketCodeForm.style.display = "none";
      phoneForm.style.display = "none";
      idCardForm.style.display = "none";

      // Hiển thị form tương ứng
      const method = this.getAttribute("data-method");
      if (method === "ticket-code") {
        ticketCodeForm.style.display = "block";
      } else if (method === "phone") {
        phoneForm.style.display = "block";
      } else if (method === "id-card") {
        idCardForm.style.display = "block";
      }
    });
  });

  // Xử lý sự kiện nút tra cứu
  document.getElementById("lookup-btn").addEventListener("click", function () {
    const activeMethod = document
      .querySelector(".method-tab.active")
      .getAttribute("data-method");
    let inputValue = "";

    if (activeMethod === "ticket-code") {
      inputValue = document.getElementById("ticket-code").value;
    } else if (activeMethod === "phone") {
      inputValue = document.getElementById("phone-number").value;
    } else if (activeMethod === "id-card") {
      inputValue = document.getElementById("id-card").value;
    }

    if (!inputValue) {
      alert("Vui lòng nhập thông tin tra cứu");
      return;
    }

    // Giả lập kết quả tra cứu (trong thực tế sẽ gọi API)
    if (activeMethod === "ticket-code" && inputValue === "HL123456") {
      document.getElementById("ticket-result").style.display = "block";
      document.getElementById("no-result").style.display = "none";
    } else {
      document.getElementById("ticket-result").style.display = "none";
      document.getElementById("no-result").style.display = "block";
    }
  });

  // Xử lý sự kiện nút in vé
  const printBtn = document.querySelector(".print-btn");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  // Xử lý sự kiện nút hủy vé
  const cancelBtn = document.querySelector(".cancel-btn");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", function () {
      if (confirm("Bạn có chắc chắn muốn hủy vé này không?")) {
        alert(
          "Vé đã được gửi yêu cầu hủy. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
        );
      }
    });
  }
});

// ***************************JavaScript cho trang tin tức

document.addEventListener("DOMContentLoaded", function () {
  // Xử lý chuyển đổi giữa các danh mục tin tức
  const categoryBtns = document.querySelectorAll(".category-btn");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Xóa active class từ tất cả các button
      categoryBtns.forEach((b) => b.classList.remove("active"));
      // Thêm active class vào button được click
      this.classList.add("active");

      // Lọc tin tức theo danh mục (trong thực tế sẽ gọi API hoặc lọc dữ liệu)
      const category = this.textContent;
      console.log(`Lọc tin tức theo danh mục: ${category}`);

      // Giả lập việc lọc tin tức (trong thực tế sẽ thay đổi nội dung hiển thị)
      if (category === "Tất Cả") {
        // Hiển thị tất cả tin tức
        document.querySelectorAll(".news-card").forEach((card) => {
          card.style.display = "block";
        });
      } else {
        // Lọc tin tức theo danh mục
        document.querySelectorAll(".news-card").forEach((card) => {
          const cardCategory = card.querySelector(".news-category").textContent;
          if (cardCategory === category) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });

  // Xử lý tìm kiếm tin tức
  const searchBtn = document.querySelector(".search-box button");
  const searchInput = document.querySelector(".search-box input");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase().trim();

      if (!searchTerm) {
        // Nếu không có từ khóa tìm kiếm, hiển thị tất cả tin tức
        document.querySelectorAll(".news-card").forEach((card) => {
          card.style.display = "block";
        });
        return;
      }

      // Tìm kiếm tin tức theo từ khóa
      document.querySelectorAll(".news-card").forEach((card) => {
        const title = card
          .querySelector(".news-title")
          .textContent.toLowerCase();
        const excerpt = card
          .querySelector(".news-excerpt")
          .textContent.toLowerCase();

        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });

    // Thêm sự kiện tìm kiếm khi nhấn Enter
    searchInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        searchBtn.click();
      }
    });
  }

  // Xử lý phân trang
  const pageBtns = document.querySelectorAll(".page-btn");

  pageBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Xóa active class từ tất cả các button
      pageBtns.forEach((b) => b.classList.remove("active"));
      // Thêm active class vào button được click
      this.classList.add("active");

      // Trong thực tế sẽ gọi API để lấy dữ liệu trang tương ứng
      const page = this.textContent;
      console.log(`Chuyển đến trang: ${page}`);

      // Giả lập việc chuyển trang (cuộn lên đầu trang)
      window.scrollTo({
        top: document.querySelector(".news-header").offsetTop,
        behavior: "smooth",
      });
    });
  });
});
