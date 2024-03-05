let animalsForView = [...animals];
const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));

/**let currentFilters = {
  isPredator: null,
  habitat: null,
  weight: null,
  height: null,
  color: null,
};
function applyFilters() {
  animalsForView = animals.filter((animal) => {
    return (
      (!currentFilters.isPredator ||
        animal.isPredator === currentFilters.isPredator) &&
      (!currentFilters.habitat || animal.habitat === currentFilters.habitat) &&
      (!currentFilters.weight || animal.weight >= currentFilters.weight) &&
      (!currentFilters.height || animal.height >= currentFilters.height) &&
      (!currentFilters.color || animal.color === currentFilters.color)
    );
  });
  renderAvailableAnimals();
}**/

function renderAvailableAnimals() {
  const animalCards = animalsForView.map(getAnimalHtmlCard); //מערך חדש של חיות

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

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
    <h2>No Animals Found</h2>
    <p>We're sorry, but no animal match your search or filter criteria.</p>
    <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
    `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  return templateWrapper;
};

const getAnimalHtmlCard = (animal) => {
  const template = `
  <div class="animal-cards" style="width: 18rem;">
    <img class="card-img-top" src="${animal.img}" alt="${animal.name}" />
    <div class="card-body">
      <br />
      <h5 class="card-title">${animal.name}</h5>
      <p class="card-text">
        <br />Weight:${animal.weight}<br />
        Height: ${animal.height}<br />
        Color: ${animal.color}<br />
        Habitat: ${animal.habitat}<br />
      </p>
      </div>
    </div>
  </div>
`;

  const wrapper = document.createElement("div");
  wrapper.className = "animal-class";
  wrapper.innerHTML = template;
  const btnAnimal = document.createElement("button");
  btnAnimal.id = "Visit";
  btnAnimal.className = "btn btn-primary";
  btnAnimal.innerText = "Visit";
  wrapper.appendChild(btnAnimal);
  btnAnimal.addEventListener("click", () => visitAnimal(animal));
  return wrapper;
};

const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search animal by name";
  queryInput.className = "form-control my-4";
  queryInput.oninput = (e) => {
    animalsForView = animals.filter((animal) =>
      animal.name.includes(e.target.value)
    );
    localStorage.setItem("queryInput", queryInput);
    console.log(localStorage);
    renderAvailableAnimals();
  };
  return queryInput;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  animalsForView = [...animals];
  renderAvailableAnimals();
};

function visitAnimal(animalName) {
  currentVisitor.AnimalVisited.push(animalName);
  localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));
  localStorage.setItem("selectedAnimal", JSON.stringify(animalName));
  window.location.href = "./animal.html";
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
}

/**function setFilter(filterKey, filterValue) {
  currentFilters[filterKey] = filterValue === "any" ? null : filterValue;
  applyFilters();
}

document.addEventListener("DOMContentLoaded", () => {
  // Event listener for the weight filter
  document
    .getElementById("weight-filter")
    .addEventListener("input", function () {
      setFilter("weight", this.value ? parseFloat(this.value) : null);
    });

  // Event listener for the height filter
  document
    .getElementById("height-filter")
    .addEventListener("input", function () {
      setFilter("height", this.value ? parseFloat(this.value) : null);
    });

  // Event listener for the color filter
  document
    .getElementById("color-filter")
    .addEventListener("change", function () {
      setFilter("color", this.value || null);
    });

  // Event listener for the habitat filter
  document
    .getElementById("habitat-filter")
    .addEventListener("change", function () {
      setFilter("habitat", this.value || null);
    });

  // Event listener for the isPredator filter
  document
    .getElementById("predator-filter")
    .addEventListener("change", function () {
      setFilter(
        "isPredator",
        this.value === "Yes" ? "Yes" : this.value === "No" ? "No" : null
      );
    });

  // Initial rendering of animals
  renderAvailableAnimals();
});/** */

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderAvailableAnimals);
