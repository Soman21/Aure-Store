const cartCount = document.getElementById("cart-count");

let cart = [];

cart = [];

// const buttons = document.querySelectorAll(".add-to-cart-btn");

// buttons.forEach((button) => {
   
//     button.addEventListener("click", () => {

//         const productId = Number(button.dataset.id);

//         addToCart(productId);
//     });
// });
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart-btn")) {

        const productId = Number(e.target.dataset.id);

        addToCart(productId);
        }
});


function addToCart(productId) {
    console.log("clicked");

    const product = products.find(item => item.id === productId);
    
    cart.push(product);
    cartCount.textContent = cart.length;
}












const products = [
  {
    id: 1,
    name: "Align Leggings",
    price: 120,
    image: "https://images.unsplash.com/photo-1618355281951-a174b87198e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 2,
    name: "Leather Brown Bag",
    price: 80,
    image: "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 3,
    name: "Studio Jacket",
    price: 150,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800"
  }, 

  {
    id: 4,
    name: "Fur Coat Jacket",
    price: 250,
    image: "https://plus.unsplash.com/premium_photo-1673757089859-b668780f5790?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const productGrid = document.getElementById("product-grid");

products.forEach((product) => {

productGrid.innerHTML += `
  <div class="bg-white rounded-xl shadow-sm overflow-hidden">

    <!-- IMAGE -->
    <div class="rounded-lg overflow-hidden" style="width: 100%; height: 320px; background: #f3f4f6;">
      <img 
        src="${product.image}" 
        alt="${product.name}"
        style="width: 100%; height: 100%; object-fit: cover; object-position: center; display: block;"
      />
    </div>

    <!-- CONTENT -->
    <div class="p-4">
      <h3 class="text-sm font-medium text-gray-900">
        ${product.name}
      </h3>

      <p class="text-gray-500 text-sm mt-2">
        $${product.price}
      </p>

      <button 
      class="add-to-cart-btn mt-3 w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800"
      data-id="${product.id}">
        Add to Cart
      </button>
    </div>

  </div>
`;
});