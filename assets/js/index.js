const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Agregar evento onsubmit
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

//Agregar clase a Tooltip
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip({
        boundary: "window",
        template: '<div class="tooltip tooltip-color" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>' 
    });
})

$(document).ready(function(){
    $('#card1').click(function(e){
        e.preventDefault();
        $('#card2').toggle('hide');
        $('#card3').toggle('hide');
        $('#card4').toggle('hide');

    });

    $('#card2').click(function(e){
        e.preventDefault();
        $('#card1').toggle('hide');
        $('#card3').toggle('hide');
        $('#card4').toggle('hide');

    });

    $('#card3').click(function(e){
        e.preventDefault();
        $('#card1').toggle('hide');
        $('#card2').toggle('hide');
        $('#card4').toggle('hide');

    });

    $('#card4').click(function(e){
        e.preventDefault();
        $('#card1').toggle('hide');
        $('#card2').toggle('hide');
        $('#card3').toggle('hide');

    });

    $('#cardqs1').click(function(e){
        e.preventDefault();
        $('#qs').css({
            "background" : "#ffffff",
            "color" : "#000000",
            "border-radius" : "10%"
        });

        $('#card-body1').css({
            "background" : "#ffffff",
            "color" : "#000000"
        });

        $('#icon1').css({
            "font-size": "40px"
        });

        $('#card-body2').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon2').css({
            "font-size": "20px"
        });

        $('#card-body3').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon3').css({
            "font-size": "20px"
        });

    });

    $('#cardqs2').click(function(e){
        e.preventDefault();
        $('#qs').css({
            "background" : "#ffffff",
            "color" : "#000000",
            "border-radius" : "10%"
        });

        $('#card-body2').css({
            "background" : "#ffffff",
            "color" : "#000000"
        });

        $('#icon2').css({
            "font-size": "40px"
        });

        $('#card-body1').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon1').css({
            "font-size": "20px"
        });

        $('#card-body3').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon3').css({
            "font-size": "20px"
        });
    });

    $('#cardqs3').click(function(e){
        e.preventDefault();
        $('#qs').css({
            "background" : "#ffffff",
            "color" : "#000000",
            "border-radius" : "10%"
        });

        $('#card-body3').css({
            "background" : "#ffffff",
            "color" : "#000000"
        });

        $('#icon3').css({
            "font-size": "40px"
        });

        $('#card-body1').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon1').css({
            "font-size": "20px"
        });

        $('#card-body2').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon2').css({
            "font-size": "20px"
        });
    });

    $('#qs').on("dblclick", function(e) {
        e.preventDefault();
        $(this).css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#card-body1').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon1').css({
            "font-size": "20px"
        });

        $('#card-body2').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon2').css({
            "font-size": "20px"
        });

        $('#card-body3').css({
            "background" : "#000000",
            "color" : "#ffffff"
        });

        $('#icon3').css({
            "font-size": "20px"
        });
        
    });

});


