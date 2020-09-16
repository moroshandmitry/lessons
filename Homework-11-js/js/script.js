// squareOfNumber
const squareOfNumber = {
    square: (count) => {
        for (let i = 1; i <= count; i++) {
            console.log(i ** 2);
        }
    }
}

squareOfNumber.square(9);

// prompt
let getA = prompt('Input you number or string', '');
if (getA > 0) {
    console.log(true);
}
else if (getA < 0) {
    console.log(true);
}
else if (Number(getA) === 0) {
    console.log(false);
}
else {
    console.log(`${String(getA)} - is string`);
}

const z = 1;
let n;
console.log((z > 0) ? n = true : n = false);


// Logical operators
const a = 5;
const b = 3;
console.log(((a > b) && (a === b)) ? true : false);
console.log((true && 0 && ('a' < 'Z')) ? true : false);
console.log(((a > b) || true || ('2' == 2) || (false == '')) ? true : false);
console.log(((a < b) && (0 == false)) ? true : false);
console.log((!(2 == 2) || (true && '')) ? true : false);

// switch case with date getDay
switch (new Date().getDay()) {
    case 0:
        console.log(day = "Sunday");
        break;
    case 1:
        console.log(day = "Monday");
        break;
    case 2:
        console.log(day = "Tuesday");
        break;
    case 3:
        console.log(day = "Wednesday");
        break;
    case 4:
        console.log(day = "Thursday");
        break;
    case 5:
        console.log(day = "Friday");
        break;
    case 6:
        console.log(day = "Saturday");
}

// continue iteration after number 3
for (let iter = 1; iter <= 7; iter++) {
    if (iter === 3) {
        continue;
    }
    else {
        console.log(iter);
    }
}

// function getBigNum param
const getBigNum = (item1, item2) => {
    if (item1 > item2) {
        console.log(item1);
    } else {
        console.log(item2);
    }
}

getBigNum(333, 777);


const human = {
    firstName: 'Dmitry',
    lastName: 'Moroshan',
    yearOfBirth: 1993,
    married: true,

    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    getAge: function () {
        return new Date().getFullYear() - this.yearOfBirth;
    },

    getMarried: function () {
        if (this.married) {
            return `Married: ${true}`;
        } else {
            return `Married: ${false}`;
        };
    },


};

console.log(human.getFullName());
console.log(human.getAge());
console.log(human.getMarried());

// Get Time1
setInterval(function () {
    date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        h = (h < 10) ? '0' + h : h,
        m = (m < 10) ? '0' + m : m,
        s = (s < 10) ? '0' + s : s,

        document.querySelector('.time').innerHTML = h + ':' + m + ':' + s;

}, 1000);

// My slider
const images = [
    'http://pvbk.spb.ru/inc/slider/imgs/planet0.jpg',
    'http://pvbk.spb.ru/inc/slider/imgs/planet1.jpg',
    'http://pvbk.spb.ru/inc/slider/imgs/planet2.jpg',
    'http://pvbk.spb.ru/inc/slider/imgs/planet3.jpg',
    'http://pvbk.spb.ru/inc/slider/imgs/planet4.jpg',
    'http://pvbk.spb.ru/inc/slider/imgs/planet5.jpg',
];
let num = 0;
function next() {
    const slider = document.querySelector('.my-slider-img');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    const slider = document.querySelector('.my-slider-img');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}

setInterval(function () {
    const slider = document.querySelector('.my-slider-img');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}, 3700);