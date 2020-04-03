// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener('load', function() {
   this.alert("Page loaded");

   // get the planet JSON files
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[2].name}</li>
               <li>Diameter: ${json[2].diameter}</li>
               <li>Star: ${json[2].star}</li>
               <li>Distance from Earth: ${json[2].distance}</li>
               <li>Number of Moons: ${json[2].moons}</li>
            </ol>
         <img src="${json[2].image}" alt= "picture of the planet">  
         `
      });
   });

   const form = document.querySelector("form");

   //submit form event listener function
   form.addEventListener("submit", function(event) { 
      
      //alert("pilot is " + pilotName.value);
       // alert(`${pilotName.value} ready.`)
      
       // input items to ref the DOM here
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");

      //div items
      
      let faultyItems = document.getElementById("faultyItems");

      // statuses
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let cargoStatus = document.getElementById("cargoStatus");


      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      } else if (!isNaN(pilotName.value) || !isNaN(coPilotName.value))  {
         alert("Names cannot be numbers");
         event.preventDefault();
      } else if (isNaN(fuelLevel.value)|| isNaN(cargoMass.value))  {
         alert("Fuel level and cargo mass must be numbers");
         event.preventDefault(); 
      } else {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} ready.`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} ready.`;
      }

      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.style.color = 'red';
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         fuelStatus.innerHTML = `Fuel status of ${fuelLevel.value} liters too low for launch.`
      } else if (cargoMass.value > 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.style.color = 'red';
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         cargoStatus.innerHTML = `Cargo mass of ${cargoMass.value} kg too high for launch.`

      } else {
         launchStatus.style.color = 'green';
         launchStatus.innerHTML = 'Shuttle is ready for launch';

      }



      
   });


   
});



