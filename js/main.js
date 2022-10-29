var mealsList = [];
async function getData() {
  let myResponse = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let myData = await myResponse.json();
  mealsList = myData.meals;
  display();
}
getData();

function display() {
  var temp = "";
  for (var i = 0; i < mealsList.length; i++) {
    temp +=
      `
      <div class="col-md-3">
      <a onclick="mealDetails(` +
      mealsList[i].idMeal +
      `)">
      <div class="item">
      <img src="` +
      mealsList[i].strMealThumb +
      `" class="w-100 rounded" alt="" />
      <div class="layer d-flex align-items-center">
        <p class="ms-3">` +
      mealsList[i].strMeal +
      `</p>
      </div>
    </div>
      </a>
    </div>
    `;
  }
  document.getElementById("myRow").innerHTML = temp;
}

function displaySearch() {
  var temp = `    <div class="container" id="mySearch">

    <div class="row mt-5 text-center">
      <div class="col-lg-6">
      <input type="email" class="form text-center" id="searchMeal_Name" onkeyup="searchMealName()" placeholder="Search by name" aria-describedby="emailHelp">
      </div>
   
      <div class="col-lg-6">
      <input type="email" maxlength="1" class="form text-center" onkeyup="searchMeal_firstLetter()" id="searchMeal_FirstLetter" placeholder="Search by first letter" aria-describedby="emailHelp">
      </div>
    </div>
  
  
    </div>`;

  document.getElementById("mySearch").innerHTML = temp;
}

//  www.themealdb.com/api/json/v1/1/search.php?f=a
function searchMeal_firstLetter() {
  var userInput = document.getElementById("searchMeal_FirstLetter").value;
  var searchResuts_nameList = [];
  var searchResults_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
  async function getData() {
    let myResponse = await fetch(searchResults_URL);
    let myData = await myResponse.json();
    searchResuts_nameList = myData.meals;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < searchResuts_nameList.length; i++) {
      temp +=
        `
      <div class="col-md-3">
      <a onclick="mealDetails('` +
        searchResuts_nameList[i].idMeal +
        `')">
      <div class="item">
      <img src="` +
        searchResuts_nameList[i].strMealThumb +
        `" class="w-100 rounded" alt="" />
      <div class="layer d-flex align-items-center">
        <p class="ms-3">` +
        searchResuts_nameList[i].strMeal +
        `</p>
      </div>
    </div>
      </a>

      </div>
    `;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function searchMealName() {
  var userInput = document.getElementById("searchMeal_Name").value;
  var searchResuts_nameList = [];
  var searchResults_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
  async function getData() {
    let myResponse = await fetch(searchResults_URL);
    let myData = await myResponse.json();
    searchResuts_nameList = myData.meals;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < searchResuts_nameList.length; i++) {
      temp +=
        `
      <div class="col-md-3">
      <a onclick="mealDetails('` +
        searchResuts_nameList[i].idMeal +
        `')">
      <div class="item">
      <img src="` +
        searchResuts_nameList[i].strMealThumb +
        `" class="w-100 rounded" alt="" />
      <div class="layer d-flex align-items-center">
        <p class="ms-3">` +
        searchResuts_nameList[i].strMeal +
        `</p>
      </div>
    </div>
      </a>

      </div>
    `;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function mealDetails(mealID) {
  document.getElementById("mySearch").innerHTML = "";
  var mealDetailsList = [];
  var mealURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  async function getData() {
    let myResponse = await fetch(mealURL);
    let myData = await myResponse.json();
    mealDetailsList = myData.meals;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < mealDetailsList.length; i++) {
      temp +=
        `
      <div class="col-lg-4">
      <img src="` +
        mealDetailsList[i].strMealThumb +
        `" class="w-100" alt="" />
      <h2 class="text-center">` +
        mealDetailsList[i].strMeal +
        `</h2>
    </div>

    <div class="col-lg-8">
      <h5>Insturctions:</h5>
      <p>` +
        mealDetailsList[i].strInstructions +
        `</p>

      <p><b>Area: </b>` +
        mealDetailsList[i].strArea +
        `</p>
      <p><b>Category: </b>` +
        mealDetailsList[i].strCategory +
        `</p>

      <p>Recipes:</p>` +
        `<span class="badge text-bg-primary">` +
        mealDetailsList[i].strMeasure1 +
        " " +
        mealDetailsList[i].strIngredient1 +
        `</span>` +
        `
      <p>Tags:</p>
      <span class="badge text-bg-warning">Meat</span>
      <br />

      <a href="` +
        mealDetailsList[i].strSource +
        `" target="_blank" class="btn btn-success">Source</a>
      <a href="` +
        mealDetailsList[i].strYoutube +
        `" target="_blank" class="btn btn-danger">Youtube</a>
    </div>
  </div>`;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function displayCategories() {
  document.getElementById("mySearch").innerHTML = "";
  var categoriesList = [];
  async function getData() {
    let myResponse = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    let myData = await myResponse.json();
    categoriesList = myData.categories;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < categoriesList.length; i++) {
      var categoryName = categoriesList[i].strCategory;
      temp +=
        `
      <div class="col-md-3">
      <a onclick="categoryDetails('` +
        categoryName +
        `')">
      <div class="item">
      <img src="` +
        categoriesList[i].strCategoryThumb +
        `" class="w-100 rounded" alt="" />
      <div class="layer d-flex align-items-center">
        <p class="ms-3">` +
        categoriesList[i].strCategory +
        `</p>
      </div>
    </div>
      </a>

      </div>
    `;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function categoryDetails(categoryName) {
  document.getElementById("mySearch").innerHTML = "";
  var categoriesDetailsList = [];
  var categoryURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  async function getData() {
    let myResponse = await fetch(categoryURL);
    let myData = await myResponse.json();
    categoriesDetailsList = myData.meals;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < categoriesDetailsList.length; i++) {
      temp +=
        `
      <div class="col-md-3">
      <a onclick="mealDetails('` +
        categoriesDetailsList[i].idMeal +
        `')">
      <div class="item">
      <img src="` +
        categoriesDetailsList[i].strMealThumb +
        `" class="w-100 rounded" alt="" />
      <div class="layer d-flex align-items-center">
        <p class="ms-3">` +
        categoriesDetailsList[i].strMeal +
        `</p>
      </div>
    </div>
      </a>

      </div>
    `;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function displayArea() {
  document.getElementById("mySearch").innerHTML = "";
  var areaList = [];
  async function getData() {
    let myResponse = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    let myData = await myResponse.json();
    areaList = myData.meals;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < areaList.length; i++) {
      var areaName = areaList[i].strArea;
      temp +=
        `
      <div class="col-md-3">
      <div class="item" id="itemArea">
        <a onclick="areaDetails('` +
        areaName +
        `')">` +
        areaList[i].strArea +
        `</a>
      </div>
    </div>
    `;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function areaDetails(areaName) {
  document.getElementById("mySearch").innerHTML = "";
  var areaURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`;

  var areaDetailsList = [];
  async function getData() {
    let myResponse = await fetch(areaURL);
    let myData = await myResponse.json();
    areaDetailsList = myData.meals;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < areaDetailsList.length; i++) {
      temp +=
        `
        <div class="col-md-3">
        <a onclick="mealDetails(` +
        areaDetailsList[i].idMeal +
        `)">
        <div class="item">
        <img src="` +
        areaDetailsList[i].strMealThumb +
        `" class="w-100 rounded" alt="" />
        <div class="layer d-flex align-items-center">
          <p class="ms-3">` +
        areaDetailsList[i].strMeal +
        `</p>
        </div>
      </div>
        </a>

      </div>
      `;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function displayIngredients() {
  document.getElementById("mySearch").innerHTML = "";
  var ingredientsList = [];
  async function getData() {
    let myResponse = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    let myData = await myResponse.json();
    ingredientsList = myData.meals;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < 20; i++) {
      ingredientsName = ingredientsList[i].strIngredient;
      temp +=
        `
      <div class="col-md-3">
      <a onclick="ingredientDetails('` +
        ingredientsName +
        `')">
      <div class="item" id="itemIngredients">
      <p>` +
        ingredientsList[i].strIngredient +
        `</p>
      <p>` +
        ingredientsList[i].strDescription +
        `</p>
    </div>
      </a>
      </div>
    `;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function ingredientDetails(ingredientName) {
  ingredientName = ingredientName.split(" ").join("_");

  var ingredientURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`;

  var ingredientDetailsList = [];
  async function getData() {
    let myResponse = await fetch(ingredientURL);
    let myData = await myResponse.json();
    ingredientDetailsList = myData.meals;
    display();
  }
  getData();

  function display() {
    var temp = "";
    for (var i = 0; i < ingredientDetailsList.length; i++) {
      temp +=
        `
      <div class="col-md-3">
      <a onclick="mealDetails(` +
        ingredientDetailsList[i].idMeal +
        `)">
      <div class="item">
      <img src="` +
        ingredientDetailsList[i].strMealThumb +
        `" class="w-100 rounded" alt="" />
      <div class="layer d-flex align-items-center">
        <p class="ms-3">` +
        ingredientDetailsList[i].strMeal +
        `</p>
      </div>
    </div>
      </a>
      </div>
    `;
    }
    document.getElementById("myRow").innerHTML = temp;
  }
}

function displayContact() {
  document.getElementById("mySearch").innerHTML = "";

  temp = `            <div class="col-lg-6">
  <input type="text" class="form contact my-1 d-inline-block text-center" id="name_input" onkeyup="validateName()" placeholder="Enter name">
  <div class="alert alert-danger" id="name_wrongValidation" role="alert">
    Special Characters and Numbers not allowed, and must be more than 1 character
  </div>
</div>

<div class="col-lg-6">
  <input type="email" class="form contact my-1 d-inline-block text-center" id="email_input" onkeyup="validateEmail()" placeholder="Enter email" aria-describedby="emailHelp">
  <div class="alert alert-danger" id="email_wrongValidation" role="alert">
    Enter valid email. *Ex: xxx@yyy.zzz
  </div>
</div>

<div class="col-lg-6">
  <input type="text" class="form contact my-1 d-inline-block text-center" id="phone_input" onkeyup="validatePhone()" placeholder="Enter phone">
  <div class="alert alert-danger" id="phone_wrongValidation" role="alert">
    Enter valid Phone Number
  </div>
</div>

<div class="col-lg-6">
  <input type="text" class="form contact my-1 d-inline-block text-center" id="age_input" onkeyup="validateAge()" placeholder="Enter age">
  <div class="alert alert-danger" id="age_wrongValidation" role="alert">
    Enter valid Age
  </div>
</div>

<div class="col-lg-6">
  <input type="password" class="form contact my-1 d-inline-block text-center" id="password_input" onkeyup="validatePassword()" placeholder="Enter password">
  <div class="alert alert-danger" id="password_wrongValidation" role="alert">
    Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
  </div>
</div>

<div class="col-lg-6">
  <input type="password" class="form contact my-1 d-inline-block text-center" id="rePassword_input" onkeyup="validateRePassword()" placeholder="Enter password">
  <div class="alert alert-danger" id="rePassword_wrongValidation" role="alert">
    Enter valid password
  </div>
</div>
`;

  document.getElementById("myRow").innerHTML = temp;
}

function validateEmail() {
  var emailInput = document.getElementById("email_input").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.match(mailformat)) {
    document.getElementById("email_wrongValidation").style.display = "none";
    document.getElementById("email_input").classList.add("is-valid");
    return true;
  } else {
    document.getElementById("email_wrongValidation").style.display = "block";
    document.getElementById("email_input").classList.remove("is-valid");
    return false;
  }
}

function validateName() {
  var nameInput = document.getElementById("name_input").value;
  var nameFormat = /^[a-zA-Z ]{2,30}$/;

  if (nameInput.match(nameFormat)) {
    document.getElementById("name_wrongValidation").style.display = "none";
    document.getElementById("name_input").classList.add("is-valid");
  } else {
    document.getElementById("name_wrongValidation").style.display = "block";
    document.getElementById("name_input").classList.remove("is-valid");
    return false;
  }
}

function validatePhone() {
  var phoneInput = document.getElementById("phone_input").value;
  var phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  if (phoneInput.match(phoneFormat)) {
    document.getElementById("phone_wrongValidation").style.display = "none";
    document.getElementById("phone_input").classList.add("is-valid");
  } else {
    document.getElementById("phone_wrongValidation").style.display = "block";
    document.getElementById("phone_input").classList.remove("is-valid");
    return false;
  }
}

function validateAge() {
  var ageInput = document.getElementById("age_input").value;
  var ageFormat = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

  if (ageInput.match(ageFormat)) {
    document.getElementById("age_wrongValidation").style.display = "none";
    document.getElementById("age_input").classList.add("is-valid");
  } else {
    document.getElementById("age_wrongValidation").style.display = "block";
    document.getElementById("age_input").classList.remove("is-valid");
    return false;
  }
}

function validatePassword() {
  var passwordInput = document.getElementById("password_input").value;
  var passwordFormat =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  if (passwordInput.match(passwordFormat)) {
    document.getElementById("password_wrongValidation").style.display = "none";
    document.getElementById("password_input").classList.add("is-valid");
  } else {
    document.getElementById("password_wrongValidation").style.display = "block";
    document.getElementById("password_input").classList.remove("is-valid");
    return false;
  }
}

function validateRePassword() {
  var passwordInput = document.getElementById("password_input").value;
  var rePasswordInput = document.getElementById("rePassword_input").value;

  if (passwordInput == rePasswordInput) {
    document.getElementById("rePassword_wrongValidation").style.display =
      "none";
    document.getElementById("rePassword_input").classList.add("is-valid");
  } else {
    document.getElementById("rePassword_wrongValidation").style.display =
      "block";
    document.getElementById("rePassword_input").classList.remove("is-valid");
    return false;
  }
}
