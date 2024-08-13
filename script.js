window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      planetSelection = pickPlanet(listedPlanets);
      addDestinationInfo(
        this.document,
        planetSelection.name,
        planetSelection.diameter,
        planetSelection.star,
        planetSelection.distance,
        planetSelection.moons,
        planetSelection.image
      );
    });

  let form = document.querySelector("form");
  let pilotName = document.querySelector("input[name=pilotName");
  let copilotName = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoMass = document.querySelector("input[name=cargoMass]");

  let list = document.getElementById("faultyItems");

  // Validation
  form.addEventListener("submit", function (event) {
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
      event.preventDefault();
      formSubmission(
        document,
        list,
        pilotName.value,
        copilotName.value,
        fuelLevel.value,
        cargoMass.value
      );
    }
  });
});
