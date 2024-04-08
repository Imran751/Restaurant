document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navList = document.querySelector("nav ul");

  hamburgerMenu.addEventListener("click", function () {
    navList.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Fetch menu items from API and dynamically generate menu
  fetchMenuItems()
    .then((items) => {
      const menuContainer = document.querySelector(".menu-items");
      items.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span>${item.price}</span>
                `;
        menuContainer.appendChild(menuItem);
      });
    })
    .catch((error) => console.error("Error fetching menu items:", error));
});

// Dummy function to simulate fetching menu items from an API
function fetchMenuItems() {
  return new Promise((resolve, reject) => {
    // Simulated delay
    setTimeout(() => {
      const menuItems = [
        {
          name: "Dish 1",
          description: "Lorem ipsum dolor sit amet",
          price: "$10",
          image: "./assets/dish1.jpg",
        },
        {
          name: "Dish 2",
          description: "Consectetur adipiscing elit",
          price: "$12",
          image: "./assets/dish2.jpg",
        },
        {
          name: "Dish 3",
          description: "Sed do eiusmod tempor incididunt",
          price: "$15",
          image: "./assets/dish3.jpg",
        },
        {
          name: "Dish 4",
          description: "Sed do eiusmod tempor incididunt",
          price: "$15",
          image: "./assets/dish3.jpg",
        },
        {
          name: "Dish 1",
          description: "Lorem ipsum dolor sit amet",
          price: "$10",
          image: "./assets/dish1.jpg",
        },
        {
          name: "Dish 2",
          description: "Consectetur adipiscing elit",
          price: "$12",
          image: "./assets/dish2.jpg",
        },
        {
          name: "Dish 3",
          description: "Sed do eiusmod tempor incididunt",
          price: "$15",
          image: "./assets/dish3.jpg",
        },
        {
          name: "Dish 4",
          description: "Sed do eiusmod tempor incididunt",
          price: "$15",
          image: "./assets/dish3.jpg",
        },
        {
          name: "Dish 3",
          description: "Sed do eiusmod tempor incididunt",
          price: "$15",
          image: "./assets/dish3.jpg",
        },
        {
          name: "Dish 4",
          description: "Sed do eiusmod tempor incididunt",
          price: "$15",
          image: "./assets/dish3.jpg",
        },
      ];
      resolve(menuItems);
    }, 1000);
  });
}
