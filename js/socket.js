
//cliente

$(function () {


 

    // conexión del lado del cliente socket.io
    var socket = io.connect("https://chathaupei.herokuapp.com/",{
      withCredentials: true});

    //  obtener elementos vde la interfaz de chat
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');
 
  
      
      
    // Eventos 
    $messageForm.submit( e => {//cuando se activa el evento submit del formulario de envio de mensaje
      e.preventDefault();
      socket.emit('send message', $messageBox.val(), data => {//emite el envento send mesage (texto) y  la funcionon 'data'
        $chat.append(`<p class="error">${data}</p>`)//recibe
      });
      $messageBox.val('');//limpia los datos
    });



    socket.on('new message', data => {//escucha el evento 'new message'
        $chat.append(`
              <div class="lista">
                    <div class="imgBx">
                    </div>
                    <div class="content">
                        <h4>User:</h4>
                        <p>${data.msg}</p>
                    </div>
                </div>
        
        `);//recibe

    });

});
 
