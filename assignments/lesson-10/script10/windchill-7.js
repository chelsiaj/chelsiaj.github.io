var tempF = parseInt(document.getElementById('high').innerHTML);
var speed = parseInt(document.getElementById('speedy').innerHTML);
	
var wind_chill;
var first_val = 35.74;
var second_val = 0.6215 * tempF;
var third_val = 35.75;
var fourth_val = Math.pow(speed, .16);
var fifth_val = 0.4275 * tempF;
var sixth_val = Math.pow(speed, 0.16);
var seventh_val = fifth_val * sixth_val;
var eighth_val = third_val * fourth_val;
	

	wind_chill = first_val + second_val - eighth_val + seventh_val;
	

document.getElementById("wind_chill").innerHTML = Math.round(wind_chill);
