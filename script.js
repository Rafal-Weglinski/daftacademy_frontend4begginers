
// hamburger 
let toggled = false;
const nav = document.getElementsByClassName('page-navigation')[0];
const btn = document.getElementsByClassName('nav-tgl')[0];
btn.onclick = function(evt) {
  if (!toggled) {
    toggled = true;
    evt.target.classList.add('toggled');
    nav.classList.add('active');
  } else {
    toggled = false;
    evt.target.classList.remove('toggled');
    nav.classList.remove('active');
  }
}

// tickets

// Wybrać wszystkie buttony z sekcji ticket 

const ticket = document.querySelectorAll("button");

// Dodać event listenery, które usuwają przycisk i dodają tekst i usuwają eventlistener
for(let i=0; i< ticket.length; i++){
ticket.addEventListener("click", () =>{
    alert("lala");
})}





// Napisz funkcję, która na evencie "submit" formularza kontaktowego wyloguje wpisane wartości do konsoli. (Podpowiedź: użyj funkcji Object.fromEntries w połączeniu z FormData)


