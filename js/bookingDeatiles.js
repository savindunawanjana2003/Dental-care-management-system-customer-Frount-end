(function () {
  // ---------- set today's date (both places) ----------
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", options);
  document.getElementById("currentDate").textContent = formattedDate;
  document.getElementById("modalDate").textContent = formattedDate;

  // ---------- fixed appointment count (8 items as designed) ----------
  const totalAppointments = 8; // we have exactly 8 .appointment-item in modal
  const newPatients = 2; // two with badge-new
  const returning = totalAppointments - newPatients; // 6

  // update main dashboard count
  document.getElementById("todayCount").textContent = totalAppointments
    .toString()
    .padStart(2, "0");

  // update modal header badge
  document.getElementById("totalAppointments").textContent =
    totalAppointments + " Appointments";

  // update summary numbers inside modal (already written in static html, but we sync)
  document.getElementById("summaryTotal").textContent = totalAppointments
    .toString()
    .padStart(2, "0");
  document.getElementById("summaryNew").textContent = newPatients
    .toString()
    .padStart(2, "0");
  document.getElementById("summaryReturn").textContent = returning
    .toString()
    .padStart(2, "0");
  document.getElementById("footerTotal").textContent =
    `Total Patients Today: ${totalAppointments.toString().padStart(2, "0")}`;

  // also the three stat boxes below the appointment count (completed/pending/total) remain as is (03,04,08) – consistent

  // ---------- scroll effect (navbar) ----------
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // ---------- BOOKING LOGIC (sweetalert with limit based on todayCount = 8) ----------
  window.handleBookingClick = function (event) {
    event.preventDefault(); // prevent dummy link

    // get today's count from the displayed number (already 8)
    let todayCountElement = document.getElementById("todayCount");
    let currentCount = todayCountElement
      ? parseInt(todayCountElement.textContent)
      : 8;

    // If count reaches exactly 8 or more → limit reached (show warning + redirect)
    if (currentCount >= 10) {
      Swal.fire({
        title: "Online Booking Limit Reached",
        text: "Booking has been limited to build our customer base. We apologize for the inconvenience.",
        icon: "warning",
        confirmButtonText: "OK",
        timer: 3000,
        showConfirmButton: true,
      }).then(() => {
        // after alert closes (or timer) redirect to index.html
        // window.location.href = "/index.html";
      });

      // fallback redirect if timer is ignored
      setTimeout(() => {
        window.location.href = "index.html";
      }, 3200);
    } else {
      // allowed (but with 8 we never reach here, kept for logic)
      Swal.fire({
        title: "You have a chance to book your appointment",
        text: "You can proceed to book your appointment.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
      });
      window.location.href = "Paymentgatway.html";
    }
  };
})();
