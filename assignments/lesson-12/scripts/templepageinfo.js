var main = document.querySelector('main');



var requestURL = 'file:///Users/chelsijenson/Documents/CIT%20230/chelsiaj.github.io/assignments/lesson-12/templeinformation.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var templeData = request.response; 
    showData(templeData);
  }

  function showData(jsonObj) {
    var templeCities = jsonObj['temples'];
       
    
    for (var i = 0; i < templeCities.length; i++) {
        
        var templeDiv = document.getElementById(templeCities[i].name);
        if(templeDiv != null){

            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p'); 
            var myPara5 = document.createElement('p');
            var myPara6 = document.createElement('p');
            var myPara7 = document.createElement('p');  
        
            myPara1.textContent = 'Address: ' +  templeCities[i].address;
            myPara2.textContent = 'Telephone: ' + templeCities[i].telephone;
            myPara3.textContent = 'Services: ' + templeCities[i].services;
            myPara4.textContent = 'History: ' + templeCities[i].history;
            myPara2.textContent = 'Ordinance schedule: ' + templeCities[i].ordinanceSchedule;
            myPara3.textContent = 'Session schedule: ' + templeCities[i].sessionSchedule;
            myPara4.textContent = 'Temple closure schedule: ' + templeCities[i].templeClosureschedule;
            
      
            templeDiv.appendChild(myPara1);
            templeDiv.appendChild(myPara2);
            templeDiv.appendChild(myPara3);
            templeDiv.appendChild(myPara4);
            templeDiv.appendChild(myPara5);
            templeDiv.appendChild(myPara6);
            templeDiv.appendChild(myPara7);
        }   
      }

    }