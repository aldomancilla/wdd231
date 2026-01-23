document.addEventListener("DOMContentLoaded", async function () {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const displayArea = document.querySelector("article");

    
    const response = await fetch("data/members.json");
    const members = await response.json();

    
    function generateMemberCard(member) {
        const section = document.createElement("section");
        section.innerHTML = `
            <img src="images/${member.image_file}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <br>
            <p>Phone Number: ${member.phone_number}</p>
            <br>
            <p>Year Founded: ${member.year_founded}</p>
            <a href="${member.websiteUrl}" target="_blank">Visit Website</a>
        `;
        return section;
    }

    
    function loadMembers(view) {
        displayArea.innerHTML = '';  
        members.forEach((member) => {
            const card = generateMemberCard(member);
            displayArea.appendChild(card);
        });

        
        displayArea.classList.toggle('grid', view === 'grid');
        displayArea.classList.toggle('list', view === 'list');
    }

    
    gridButton.addEventListener("click", () => loadMembers('grid'));
    listButton.addEventListener("click", () => loadMembers('list'));

    
    loadMembers('grid');

    
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
});

// Responsive menu
const hamButton = document.querySelector('#hambutton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
