let userData = {};

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    userData = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        intereses: []
    };

    document.querySelectorAll('input[name="intereses"]:checked').forEach((checkbox) => {
        userData.intereses.push(checkbox.value);
    });

    // Mostrar datos en la página 2
    document.getElementById("confirmNombre").textContent = userData.nombre;
    document.getElementById("confirmEmail").textContent = userData.email;

    const interesesCont = document.getElementById("confirmIntereses");
    interesesCont.innerHTML = "";

    userData.intereses.forEach(interes => {
        const tag = document.createElement("span");
        tag.classList.add("interest-tag");
        tag.textContent = interes;
        interesesCont.appendChild(tag);
    });

    // Cambiar de página
    document.getElementById("formPage").classList.remove("active");
    document.getElementById("confirmationPage").classList.add("active");
});

// Botón editar
document.getElementById("edit-btn").addEventListener("click", () => {
    document.getElementById("confirmationPage").classList.remove("active");
    document.getElementById("formPage").classList.add("active");
});

// Botón confirmar
document.getElementById("confirmBtn").addEventListener("click", () => {
    alert("Registro confirmado. Tus datos han sido enviados.");
});

