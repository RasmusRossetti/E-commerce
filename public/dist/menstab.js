// SELECT ELEMENTS
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const searchBar = document.getElementById("search-bar");

const totalItemsInCartEl = document.querySelector(".total-items-in-cart");



searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
 
  const filteredCharacters = products.filter((products) => {
      return (
          products.name.toLowerCase().includes(searchString)|| 
          products.color.toLowerCase().includes(searchString)
      );
  });
  
  renderProdcuts(filteredCharacters);
});



// RENDER PRODUCTS
function renderProdcuts(filteredCharacters) {
  productsEl.innerHTML = '';
  filteredCharacters.forEach((products) => {
    productsEl.innerHTML += `
    <div >
    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
      <img src="${products.imgSrc}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
         
        </h3>
        <p class="mt-1 text-sm text-gray-500">${products.name}</p>
        <p class="mt-1 text-sm text-gray-500">${products.color}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">${products.price}</p>

      
    </div>
    <button
                onclick="addToCart(${products.id})"
                  
                  class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                 id="add-to-cart-btn">
                  Add to bag
                </button>
  
  </div>
  
</div>

        `;
  });
}
renderProdcuts(products);

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  
  subtotalEl.innerHTML = ` (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
   
    cartItemsEl.innerHTML += `
    <div class="cart-item flex items-center pb-5 border-b border-gray-100">
          
          <div class="cart-item-delete w-10 font-bold text-gray-300 cursor-pointer hover:text-gray-500">
              <i class="fas fa-times"></i>
          </div>
      </div>
      <div class="cart-item flex items-center pb-5 border-b border-gray-100">
          <div class="cart-item-image w-40 h-24 bg-white p-4 rounded-lg">
              <img class="w-full h-full object-contain" src=${item.imgSrc} alt="" />
          </div>
          <div class="cart-item-details flex-grow">
              <div class="cart-item-title font-bold text-sm text-gray-600">
              ${item.name}
              </div>
              <div class="cart-item-brand text-sm text-gray-400">${item.description}</div>
          </div>
          <div class="cart-item-counter w-48 flex items-center">
              <div onclick="changeNumberOfUnits('minus', ${item.id})" class="chevron-left cursor-pointer text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-300 mr-2">
                  <i  class="fas fa-chevron-left fa-xs">-</i>
              </div>
              <h4 class="text-gray-400">x${item.numberOfUnits}</h4>
              <div onclick="changeNumberOfUnits('plus', ${item.id})"  class="chevron-right cursor-pointer text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-300 ml-2">
                  <i  class="fas fa-chevron-right fa-xs">+</i>
              </div>
          </div>
          <div class="cart-item-total-cost w-48 font-bold text-gray-400">
          ${item.price}
          </div>
          <div onclick="removeItemFromCart(${item.id})" class="cart-item-delete w-10 font-bold  text-gray-300 cursor-pointer hover:text-gray-500">
                    
               X </div>

      </div>


      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}
