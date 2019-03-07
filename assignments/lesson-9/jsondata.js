
var section = document.querySelector('grid-container2');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var information = request.response;
  populateHeader(information);
  information(information);
}



function information (jsonObj) {
  var cities = jsonObj['towns'];
      
  for (var i = 0; i < cities.length; i++) {
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
  

    myPara1.textContent = 'name: ' + cities[i].name;
    myPara2.textContent = 'motto: ' + cities[i].motto;
    myPara3.textContent = 'yearFounded: ' + cities[i].yearfounded;;
    myPara4.textContent = 'currentpopulation: ' + cities[i].currentpopulation;
    myPara5.textContent = 'averagerainfall: ' + cities[i].averagerainfall;
    

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
   

    section.appendChild(myArticle);
  }
}


