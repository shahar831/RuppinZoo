const visitorHistory = JSON.parse(localStorage.getItem("currentVisitor"));

function initializePlayerData() {
  const visitorHistory = {
    name: "",
    coins: 0,
    image: "",
    visitedAnimals: [],
    fedAnimals: [],
  };
  if (!localStorage.getItem("currentVisitor")) {
    localStorage.setItem("currentVisitor", JSON.stringify(visitorHistory));
  }
}

function showVisitedAnimals() {
  if (visitorHistory.AnimalVisited.length > 0) {
    const visitedDiv = document.getElementById("visited-animals");
    visitedDiv.innerHTML = "";
    const filteredVisitedAnimals = filterAnimals(visitorHistory.AnimalVisited);
    filteredVisitedAnimals.forEach((animal) => {
      const visited = document.createElement("p");
      visited.textContent = animal;
      visitedDiv.appendChild(visited);
    });
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
      animalElement.textContent = animal;
      fedDiv.appendChild(animalElement);
    });
  }
}

function showMostvisitedAnimal() {
  let mostVisitedImage = showAnimal();

  if (visitorHistory.AnimalVisited.length > 0) {
    const visitedDiv = document.getElementById("favorite-animal");
    visitedDiv.innerHTML = "";

    if (mostVisitedImage) {
      const visitedImage = document.createElement("img");
      visitedImage.src = mostVisitedImage;
      visitedImage.alt = "Favorite Animal";
      visitedDiv.appendChild(visitedImage);
    } else {
      // Display a message if there's no most visited animal
      const noAnimalMessage = document;
    }
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

function showAnimal() {
  let mostVisited = getMostVisitedAnimal(visitorHistory.AnimalVisited);
  let favoriteAnimalImage = null;

  animals.forEach((animal) => {
    if (mostVisited === animal.name) {
      favoriteAnimalImage = animal.img;
    }
  });

  return favoriteAnimalImage;
}

function showAll() {
  showVisitedAnimals();
  showFeededAnimals();
  showMostvisitedAnimal();
}
showAll();
