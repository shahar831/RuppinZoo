const nameInput = document.getElementById("fname");

function createNewVisitor(event) {
  event.preventDefault();

  let validInput = validateFormInputs();

  let selectedGenderElement = document.querySelector(
    'input[name="gender"]:checked'
  );
  let selectedImg;

  if (selectedGenderElement) {
    let selectedGender = selectedGenderElement.value;

    if (selectedGender === "male") {
      selectedImg = "./Animals_pictures/boy_4140068.png";
    } else if (selectedGender === "female") {
      selectedImg = "./Animals_pictures/girl_4140076.png";
    }
  } else {
    // Handle the case where no gender has been selected
    // You can set selectedImg to a default image or take other actions
    console.log("No gender selected");
    // For example, setting a default image
    selectedImg = "./Animals_pictures/user_1144709.png"; // Path to a default image
  }

  if (validInput) {
    makeVisitor(nameInput.value, selectedImg);
  }
}

const validateFormInputs = () => {
  if (!nameInput.value) {
    // validate there is text in the inputs
    alert("You must provide your personal details");
    return false; // Return false if validation fails
  }
  return true; // Return true if validation passes
};

const makeVisitor = (name, selectedImg) => {
  let foundVisitor = visitors.find((visitor) => visitor.name === name);
  if (!foundVisitor) {
    let newVisitor = { name: nameInput.value, coins: 50, img: selectedImg };

    visitors.push(newVisitor);

    localStorage.setItem("visitors", JSON.stringify(visitors));
    const storedVisitors = JSON.parse(localStorage.getItem("visitors"));
    console.log(storedVisitors);

    nameInput.value = "";
  }

  if (foundVisitor) {
    alert("You alredy sign in");
  }
};

const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}
