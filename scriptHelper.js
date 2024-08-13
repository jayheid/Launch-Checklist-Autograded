require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }
  if (isNaN(Number(testInput))) {
    return "Not a Number";
  }
  if (!isNaN(Number(testInput))) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.querySelector("h2");

  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

  list.style.visibility = "visible";
  fuelStatus.innerHTML = "Fuel level high enough for launch";
  cargoStatus.innerHTML = "Cargo mass low enough for launch";
  launchStatus.innerHTML = "Shuttle is Ready for Launch";
  launchStatus.style.color = "green";

  if (fuelLevel < 10000 || cargoLevel > 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
    if (fuelLevel < 10000) {
      fuelStatus.innerHTML = "Fuel level too low for launch";
    }
    if (cargoLevel > 10000) {
      cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );

  return planetsReturned.json();
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random() * planets.length);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
