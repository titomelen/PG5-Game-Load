

function pagar(precio) {
    pasarela = window.open( "Pagar.html"+"#"+precio,"Pasarela de Pago", "height=300,width=200")
    
      
}

function buscar() {
    
    text = document.getElementById("buscador").value
    pasarela = window.open( "https://www.google.com/search?q="+text+"&rlz=1C1CHBF_esES924ES924","_blank")
    
      
}