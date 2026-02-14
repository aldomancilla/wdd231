export function formFields() { 
    const params = new URLSearchParams(window.location.search);
    const requiredFields = [ 
        "firstName", 
        "lastName", 
        "email", 
        "phone",
        "timestamp", 
    ];
      requiredFields.forEach((field) => { 
        const element = document.getElementById(field);
         if (element) { 
            element.textContent = params.get(field) || "Not provided";
        } 
    }); 
}