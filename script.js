window.onload = function() {
    
    // Validar el Submit
    document.getElementById("formulario").addEventListener('submit', validar);

    // Variables
    var mail = document.getElementById('mail');
    var error_mail = document.getElementById('error_mail');
    var password = document.getElementById('password');
    var error_password = document.getElementById('error_password');
    var mailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    // localStorage.clear();

    // Usuario loguead? -> Dashboard
    if(localStorage.getItem('logueado')){
       window.location.href="index_dashboard.html"
    }

    // Validaciones
    function validar(evento){
        evento.preventDefault();
        validar_mail(mail,error_mail);
        validar_password(password,error_password);

        fetch("https://basic-server-one.vercel.app/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            email: mail.value,
            password: password.value
            })
        })
        .then(function(response){
            // Éxito
            if (response.status===200) {
                // Local storage
                localStorage.setItem('logueado',true);
                // Al dashboard
                window.location.href = 'index_dashboard.html';
            }
            // Error
            if (response.status!=200) {
                // Mostrar modal
                modal.style.display = "block";
            }
        })
    }

    // Funciones de validaciones
    function validar_mail(x,y){
        if (!mailRegex.test(x.value)) {
            y.classList.remove('esconder_error');
        }
    }
    function validar_password(x,y){
        if(x.value.length < 6 || x.value.length > 10){
            y.classList.remove('esconder_error');
        }
    }

    // Eventos para "limpiar" errores
    mail.addEventListener('focus',limpiar_error);
    password.addEventListener('focus',limpiar_error);

    // Función para limpiar error
    function limpiar_error(){
        var error_activo = "error_" + document.activeElement.name;
        var er = document.getElementById(error_activo);
        er.classList.add('esconder_error');
    }

    // Clicks en <span> (x), cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}