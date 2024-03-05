// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
  {
    name: "John Smith",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Emily Johnson",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "Michael Williams",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Jessica Brown",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "Christopher Jones",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Ashley Davis",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "Matthew Miller",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Amanda Wilson",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "David Moore",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Sarah Taylor",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "James Anderson",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "Robert Jackson",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Elizabeth White",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "Daniel Harris",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Melissa Martin",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "William Thompson",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Linda Garcia",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
  {
    name: "Joseph Martinez",
    coins: 50,
    img: "./Animals_pictures/boy_4140068.png",
  },
  {
    name: "Karen Robinson",
    coins: 50,
    img: "./Animals_pictures/girl_4140076.png",
  },
];

let animals = [
  {
    name: "Lion",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    img: "./Animals_pictures/lion_5536633.png",
  },
  {
    name: "Elephant",
    isPredator: false,
    weight: 1200,
    height: 200,
    color: "grey",
    habitat: "land",
    img: "./Animals_pictures/elephant_5536612.png",
  },
  {
    name: "Giraffe",
    privatename: "Karen",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    img: "./Animals_pictures/giraffe_5536667.png",
  },
  {
    name: "Tiger",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    img: "./Animals_pictures/tiger_5536718.png",
  },
  {
    name: "Monkey",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    img: "./Animals_pictures/monkey_5566106.png",
  },
  {
    name: "Kangaroo",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    img: "./Animals_pictures/kangaroo_5705702.png",
  },
  {
    name: "Penguin",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "sea",
    img: "./Animals_pictures/penguin_5536792.png",
  },
  {
    name: "Zebra",
    isPredator: false,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    img: "./Animals_pictures/zebra_5566157.png",
  },
  {
    name: "Cheetah",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
    img: "./Animals_pictures/cheetah_13317363.png",
  },
];

// פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
// אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
function generateDataset() {
  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  console.log(visitors);
}
generateDataset();

//********************** */
function logout() {
  alert("Come visit again!");
  localStorage.removeItem("currentVisitor");
  window.location.href = "./signup.html";
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}

function createVisitorsDropdownItems() {
  let visitorsArray = JSON.parse(localStorage.getItem("visitors"));
  let visitorsDropdownItems = visitorsArray
    .map((visitor) => {
      return `<li><a id="dropdown-item" class="dropdown-item" href="#">${visitor.name}</a></li>`;
    })
    .join(""); // Join all the individual list item strings
  return visitorsDropdownItems;
}

const handleResetClick = () => {
  const resetBTN = document.getElementById("resetB");
  if (resetBTN) {
    resetBTN.addEventListener("click", function () {
      localStorage.clear();
      location.reload();
      window.location.href = "./signup.html";
    });
  } else {
    console.log("Reset button not found!");
  }
};

const handleDashClick = () => {
  const dashBtn = document.getElementById("dashBtn");
  if (dashBtn)
    dashBtn.addEventListener("click", () => {
      window.location.href = "./dashboard.html";
    });
  else {
    console.log("Dash button not found!");
  }
};

const addNavbar = () => {
  let visitorData = localStorage.getItem("currentVisitor");
  let visitorsDropdownItems = createVisitorsDropdownItems();

  if (visitorData) {
    visitorData = JSON.parse(visitorData);
  } else {
    console.log("No visitor data found in localStorage.");
    return;
  }

  const navbarHTML = `
<div class="container-fluid">
    <a class="navbar-brand">${visitorData.name}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page">Coins: ${visitorData.coins}</a>
            </li>
            
            <li class="nav-item">
            <button id ="resetB" class="nav-link active reset" aria-current="page">Reset</button>
            </li>
            <li class="nav-item">
            <button id ="dashBtn" class="nav-link active reset" aria-current="page">Dashboard</button>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Visitors
                </a>
                <ul class="dropdown-menu">
                    ${visitorsDropdownItems}
                </ul>
            </li>
        </ul>
    </div>
</div>
`;

  const wrapper2 = document.createElement("nav");
  wrapper2.id = "navbarID";
  wrapper2.className = "navbar navbar-expand-lg bg-body-tertiary";
  wrapper2.innerHTML = navbarHTML;

  if (
    [
      "/C:/Users/User/Desktop/Ruppin/ThirdYear/FrontEnd/HomeAssignment3/animals/zoo.html",
      "/C:/Users/User/Desktop/Ruppin/ThirdYear/FrontEnd/HomeAssignment3/animals/animal.html",
      "/C:/Users/User/Desktop/Ruppin/ThirdYear/FrontEnd/HomeAssignment3/animals/dashboard.html",
    ].includes(window.location.pathname)
  ) {
    console.log("Adding navbar");
    document.body.prepend(wrapper2);
  }

  handleResetClick();
  handleDashClick();

  return wrapper2;
};

window.addEventListener("load", addNavbar);
