// CREAZIONE BOTTONE LANCIA DADO
var bottoneLancia = document.getElementById('bottoneLancia');


bottoneLancia.addEventListener('click',
    function() {
        var mioDado = Math.floor(Math.random() * 6 + 1);
        // console.log(mioDado);
        var pcDado = Math.floor(Math.random() * 6 + 1);
        // console.log(pcDado);
        var result = '';
        
        document.getElementById('dado').innerHTML = mioDado
        document.getElementById('dadopc').innerHTML = pcDado
        
        
        
        
        if (mioDado < pcDado) {
            result = 'HAI PERSO!!!'
        
            
        } else if (mioDado > pcDado) {
            result = 'HAI VINTO!!!'
           
            
        } else {
            result = 'PARI!!!'
            
            
        }
        document.getElementById('risultato').innerHTML = result; 

        var container = document.getElementById('container');
        console.log(container);
        
        container.className = 'show';
    } )

    