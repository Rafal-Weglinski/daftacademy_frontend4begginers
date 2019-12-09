
// hamburger 
{
const toggle = document.querySelector('.page-toggle');
const nav = document.querySelector(".page-navigation");
const link = document.querySelectorAll('.page-navigation__link');

toggle.addEventListener("click", () =>{
  nav.classList.toggle("page-navigation-mobile-active");
})

link.forEach(item => {
  item.addEventListener('click', event => {
    nav.classList.remove("page-navigation-mobile-active");
  })
})
}
// tickets
const ticket = document.querySelectorAll(".concerts__button");

ticket.forEach(item => {
  item.addEventListener('click', event =>{
  item.innerHTML = "Have fun!";
})})


// Console.log form values 

{
const submit = document.querySelector(".button__contact");

submit.addEventListener("click", () => {
  const mail = document.querySelector("#email");
  const topic = document.querySelector("#topic");
  console.log(mail.value, topic.value);
})
}