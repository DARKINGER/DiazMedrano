var RFCactual;
$(document).ready(function(){
    
    $('#Modificar-BD').click(function() {
        
        var FormularioB = document.getElementById('Formularioo');

           console.log(RFCactual);
           console.log('me distes click');
            
            var datos = new FormData(FormularioB);


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
                    jQuery ("#texto").text(data+"la persona con RFC: "+RFCactual);
                    jQuery ("#ModalAdv").text("Aviso");
                    $("#modal").modal();
                    RFCactual = $('#RFC').val();
                });
            }
        });
    

    });
})