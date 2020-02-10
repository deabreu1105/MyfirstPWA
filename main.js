
//Service Worker
if('serviceWorker' in  navigator){
    console.log('Puedes usar los serviceWorker en tu navegador');
    //cargamos el archivo de serviceWorker
    navigator.serviceWorker.register('./sw.js')
                           .then(res => console.log("serviceWorker cargado correctamente", res))
                           .catch(err => console.log("serviceWorker no de ha podido registar", err));
}else{
    console.log('NO PUEDES usar los serviceWorker en tu navegador')
}

/*if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }).catch(function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }*/



// Scroll suavizado
$(document).ready(function(){
    //alert("hola mundo!!");
    $("#menu a").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
    
});