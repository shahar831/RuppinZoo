/**const visitorHistory = JSON.parse(localStorage.getItem("currentVisitor"));

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
  if (visitorHistory.AnimalVisited.length > 0) {
    const visitedDiv = document.getElementById("visited-animals");
    visitedDiv.innerHTML = "";
    const filteredVisitedAnimals = filterAnimals(visitorHistory.AnimalVisited);
    filteredVisitedAnimals.forEach((animal) => {
      const visited = document.createElement("p");
      visited.textContent = animal + ", ";
      visitedDiv.appendChild(visited);
      visitedDiv.appendChild(document.createElement("br"));
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
      animalElement.textContent = animal; // Assuming each animal object has a 'name' property
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

/**function renderAnimal() {
  document.getElementById("name").textContent = mostVisited;
  document.getElementById("animal-image").src = mostVisited.img;
}**/

/**function showAll() {
  showVisitedAnimals();
  showFeededAnimals();
  showMostvisitedAnimal();
}
showAll();**/

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
      animalElement.textContent = animal; // Assuming each animal object has a 'name' property
      fedDiv.appendChild(animalElement);
    });
  }
}

/*function createBarChart(containerId, animalData) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const animalCounts = countAnimalOccurrences(animalData, "name");

  for (const [animal, count] of animalCounts) {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = ${count * 10}px;
    // Adjust the height as needed

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = ${animal}: ${count} ${count > 1 ? "" : ""};

    bar.appendChild(label);
    container.appendChild(bar);
  }
}

function countAnimalOccurrences(animalData, propertyName) {
  const counts = new Map();

  animalData.forEach((animal) => {
    const propertyValue = animal[propertyName];
    counts.set(propertyValue, (counts.get(propertyValue) || 0) + 1);
  });

  return counts;
}

function showVisitedAnimals() {
  const visitedDiv = document.getElementById("visited-animals");
  const filteredVisited = visitorHistory.AnimalVisited;
  createBarChart("visited-animals", filteredVisited);
}

function showFeededAnimals() {
  const fedDiv = document.getElementById("feeded-animals");
  const filteredFed = visitorHistory.AnimalFeeden;
  createBarChart("feeded-animals", filteredFed);
}
}*/

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
