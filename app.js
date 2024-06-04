// console.log('Hello Manav Rachna')
let y = 1
let z = 0
document.onload = function() {
  let beat = new Audio('game_won.mp3'); // Replace with your audio file path

  // Element to trigger audio on hover
  const triggerElement = document.getElementById('trigger_element'); // Replace with your element ID

  triggerElement.addEventListener('mouseover', function() {
    beat.play();  
  });
};
const diceImg = document.getElementById('dice_img');
function roll_dice() {
  let x = Number(Math.floor(Math.random(0, 1) * 6 + 1))
    diceImg.src = "https://viterbi-web.usc.edu/~ckojukwu/itp301/assignment_04/img/diceroll.gif"
    setTimeout(() => {
        // Update dice image based on the random value
        switch (x) {
          case 1:
            diceImg.src = "https://media1.tenor.com/m/5E88sfAsgOoAAAAC/one.gif"; // Replace with your dice 1 image URL
            break;
          case 2:
            diceImg.src = "https://media1.tenor.com/m/8wm4NlLMQiwAAAAC/two.gif"; // Replace with your dice 2 image URL
            break;
          case 3:
            diceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGncwBpbCJ0tuKFymvAReKNgEdoqbF-BKZSA&s;" // Replace with your dice 3 image URL
            break;
          case 4:
            diceImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7hmuRjvXDjqVQLyBERH5zOOu1VJRWWFOqQ&s"; // Replace with your dice 4 image URL
            break;
          case 5:
            diceImg.src = "https://static.thenounproject.com/png/2502956-200.png"; // Replace with your dice 5 image URL
            break;
          case 6:
            diceImg.src = "https://static-00.iconduck.com/assets.00/die-face-6-emoji-1019x1024-1meoihqe.png"; // Replace with your dice 6 image URL
            break;
          default:
            console.error("Unexpected dice value:", diceValue);
        }
      }, 200);

  document.getElementById('dice_value').innerHTML = x

  if (y % 2 === 0) {
    console.log('SpiderMan')
    let num2 = Number(document.getElementById('p2_score').innerHTML)
    num2 = num2 + x
    document.getElementById('p2_score').innerHTML = num2
    y = 1
    if (num2 >= 50) {
      z = 1
    }
  }
  else {
    console.log('Captain America')
    let num1 = Number(document.getElementById('p1_score').innerHTML)
    num1 = num1 + x
    document.getElementById('p1_score').innerHTML = num1
    y = y + 1
    if (num1 >= 50) {
      z = 1
    }
  }
  if (z === 1) {
    let num1 = Number(document.getElementById('p1_score').innerHTML)
    let num2 = Number(document.getElementById('p2_score').innerHTML)
    if (num1 > num2) {
      document.getElementById('result').innerHTML = 'RCB Won'
      document.getElementById('result').className = 'alert alert-dark'
      document.getElementById('btn1').disabled = true
      confetti1()
      const rcbaudio = new Audio("rcb_won.mp3");
      rcbaudio.play()

    }
    if (num1 < num2) {
      document.getElementById('result').innerHTML = 'CSK Won'
      document.getElementById('result').className = 'alert alert-dark'
      document.getElementById('btn1').disabled = true
      confetti1()
      const cskaudio = new Audio("csk_won.mp3");
      cskaudio.play() 

    }
  }
}

function confetti1() {
  const duration = 15 * 200,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
