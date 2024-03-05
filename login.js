const visitor = JSON.parse(localStorage.getItem("visitors"));
let visitorsForView = [...visitors];

const dialog = document.querySelector("#visitors-dialog");
const closeModal = document.querySelector("#close-button");
const logOutBtn = document.querySelector("#logout-button");

function loginAsVisitor(visitorName) {
  updateVisitor(visitorName);
  localStorage.setItem("currentVisitor", JSON.stringify(visitorName));
}

function updateVisitor(visitor) {
  if (!visitor.AnimalVisited) {
    visitor.AnimalVisited = [];
  }
  if (!visitor.AnimalFeeden) {
    visitor.AnimalFeeden = [];
  }
}

const getVisitorHTMLCard = (visitor) => {
  const template = `
         <div class="card" style="width: 18rem;">
          <img class="visitors-card" src="${visitor.img}" alt="${visitor.name}"/>
          <div class="card-body">
            <p class="card-text">${visitor.name}</p>
            <p class="card-text">${visitor.coins}</p>
          </div>
        </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "visitors-card";
  wrapper.innerHTML = template;
  /*wrapper.addEventListener("click", () => handleVisitorsClick(visitor));*/

  const btnZoo = document.createElement("button");
  btnZoo.id = "btnZoo";
  btnZoo.className = "btn btn-primary";
  btnZoo.innerText = "Login";
  wrapper.appendChild(btnZoo);

  wrapper.addEventListener("click", (e) => {
    const clickedItem = e.target;
    if (clickedItem.nodeName === "BUTTON") {
      loginAsVisitor(visitor);
      window.location.href = "./zoo.html";
    }
  });

  return wrapper;
};

const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search visitors";
  queryInput.className = "form-control my-4";

  queryInput.addEventListener("input", (e) => {
    visitorsForView = visitor.filter((visitor) =>
      visitor.name.includes(e.target.value)
    );
    renderVisitors();
  });
  return queryInput;
};

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
      <h2>No visitors Found</h2>
      <p>We're sorry, but no visitors match your search or filter criteria.</p>
      <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
      `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  return templateWrapper;
};
const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorsForView = [...visitor];
  renderVisitors();
};

const renderVisitors = () => {
  const visitrsCards = visitorsForView.map(getVisitorHTMLCard);
  const visitorsPlaceholder = document.getElementById("placeholder");
  visitorsPlaceholder.innerHTML = "";

  if (!visitrsCards.length) {
    visitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  visitorsPlaceholder.append(...visitrsCards);
};

const goToZoo = () => {
  let goToZooBtn = document.getElementById("btn");
  goToZooBtn.addEventListener("click", loginAsVisitor);
};

closeModal.addEventListener("click", () => {
  dialog.close();
});

logOutBtn.addEventListener("click", () => {
  logout();
});

/**function cheackIfSomeoneLogin() {
  if (localStorage.getItem("currentVisitor")) {
    dialog.show();
  }
  return;
}**/

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors /**cheackIfSomeoneLogin**/);

/**const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = "Close modal";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
};

const handleVisitorsClick = (visitor) => {
  dialog.innerHTML = "";
  dialog.append(getCloseModalHTMLButton(), getVisitorHTMLCard(visitor));
  dialog.showModal();
};**/
