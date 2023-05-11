const minValue = 0;
const maxValue = 1000;
const secretNum = numGenerator();

function numGenerator () {
    return parseInt(Math.random() * maxValue);
};

const minValueElement = document.getElementById('min-value');
minValueElement.innerHTML = minValue;

const maxValueElement = document.getElementById('max-value');
maxValueElement.innerHTML = maxValue;