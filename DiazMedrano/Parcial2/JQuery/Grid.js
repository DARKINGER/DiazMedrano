  //      window.onload = function(){
  //      document.getElementById('Content').addEventListener("click",function(evento){
  //          document.getElementById(evento.target.id).classList.toggle('Seccion-Selectionada');
  //          });
  //      }

        //zeal para documentaciones


$(document).ready(function(){
    $('#Content').click(function (e){
        $(e.target).toggleClass('Seccion-Selectionada')
    })
})

