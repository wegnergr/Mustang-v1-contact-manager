  var contactURLArray = [];
  var contactArray = [];
  var loadingContact = 0;

  function initApplication() {
      console.log('Contacts - Starting!');
  }

  function loadJSON() {
    var indexRequest1 = new XMLHttpRequest();
    indexRequest1.open('GET', 'https://jbaptiste2018.azurewebsites.net/n2ck1g5efu.json');
    indexRequest1.onload = function() {
        console.log(indexRequest1.responseText);
        document.getElementById("id-01").innerHTML = indexRequest1.responseText;
    }
    indexRequest1.send();

    var indexRequest2 = new XMLHttpRequest();
    indexRequest2.open('GET', 'https://cpsc-24700-su18-lt1.azurewebsites.net/r9us3zzb88.json');
    indexRequest2.onload = function() {
        console.log(indexRequest2.responseText);
        document.getElementById("id-02").innerHTML = indexRequest2.responseText;
    }
    indexRequest2.send();

    var indexRequest3 = new XMLHttpRequest();
    indexRequest3.open('GET', 'https://jbaptiste2018.azurewebsites.net/z84gu1qbyh.json');
    indexRequest3.onload = function() {
        console.log(indexRequest3.responseText);
        document.getElementById("id-03").innerHTML = indexRequest3.responseText;
    }
    indexRequest3.send();

    var indexRequest4 = new XMLHttpRequest();
    indexRequest4.open('GET', 'https://mustang-index.azurewebsites.net/y2882154268.json');
    indexRequest4.onload = function() {
        console.log(indexRequest4.responseText);
        document.getElementById("id-04").innerHTML = indexRequest4.responseText;
    }
    indexRequest4.send();

    var indexRequest5 = new XMLHttpRequest();
    indexRequest5.open('GET', 'https://mustang-index.azurewebsites.net/x6395172069.json');
    indexRequest5.onload = function() {
        console.log(indexRequest5.responseText);
        document.getElementById("id-05").innerHTML = indexRequest5.responseText;
    }
    indexRequest5.send();
 }

 function loadIndex() {
  // Load the Mustang index file.
  var indexRequest = new XMLHttpRequest();
  indexRequest.open('GET', 'https://mustang-index.azurewebsites.net/index.json');
  indexRequest.onload = function() {
      console.log("Index JSON:" + indexRequest.responseText);
      document.getElementById("indexID").innerHTML = indexRequest.responseText;
      contactIndex = JSON.parse(indexRequest.responseText);
      // Bugbug: Need to clear contactURLArray.
      for (i=0; i<contactIndex.length; i++) {
          contactURLArray.push(contactIndex[i].ContactURL);
      }
      console.log("ContactURLArray: " + JSON.stringify(contactURLArray));
  }
  indexRequest.send();
}

function logContacts() {
    console.log(contactArray);
}

function loadContacts() {
  //clearing the current contactArray.
  contactArray.length = 0;
  loadingContact = 0;

  // w3c documentation says that you need a seperate callback function, must be a unique instance of a function. Should have
  // had an array of callback functions insteadof a recursive call to load. I wish i was better at this, becasue the 
  // example in the lab was REALLY good. It was explained well to. 

  if (contactURLArray.length > loadingContact) {
    loadNextContact(contactURLArray[loadingContact]);
  }
}

function loadNextContact(URL) {
  console.log("URL: " + URL);
  contactRequest = new XMLHttpRequest();
  contactRequest.open('GET', URL);
  contactRequest.onload = function() {
      console.log(contactRequest.responseText);
      var contact;
      contact = JSON.parse(contactRequest.responseText);
      console.log("Contact: " + contact.firstName);
      contactArray.push(contact);
      document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);

      loadingContact++;
      if (contactURLArray.length > loadingContact) {
          loadNextContact(contactURLArray[loadingContact]);
      }
  }

  contactRequest.send();
}
















