var RFCactual;
$(document).ready(function(){
    
    $('#Modificar-BD').click(function() {
        
        var FormularioB = document.getElementById('Formularioo');
        //FormularioB.addEventListener('submit', function(e){
           //e.preventDefault();
           console.log(RFCactual);
           console.log('me distes click');
            
            var datos = new FormData(FormularioB);
            //console.log(datos);
            //console.log(datos.get('Nombre'));
            //console.log(datos.get('1Apellido'));
            //console.log(datos.get('2Apellido'));
            //console.log(datos.get('dirClientes'));
            //console.log(datos.get('telClientes'));
            //console.log(datos.get('Ciudadcliente'));
            //console.log(datos.get('EstadoCliente'));
            //console.log(datos.get('RFC'));
            //console.log(datos.get('Razon'));
            //console.log(datos.get('Tipo'));
            //console.log(datos.get('Ingreso'));
            //console.log(datos.get('Egreso'));

            $('#RFC').val(RFCactual);
          
            let RFC1=(RFCactual);
            $.post('./Scrips/php/Mostrar.php',{RFC:RFC1},function(datare){
           if(datare == false || datare == 'false'){
            alert('Si deseas agregar este registro con la nueva RFC favor de presionar el boton de Agregar');
            
            }else{
            
            fetch('./Scrips/php/Modificar.php',{
                method: 'POST',
                body: datos
            })
            .then((res) => res.json())
                .then((data) => {
                    //console.log(data);
                    alert(data);
                    RFCactual = $('#RFC').val();
                });
                //FormularioB.reset();
                //history.back();
                //alert('Almacenado correctamente en la BD');
            }
            //location.reload();
        });
    
        //})

    });
})