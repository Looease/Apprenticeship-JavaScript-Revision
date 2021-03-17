//Var vs Let vs Const 
function letvarconst() {
    console.log('letvarconst');
    let x = 1;
    if (x == 1) {
      var y = 2;
      let z = 3;
    }
    console.log(y);
    try {
      console.log(z);
    }
    catch (e) {
      console.log(`Error: ${e.message}`);
    }
  
    const a = 4;
    try {
      a = 5;
    }
    catch (e) {
      console.log(`Error: ${e.message}`);
    }
  }
  
  function plusplus() {
    console.log('plusplus');
    let x = 5;
    let y = 5;
    console.log(++x);
    console.log(y++);
  }
  
  function arithmetic() {
    console.log('arithmetic');
    let x = 2;
    let y = 3;
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);
    console.log('compound operations');
    x += 1;
    console.log(x);
    x -= 1;
    console.log(x);
    x *= 1;
    console.log(x);
    x /= 1;
    console.log(x);
  }
  
  function loop() {
    console.log('loop');
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  }
  
  letvarconst();
  plusplus();
  arithmetic();
  loop();

  // Try and Catch and Finally 
  // Developer A writes this function
function parseIntOrThrow(x) {
  let y = parseInt(x);
  if (isNaN(y)) {
    throw {
      message: `${x} is not a number.`
    }
  }
  return y;
}

// Developer B uses the function
try {
  var httpClient = httpClient('http://www.google.com');
  httpClient.openConnect();
  console.log('A');
  console.log(parseIntOrThrow('Penguin'));
  console.log('B');
}
catch (e) {
  console.log('Error found: ' + e.message);
}
finally {
  console.log('C');
  httpClient.close();
}

const WIDTH = 50;
const MOVEMENT_AMOUNT = 50;
var leftPos = window.innerWidth / 2;

window.onload = function() {
  let div = document.getElementById("myredbox");
  updateBoxPos(0);
  div.style.top = window.innerHeight / 2;
  div.style.width = WIDTH;
  div.style.height = 50;
}

function updateBoxPos(movementAmount) {
  let div = document.getElementById("myredbox");
  leftPos += movementAmount;
  div.style.left = leftPos;
  if (leftPos + WIDTH < 0 || leftPos > window.innerWidth) {
    alert("Gone!");
    leftPos = window.innerWidth / 2;
    div.style.left = leftPos;
  }
}

function onClickLeft() {
  updateBoxPos(-MOVEMENT_AMOUNT);
}

function onClickRight() {
  updateBoxPos(MOVEMENT_AMOUNT);
}