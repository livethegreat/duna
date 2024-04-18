

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

const textElement = document.getElementById('text');
const cursorElement = document.createElement('span');
cursorElement.id = 'cursor';
cursorElement.textContent = '|';
textElement.appendChild(cursorElement);

let index = 0;
const text = textElement.textContent.trim();
textElement.textContent = '';

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 30); // Adjust typing speed as needed
  } else {
    setTimeout(startTypingAnimation, 3000); // Start typing animation again after delay
  }
}

function startTypingAnimation() {
  textElement.textContent = ''; // Clear text content
  index = 0; // Reset index for typing animation
  typeText(); // Start typing animation
}

function blinkCursor() {
   cursorElement.style.visibility = cursorElement.style.visibility === 'hidden' ? 'visible' : 'hidden';
 }
 
 setInterval(blinkCursor, 500); // Cursor blinking interval

// Start the typing animation initially
startTypingAnimation();



const svgElement = document.getElementById('vector');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isInViewport(svgElement)) {
    svgElement.classList.add('visible');
  } else {
    svgElement.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleScroll);





