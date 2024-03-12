const visitor = JSON.parse(localStorage.getItem("visitors"));
let visitorsForView = [...visitors];

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

  const btnZoo = document.createElement("button");
  btnZoo.id = "btnZoo";
  btnZoo.className = "btn btn-primary";
  btnZoo.innerText = "Login";
  wrapper.appendChild(btnZoo);

  btnZoo.addEventListener("click", () => {
    loginAsVisitor(visitor);
    window.location.href = "./zoo.html";
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

function createLogoutButton() {
  const btnLogOut = document.createElement("button");
  btnLogOut.id = "btnLogOut";
  btnLogOut.className = "btn btn-primary";
  btnLogOut.innerText = "Logout";

  btnLogOut.addEventListener("click", () => {
    if (localStorage.getItem("currentVisitor")) {
      logout(); // Ensure this function correctly handles the logout logic
    } else {
      alert("You must log in first");
    }
  });

  return btnLogOut;
}

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
      logout();
    } else {
      alert("you must login first");
    }
  });
};

function checkLoginAndShowModal() {
  const modal = document.getElementById("loginModal");
  const span = document.getElementsByClassName("close")[0];

  if (localStorage.getItem("currentVisitor")) {
    modal.style.display = "block";

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
      logout();
      modal.style.display = "none";
    });

    const closeButton = document.getElementById("closeBtn");
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
      return;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  checkLoginAndShowModal();
  const searchBox = getSearchBox();
  document.body.insertAdjacentElement("afterbegin", searchBox);

  const placeholder = document.getElementById("placeholder");
  if (placeholder) {
    const logoutBtn = createLogoutButton();
    placeholder.insertAdjacentElement("beforebegin", logoutBtn);
  }

  renderVisitors();
});
