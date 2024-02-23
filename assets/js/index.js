const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function(){
    
    let formContacto = document.querySelector('#formContacto');
    formContacto.onsubmit = function(e)
    {
        e.preventDefault();

        let nombre = document.querySelector('#txtNombre').value;
        let asunto = document.querySelector('#txtAsunto').value;
        let mensaje = document.querySelector('#txtCorreo').value;

        if(nombre == "" || asunto == "" || mensaje == "")
        {
            Swal.fire("Atención", "LLene los campos en blanco.", "error");
            return false;
        }
        else
        {
            Swal.fire("Felicitaciones", "Su mensaje se ha enviado correctamente.", "success");
            document.querySelector('#txtNombre').value = "";
            document.querySelector('#txtAsunto').value = "";
            document.querySelector('#txtCorreo').value = "";
        }

    }
}, false);

