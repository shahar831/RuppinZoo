let animalsForView = [...animals];

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
      <h5 class="card-title">The ${animal.name}</h5>
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

  /**wrapper.addEventListener("click", () => handleAnimalClick(animal));**/
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
  renderProducts();
};

function visitAnimal(animalName) {
  localStorage.setItem("selectedAnimal", JSON.stringify(animalName));
  window.location.href = "./animal.html";

  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
}

function setFilter(filterKey, filterValue) {
  /**
   * ממשו את הלוגיקה של השמת פילטר
   * הפילטרים הקיימים הם
   * isPredator: true | false
   * habitat: "land" | "sea"
   * weight: value > user selected weight
   * height: value > user selected height
   * color: dropdown of all available colors
   */
  // ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
  // רנדרו רק את החיות שעומדות בתנאים של הפילטרים
}

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderAvailableAnimals);

/**const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + feed-animal");
const closeButton = document.querySelector("dialog feed-animal");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});**/
