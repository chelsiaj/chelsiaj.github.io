var body = document.querySelector('body');



var requestURL = 'https://raw.githubusercontent.com/chelsiaj/chelsiaj.github.io/master/assignments/lesson-12/templeinformation.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var tempsummary2 = request.response; 
    showData(tempsummary2);
  }

  function showData(jsonObj) {
    var templeCities2 = jsonObj['temples'];
       
    
    for (var i = 0; i < templeCities2.length; i++) {
        
        var templeDiv2 = document.getElementById(templeCities2[i].name);
        if(templeDiv2 != null){

            var myPara1 = document.createElement('p');
    
        
            myPara1.textContent = + templeCities2[i].summary;
         
      
            templeDiv2.appendChild(myPara1);
        
        }   
      }

    }