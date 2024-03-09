let animalsForView = [...animals];
const currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));

const currentFilters = {
  color: null,
  weight: null,
  height: null,
  habitat: null,
  isPredator: null,
};

document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners to the weight and height input filters
  document
    .getElementById("weight-filter")
    .addEventListener("input", function () {
      setFilter("weight", this.value ? parseFloat(this.value) : null);
    });

  document
    .getElementById("height-filter")
    .addEventListener("input", function () {
      setFilter("height", this.value ? parseFloat(this.value) : null);
    });

  document
    .getElementById("clear-filters-btn")
    .addEventListener("click", clearFiltersAndRenderAll);

  // Setup dropdown filters
  setupDropdownFilters();

  // Initial rendering of animals
  renderAvailableAnimals();
});

function setupDropdownFilters() {
  document.querySelectorAll(".btn-group").forEach((group) => {
    const button = group.querySelector("button");
    if (!button) return;

    let filterKey;
    if (button.textContent.includes("Color")) {
      filterKey = "color";
    } else if (button.textContent.includes("Habitat")) {
      filterKey = "habitat";
    } else if (button.textContent.includes("Is Predator?")) {
      filterKey = "isPredator";
    }

    if (filterKey) {
      group.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", function () {
          let filterValue =
            filterKey === "isPredator"
              ? this.textContent.trim().toLowerCase() === "yes"
              : this.textContent.trim().toLowerCase();
          setFilter(filterKey, filterValue);
        });
      });
    }
  });
}

function setFilter(filterKey, filterValue) {
  currentFilters[filterKey] = filterValue === "any" ? null : filterValue;
  applyFilters();
}

function clearFiltersAndRenderAll() {
  // Reset all filters
  Object.keys(currentFilters).forEach((key) => {
    currentFilters[key] = null;
  });

  // You might want to also clear any visible representations of the filters in the UI
  document.getElementById("weight-filter").value = "";
  document.getElementById("height-filter").value = "";
  // Reset any other UI elements related to filters, if necessary

  // Re-render the animals
  applyFilters();
}

function applyFilters() {
  animalsForView = animals.filter((animal) => {
    return Object.entries(currentFilters).every(([key, value]) => {
      if (value === null) return true; // If no filter is set, don't filter out this animal

      if (key === "weight" && animal[key]) {
        return parseFloat(animal[key]) >= parseFloat(value); // Show animals with weight >= user selected weight
      } else if (key === "height" && animal[key]) {
        return parseFloat(animal[key]) >= parseFloat(value); // Show animals with height >= user selected height
      } else {
        // For other filters, just check for equality (or any other logic you've implemented)
        return (
          animal[key].toString().toLowerCase() ===
          value.toString().toLowerCase()
        );
      }
    });
  });

  renderAvailableAnimals();
}

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
  let currentVisitor = JSON.parse(localStorage.getItem("currentVisitor"));
  if (!currentVisitor || !Array.isArray(currentVisitor.AnimalVisited)) {
    currentVisitor = { AnimalVisited: [] };
  }
  currentVisitor.AnimalVisited.push(animalName);
  // Update the currentVisitor object in localStorage
  localStorage.setItem("currentVisitor", JSON.stringify(currentVisitor));
  localStorage.setItem("selectedAnimal", JSON.stringify(animalName));
  window.location.href = "./animal.html";
}

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderAvailableAnimals);
