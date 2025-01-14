const ERROR = "ERROR";
const VICTORY = "VICTORY";

const ANSWER_LESS = "Меньше.";
const ANSWER_MORE = "Больше.";
const ANSWER_VICTORY = "Угадал!";

function game() {
    let min = 1;
    let max = 100;
    const hiddenNumber = generateNumber(min, max);

    console.log("Компьютер 1 загадал число:");
    console.log(hiddenNumber);
    console.log("");

    let currentStep = 0;
    let numberInAttempt = false;
    let result = ERROR;

    while (result === ERROR) {

        currentStep++;
        numberInAttempt = !numberInAttempt ? divideNumberInHalf(max) : min + divideNumberInHalf(max - min);;

        if (hiddenNumber < numberInAttempt ) {
            showStepInfo(min, max, currentStep, numberInAttempt, ANSWER_LESS);
            max = numberInAttempt;
            continue;
        }

        if (hiddenNumber > numberInAttempt) {
            showStepInfo(min, max, currentStep, numberInAttempt, ANSWER_MORE);
            min = numberInAttempt;
            continue;
        }

        if (hiddenNumber === numberInAttempt) {
            showStepInfo(min, max, currentStep, numberInAttempt, ANSWER_VICTORY);
            result = VICTORY;
        }

    }

    console.log(`Количество попыток: ${currentStep}.`);
}

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showStepInfo(min, max, currentStep, numberInAttempt, answer) {
    console.log(`Попытка: ${currentStep}.`);
    console.log(`Диапазон поиска: ${min} - ${max}.`);
    console.log("");
    console.log(`Компьютер 2: Попробую число ${numberInAttempt}.`);
    console.log(`Компьютер 1: ${answer}`);
    console.log("");
    console.log("--------------");
    console.log("");
}

function divideNumberInHalf(number) {
    return Math.floor(number / 2);
}

game();
