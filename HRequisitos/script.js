function checkPassword() {
    const password = document.getElementById("password").value;
    
    // Obtener los elementos de los requisitos
    const lengthRequirement = document.getElementById("length");
    const uppercaseRequirement = document.getElementById("uppercase");
    const lowercaseRequirement = document.getElementById("lowercase");
    const numberRequirement = document.getElementById("number");
    const specialRequirement = document.getElementById("special");
    const message = document.getElementById("message");

    // Comprobar la longitud mínima de 12 caracteres
    if (password.length >= 12) {
        lengthRequirement.classList.remove("invalid");
        lengthRequirement.classList.add("valid");
    } else {
        lengthRequirement.classList.remove("valid");
        lengthRequirement.classList.add("invalid");
    }

    // Comprobar si tiene al menos una letra mayúscula
    if (/[A-Z]/.test(password)) {
        uppercaseRequirement.classList.remove("invalid");
        uppercaseRequirement.classList.add("valid");
    } else {
        uppercaseRequirement.classList.remove("valid");
        uppercaseRequirement.classList.add("invalid");
    }

    // Comprobar si tiene al menos una letra minúscula
    if (/[a-z]/.test(password)) {
        lowercaseRequirement.classList.remove("invalid");
        lowercaseRequirement.classList.add("valid");
    } else {
        lowercaseRequirement.classList.remove("valid");
        lowercaseRequirement.classList.add("invalid");
    }

    // Comprobar si tiene al menos un número
    if (/[0-9]/.test(password)) {
        numberRequirement.classList.remove("invalid");
        numberRequirement.classList.add("valid");
    } else {
        numberRequirement.classList.remove("valid");
        numberRequirement.classList.add("invalid");
    }

    // Comprobar si tiene al menos un carácter especial
    if (/[^A-Za-z0-9]/.test(password)) {
        specialRequirement.classList.remove("invalid");
        specialRequirement.classList.add("valid");
    } else {
        specialRequirement.classList.remove("valid");
        specialRequirement.classList.add("invalid");
    }

    // Mostrar el mensaje final según el estado de la contraseña
    if (password.length >= 12 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password)) {
        message.textContent = "La contraseña es segura.";
        message.style.color = "#4caf50"; // Verde
    } else {
        message.textContent = "La contraseña no es segura. Intenta mejorarla.";
        message.style.color = "#f44336"; // Rojo
    }
}
