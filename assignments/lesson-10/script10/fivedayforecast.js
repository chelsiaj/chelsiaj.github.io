var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=eca4b00dc9a9f52ac793406b34029d19&units=metric", true);
xhr.onload = function() {
    var jsonData = JSON.parse(xhr.response);
    console.log(jsonData);
    var dayOne = document.getElementById("first")
    dayOne.innerHTML = jsonData.main.temp_max; 

    
}
xhr.send ();

