const visitorHistory = JSON.parse(localStorage.getItem("currentVisitor"));

function initializePlayerData() {
  const visitorHistory = {
    name: "", // Set the initial name to empty string
    coins: 0, // Set the initial coins to 0
    image: "", // Set the initial image to empty string
    visitedAnimals: [], // Initialize visited animals array
    fedAnimals: [], // Initialize fed animals array
  };
  if (!localStorage.getItem("currentVisitor")) {
    localStorage.setItem("currentVisitor", JSON.stringify(visitorHistory));
  }
}

function showVisitedAnimals() {
  let filteredVisitedAnimals = filterAnimals(visitorHistory.AnimalVisited);

  if (visitorHistory.AnimalVisited.length > 0) {
    const visitedDiv = document.getElementById("visited-animals");
    visitedDiv.innerHTML = "";
    const visited = document.createElement("p");
    visited.innerText = filteredVisitedAnimals;
    visitedDiv.appendChild(visited);
  }
}

function filterAnimals(animals) {
  let currNames = [animals[0].name];

  for (let i = 1; i < animals.length; i++) {
    const animalName = animals[i].name;
    if (!currNames.includes(animalName)) {
      currNames.push(animalName);
    }
  }
  return currNames;
}

function showFeededAnimals() {
  if (visitorHistory.AnimalFeeden.length > 0) {
    const fedDiv = document.getElementById("feeded-animals");
    fedDiv.innerHTML = "";
    const filteredFed = filterAnimals(visitorHistory.AnimalFeeden);
    filteredFed.forEach((animal) => {
      const animalElement = document.createElement("p");
      animalElement.textContent = animal; // Assuming each animal object has a 'name' property
      fedDiv.appendChild(animalElement);
    });
  }
}

function showMostvisitedAnimal() {
  let mostVisited = getMostVisitedAnimal(visitorHistory.AnimalVisited);
  if (visitorHistory.AnimalVisited.length > 0) {
    const visitedDiv = document.getElementById("favorite-animal");
    visitedDiv.innerHTML = "";
    const visited = document.createElement("p");
    visited.innerText = mostVisited;
    visitedDiv.appendChild(visited);
  }
}

function getMostVisitedAnimal() {
  if (!visitorHistory || !visitorHistory.AnimalVisited) return null;
  const count = {};
  let mostVisited = "";
  let maxVisits = 0;
  visitorHistory.AnimalVisited.forEach((animal) => {
    const visitedName = animal.name;

    if (animals.some((animal) => animal.name === visitedName)) {
      // Check if the visited animal is in the allAnimals array
      count[visitedName] = (count[visitedName] || 0) + 1;
      if (count[visitedName] > maxVisits) {
        mostVisited = visitedName;
        maxVisits = count[visitedName];
      }
    }
  });
  return mostVisited;
}

/**function renderAnimal() {
  document.getElementById("name").textContent = mostVisited;
  document.getElementById("animal-image").src = mostVisited.img;
}**/

function showAll() {
  showVisitedAnimals();
  showFeededAnimals();
  showMostvisitedAnimal();
}
showAll();
