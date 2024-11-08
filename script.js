function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
    }
    
    // Show success message
    alert("Successfully registered");

    // Prevent form from actually submitting to a server
    return false;
}

