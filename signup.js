const nameInput = document.getElementById("fname");

function initializeFormEventListeners() {
  const submitButton = document.getElementById("signup__submit");
  const loginButton = document.getElementById("button__login");
  let submitClicked = false;

  if (submitButton) {
    submitButton.addEventListener("click", () => {
      submitClicked = true;
    });
  }

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      submitClicked = false;
    });
  }

  const form = document.getElementById("create-visitor-form");
  if (form) {
    form.addEventListener("submit", (event) =>
      createNewVisitor(event, submitClicked)
    );
  }
}

/**function createNewVisitor(event) {
  event.preventDefault();

  let validInput = validateFormInputs();

  let selectedGenderElement = document.querySelector(
    'input[name="gender"]:checked'
  );
  let selectedImg;

  if (selectedGenderElement) {
    let selectedGender = selectedGenderElement.value;

    if (selectedGender === "Male") {
      selectedImg = "./Animals_pictures/boy_4140068.png";
    } else if (selectedGender === "Female") {
      selectedImg = "./Animals_pictures/girl_4140076.png";
    }
  } else {
    // Handle the case where no gender has been selected
    selectedImg = "./Animals_pictures/user_1144709.png";
  }

  if (validInput) {
    makeVisitor(nameInput.value, selectedImg);
  }
}**/

function createNewVisitor(event, submitClicked) {
  event.preventDefault();

  if (!submitClicked) {
    return;
  }

  if (!validateFormInputs()) {
    return;
  }

  let selectedGenderElement = document.querySelector(
    'input[name="gender"]:checked'
  );
  let selectedImg;

  if (selectedGenderElement) {
    let selectedGender = selectedGenderElement.value;
    selectedImg =
      selectedGender === "Male"
        ? "./Animals_pictures/boy_4140068.png"
        : selectedGender === "Female"
        ? "./Animals_pictures/girl_4140076.png"
        : "./Animals_pictures/user_1144709.png";
  } else {
    selectedImg = "./Animals_pictures/user_1144709.png"; // Default image if no gender selected
  }

  makeVisitor(nameInput.value, selectedImg);
}

const validateFormInputs = () => {
  if (!nameInput.value) {
    alert("You must provide your personal details");
    return false;
  }
  return true;
};
/**const validateFormInputs = () => {
  if (!nameInput.value) {
    // validate there is text in the inputs
    alert("You must provide your personal details");
    return false;
  }
  return true;
};**/

const makeVisitor = (name, selectedImg) => {
  let foundVisitor = visitors.find((visitor) => visitor.name === name);

  if (!foundVisitor) {
    let newVisitor = {
      name: nameInput.value,
      coins: 50,
      img: selectedImg,
      AnimalVisited: [],
      AnimalFeeden: [],
    };

    visitors.push(newVisitor);

    localStorage.setItem("visitors", JSON.stringify(visitors));
    const storedVisitors = JSON.parse(localStorage.getItem("visitors"));
    console.log(storedVisitors);

    nameInput.value = "";
  } else {
    alert("You alredy sign in");
  }
  window.location.href = "./login.html";
};

const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}

document.addEventListener("DOMContentLoaded", initializeFormEventListeners);
