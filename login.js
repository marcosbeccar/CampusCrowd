document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");

    // Función para manejar el envío del formulario de inicio de sesión
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let username = usernameInput.value;

        // Verifica si se ingresó un nombre válido (no está vacío)
        if (username.trim() !== "") {
            // Limita la longitud del nombre a, por ejemplo, 10 caracteres
            const maxLength = 16;
            if (username.length > maxLength) {
                username = username.substring(0, maxLength) + "...";
            }

            // Almacena el nombre en una cookie
            document.cookie = `username=${username}`;

            // Redirige al usuario a la página principal con el nombre como parámetro en la URL
            window.location.href = `index.html?username=Hola ${username}!`;
        } else {
            alert("Por favor, ingresa tu nombre.");
        }
    });
});
