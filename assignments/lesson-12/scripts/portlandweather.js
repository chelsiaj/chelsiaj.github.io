var phr = new XMLHttpRequest();
phr.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5746545&APPID=eca4b00dc9a9f52ac793406b34029d19&units=imperial", true);
phr.onload = function() {
    var pjsonData = JSON.parse(phr.response);
    console.log(pjsonData);
    var currentTempfour = document.getElementById("currentTempportland");
    currentTempfour.innerHTML = pjsonData.main.temp; 
   
}
phr.send ();