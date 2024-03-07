<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mensaje;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class MensajesController extends Controller
{
    

    // Muestra la vista del chat
    public function mostrarMensajes() {
        
        return  view('templates/header').
                view('listadoMensajes').
                view('templates/footer');
        
    }

    // El usuario envía un mensaje por AJAX:
    public function enviarMensaje(Request $request) {
       
        // protected $fillable = ['texto', 'usuario', 'imagen_url'];
        
         // Obtener la URL de la imagen
        $url = $request->get('imagen_url');

         // Obtener la extensión de la imagen
        $extension = pathinfo($url, PATHINFO_EXTENSION);

        // Obtenemos el mensaje recibido
        $texto = $request->get('mensajeEnvio');
        
        // Creamos una variable vacía de tipo Mensaje
        $mensaje = new Mensaje();

        // Asignamos la variable para el campo texto
        $mensaje->texto = $texto;

        $session = Session();
        $usuario = $session->get('nombre');

        // Asignamos la variable para el campo usuario
        $mensaje->usuario = $usuario;

        // Guardamos el registro en la base de datos
        $mensaje->save();

        echo 'Mensaje enviado y guardado';
    }

    public function obtenerMensajes(Request $request) {
        
        $id = $request->get('ultimoid');
        $mensajes = DB::select('SELECT * FROM mensajes WHERE id > '.$id.' ORDER BY id DESC ;');
        $mensajesJson = json_encode($mensajes);
        echo $mensajesJson;
      }

    
      
     
}
