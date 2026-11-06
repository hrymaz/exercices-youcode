const nom = 'Clavier' ;
let prix = 250 ; 

const elementNom = document.getElementById('nom')
const elementprix = document.getElementById('prix')

elementNom.textContent = nom ; 
elementprix.textContent= prix + 'DH' ; 

prix = 199 ;

elementprix.textContent = prix + 'DH' ;

nom = 'Mohamed'; 