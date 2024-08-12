// Write your JavaScript code here!

window.addEventListener("load", function () {
  /*
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
  */

  let form = document.querySelector("form");
  let pilotName = document.querySelector("input[name=pilotName");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoMass]");
  let list = document.getElementById("faultyItems");

  // Validation
  form.addEventListener("submit", function (event) {
    console.log("Its working!");
    let emptyConditionArray = [];
    let invalidTypeConditionArray = [];
    emptyConditionArray.push(
      validateInput(pilotName.value) === "Empty",
      validateInput(copilotName.value) === "Empty",
      validateInput(fuelLevel.value) === "Empty",
      validateInput(cargoMass.value) === "Empty"
    );
    invalidTypeConditionArray.push(
      validateInput(pilotName.value) === "Is a Number",
      validateInput(copilotName.value) === "Is a Number",
      validateInput(fuelLevel.value) === "Not a Number",
      validateInput(cargoMass.value) === "Not a Number"
    );

    if (emptyConditionArray.includes(true)) {
      alert("All fields are required!");
      event.preventDefault();
    } else if (invalidTypeConditionArray.includes(true)) {
      alert("Enter a valid value for each field!");
      event.preventDefault();
    } else {
      list.style.visibility = "visible";
      event.preventDefault();
    }
  });
});
