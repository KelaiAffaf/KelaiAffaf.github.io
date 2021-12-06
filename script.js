// const input = document.getElementsByTagName('input');


const welcome = document.getElementById('welcome');
const generator = document.getElementById('generator');
const head = document.getElementById('keycode');

const eventKey = document.getElementById("eventKey");
const eventLocation= document.getElementById("eventLocation");
const eventWhich= document.getElementById("eventWhich");
const eventCode=document.getElementById("eventCode");

function keycode(event) {
    console.log(event);
var key = event.key;
var location = event.location;
var which = event.which;
var code = event.code;
head.textContent = which;
eventKey.textContent= key;
eventLocation.textContent= location;
eventWhich.textContent= which;
eventCode.textContent= code;
generator.classList.remove("show");
welcome.remove()
}

// document.body.addEventListener("keydown",keycode);


// document.body.addEventListener ('onkeydown', (event) => {
//     if (event.which === null) {
//         generator.style.display = 'block'
//         welcome.style.display = 'none'
        
//     } else {
//         generator.style.display = 'none'
//         welcome.style.display = 'block'
        

// })

// generator.classList.toggle("show");