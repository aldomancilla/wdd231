import { data } from "../data/communities.mjs";
import { clientVisits } from "./clientVisits.mjs";
import { formFields } from "./form.mjs";

const dataContainer = document.querySelector("#datacont");
const hamButton = document.querySelector('#hambutton');
const navigation = document.querySelector('.navigation');
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");
const closeBtn = document.querySelector("#closeModal");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });


export async function getData() {
  try {
    
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 200);
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

async function displayData() {

  const data = await getData();

  data.forEach(data => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${data.name}</h3>
      <p><strong>Country:</strong> ${data.country}</p>
      <button class="detailsBtn">View Details</button>
    `;

    card.querySelector(".detailsBtn")
      .addEventListener("click", () => openModal(data));

    dataContainer?.appendChild(card);
    observer.observe(card);
  });
}

displayData();

function openModal(data) {
  if (!modal || !modalBody) return;

  modal.style.display = "flex";

  modalBody.innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Pollution Level:</strong> ${data.level}</p>
    <p><strong>Main Issue:</strong> ${data.pollution}</p>
  `;
}

if (modal && closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

const visitDisplay = document.querySelector("#visitCounter");

if (visitDisplay) {
  const visits = clientVisits();

  visitDisplay.textContent =
    `You have visited this site ${visits} time${visits > 1 ? "s" : ""}.`;
}

document.addEventListener("DOMContentLoaded", () => {
  formFields();
});
