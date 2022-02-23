const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Dragon food",
    category: "dinner",
    price: 36.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// select section-center and add text as innerHTML
const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

// get all unique catagories from menu and display them
window.addEventListener("DOMContentLoaded", function () {
  const uniqueMenuCatagories = getUniqueMenuCatagories();
  const catagoriesButtons = generateCatagoriesButtons(uniqueMenuCatagories);
  const buttonContainer = document.querySelector(".btn-container");
  buttonContainer.innerHTML = catagoriesButtons;
  let filterButtons = document.querySelectorAll(".filter-btn");
  applyFilterCatagories(filterButtons);
});

function applyFilterCatagories(filterButtons) {
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      // get data-* attribute given on each button
      const catagory = event.currentTarget.dataset.id;
      // filter menu based on catagory
      let filterdMenuItem = menu.filter(function (menuItem) {
        if (menuItem.category === catagory) {
          return menuItem;
        }
      });

      // display based on condition
      if (catagory === "all") {
        displayMenuItems(menu);
      } else displayMenuItems(filterdMenuItem);
    });
  });
}

function getUniqueMenuCatagories() {
  return menu.reduce(
    function (value, menuItem) {
      if (!value.includes(menuItem.category)) {
        value.push(menuItem.category);
      }
      return value;
    },
    ["all"]
  );
}

function generateCatagoriesButtons(catagories) {
  return catagories
    .map(function (catagory) {
      return `<button type="button" class="filter-btn" data-id=${catagory}>${catagory}</button>`;
    })
    .join("");
}

function displayMenuItems(menuItems) {
  let displayMenuItems = menuItems.map(function (menuItem) {
    return `<article class="menu-item">
          <img src=${menuItem.img} alt=${menuItem.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${menuItem.title}</h4>
              <h4 class="price">${menuItem.price}</h4>
            </header>
            <p class="item-text">
              ${menuItem.desc}
            </p>
          </div>
        </article>`;
  });
  // make array as string
  displayMenuItems = displayMenuItems.join("");
  sectionCenter.innerHTML = displayMenuItems;
}
