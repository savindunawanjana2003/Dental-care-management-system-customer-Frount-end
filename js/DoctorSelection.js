$(document).ready(function () {
  // Sample doctors data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: "4.9",
      availability: "Mon-Fri, 9AM-5PM",
      description: "Specialized in heart diseases and cardiovascular health.",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12 years",
      rating: "4.8",
      availability: "Tue-Sat, 10AM-6PM",
      description: "Expert in neurological disorders and treatment.",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "8 years",
      rating: "4.7",
      availability: "Mon-Fri, 8AM-4PM",
      description: "Specialized in children's health and development.",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "20 years",
      rating: "4.9",
      availability: "Mon-Thu, 9AM-5PM",
      description: "Expert in bone and joint surgeries.",
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      specialty: "Dermatologist",
      experience: "10 years",
      rating: "4.6",
      availability: "Wed-Sun, 11AM-7PM",
      description: "Specialized in skin care and treatments.",
    },
    {
      id: 6,
      name: "Dr. Jam Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "20 years",
      rating: "4.9",
      availability: "Mon-Thu, 9AM-5PM",
      description: "Expert in bone and joint surgeries.",
    },
    {
      id: 7,
      name: "Dr. Lis Park",
      specialty: "Dermatologist",
      experience: "10 years",
      rating: "4.6",
      availability: "Wed-Sun, 11AM-7PM",
      description: "Specialized in skin care and treatments.",
    },
  ];

  let selectedDoctor = null;

  // Function to render doctors list
  function renderDoctorsList(filter = "") {
    const filteredDoctors = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(filter.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(filter.toLowerCase()),
    );

    const doctorsList = $("#doctors-list");
    doctorsList.empty();

    if (filteredDoctors.length === 0) {
      doctorsList.html('<p class="text-muted">No doctors found</p>');
      return;
    }

    filteredDoctors.forEach((doctor) => {
      const isActive =
        selectedDoctor && selectedDoctor.id === doctor.id ? "active" : "";
      const doctorCard = `
                          <div class="doctor-card ${isActive}" data-id="${doctor.id}">
                            <div class="doctor-name">${doctor.name}</div>
                            <div class="doctor-specialty">${doctor.specialty}</div>
                            <div class="doctor-specialty">Experience: ${doctor.exexperience}</div>
                            <div class="doctor-specialty">Rating: ${doctor.rating} ⭐</div>
                          </div>
                        `;
      doctorsList.append(doctorCard);
    });

    // Add click event to doctor cards
    $(".doctor-card").on("click", function () {
      const doctorId = parseInt($(this).data("id"));
      selectedDoctor = doctors.find((d) => d.id === doctorId);
      // Update active state
      $(".doctor-card").removeClass("active");
      $(this).addClass("active");

      // Render doctor details
      renderDoctorDetails(selectedDoctor);
    });
  }
  // Function to render doctor details
  function renderDoctorDetails(doctor) {
    const detailsContainer = $("#doctor-details");

    // detailsContainer.html(
    //   '<p style="color: #ff9900" class="text-muted"> first of all Select a doctor to view details</p>',
    // );
    if (!doctor) {
      return;
    }

    const detailsHtml = `
                        <div class="doctor-detail-item">
                          <span class="detail-label">Name:</span>
                          <span style="color:#ff9900; font-size: 30px; font-weight: 700;">${doctor.name}</span>
                        </div>
                        <div class="doctor-detail-item">
                          <span class="detail-label">Specialty:</span>
                          <span>${doctor.specialty}</span>
                        </div>
                        <div class="doctor-detail-item">
                          <span class="detail-label">Experience:</span>
                          <span>${doctor.experience}</span>
                        </div>
                        <div class="doctor-detail-item">
                          <span class="detail-label">Rating:</span>
                          <span>${doctor.rating} ⭐</span>
                        </div>
                        <div class="doctor-detail-item">
                          <span class="detail-label">Availability:</span>
                          <span>${doctor.availability}</span>
                        </div>
                        <div class="doctor-detail-item">
                          <span class="detail-label">About:</span>
                          <span>${doctor.description}</span>
                        </div>
                      `;
    detailsContainer.html(detailsHtml);
  }
  // Initialize modal and event listeners
  const appointmentModal = new bootstrap.Modal(
    document.getElementById("appointmentModal"),
  );

  $("#appointment-btn").on("click", () => {
    renderDoctorsList();
    appointmentModal.show();
  });

  // Search functionality
  $("#search-bar").on("input", function () {
    const searchTerm = $(this).val();
    renderDoctorsList(searchTerm);
  });

  // Confirm appointment button
  $("#confirm-appointment").on("click", function () {
    if (!selectedDoctor) {
      alert("Please select a doctor first!");
      return;
    }

    alert(
      `Appointment booked with ${selectedDoctor.name}! We'll contact you shortly.`,
    );
    appointmentModal.hide();
  });

  // Initialize with empty state
  renderDoctorDetails(null);
});

$("#confirmdoctorButten").on("click", () => {
  const html = $("#doctor-details").html().trim();

  if (html === "") {
    alert(" ❌ please Select relevent Doctorfor your Appointment !");
    console.log(html);
  } else {
    const box3id = $("box3Id");
    $("#box3Id").addClass("visible");
  }
});

//   ========================calander==================

document.addEventListener("DOMContentLoaded", function () {
  const appointmentModa = new bootstrap.Modal(
    document.getElementById("appointmentModal2"),
  );

  let calendarEl = document.getElementById("calendar");

  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek", //dayGridMonth
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    dateClick: function (info) {
      // info.dateStr = YYYY-MM-DD
      console.log("Date clicked:", info.dateStr);

      // Update modal date display
      // document.getElementById("currentDate").innerText = info.dateStr;

      // Show the appointment details modal
      window.location.href = "bookingDeatiles.html";
      alert(appointmentModa.show());

      // info.dateStr = YYYY-MM-DD
      // uparima 10i  online payment karanna puluwan

      // appointmentModa.show();
      // alert("Date clicked:" + info.dateStr);

      // example: redirect
      // window.location.href = "booking.html?date=" + info.dateStr;
    },
    events: [
      {
        title: "Dental Appointment",
        start: "2026-02-10",
      },
      {
        title: "Checkup",
        start: "2026-02-15T10:00",
      },
    ],
  });
  calendar.render();
});
//   =================================

//   let calendarEl = document.getElementById("calendar");

//   let calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: "dayGridMonth",

//     dateClick: function (info) {
//       // info.dateStr = YYYY-MM-DD
//       alert("Date clicked: " + info.dateStr);

//       // example: redirect
//       // window.location.href = "booking.html?date=" + info.dateStr;
//     },
//   });
