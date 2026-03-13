// ===========login==============

//close login

$("#closeLogin").on("click", () => {
  const signInBtn1 = document.getElementById("sinig");
  const loginCard2 = document.getElementById("loginCardId");
  if (loginCard2.style.display === "block") {
    loginCard.style.display = "none";
  } else {
    loginCard2.style.display = "block";
  }
});

const signInBtn = document.getElementById("sinig");
const loginCard = document.getElementById("loginCardId");

signInBtn.addEventListener("click", () => {
  if (loginCard.style.display === "block") {
    loginCard.style.display = "none";
  } else {
    loginCard.style.display = "block";
  }
});

// ===============================

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

$("#sing-Up").click(function () {
  $("#loader").css("display", "flex");

  setTimeout(function () {
    window.location.href = "pages/singup.html";
  }, 1200);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Auto carousel pause on hover
const carousel = document.getElementById("heroCarousel");
if (carousel) {
  carousel.addEventListener("mouseenter", () => {
    carousel.setAttribute("data-bs-interval", "false");
  });

  carousel.addEventListener("mouseleave", () => {
    carousel.setAttribute("data-bs-interval", "4000");
  });
}

// Appointment form submission
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    // Show success message
    alert(
      `Thank you ${name}! Your appointment request has been submitted. We will call you at ${phone} to confirm your ${service} appointment.`,
    );

    // Reset form
    this.reset();
  });

// Set minimum date for appointment to today
const today = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", today);

// Initialize tooltips
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]'),
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
// ==========================
// const bookButten = document.getElementById("bookNowBtn");

// $("#bookNowBtn").on("click", () => {
//   window.location.href = "/pages/modalexsai.html";
// });

// ==============================
