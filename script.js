let container = document.querySelector('.Container');
let counter = document.querySelector('.counter');
let popup = document.querySelector('.Popup_Container');
let btn = document.getElementById('button');
let doc_1 = document.querySelector('.Documentation__Container--1');
let doc_2 = document.querySelector('.Documentation__Container--2');
let initialpositionY = 256;
let initialpositionX = 288;
let bool1 = true;
let bool2 = true;
let bool3 = true;
let bool4 = true;
let auto1 = false;
let auto2 = false;
let auto3 = false;
let auto4 = false;
let food = document.querySelector('.food');
food.style.bottom = '96px';
food.style.left = '96px';
let coordinateX;
let coordinateY;
let count = 0;
let autoplay;

ForAutoPlay();

window.addEventListener('keydown', function (e) {
  let headofthesnake = document.querySelectorAll('.Container__Snake--part');
  let partsofsnake = [];
  headofthesnake.forEach(item => partsofsnake.push(item));
  switch (e.keyCode) {
    case 38:
      if (bool1) {
        Moving();
        partsofsnake[0].style.bottom = `${initialpositionY +=32}px`;

        bool1 = false;
        bool2 = false;
        bool3 = true;
        bool4 = true;

        //Auto
        auto1 = true;
        auto2 = false;
        auto3 = false;
        auto4 = false;
        randomfood();
      }
      break;
    case 40:
      if (bool2) {
        Moving();
        partsofsnake[0].style.bottom = `${initialpositionY -=32}px`;

        bool1 = false;
        bool2 = false;
        bool3 = true;
        bool4 = true;

        //Auto
        auto1 = false;
        auto2 = true;
        auto3 = false;
        auto4 = false;
        randomfood();
      }
      break;
    case 39:
      if (bool3) {
        Moving();
        partsofsnake[0].style.left = `${initialpositionX +=32}px`;

        bool1 = true;
        bool2 = true;
        bool3 = false;
        bool4 = false;

        //Auto
        auto1 = false;
        auto2 = false;
        auto3 = true;
        auto4 = false;
        randomfood();
      }
      break;
    case 37:
      if (bool4) {
        Moving();
        partsofsnake[0].style.left = `${initialpositionX -=32}px`;

        bool1 = true;
        bool2 = true;
        bool3 = false;
        bool4 = false;

        //Auto
        auto1 = false;
        auto2 = false;
        auto3 = false;
        auto4 = true;
        randomfood();
      }
      break;
  }
});

function ForAutoPlay() {
  autoplay = setInterval(function () {
    let headofthesnake = document.querySelectorAll('.Container__Snake--part');
    let partsofsnake = [];
    headofthesnake.forEach(item => partsofsnake.push(item));
    if (auto1) {
      Moving();
      partsofsnake[0].style.bottom = `${initialpositionY +=32}px`;
    }
    if (auto2) {
      Moving();
      partsofsnake[0].style.bottom = `${initialpositionY -=32}px`;
    }
    if (auto3) {
      Moving();
      partsofsnake[0].style.left = `${initialpositionX +=32}px`;
    }
    if (auto4) {
      Moving();
      partsofsnake[0].style.left = `${initialpositionX -=32}px`;
    }
    randomfood();
  }, 500);
}

function Moving() {
  let headofthesnake = document.querySelectorAll('.Container__Snake--part');
  let partsofsnake = [];
  headofthesnake.forEach(item => partsofsnake.push(item));
  for (let i = partsofsnake.length - 1; i > 0; i--) {
    partsofsnake[i].style.bottom = partsofsnake[i - 1].style.bottom;
    partsofsnake[i].style.left = partsofsnake[i - 1].style.left;
  }

  GameOver();

  function GameOver() {
    let headofthesnake = document.querySelectorAll('.Container__Snake--part');
    let partsofsnake = [];
    headofthesnake.forEach(item => partsofsnake.push(item));
    if (partsofsnake[0].style.left == '0px' || partsofsnake[0].style.left == '576px') {
      bool1 = false;
      bool2 = false;
      bool3 = false;
      bool4 = false;
      popup.style.display = 'flex';
      clearInterval(autoplay);
    }
    if (partsofsnake[0].style.bottom == '0px' || partsofsnake[0].style.bottom == '512px') {
      bool1 = false;
      bool2 = false;
      bool3 = false;
      bool4 = false;
      popup.style.display = 'flex';
      clearInterval(autoplay);
    }
  }
}

function randomfood() {
  let headofthesnake = document.querySelectorAll('.Container__Snake--part');
  let partsofsnake = [];
  headofthesnake.forEach(item => partsofsnake.push(item));
  if (partsofsnake[0].style.bottom == food.style.bottom && partsofsnake[0].style.left == food.style.left) {
    count++;
    counter.textContent = count;
    do {
      coordinateX = Math.floor(Math.random() * 576);
    } while (coordinateX % 32 != 0 || coordinateX <= 32);
    do {
      coordinateY = Math.floor(Math.random() * 512);
    } while (coordinateY % 32 != 0 || coordinateY <= 32);
    food.style.bottom = `${coordinateY}px`;
    food.style.left = `${coordinateX}px`;
    SnakeIncrease();
  }
}

function SnakeIncrease() {
  let tail = document.createElement('div');
  tail.setAttribute('class', 'Container__Snake--part');
  container.appendChild(tail);
  ////////////////
  let headofthesnake = document.querySelectorAll('.Container__Snake--part');
  let partsofsnake = [];
  headofthesnake.forEach(item => partsofsnake.push(item));
  if (auto1) {
    tail.style.bottom = `${initialpositionY - 32}px`;
    tail.style.left = `${initialpositionX}px`;
  }
  if (auto2) {
    tail.style.bottom = `${initialpositionY + 32}px`;
    tail.style.left = `${initialpositionX}px`;
  }
  if (auto3) {
    tail.style.left = `${initialpositionX - 32}px`;
    tail.style.bottom = `${initialpositionY}px`;
  }
  if (auto4) {
    tail.style.left = `${initialpositionX + 32}px`;
    tail.style.bottom = `${initialpositionY}px`;
  }
}

btn.addEventListener('click', function () {
  popup.style.display = 'none';
  let headofthesnake = document.querySelectorAll('.Container__Snake--part');
  let partsofsnake = [];
  headofthesnake.forEach(item => partsofsnake.push(item));
  for (let i = 1; i < partsofsnake.length; i++) {
    partsofsnake[i].remove();
  }
  bool1 = true;
  bool2 = true;
  bool3 = true;
  bool4 = true;
  auto1 = false;
  auto2 = false;
  auto3 = false;
  auto4 = false;
  initialpositionY = 256;
  initialpositionX = 288;
  partsofsnake[0].style.left = `${initialpositionX}px`;
  partsofsnake[0].style.bottom = `${initialpositionY}px`;
  count = 0;
  counter.textContent = count;
  ForAutoPlay();
});

doc_1.addEventListener('click', function () {
  doc_2.classList.toggle('Open');
})