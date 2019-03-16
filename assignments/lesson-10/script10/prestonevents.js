var main = document.querySelector('div');



var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var eventData = request.response; 
    showData(eventData);
  }

  function showData(jsonObj) {
    var idahoCities = jsonObj['towns'];
       
    
    for (var i = 0; i < idahoCities.length; i++) {
        
        var cityDiv = document.getElementById(idahoCities[i].name);
        if(cityDiv != null){

        var myPara1 = document.createElement('p');
          
        
        myPara1.textContent = idahoCities[i].events;

        cityDiv.appendChild(myPara1);
        
          
        
      }

    }
}