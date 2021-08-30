// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
        <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}>
        `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }   else if (isNaN(testInput)) {
        return "Not a Number";
    }   else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue) {
    if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty' 
    || validateInput(fuelLevelValue) === 'Empty'|| validateInput(cargoMassValue) === 'Empty'
    ) {
        window.alert("All fields are required")
    }

    if (validateInput(fuelLevelValue) === "Not a number" || validateInput(cargoMassValue) === "Not a number") {
        window.alert("Must enter a valid input")
    }

    list.style.visibility = 'hidden'; //'visible';
    
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilotValue} is ready for launch`;
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (fuelLevelValue < 10000) {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level too low for launch";
    }

    if (cargoMassValue > 10000) {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = 'rgb(65, 159, 106)';
        cargoStatus.innerHTML = "Cargo level too high for launch";
    }  
    
    if (fuelLevelValue > 10000 && cargoMassValue < 10000) {
         launchStatus.innerHTML = "Shuttle is Ready for Launch"; 
         launchStatus.style.color = "green";  
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    let planet = planets[index];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
