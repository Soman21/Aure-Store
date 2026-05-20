const products = [
  {
    id: 1,
    name: "Align Leggings",
    price: 120,
    image: "https://images.unsplash.com/photo-1618355281951-a174b87198e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  {
    id: 2,
    name: "Flow Tank Top",
    price: 80,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800"
  },

  {
    id: 3,
    name: "Studio Jacket",
    price: 150,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800"
  }
];

const productGrid = document.getElementById("product-grid");

products.forEach((product) => {

  productGrid.innerHTML += `
  
        <div class="bg-white p-3 rounded-xl shadow-sm flex flex-col">

            <img 
                src="${product.image}" 
                alt="${product.name}"
                class="w-full h-52 object-cover rounded-lg"
            />

            <div class="flex flex-col flex-1 mt-3">

                <h3 class="font-medium text-sm">
                ${product.name}
                </h3>

                <p class="text-sm text-gray-500 mt-1">
                $${product.price}
                </p>

                <button class="mt-auto w-full bg-black text-white py-2 rounded-lg">
                Add to Cart
                </button>

            </div>

        </div>

  `;
});