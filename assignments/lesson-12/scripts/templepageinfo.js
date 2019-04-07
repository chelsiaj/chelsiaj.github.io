var main = document.querySelector('main');



var requestURL = 'https://raw.githubusercontent.com/chelsiaj/chelsiaj.github.io/master/assignments/lesson-12/templeinformation.json';
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
            var myPara8 = document.createElement('p');
            var myPara9 = document.createElement('p');
            var myPara10 = document.createElement('p');
            var myPara11 = document.createElement('p');
            var myPara12 = document.createElement('p'); 
            var myPara13 = document.createElement('p');
            var myPara14 = document.createElement('p');
            var myPara15 = document.createElement('p');
            var myPara16 = document.createElement('p');
            var myPara17 = document.createElement('p'); 
            var myPara18 = document.createElement('p');
            var myPara19 = document.createElement('p');     
        
            myPara1.textContent = 'Address: ' +  templeCities[i].address;
            myPara2.textContent = 'Telephone: ' + templeCities[i].telephone;
            myPara3.textContent = 'Services: ' + templeCities[i].service[0];
            myPara4.textContent =  templeCities[i].service[1];
            myPara5.textContent =  templeCities[i].service[2];
            myPara6.textContent =  templeCities[i].service[3];
            myPara7.textContent = 'History: ' + templeCities[i].history;
            myPara8.textContent = 'Ordinance schedule: ' + templeCities[i].ordinanceSchedule;
            myPara9.textContent = 'Session schedule: ' + templeCities[i].sessionSchedule;
            myPara10.textContent = 'Temple closure schedule: ' + templeCities[i].templeClosureschedule[0];
            myPara11.textContent = templeCities[i].templeClosureschedule[1];
            myPara12.textContent = templeCities[i].templeClosureschedule[2];
            myPara13.textContent = templeCities[i].templeClosureschedule[3];
            myPara14.textContent = templeCities[i].templeClosureschedule[4];
            myPara15.textContent = templeCities[i].templeClosureschedule[5];
            myPara16.textContent = templeCities[i].templeClosureschedule[6];
            myPara17.textContent = templeCities[i].templeClosureschedule[7];
            myPara18.textContent = templeCities[i].templeClosureschedule[8];
            myPara19.textContent = templeCities[i].templeClosureschedule[9];

            
      
            templeDiv.appendChild(myPara1);
            templeDiv.appendChild(myPara2);
            templeDiv.appendChild(myPara3);
            templeDiv.appendChild(myPara4);
            templeDiv.appendChild(myPara5);
            templeDiv.appendChild(myPara6);
            templeDiv.appendChild(myPara7);
            templeDiv.appendChild(myPara8);
            templeDiv.appendChild(myPara9);
            templeDiv.appendChild(myPara10);
            templeDiv.appendChild(myPara11);
            templeDiv.appendChild(myPara12);
            templeDiv.appendChild(myPara13);
            templeDiv.appendChild(myPara14);
            templeDiv.appendChild(myPara15);
            templeDiv.appendChild(myPara16);
            templeDiv.appendChild(myPara17);
            templeDiv.appendChild(myPara18);
            templeDiv.appendChild(myPara19);
        }   
      }

    }