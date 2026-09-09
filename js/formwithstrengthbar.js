function handlePassword() {
    const password = document.getElementById("password").value;
    console.log(password)
    const strengthbar = document.getElementById("strengthbar");
    const message = document.getElementById("message")

    let strength = 0;

    if (password.length > 0) strength += 10
    if (password.length > 6) strength += 20
    if (/[A-Z]/.test(password)) strength += 20
    if (/[a-z]/.test(password)) strength += 20
    if (/[0-9]/.test(password)) strength += 10
    if (/[^A-Za-z0-9]/.test(password)) strength += 20
    console.log(strength)
    strengthbar.style.background = "red"
    strengthbar.style.width = strength + "%"

    if (strength > 50 && strength <= 75) {
        message.textContent = "strength : medium";
        message.style.color = "orange"
        strengthbar.style.background = "orange"

    }
    if (strength > 75 && strength <= 100) {
        message.textContent = "strength : strong";
        message.style.color = "green"
        strengthbar.style.background = "green"

    }

}