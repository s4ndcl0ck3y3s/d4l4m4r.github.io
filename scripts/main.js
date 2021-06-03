// Codigo que hace que la imagen cambie al click
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/reinos-olvidados.png') {
      myImage.setAttribute('src','images/dnd-logo.png');
    } else {
      myImage.setAttribute('src','images/reinos-olvidados.png');
    }
}

//Codigo de mensaje personalizado

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Por favor ingresa tu nombre.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Bienvenido, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bienvenido, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }