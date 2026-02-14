// import { communities } from "../data/communities.mjs"; 

// async function communities() {
//     try {
//       const response = await fetch('./data/spots.json');
//       if (!response.ok) throw new Error("Error al cargar datos");
//       return await response.json();
//     } catch (error) {
//       console.error("Fetch error:", error);
//       return [];
//     }
//   }

const hamButton = document.querySelector('#hambutton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});