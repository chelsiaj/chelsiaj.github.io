var main = document.querySelector('main');



var requestURLtwo = 'https://raw.githubusercontent.com/chelsiaj/chelsiaj.github.io/master/assignments/lesson-12/templeinformation.json';
var requesttwo = new XMLHttpRequest();
requesttwo.open('GET', requestURLtwo);
requesttwo.responseType = 'json';
requesttwo.send();

requesttwo.onload = function() {
    var tempsummary2 = requesttwo.response; 
    showData(tempsummary2);
  }

  function showData(jsonObjtwo) {
    var templeCities2 = jsonObjtwo['temples'];
       
    
    for (var i = 0; i < templeCities2.length; i++) {
        
        var templeDiv2 = document.getElementById(templeCities2[i].name);
        if(templeDiv2 != null){

            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
          
    
        
            myPara1.textContent = templeCities2[i].summary[0];
            myPara2.textContent = templeCities2[i].summary[1];
            myPara3.textContent = templeCities2[i].summary[2];
            
         
      
            templeDiv2.appendChild(myPara1);

            templeDiv2.appendChild(myPara2);

            templeDiv2.appendChild(myPara3);
        
        }   
      }

    }