let menu = document.querySelector('#menu-bar');
let header = document.querySelector('header');
let off = document.querySelector('#off');



menu.onclick = () =>{
  
  header.classList.toggle('active');

}
off.onclick = () =>{
  header.classList.toggle('active');
}