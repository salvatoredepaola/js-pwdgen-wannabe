alert("Hello JS World");


let utente = "Utente";
let orario = "12:00";
let data = "05/04/2023";
let messaggio = `${utente} ha caricato la pagina alle ${orario} del ${data}`;
console.info(messaggio);
console.error("C'è un errore");



let nome = prompt("Come ti chiami")
console.log(`L'utente dichiara di chiamarsi ${nome}`);

let cognome = prompt("Qual è il tuo cognome")
console.log(`L'utente dichiara il suo cognome come ${cognome}`);

let colorePreferito = prompt("Qual è il tuo colore preferito?")
console.log(`L'utente dichiara il suo colore preferito come ${colorePreferito}`);

let eta = prompt("Quanti anni hai?");
console.log(`L'utente dichiara di avere ${eta} anni`);

let annoCorrente = 2023;

let etaNumero = Number(eta);
let annoDiNascita = annoCorrente - eta;

console.log(`Sei nato nel ${annoDiNascita}`);
console.log(`eta è di tipo: ${typeof eta}`);

document.getElementById("nome").innerText = nome;
document.getElementById("cognome").innerText = cognome;
document.getElementById("colorePreferito").innerText = colorePreferito;
document.getElementById("anno").innerText = annoDiNascita;