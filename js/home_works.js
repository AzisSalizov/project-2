document.getElementById("gmail_button").addEventListener('click', function () {
    const gmailInp = document.getElementById('gmail_input').value;
    const gmailResult = document.getElementById('gmail_result');

    const gmailReg = /^[a-zA-Z0-9._%+-]{5,}@gmail\.com$/;

    if (gmailReg.test(gmailInp)) {
        gmailResult.textContent = 'Вы успешно прошли проверку!';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'Вы ввели не корректное значение!';
        gmailResult.style.color = 'red';
    }
})
const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0, positionY = 0;

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

function moveBlock() {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionY >= offsetHeight && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }
    requestAnimationFrame(moveBlock)
}

requestAnimationFrame(moveBlock);

let intervalId;
let seconds = 0;
let secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let updateDisplay = () => {
    secondsDisplay.textContent = seconds;
}

let startTimer = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000)
    }
}

let stopTimer = () => {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null;
    }
}

let resetTimer = () => {
    stopTimer();
    seconds = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
