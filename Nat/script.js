let products = {
  data: [
    {
      productName: "advanced accounting",
      category: "Accountancy Books",
      Description: "A",
      image: "advanced acc.jpg",
    },
    {
      productName: "Chemistry for Engineering Student",
      category: "Engineering Books",
      Description: "B",
      image: "chem.jpg",
    },
    {
      productName: "Circuit Analysis 7th Edition",
      category: "Engineering Books",
      Description: "C",
      image: "Circuit analysis 7th.jpg",
    },
    {
      productName: "Circuit Analysis",
      category: "Engineering Books",
      Description: "D",
      image: "Circuit Analysis.jpg",
    },
    {
      productName: "Database System",
      category: "IT Books",
      Description: "E",
      image: "database.jpg",
    },
    {
      productName: "Financial Accounting",
      category: "Accountancy Books",
      Description: "F",
      image: "Financial acc.jpg",
    },
    {
      productName: "Hotel Management and Operations",
      category: "Tourism Books",
      Description: "G",
      image: "Hotel tou.jpg",
    },
    {
      productName: "Programming Language",
      category: "IT Books",
      Description: "H",
      image: "Language.jpg",
    },
    {
      productName: "Macro Perspective of Tourism and Hospitality",
      category: "Tourism Books",
      Description: "H",
      image: "Macro.jpg",
    },
    {
      productName: "Tourism Book",
      category: "Tourism Books",
      Description: "H",
      image: "Tourism.jpg",
    },
    {
      productName: "Vector Mechanics for Engineering",
      category: "Engineering Books",
      Description: "H",
      image: "Vector mechanics.jpg",
    },
    {
      productName: "PHP Programming with MY",
      category: "IT Books",
      Description: "H",
      image: "sql.jpg",
    },
    {
      
      productName: "PHP Programming with MY",
      category: "IT Books",
      Description: "H",
      image: "tou.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //Description
  let Description = document.createElement("h6");
  Description.innerText = "Description: " + i.Description;
  container.appendChild(Description);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};


