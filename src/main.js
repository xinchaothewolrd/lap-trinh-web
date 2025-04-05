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
const sliderSection = document.getElementById("sliderSection");
const popularSection = document.getElementById("popularSection");
const futaSection = document.getElementById("futaSection");
const bookingbannerSection = document.getElementById("bookingbannerSection");
// Hàm làm nổi bật link được chọn
function setActiveLink(link) {
  document.querySelectorAll(".navbar-menu a").forEach((a) => {
    a.classList.remove("active");
  });
  link.classList.add("active");
}


// Hàm để ẩn tất cả các section
function hideAllSections() {
  bookingContainer.classList.add("hidden");
  contactSection.classList.add("hidden");
  aboutSection.classList.add("hidden");
  scheduleSection.classList.add("hidden");
  ticketSection.classList.add("hidden");
  newsSection.classList.add("hidden");
  sliderSection.classList.add("hidden"); 
  popularSection.classList.add("hidden");
  futaSection.classList.add("hidden");
  bookingbannerSection.classList.add("hidden");
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
  sliderSection.classList.remove("hidden");
  popularSection.classList.remove("hidden");
  futaSection.classList.remove("hidden");
  bookingbannerSection.classList.remove("hidden");
  setActiveLink(homeLink); 
});

scheduleLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(scheduleSection);
  setActiveLink(scheduleLink);
});

ticketLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(ticketSection);
  setActiveLink(ticketLink);
});

newsLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(newsSection);
  setActiveLink(newsLink);
});

// Xử lý sự kiện click cho liên kết "Liên hệ"
contactLink.addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  showSection(contactSection);
  setActiveLink(contactLink);
});

// Xử lý sự kiện click cho liên kết "Về chúng tôi"
aboutBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  showSection(aboutSection);
  setActiveLink(aboutBtn);
});

// Bắt sự kiện khi click vào thẻ tuyến phổ biến
document.querySelectorAll(".popular-routes .route-item").forEach(item => {
  item.addEventListener("click", () => {
    hideAllSections();
    document.getElementById("scheduleSection").classList.remove("hidden");
    setActiveLink(document.getElementById("scheduleLink"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
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
}

// Xử lý slider Khuyễn Mãi
let promoIndex = 0;
const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].offsetWidth + 20; // 360 + 20 = 380

function showPromoSlides() {
  promoIndex++;
  if (promoIndex > slides.length - 3) promoIndex = 0; // quay lại đầu nếu hết
  track.style.transform = `translateX(-${promoIndex * slideWidth}px)`;
}

setInterval(showPromoSlides, 4000); // 4 giây trượt 1 lần



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

// Hiển thị modal Đăng nhập/Đăng ký
document.getElementById("loginBtn").addEventListener("click", () => {
  const modal = document.getElementById("authModal");
  modal.classList.remove("hidden");
  setAuthMode("login"); // Mặc định là Đăng nhập
});

// Đóng modal khi nhấn nút đóng
document.getElementById("closeAuthModal").addEventListener("click", () => {
  document.getElementById("authModal").classList.add("hidden");
});

// Chuyển đổi giữa Đăng nhập và Đăng ký
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-link")) {
    const currentMode = document.getElementById("authTitle").textContent;
    setAuthMode(currentMode === "Đăng nhập" ? "register" : "login");
  }
});

// Hàm thiết lập chế độ Đăng nhập hoặc Đăng ký
function setAuthMode(mode) {
  const authTitle = document.getElementById("authTitle");
  const passwordGroup = document.getElementById("passwordGroup");
  const confirmPasswordGroup = document.getElementById("confirmPasswordGroup");
  const submitBtn = document.querySelector(".submit-btn");
  const toggleAuth = document.getElementById("toggleAuth");

  if (mode === "login") {
    authTitle.textContent = "Đăng nhập";
    passwordGroup.style.display = "block";
    confirmPasswordGroup.style.display = "none"; // Ẩn trường xác nhận mật khẩu
    submitBtn.textContent = "Đăng nhập";
    toggleAuth.innerHTML = 'Chưa có tài khoản? <span class="toggle-link">Đăng ký</span>';
  } else {
    authTitle.textContent = "Đăng ký";
    passwordGroup.style.display = "block";
    confirmPasswordGroup.style.display = "block"; // Hiển thị trường xác nhận mật khẩu
    submitBtn.textContent = "Đăng ký";
    toggleAuth.innerHTML = 'Đã có tài khoản? <span class="toggle-link">Đăng nhập</span>';
  }
}

// Xử lý form Đăng nhập/Đăng ký
document.getElementById("authForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const mode = document.getElementById("authTitle").textContent;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!phone) {
    alert("Vui lòng nhập số điện thoại!");
    return;
  }

  if (mode === "Đăng nhập") {
    if (!password) {
      alert("Vui lòng nhập mật khẩu!");
      return;
    }
    alert(`Đăng nhập thành công với số điện thoại: ${phone}`);
  } else {
    if (!password || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ mật khẩu và xác nhận mật khẩu!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
    alert(`Đăng ký thành công với số điện thoại: ${phone}`);
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


