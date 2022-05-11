// numbers
const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];

// operators
const operators = ['%','/','X','+','-'];

// output
let output = document.querySelector('#calc-out');
let outputSecondary = document.querySelector('#calc-out-secondary');

let dot = document.getElementById('dot'); // dot
let a = ''; // first value 
let b = ''; // second value
let sign = ''; // sign

// all clear
const allClear = () => {
    a = '';
    b = '';
    sign = '';
    finish = false;
    output.innerHTML = '';
    outputSecondary.innerHTML = '';
};

// input numbers
let addNum = (num) => {
    if (numbers.includes(num)) {
        if (b === '' & sign === '') {
            a = a + num;
            output.innerHTML = a;
            // change fontsize
            if (a.length > 46) {
                output.style.fontSize = 1 + 'em';
                if (a.length > 81) {
                    output.style.fontSize = 0.75 + 'em';
                }
            };
        } else if (a !== '' && sign !== '') {
            // fix bug, if output secondary innerHTML have a more than 1 sign
            if (b.length == 0) {
                let outputSecondaryArr = outputSecondary.innerHTML.split('');
                let oneSign;
                for (let i = 0; i < outputSecondaryArr.length; i++) {
                    if (outputSecondaryArr[i] == sign) {
                        oneSign = outputSecondaryArr[i];
                    }
                };
                if (!outputSecondaryArr.includes(oneSign)) {
                    outputSecondary.innerHTML += String(sign);
                }
                
            };

            b += num;
            output.innerHTML = b;
            if (b.length > 46) {
                output.style.fontSize = 1 + 'em';
                if (b.length > 81) {
                    output.style.fontSize = 0.75 + 'em';
                }
                };
            console.log(b + '- b')
        };
    }
};

// input operators
let addAction = (key) => {
    if (a !== '' && b !== '' && sign !== '') {
        if (sign === '-') {
            a = a - b;
            sign = '';
            outputSecondary.innerHTML = a;
        };

        if (sign === '+') {
            a = (+a) + (+b);
            sign = '';
            outputSecondary.innerHTML = a;
        };

        if (sign === '/') {
            a = a / b;
            sign = '';
            outputSecondary.innerHTML = a;
        };

        if (sign === 'X') {
            a = a * b;
            sign = '';
            outputSecondary.innerHTML = a;
        };

        if (sign === '%') {
            a = a % b;
            sign = '';
            outputSecondary.innerHTML = a;
        };
    };

    if (sign === '') {
        b = '';
        sign = key;
        outputSecondary.innerHTML = a;
        output.innerHTML = sign;
    }
};

// pressed button Equal
let equal = () => {
    switch (sign) {
        case '+':
            a = (+a) + (+b);
            break;
        case '-':
            a -= b;
            break;
        case '/':
            a /= b;
            break;
        case 'X':
            a *= b;
            break;
        case '%':
            a %= b;
    }
    outputSecondary.innerHTML = '';
    output.innerHTML = a;
    if (b == 0 && sign == '/') {
        output.innerHTML = 'Error';
        a = '';
        sign = '';
        b = '';
    }
    sign = '';
    b = '';
    console.log(a + '- this a');
    console.log(b);
};

// remove last number 
let removeNumber = () => {
    if (a !== '' && a.length > 0 && b === '' && sign === '') {
        a = a.slice(0, a.length - 1);
        output.innerHTML = a;
    } else if (a !== '' && b.length > 0 && b !== '') {
        b = b.slice(0, b.length - 1);
        output.innerHTML = b;
    };
};

// plus or minus sign 
let plusOrMinus = () => {
    if (b === '' && sign === '') {
        a = a * (-1);
        output.innerHTML = a;
    } else 
    if (a !== '' && sign !== '' && outputSecondary.innerHTML !== '') {
        b = b * (-1);
        output.innerHTML = b;
    } else {
        output.innerHTML = '-';
    }
};

// now time in nav-title 

let navTimer = () => {
    let date = new Date();

    let seconds = date.getSeconds();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let navSeconds = document.querySelector('.nav-time__seconds');
    let navMinutes = document.querySelector('.nav-time__minutes');
    let navHours = document.querySelector('.nav-time__hours');

    if (seconds < 10) {
        navSeconds.innerHTML = '0' + seconds;
    } else {
        navSeconds.innerHTML = seconds;
    }

    if (minutes < 10) {
        navMinutes.innerHTML = '0' + minutes;
    } else {
        navMinutes.innerHTML = minutes;
    } 

    if (hours < 10) {
        navHours.innerHTML = '0' + hours;
    } else {
        navHours.innerHTML = hours;
    }
};

let timerId = setInterval(navTimer,1000);
setTimeout(timerId,1);

// add light/dark theme

let navBtn = document.querySelector('#nav-btn');

let darkLight = () => {
    let btnNumbers = document.querySelectorAll('.btn-number');
    let btnOperators = document.querySelectorAll('#btn-operator');
    let calculator = document.querySelector('#calculator');
    let btnClear = document.querySelector('#btn-clear');
    let btnRemove = document.querySelector('#btn-remove');
    let calcOutput = document.querySelector('#calc-output');
    let calcOut = document.querySelector('#calc-out');
    let calcOutSecondary = document.querySelector('#calc-out-secondary');
    let navTime = document.querySelector('#nav-time');
    let particles = document.querySelector('#particles-js');

    particles.style.background = '#000';

    for (let i = 0; i < btnNumbers.length; i++) {
        btnNumbers[i].classList.add('btn');
        btnNumbers[i].classList.remove('btn-light');
    };

    for (let i = 0; i < btnOperators.length; i++) {
        btnOperators[i].classList.add('btn-operator');
        btnOperators[i].classList.add('btn');
        btnOperators[i].classList.remove('btn-operator-light');
    };

    calculator.classList.add('calculator');
    calculator.classList.remove('calculator-light');

    btnClear.classList.add('btn-clear');
    btnClear.classList.add('btn');
    btnClear.classList.remove('btn-clear-light');

    btnRemove.classList.add('btn-remove');
    btnRemove.classList.add('btn');
    btnRemove.classList.remove('btn-remove-light');

    calcOutput.classList.add('calc-output');
    calcOutput.classList.remove('calc-output-light');

    calcOut.classList.add('calc-out');
    calcOut.classList.remove('calc-out-light');

    calcOutSecondary.classList.add('calc-out-secondary');
    calcOutSecondary.classList.remove('calc-out-secondary-light');

    navTime.classList.add('nav-time');
    navTime.classList.remove('nav-time-light');

    navBtn.classList.add('nav-btn');
    navBtn.classList.remove('nav-btn-light');

    document.querySelector('#nav-btn__night').style.display = 'block';
    document.querySelector('#nav-btn__light').style.display = 'none';

    navBtn.addEventListener('click',lightDark);

}

let lightDark = () => {
    let btnNumbers = document.querySelectorAll('.btn-number');
    let btnOperators = document.querySelectorAll('#btn-operator');
    let calculator = document.querySelector('#calculator');
    let btnClear = document.querySelector('#btn-clear');
    let btnRemove = document.querySelector('#btn-remove');
    let calcOutput = document.querySelector('#calc-output');
    let calcOut = document.querySelector('#calc-out');
    let calcOutSecondary = document.querySelector('#calc-out-secondary');
    let navTime = document.querySelector('#nav-time');
    let particles = document.querySelector('#particles-js');

    for (let i = 0; i < btnNumbers.length; i++) {
        btnNumbers[i].classList.remove('btn');
        btnNumbers[i].classList.add('btn-light');
    };

    for (let i = 0; i < btnOperators.length; i++) {
        btnOperators[i].classList.remove('btn-operator');
        btnOperators[i].classList.remove('btn');
        btnOperators[i].classList.add('btn-operator-light');
    };

    particles.style.background = '#afd2db';

    calculator.classList.remove('calculator');
    calculator.classList.add('calculator-light');

    btnClear.classList.remove('btn-clear');
    btnClear.classList.remove('btn');
    btnClear.classList.add('btn-clear-light');

    btnRemove.classList.remove('btn-remove');
    btnRemove.classList.remove('btn');
    btnRemove.classList.add('btn-remove-light');

    calcOutput.classList.remove('calc-output');
    calcOutput.classList.add('calc-output-light');

    calcOut.classList.remove('calc-out');
    calcOut.classList.add('calc-out-light');

    calcOutSecondary.classList.remove('calc-out-secondary');
    calcOutSecondary.classList.add('calc-out-secondary-light');

    navTime.classList.remove('nav-time');
    navTime.classList.add('nav-time-light');

    navBtn.classList.remove('nav-btn');
    navBtn.classList.add('nav-btn-light');

    document.querySelector('#nav-btn__night').style.display = 'none';
    document.querySelector('#nav-btn__light').style.display = 'block';

    navBtn.removeEventListener('click',lightDark);
    navBtn.addEventListener('click',darkLight);

}

navBtn.addEventListener('click',lightDark); 














