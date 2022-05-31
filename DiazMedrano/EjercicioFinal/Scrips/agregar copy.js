var bandera = 0;


$(document).ready(function(){
    
    
    
    $('#Insert-BD').click(function() {
        let FormularioJ = document.getElementById('Formularioo');
        //FormularioJ.addEventListener('submit', function(e){
    //$('#Insert-BD').click(function(e1) {
        //e1.preventDefault();
            //e.preventDefault();
           //console.log('me distes click');
            
           let datos = new FormData(FormularioJ);
           //console.log(R);
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
            
            let RFC1=(datos.get('RFC'));
            alert(RFC1);
            $.post('./Scrips/php/Mostrar.php',{RFC:RFC1},function(datare){
                if(datare == 'false' || datare == false){
                    
                    fetch('./Scrips/php/Agregar.php',{
                        method: 'POST',
                body: datos
            })
            .then((res) => res.json())
            .then((data) => {
                
                console.log(data);
                alert(data);
                RFCactual = $('#RFC').val();
                //location.reload();
            });
            //alert('Almacenado correctamente');
            
        }else{
            alert('La RFC ya esta en uso si deseas modificarla pulsa el boton de modificar');
            
        }
        RFCactual = (datos.get('RFC'));
        //FormularioJ.reset();
        //this.history.back();
        //location.reload();
    });
    //});      
})
//});



if(bandera == 1){
    }else if(bandera==2){
    }
})