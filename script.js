const cartCount = document.getElementById("cart-count");
const cartSummary = document.getElementById("cart-summary");
const cartTotal = document.getElementById("cart-total");
const cartItemsContainer = document.getElementById("cart-items");
const cartSidebar = document.getElementById("cart");
const closeCartBtn = document.getElementById("close-cart");
const cartBtn = document.getElementById("cart-btn");

let cart = [];

// Add to cart event listener
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart-btn")) {
        const productId = Number(e.target.dataset.id);
        addToCart(productId);
    }
    
    // Remove from cart event listener
    if (e.target.classList.contains("remove-from-cart")) {
        const productId = Number(e.target.dataset.id);
        removeFromCart(productId);
    }
});

function renderCart() {
    // Empty cart state
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-center py-12">
                <div class="text-6xl mb-4">🛒</div>
                <p class="text-gray-500 text-sm">Your cart is empty</p>
                <p class="text-gray-400 text-xs mt-1">Add some items to get started</p>
            </div>
        `;
        updateCartSummary();
        return;
    }

    // Render cart items
    cartItemsContainer.innerHTML = "";

    cart.forEach((item) => {
        const cartItemHTML = `
            <div class="flex gap-4 py-4 border-b last:border-b-0">
                <!-- THUMBNAIL -->
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="w-20 h-20 object-cover rounded-lg shrink-0"
                />
                
                <!-- PRODUCT INFO -->
                <div class="flex-1 min-w-0">
                    <p class="font-medium text-sm truncate mb-1">${item.name}</p>
                    <p class="text-gray-500 text-sm">$${item.price.toFixed(2)}</p>
                </div>
                
                <!-- REMOVE BUTTON -->
                <button 
                    class="remove-from-cart shrink-0 text-gray-400 hover:text-red-500 transition text-xl leading-none h-6"
                    data-id="${item.id}"
                    title="Remove from cart">
                    ×
                </button>
            </div>
        `;
        
        cartItemsContainer.innerHTML += cartItemHTML;
    });

    updateCartSummary();
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    
    if (product) {
        cart.push(product);
        renderCart();
    }
}

function removeFromCart(productId) {
    // Find the index of the first matching item
    const index = cart.findIndex(item => item.id === productId);
    
    if (index !== -1) {
        cart.splice(index, 1); // Remove one item
        renderCart();
    }
}

function updateCartSummary() {
    // Update cart count badge
    cartCount.textContent = cart.length;
    
    // Update cart summary text
    const itemText = cart.length === 1 ? "item" : "items";
    cartSummary.textContent = `${cart.length} ${itemText}`;
    
    // Calculate and update total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Product data
const products = [
  {
    id: 1,
    name: "Align Leggings",
    price: 120,
    image: "https://images.unsplash.com/photo-1618355281951-a174b87198e2?q=80&w=687&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Leather Brown Bag",
    price: 80,
    image: "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?q=80&w=735&auto=format&fit=crop"
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
    image: "https://plus.unsplash.com/premium_photo-1673757089859-b668780f5790?q=80&w=687&auto=format&fit=crop"
  }
];

// Render product grid
const productGrid = document.getElementById("product-grid");

products.forEach((product) => {
    productGrid.innerHTML += `
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
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
                <h3 class="text-sm font-medium text-gray-900">${product.name}</h3>
                <p class="text-gray-500 text-sm mt-2">$${product.price.toFixed(2)}</p>

                <button 
                    class="add-to-cart-btn mt-3 w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                    data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
});

// Cart sidebar controls
cartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("hidden");
});

closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("hidden");
});

// Initialize cart on page load
renderCart();

console.log(productGrid);