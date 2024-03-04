const currentAnimal = JSON.parse(localStorage.getItem("selectedAnimal"));
const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
let relatedAnimalsForView = [...animals];

function renderAnimal() {
  document.getElementById("name").textContent = currentAnimal.name;
  document.getElementById("weight").textContent =
    "weight: " + currentAnimal.weight;
  document.getElementById("height").textContent =
    "Height: " + currentAnimal.height;
  document.getElementById("color").textContent =
    "Color: " + currentAnimal.color;
  document.getElementById("habitat").textContent =
    "Habitat: " + currentAnimal.habitat;
  document.getElementById("isPredator").textContent =
    "Is Predator? " + currentAnimal.isPredator;
  document.getElementById("animal-image").src = currentAnimal.img;
}

const feedMeBtn = document.getElementById("feed-animal");
const closeFeedMeBtn = document.getElementById("closeFeed");
closeFeedMeBtn.className = "btn btn-primary";
const modal = document.getElementById("feedDialog");

feedMeBtn.addEventListener("click", () => {
  modal.showModal();
});

closeFeedMeBtn.addEventListener("click", () => {
  modal.close();
});

function renderRelatedAnimals() {
  const currentAnimalHabitat = currentAnimal.habitat; //שמירה שדה ההביטט של החיה הנוכחית

  const filteredRelatedAnimals = relatedAnimalsForView.filter(
    (animal) =>
      animal.habitat === currentAnimalHabitat &&
      animal.name !== currentAnimal.name ///פלטור החיות כדי לקחת רק את המתאימות בשדה ההביט
  );

  const relatedAnimalCards = filteredRelatedAnimals.map(getReAnimalHtmlCard); ///יצירת מערך חיות חדש

  const relatedAnimalPlaceholder = document.getElementById("related-animals"); //האלמנט שאליו אנחנו רוצים להכניס את הכרטיסיות
  relatedAnimalPlaceholder.innerHTML = "";

  if (relatedAnimalCards.length === 1) {
    return; //במידה ויש רק חיה אחת לא נרצה להציג את הכרטיסיה שלה מתחת לחיה עצמה שמופיעה בעמוד
  }

  relatedAnimalPlaceholder.append(...relatedAnimalCards);
}

const getReAnimalHtmlCard = (animal) => {
  const template = `
    <div class="related-animals" style="width: 18rem;">
      <img class="card-img-top" src="${animal.img}" alt="${animal.name}" />
      <div class="card-body">
        <br />
        <h5 class="card-title">The ${animal.name}</h5>
        <p class="card-body">
          <br />Weight: ${animal.weight}<br />
          Height: ${animal.height}<br />
          Color: ${animal.color}<br />
          Habitat: ${animal.habitat}<br />
        </p>
        </div>
      </div>
    </div>
  `;

  const wrapper = document.createElement("div");
  wrapper.className = "related-animalsClass";
  wrapper.innerHTML = template;
  const btnAnimal = document.createElement("button");
  btnAnimal.id = "Visit";
  btnAnimal.className = "btn btn-primary";
  btnAnimal.innerText = "Visit";
  wrapper.appendChild(btnAnimal);
  btnAnimal.addEventListener("click", () => visitAnimal(animal));
  return wrapper;
};

const btnFeedA = document.getElementById("feed-animal");
btnFeedA.className = "btn btn-primary";
btnFeedA.addEventListener("click", feedAnimal);

function feedAnimal() {
  let numberOfCoins = currentVisitor.coins;
  /**let numberOfCoins = JSON.parse(localStorage.getItem("coins"));**/

  if (numberOfCoins <= 0) {
    if (currentAnimal.isPredator) {
      /**למחוק את האורח ממאגר האורחים */
      visitorGotEaten();
    } else {
      animalEscaped();
      /**למחוק את החיה ממאגר גן החיות */
    }
  } else {
    numberOfCoins -= 2;
    currentVisitor.coins = numberOfCoins;
    currentVisitor.AnimalFeeden.push(currentAnimal);
    localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));

    /**localStorage.setItem("coins", JSON.stringify(numberOfCoins));**/
  }

  const message = document.getElementById("feedDialog");
  message.innerText = "Thank you for the food!";
  message.appendChild(closeFeedMeBtn);
}

function visitAnimal(animalName) {
  currentVisitor.AnimalVisited.push(animalName);
  localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));
  localStorage.setItem("selectedAnimal", JSON.stringify(animalName));
  window.location.href = "./animal.html";
}

// ממשו את הלוגיקה של האכלת חיה
// במידה ואין מספיק מטבעות, טפלו בהתאם להנחיות במטלה

function visitorGotEaten() {
  const message = document.getElementById("feedDialog");
  localStorage.removeItem("currentVisitor");
  message.innerText = "You ran out of coins! The animal must have eaten you";
  message.appendChild(closeFeedMeBtn);
  window.location.href = "./login.html";
  // ממשו את הלוגיקה של חיה שטורפת אורח
}

function animalEscaped() {
  const message = document.getElementById("feedDialog");
  localStorage.removeItem("selectedAnimal");
  message.innerText = "We are sorry! the animal ran away to look for food";
  message.appendChild(closeFeedMeBtn);
  window.location.href = "./zoo.html";
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
}

window.addEventListener("load", () => {
  renderAnimal();
  renderRelatedAnimals();
});

window.addEventListener("load", addNavbar);
