var planets = [{
  name: 'mercury',
  url: 'https://www.nasa.gov/sites/default/files/mercury_1.jpg'
}, {
  name: 'venus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
}, {
  name: 'earth',
  url: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'
}, {
  name: 'mars',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg'
}, {
  name: 'jupiter',
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
}, {
  name: 'saturn',
  url: 'http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg'
}, {
  name: 'uranus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
}, {
  name: 'neptune',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg'
}];

var planetHolderDiv = document.getElementById("planetHolder");
var planetsButton = document.getElementById("showButton");
var inputField = document.getElementById("searchText");
var clearButton = document.getElementById("clearButton");


function domString(planetz) {
  var planetString = '';
  for (var i = 0; i < planetz.length; i ++) {
    var currentPlanet = '';
    currentPlanet += `<div class="planetContainer" id="planetContainer-${i}">`;
    currentPlanet += `<div class="planetName hidden">${planetz[i].name}</div>`;
    currentPlanet += `<img class="planetImage" src="${planetz[i].url}">`;
    currentPlanet += `</div>`
    planetString += currentPlanet;
  }
  writeToDom(planetString); 
}

function writeToDom(strang) {
  planetHolderDiv.innerHTML = strang;
}

function showMe(e) {
   e.target.previousSibling.classList.remove('hidden');
}

planetsButton.addEventListener("mouseenter", function() {
  domString(planets);
});

document.body.addEventListener('click', function(event) {
  // console.log("click event", event.target.);
  if (event.target.className === 'planetImage') {
    showMe(event);
  } 
})

inputField.addEventListener('keypress', function(event) {
  // console.log("event", event.keyCode);
  if (event.key === 'Enter') {
    var txt = inputField.value;
    //1. filter planets array
    var results = planets.filter(function(thing){
      // console.log('filter thing', thing);
      return thing.name.indexOf(txt)>-1;
    })
    domString(results);
    // domString(results);
    // console.log(results);
    // console.log('you hit enter bitch', txt);
  }
})

clearButton.addEventListener('click', function(event) {
  var clearThis = document.getElementById('searchText').value = ''; 
})

// domString();
































