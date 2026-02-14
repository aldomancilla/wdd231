export function formFields() { 
    const params = new URLSearchParams(window.location.search);

    const requiredFields = [ 
        "firstName", 
        "lastName", 
        "email", 
        "phone",
        "membership"
    ];

    requiredFields.forEach((field) => { 
        const element = document.getElementById(field);
        if (element) { 
            element.textContent = params.get(field) || "Not provided";
        } 
    });

    const firstNameTitle = document.getElementById("firstNameTitle");
    if (firstNameTitle) {
        firstNameTitle.textContent = params.get("firstName") || "Friend";
    }
}