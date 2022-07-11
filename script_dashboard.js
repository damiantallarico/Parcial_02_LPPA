window.onload = function() {
    
    // Validar el Submit
    document.getElementById("dashboard").addEventListener('submit', validar);

    // Variables
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    fetch("https://basic-server-one.vercel.app/users").then(
        res=>{
            if (res.status === 200){
                res.json().then(
                    data=>{
                        if(data.data.length > 0){
                            var tmp = "";
                            // Recorro
                            data.data.forEach((u)=>{
                                tmp += "<tr>";
                                tmp += "<td>"+u.id+"</td>";
                                tmp += "<td>"+u.name+"</td>";
                                tmp += "<td>"+u.username+"</td>";
                                tmp += "<td>"+u.email+"</td>";
                                tmp += "<td>"+u.phone+"</td>";
                                tmp += "<td>"+u.website+"</td></tr>";
                            });
                            // Cierro
                            document.getElementById("data").innerHTML = tmp;
                        }
                    }
                )
                } else {
                    //Show modal
                    modal.style.display = "block";
                }
            }
        )

    // Validaciones
    function validar(evento){
        evento.preventDefault();
        localStorage.clear();
        window.location.href='index_form.html';
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
