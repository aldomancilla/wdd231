document.addEventListener("DOMContentLoaded", () => {
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  // Modal functionality
  document.querySelectorAll("[data-modal]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const modal = document.getElementById(link.dataset.modal);
      modal.showModal();
    });
  });

  document.querySelectorAll(".close").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest("dialog").close();
    });
  });
});

const params = new URLSearchParams(window.location.search);

const requiredFields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "organization",
  "timestamp",
];

requiredFields.forEach((field) => {
  document.getElementById(field).textContent =
    params.get(field) || "Not provided";
});
