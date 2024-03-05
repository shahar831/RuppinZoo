const visitor = JSON.parse(localStorage.getItem("visitors"));
let visitorsForView = [...visitors];

/**const dialog = document.querySelector("#visitors-dialog");
const closeModal = document.querySelector("#close-button");
const logOutBtn = document.querySelector("#logout-button");**/

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

  // Create and append the Login button
  const btnZoo = document.createElement("button");
  btnZoo.id = "btnZoo";
  btnZoo.className = "btn btn-primary";
  btnZoo.innerText = "Login";
  wrapper.appendChild(btnZoo);

  // Create and append the Logout button
  const btnLogOut = document.createElement("button");
  btnLogOut.id = "btnLogOut";
  btnLogOut.className = "btn btn-primary";
  btnLogOut.innerText = "Logout";
  wrapper.appendChild(btnLogOut);

  btnZoo.addEventListener("click", () => {
    loginAsVisitor(visitor);
    window.location.href = "./zoo.html";
  });

  btnLogOut.addEventListener("click", () => {
    if (localStorage.getItem("currentVisitor")) {
      logout(); // Ensure this function correctly handles the logout logic
    } else {
      alert("You must log in first");
    }
  });

  return wrapper;
};

/**const wrapper = document.createElement("div");
wrapper.className = "visitors-card";
wrapper.innerHTML = template;
/*wrapper.addEventListener("click", () => handleVisitorsClick(visitor));

const btnZoo = document.createElement("button");
btnZoo.id = "btnZoo";
btnZoo.className = "btn btn-primary";
btnZoo.innerText = "Login";
const btnLogOut = document.createElement("button");
btnLogOut.id = "btnlogO";
btnLogOut.className = "btn btn-primary";
btnLogOut.innerText = "Logout";
wrapper.appendChild(btnZoo);
wrapper.appendChild(btnLogOut);

wrapper.addEventListener("click", (e) => {
  const clickedItem = e.target;
  if (clickedItem.nodeName === "BUTTON") {
    loginAsVisitor(visitor);
    window.location.href = "./zoo.html";
  }
});

return wrapper;**/

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

const handleLogOut = () => {
  let btnLog = document.getElementById("btnlogO");
  btnLog.addEventListener("click", () => {
    if (localStorage.getItem("currentVisitor")) {
      alert("please login again after submitted");
      logout();
    } else {
      alert("you must login first");
    }
  });
};

/**function checkIfSomeoneLogin() {
  if (localStorage.getItem("currentVisitor")) {
    alert("You must provide your personal details");
    /**dialog.showModal(); // Using showModal() instead of show()
  }
  return;
}

closeModal.addEventListener("click", () => {
  dialog.close();
});

logOutBtn.addEventListener("click", () => {
  logout();
});**/

/**const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = "Close modal";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
};**/

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors, handleLogOut);

/**const handleVisitorsClick = (visitor) => {
  dialog.innerHTML = "";
  dialog.append(getCloseModalHTMLButton(), getVisitorHTMLCard(visitor));
  dialog.showModal();
};**/
