/**const visitorHistory = JSON.parse(localStorage.getItem("currentVisitor"));

/*function initializePlayerData() {
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
}*/ ////

/**function showVisitedAnimals() {
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
    visitorHistory.AnimalFeeden.forEach((animal) => {
      const animalElement = document.createElement("p");
      animalElement.textContent = animal.name;
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

  const visitMap = {};

  visitorHistory.AnimalVisited.forEach((animal) => {
    if (visitMap[animal]) {
      visitMap[animal]++;
    } else {
      visitMap[animal] = 1;
    }
  });

  let mostVisitedAnimal;
  let highestAnimal = 0;

  for (const animal in visitMap) {
    if (visitMap[animal] > highestAnimal) {
      highestAnimal = visitMap[animal];
      mostVisitedAnimal = animal;
    }
  }
  return mostVisitedAnimal;
}

function showAll() {
  showVisitedAnimals();
  showFeededAnimals();
  showMostvisitedAnimal();
}
showAll();**/

/*function getMostVisitedAnimal() {
  if (!visitorHistory || !visitorHistory.AnimalVisited) return null;

  const visitMap = {};

  visitorHistory.AnimalVisited.forEach((animal) => {
    if (visitMap[animal]) {
      visitMap[animal]++;
    } else {
      visitMap[animal] = 1;
    }
  });

  let mostVisitedAnimal;
  let highestAnimal = 0;

  for (const animal in visitMap) {
    if (visitMap[animal] > highestAnimal) {
      highestAnimal = visitMap[animal];
      mostVisitedAnimal = animal;
    }
  }
  return mostVisitedAnimal;  
}
*/

/*function MostvisitedAnimal() {
  const visitMap = {}; //שומר את מספר הופעות של כל איבר
  // עובר במערך כדי לספור את מספר הופעות
  visitorHistory.AnimalVisited.forEach((element) => {
    if (visitMap[element]) {
      visitMap[element]++;
    } else {
      visitMap[element] = 1;
    }
  });

  // מוצא את האיבר עם הכי הרבה הופעות
  let mostVisitedAnimal;
  let highestAnimal = 0;

  for (const [element, frequency] of Object.entries(visitMap)) {
    if (frequency > highestAnimal) {
      highestAnimal = frequency;
      mostVisitedAnimal = element;
    }
  }
  return mostVisitedAnimal;
}*/

//ממשו את הלוגיקה שמציגה את החיות שהאורח הנוכחי ביקר בהן
/* const animalCards = visitAnimals.map(getAnimalHtmlCard); //מערך חדש של חיות
  const animalPlaceholder = document.getElementById("animal-cards"); //האלמנט שאליו אנחנו רוצים להכניס את הכרטיסיות
  animalPlaceholder.innerHTML = "";

  if (!animalCards.length) {
    //אם אין כרטיסיות להציג
    animalPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  } else {
    //אם יש
    animalPlaceholder.append(...animalCards);
  }


  const getEmptyCardsHTMLTemplate = () => {
    const templateWrapper = document.createElement("div");
    templateWrapper.className = "empty-result";
  
    const template = `
      <h2>No Animals Found</h2>
      <p>We're sorry, but no animal match your search or filter criteria.</p>
      <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
      `;
    return templateWrapper;
  };

const getAnimalHtmlCard = (animal) => {
  const template = `
  <div class="animal-cards" style="width: 18rem;">
    <img class="card-img-top" src="${animal.img}" alt="${animal.name}" />
    <div class="card-body">
      <br />
      <h5 class="card-title">The ${animal.name}</h5>
      </div>
    </div>
  </div>
`;

const wrapper = document.createElement("div");
  wrapper.className = "visited-animals feeded-animals favorite-animal";
  wrapper.innerHTML = template;
}
*/

/* const animalCards = feedenAnimal.map(getAnimalHtmlCard); //מערך חדש של חיות
  const animalPlaceholder = document.getElementById("animal-cards"); //האלמנט שאליו אנחנו רוצים להכניס את הכרטיסיות
  animalPlaceholder.innerHTML = "";

  if (!animalCards.length) {
    //אם אין כרטיסיות להציג
    animalPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  } else {
    //אם יש
    animalPlaceholder.append(...animalCards);
  }
}
function showFavoriteAnimal() {
 //ממשו את הלוגיקה שמציגה את החיה שהאורח ביקר הכי הרבה פעמים אצלה
 const theMostVisited = findMostFrequentElement(visitAnimals);
 localStorage.setItem("most", JSON.stringify(theMostVisited))
*/
