var day1 = new Date();
var weekdayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayoftheweek").innerHTML = weekdayArray[day1.getDay()];

var today = new Date().toLocaleDateString('en-GB', {  
	day : 'numeric',
	month : 'long',
	year : 'numeric'
})

document.getElementById("current-dt").innerHTML = today;