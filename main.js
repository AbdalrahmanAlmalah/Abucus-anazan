let timeValue = document.getElementById('time');
let size = document.getElementById('number_operation');
let display = document.getElementById('js-display');
let answer, i, timer, rand, randOp;
let select_digits = document.getElementById('number_digits');
let Subtraction = document.getElementById('Checkbox');
display.value = '';
let button = document.querySelector('start');
let wrongAns = 0;
let RightAns = 0;
let slider = document.getElementById('myRange');
let output = document.getElementById('demo');

output.innerHTML = slider.value;

console.log(Subtraction.checked);
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

slider.oninput = function () {
  output.innerHTML = this.value;
  let range = output.innerHTML;
  if (checkSub() || range > 1) size.removeAttribute('disabled');
  else size.setAttribute('disabled', 'disabled');

  console.log(range);
};

function flash() {
  switch (select_digits.value) {
    case '1':
      if (output.innerHTML == 1) {
        //if level 1 and singleOp
        rand = randomIntFromInterval(1, 9);

        if (rand === 9) {
          rand = randomIntFromInterval(1, 9);
        } else if (rand === 8) {
          rand = randomIntFromInterval(1, 1);
        } else if (rand === 7) {
          rand = randomIntFromInterval(1, 2);
        } else if (rand === 6) {
          rand = randomIntFromInterval(1, 3);
        } else if (rand === 5) {
          rand = randomIntFromInterval(1, 4);
        } else if (rand === 4) {
          rand = randomIntFromInterval(1, 5);
        } else if (rand === 3) {
          rand = randomIntFromInterval(1, 6);
        } else if (rand === 2) {
          rand = randomIntFromInterval(1, 7);
        } else if (rand === 1) {
          rand = randomIntFromInterval(1, 8);
        }
      }
      break;

    case '2':
      rand = randomIntFromInterval(10, 99);
      break;

    case '3':
      rand = randomIntFromInterval(100, 999);
      break;

    case '4':
      rand = randomIntFromInterval(1000, 9999);
      break;

    case '5':
      rand = randomIntFromInterval(10000, 99999);
      break;

    case '6':
      rand = randomIntFromInterval(100000, 999999);
      break;

    default:
      select_digits.value = '1';
      break;
  }
  if (i <= size.value) {
    timer = setTimeout(function () {
      display.value = rand;
      answer += rand;
      setTimeout(function () {
        display.value = '';
      }, 700);
      flash();
    }, Number(timeValue.value) * 1000);
    i++;
  } else {
    clearTimeout(timer);
  }
}

function flash_Subtraction() {
  switch (select_digits.value) {
    case '1':
      if (output.innerHTML == 1) {
        rand = randomIntFromInterval(1, 9);

        if (rand === 9) {
          rand = randomIntFromInterval(-9, -1);
        }
        if (rand === 8) {
          rand = randomIntFromInterval(-8, -1);
        }
        if (rand === 7) {
          rand = randomIntFromInterval(-7, -1);
        }
        if (rand === 6) {
          rand = randomIntFromInterval(-6, -1);
        }
        if (rand === 5) {
          rand = randomIntFromInterval(-5, -1);
        }
        if (rand === 4) {
          rand = randomIntFromInterval(-4, -1);
        }
        if (rand === 3) {
          rand = randomIntFromInterval(-3, -1);
        }
        if (rand === 2) {
          rand = randomIntFromInterval(-2, -1);
        }
        if (rand === 1) {
          rand = randomIntFromInterval(-1, -1);
        }
      }

      break;

    case '2':
      rand = randomIntFromInterval(-99, 99);
      break;

    case '3':
      rand = randomIntFromInterval(-999, 999);
      break;

    case '4':
      rand = randomIntFromInterval(-9999, 9999);
      break;

    case '5':
      rand = randomIntFromInterval(-99999, 99999);
      break;

    case '6':
      rand = randomIntFromInterval(-999999, 999999);
      break;

    default:
      select_digits.value = '1';
      break;
  }
  if (i <= size.value) {
    timer = setTimeout(function () {
      display.value = rand;
      answer += rand;
      setTimeout(function () {
        display.value = '';
      }, 700);
      flash_Subtraction();
    }, Number(timeValue.value) * 1000);
    i++;
  } else {
    clearTimeout(timer);
  }
}

function start() {
  clearTimeout(timer);
  display.value = '';
  answer = 0;
  i = 0;
  Subtraction.checked ? flash_Subtraction() : flash();
}

function submit() {
  if (display.value == answer) {
    alert('great');
    RightAns++;
    document.getElementById('rightAns').textContent = RightAns;
  } else if (answer) {
    alert('sorry wrong...');
    wrongAns++;
    document.getElementById('wrongAns').textContent = wrongAns;
  }
}

function showAnswer() {
  alert(' ' + answer + ' ');
}

const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 2000);
});

//// no negative results
//// design as the photo
//// wrong answers  and correct answers
//// abacus design
////splash screen  as center
////level 1  upto 9 1op 2numbers sum
//fix positions
// sub upto 16 num no 5num friends
//level 2 no 10num friends
////level 3 all available
//pop up window to answer
function checkSub() {
  if (Subtraction.checked) size.removeAttribute('disabled');
  else size.setAttribute('disabled', 'disabled');
  return Subtraction.checked;
}
