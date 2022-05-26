$(document).ready(function(){
    $('#btn1').click(function(){
        $('#alerta1').show();
    });
    $('#btn2').click(function(){
        $('#alerta1').hide();
    });

    $('#btn1').click(function(){
        $('#alerta1').show();
    });
    $('#modal1').click(function(){
        $('#modal').modal();
    });
    $('#Ajax').click(function(){
      event.preventDefault();
      ajaxFunction();
    });

    $('#Json').click(function(){
      $.post('practica_1.php',{},function(data){

      console.log(data);
      $('#NombreCliente').val(data.Nombre);
      $('#PrimerApellido').val(data.PrimerApellido);
      $('#SegundoApellido').val(data.SegundoApellido);
      $('#dirCliente').val(data.Direccion);
      $('#telCliente').val(data.Telefono);
      $('#ciudad').val(data.ciudad);
      $('#estado').val(data.estado);
      $('#RFC').val(data.RF);
      $('#RazonSocial').val(data.RazonSocial);
      $('#TipoDocumento').val(data.TipDoc);
      $('#IngresoMensual').val(data.Ingreso);
      $('#EgresoMensual').val(data.Egreso);
      },'json');
    });

////////////////////////////////////////////////////////////////////////////////
    $('#BD').click(function() {
      let RFC1=prompt('Teclee el RFC a consultar');
      //console.log('click')
      /*
      $.post('con2.php',{RFC:RFC1},function(dato){
      CargarConsulta(dato);
        //console.log('entra');
      },'json');
      */

      $.post('con2.php',{RFC:RFC1},function(datare){
      refrescar(datare);
      //CargarConsulta(datare);
      },'json');
      console.log('culmina');
      
    });


    function CargarConsulta(objeto) {
      console.log('si entra a funcion')
      console.log(objeto);
      $('#NombreCliente').val(objeto.Nombre);
      $('#PrimerApellido').val(objeto.PrimerApellido);
      $('#SegundoApellido').val(objeto.SegundoApellido);
      $('#dirCliente').val(objeto.Direccion);
      $('#telCliente').val(objeto.Telefono);
      $('#ciudad').val(objeto.ciudad);
      $('#estado').val(objeto.estado);
      $('#RFC').val(objeto.RF);
      $('#RazonSocial').val(objeto.RazonSocial);
      $('#TipoDocumento').val(objeto.TipDoc);
      $('#IngresoMensual').val(objeto.Ingreso);
      $('#EgresoMensual').val(objeto.Egreso);
    }

    function refrescar(objeto) {
      console.log(objeto);
      $('#NombreCliente').val(objeto.nombre);
      $('#PrimerApellido').val(objeto.PrimerApellido);
      $('#SegundoApellido').val(objeto.SegundoApellido);
      $('#dirCliente').val(objeto.Direccion);
      $('#telCliente').val(objeto.Telefono);
      $('#ciudad').val(objeto.ciudad);
      $('#estado').val(objeto.Estado);
      $('#RFC').val(objeto.RFC);
      $('#RazonSocial').val(objeto.RazonSocial);
      $('#TipoDocumento').val(objeto.TipoDocumento);
      $('#IngresoMensual').val(objeto.IngresoMensual);
      $('#EgresoMensual').val(objeto.EgresoMensual);
}

    
//////////////////////////////////////////////////////////////



    $('#Promesa').click(function(){
      let promesa = new Promise(function(resolve, reject){
        var solicitud = new XMLHttpRequest();
        solicitud.onreadystatechange = function(){
          if(solicitud.readyState == 4 && solicitud.status == 200){
            resolve(solicitud.responseText);
            console.log('Promesa');
          }};
          solicitud.open("GET", "practica_1.php", true);
          solicitud.send();
      });
      promesa.then(value => document.getElementById("hora").innerHTML = value);
    });

});




    function ajaxFunction() {
var ajaxRequest;
ajaxRequest = new XMLHttpRequest();


ajaxRequest.onreadystatechange = function() {
if (ajaxRequest.readyState == 4)                               
{ 
document.getElementById("hora").innerHTML = ajaxRequest.responseText;

} 
};

ajaxRequest.open("GET","practica_1.php",true);  
ajaxRequest.send();                                  
}





