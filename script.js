// Write your JavaScript code here!
const { myFetch, pickPlanet, addDestinationInfo }= require("./scriptHelpler");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       const planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })
   
});

let form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    pilotInput = document.querySelector("input[name=pilotName]");
    pilotValue = PilotInput.value;
    copilotInput = document.querySelector("input[name=copilotName]");
    copilotValue = copilotInput.value;
    fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    fuelLevelValue = fuelLevelInput.value;
    cargoLevelInput = document.querySelector("input[name=cargoLevel]");
    cargoLevelValue = cargoLevelInput.value; 
    
    let list = document.getElementById('faultyItems');
    formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue);
});