async function loadMembersData() {
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
            <a href="${member.websiteUrl}" target="_blank" class="acard">Visit Website</a>
        `;
        return section;
    }

    function getRandomMembers(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function loadRandomMembers() {
        displayArea.innerHTML = '';
        const randomMembers = getRandomMembers(members, 3);

        randomMembers.forEach(member => {
            displayArea.appendChild(generateMemberCard(member));
        });
    }

    loadRandomMembers();
}

loadMembersData();