

let menu = document.getElementById('menu');
let bro = document.getElementById('header');


let humble = document.getElementById('title')




function opening() {

  menu.innerHTML = `<div id="ex"><ion-icon name="close-outline" onclick="closing()"></ion-icon></div>
   <div id="burger">
   
   <div id="scroll"><ul>
   <a href="index.html"><li id="explore" onclick="closing()"><p id="explore">Home</p></li></a>
   <a href="about.html"><li id="explore" onclick="closing()"><p id="explore">About</li></a>
   <a href="blog.html"><li id="explore" onclick="closing()"><p id="explore">Blog</li></a>
   <a href="contact.html"><li id="explore" onclick="closing()"><p id="explore">Contact</p></li></a>
   <a href="service.html"><li id="explore" onclick="closing()"><p id="explore">Services</p></li></a>
   <br><br>


   
   </ul></div>

 
   
   </div>
   
   
   
   `
menu.style.width = "100%"
bro.style.position = "fixed"








    
}


function closing() {

   menu.innerHTML = `<div id="menu"><ion-icon name="menu-outline" onclick="opening()"></ion-icon></div>`
   

  

   

   menu.style.width = "50%"
 
   bro.style.position = "relative"
  
 
 
    
}
