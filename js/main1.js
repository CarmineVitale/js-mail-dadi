// Cambio colore titolo lettera per lettera

var titolo = document.getElementById('title');

var titletext = titolo.innerHTML;

var ciao = '';


for ( var i = 0; i < titletext.length; i++) {
    ciao += '<span class=char-' + (i + 1) + '>' + titletext[i] + '</span>';
    
}
titolo.innerHTML = ciao;



// creazione array
var list = ['michele@boolean.careers', 'fabio@boolean.careers' , 'roberto@boolean.careers'];
console.log('Qui è la lista array: ' , list);

// Chiedi all’utente la sua email
var mail = prompt('Inserisci la tua mail', 'fabio@boolean.careers');

var userFound = false;

for (var i = 0; i < list.length; i++) {
    var item = list[i];

    if (item == mail) {
        userFound = true;
        
    }
}
if (userFound == true) {
    document.getElementById('accesso').innerHTML = 'MAIL VERIFICATA. ACCESSO CONSENTITO.';
    
} else {
    alert('MAIL NON TROVATA');
    
}