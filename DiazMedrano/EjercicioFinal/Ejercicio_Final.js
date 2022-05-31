//mandar todo desde el formulario sin recargar

$(document).ready(function(){


///////////////////////////////////////////////////////////////////////////////
//                    Funcion para limpiar                                     //
///////////////////////////////////////////////////////////////////////////////

  function Limpiar(){
    $('#NombreCliente').val("");
    $('#PrimerApellido').val("");
    $('#SegundoApellido').val("");
    $('#dirCliente').val("");
    $('#telCliente').val("");
    $('#ciudad').val("");
    $('#estado').val("");
    $('#RFC').val("");
    $('#RazonSocial').val("");
    $('#TipoDocumento').val("");
    $('#IngresoMensual').val("");
    $('#EgresoMensual').val("");
  }
///////////////////////////////////////////////////////////////////////////////
//                    Botno para limpiar                                     //
///////////////////////////////////////////////////////////////////////////////

$('#Limpiar-BD').click(function() {
  Limpiar();
});

////////////////////////////////////////////////////////////////////////////////
//    Boton para eliminar                                                    //
///////////////////////////////////////////////////////////////////////////////
$('#Eliminar-BD').click(function() {
  //let datos = new FormData(FormularioB);
  //$('#RFC').val(datos.RFC);
  let RFC1 = RFCactual; 
  $.post('./Scrips/php/Elim.php',{RFC3:RFC1},function(datare){
    alert(datare);
    Limpiar();
    //location.reload();
  });
});
///////////////////////////////////////////////////////////////////////////////
//                    Botno para consultrar                                  //
///////////////////////////////////////////////////////////////////////////////
    $('#BD').click(function() {
      //location.reload();
      //let datos = new FormData(FormularioB);
      let RFC1=prompt('Teclee el RFC a consultar');
      //RFCactual = (datos.get('RFC'));
      
      $.post('./Scrips/php/Mostrar.php',{RFC:RFC1},function(datare){
        if(datare == false){
          alert('El RFC no existe en la BD');
          Limpiar();
          //location.reload();
        }
        refrescar(datare);
        RFCactual = $('#RFC').val();
        console.log(RFCactual);
      },'json');
      //console.log('culmina');
    });
    
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

});




 





