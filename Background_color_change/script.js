
//  1]  change backgroundColor Program

/*
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
*/

// 2]  change background color with Start & stop button Program

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let settimes;

const fn1 = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

btn1.addEventListener("click", function () {
   settimes = setInterval(() => {
    document.body.style.backgroundColor = fn1();
  }, 2000);
  console.log("START...");
  console.log(settimes);
})


btn2.addEventListener("click", function () {

  clearInterval(settimes);
  console.log("STOP...");
})