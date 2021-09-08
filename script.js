// Write your JavaScript code here!

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
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
   


    let form = document.querySelector("form");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilotValue = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilotValue = copilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevelValue = fuelLevelInput.value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let cargoMassValue = cargoMassInput.value; 
        
        let list = document.getElementById('faultyItems');
        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue);
    });

});