
var ultimoid=0;

function enviarMensaje() {
    $('#contenedorMensajes').empty(); 
    var texto = $('#textoUsuario').val();
    
    $.ajax({
        url: baseUrl + '/enviarMensaje',
        method: 'get',
        data: { mensajeEnvio: texto },
        success: function(respuesta) {
            alert(respuesta);
            mostrarMensajes();
        }
    });

    $.ajax({
        url: baseUrl + '/obtenerMensajes',
        method: 'get',
        data: {ultimoid: ultimoid },
        success: function(respuesta) {
            var mensajes = JSON.parse(respuesta);
            // $('#contenedorMensajes').html('');
            
            for(var i=0; i<mensajes.length; i++) {
                var txt = mensajes[i]['usuario'] + ": " + mensajes[i]['texto'] + '<br>';
                $('#contenedorMensajes').append(txt);
                ultimoid= mensajes[i]['id'];
            }  
        
        }
    });
}

function mostrarMensajes() {
    $('#contenedorMensajes').empty(); 
    $.ajax({
        url: baseUrl + '/obtenerMensajes',
        method: 'get',
        data: {ultimoid: ultimoid },
        success: function(respuesta) {
            var mensajes = JSON.parse(respuesta);
            // $('#contenedorMensajes').html('');
            
            for(var i=0; i<mensajes.length; i++) {
                var txt = mensajes[i]['usuario'] + ": " + mensajes[i]['texto'] + '<br>';
                $('#contenedorMensajes').append(txt);
                ultimoid= mensajes[i]['id'];
            }  
            
        }
    
    });
        
   }

   $(document).ready(function(){
    $('#contenedorMensajes').empty(); 
    $.ajax({
        url: baseUrl + '/obtenerMensajes',
        method: 'get',
        data: {ultimoid: ultimoid },
        success: function(respuesta) {
            var mensajes = JSON.parse(respuesta);
            // $('#contenedorMensajes').html('');
            
            for(var i=0; i<mensajes.length; i++) {
                var txt = mensajes[i]['usuario'] + ": " + mensajes[i]['texto'] + '<br>';
                $('#contenedorMensajes').append(txt);
                ultimoid= mensajes[i]['id'];
            }  
            
        }
        
    
    });
   })



