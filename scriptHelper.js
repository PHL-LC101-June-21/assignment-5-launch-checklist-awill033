// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
    const div = document.getElementById("missionTarget");
    div.innerHtml = `
        <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} /li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="imageUrl"/>
        `;
}

function validateInput(testInput) {
    if (testInput === " ") {
        return "Empty";
    }   else if (isNaN(testInput)) {
        return "Not a number";
    }   else {
        return "Is a number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty' 
    || validateInput(fuelLevelValue) === 'Empty'|| validateInput(cargoLevelValue) === 'Empty'
    ) {
        window.alert("All fields are required")
    }

    if (fuelLevelValue && cargoLevelValue !== Number) {
        window.alert("Must enter a valid input")
    }

    list.style.visibility = 'visible';
    
    const pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerText = `Pilot ${pilotValue} is ready for launch`;
    const copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerText = `CoPilot ${copilotValue} is ready for launch`;

    if (fuelLevelValue < 10000) {
        launchStatus.innerText = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        fuelStatus.innerText = "Fuel level too low for launch";
    }

    if (cargoLevelValue > 10000) {
        launchStatus.innerText = "Shuttle not ready for launch";
        launchStatus.style.color = red;
        cargoStatus.innerText = "Cargo level too high for launch";
    }  else {
         launchStatus.innerText = "Shuttle is Ready for Launch"; 
         launchStatus.style.color = "green";  
    }

}

async function myFetch(
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    planet = arr[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
