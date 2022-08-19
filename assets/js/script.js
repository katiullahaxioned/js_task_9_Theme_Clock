var analogHours = document.querySelector('.analog-hours');
var analogMinutes = document.querySelector('.analog-minutes');
var analogSeconds = document.querySelector('.analog-seconds');

var a = 0;
setInterval(function () {
	a += 6;
	analogHours.style.transform = 'rotate(' + a + 'deg)';
	if (a === 360) {
		a = 0;
	}
}, 3600000);

var b = 0;
setInterval(function () {
	b += 6;
	analogMinutes.style.transform = 'rotate(' + b + 'deg)';
	if (b === 360) {
		b = 0;
	}
}, 60000);

var c = 0;
setInterval(function () {
	c += 6;
	analogSeconds.style.transform = 'rotate(' + c + 'deg)';
	if (c === 360) {
		c = 0;
	}
}, 1000);

//************************************************************//

var container = document.querySelector('.container');
var modeButton = document.querySelector('.mode-button');
var dark = document.querySelector('.dark');
var light = document.querySelector('.light');
var analogHours = document.querySelector('.analog-hours');
var analogMinutes = document.querySelector('.analog-minutes');
var digitalHoursMinutes = document.querySelector('.digital-hours-minutes');
var digitalAmPm = document.querySelector('.digital-am-pm');
var digitalDay = document.querySelector('.digital-day');
var digitalMonth = document.querySelector('.digital-month');
var digitalDate = document.querySelector('.digital-date');

light.classList.add('display-none');

modeButton.addEventListener('click', function () {
	modeButton.classList.toggle('background-white');
	dark.classList.toggle('display-none');
	light.classList.toggle('display-none');
	container.classList.toggle('background-black');
	analogHours.classList.toggle('linear-background');
	analogMinutes.classList.toggle('linear-background');
	digitalHoursMinutes.classList.toggle('color');
	digitalAmPm.classList.toggle('color');
	digitalDate.classList.toggle('background-white');
})

//************************************************************//

setInterval(function () {
	var dateClock = new Date();
	var date = dateClock.getDate();
	var day = dateClock.getDay();
	var month = dateClock.getMonth();
	var hour = dateClock.getHours();
	var minute = dateClock.getMinutes();
	var second = dateClock.getSeconds();

	if(minute < 10) {
		minute = '0' + minute;
	}
	
	if(second < 10) {
		second = '0' + second;
	}

	if(hour >= 12){
		digitalAmPm.innerHTML = 'pm';
	}
	
	if(hour > 12) {
		hour = hour - 12;
	}

	if(hour < 10) {
		hour = '0' + hour;
	}

	digitalHoursMinutes.innerHTML = hour + ':' + minute + ':' + second;
	digitalDate.innerHTML = date;

	var arrday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
	for(var i=0; i<day; i++) {
		if(i === (day-1)) {
			digitalDay.innerHTML = arrday[i];
		}
	}

	var arrmonth = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	for(var j=0; j<=month; j++) {
		if(j === month) {
			digitalMonth.innerHTML = arrmonth[j];
		}
	}
}, 1000)