var main = document.querySelector('main');



var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var weatherData = request.response; 
    showData(weatherData);
  }

  function showData(jsonObj) {
    var idahoCities = jsonObj['towns'];
       
    
    for (var i = 0; i < idahoCities.length; i++) {
        
        var cityDiv = document.getElementById(idahoCities[i].name);
        if(cityDiv != null){

            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');  
        
            myPara1.textContent = 'motto: ' +  idahoCities[i].motto;
            myPara2.textContent = 'yearFounded: ' + idahoCities[i].yearFounded;
            myPara3.textContent = 'currentPopulation: ' + idahoCities[i].currentPopulation;
            myPara4.textContent = 'averageRainfall: ' + idahoCities[i].averageRainfall;
      
            cityDiv.appendChild(myPara1);
            cityDiv.appendChild(myPara2);
            cityDiv.appendChild(myPara3);
            cityDiv.appendChild(myPara4);
        }   
      }

    }