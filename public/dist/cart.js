window.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('#cart-btn')
    const cartContainer = document.querySelector('#cart-container')

    cartBtn.addEventListener('click', () => {
        cartContainer.classList.toggle('hidden')
        cartContainer.classList.toggle('flex')
    });

})

const productList = document.querySelector('.product-list');
const cartList = document.querySelector('cart-list');
const cartTotalValue = document.getElementById('cart-total-value');

let cartItemID = 1;


eventListeners();

function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });

    productList.addEventListener('click', purchaseProduct);
}

// load products from JSON file
function loadJSON() {
    fetch('productwomen.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(products => {
                html += `
                <div class="group relative">
            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img src="${products.img}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#"   data-bs-toggle="modal"
                  data-bs-target="#exampleModalX${products.id}">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${products.name}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">${products.color}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">${products.price}</p>
            </div>
          </div>

          <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalX${products.id}"
          tabindex="-1"
          aria-labelledby="exampleModalXlLabel"
          aria-modal="true"
          role="dialog"
        >
          <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
            >
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md"
              >
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-bs-dismiss="modal"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
    
              <div class="modal-body relative p-0">
                <div
                  class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8 pr-10 pb-10 pl-10 pt-0"
                >
                  <div
                    class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"
                  >
                    <img
                      src="${products.img}"
                      alt="Two each of gray, white, and black shirts arranged on table."
                      class="object-center object-cover"
                      style="height: 450px"
                    />
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">
                      ${products.name}
                    </h2>
    
                    <section aria-labelledby="information-heading" class="mt-2">
                      <h3 id="information-heading" class="sr-only">
                        Product information
                      </h3>
    
                      <p class="text-2xl text-gray-900">${products.price}</p>
    
                      <div class="mt-6">
                        <h4 class="sr-only">Reviews</h4>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <svg
                              class="text-gray-900 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
    
                            <svg
                              class="text-gray-900 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
    
                            <svg
                              class="text-gray-900 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
    
                            <svg
                              class="text-gray-900 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
    
                            <svg
                              class="text-gray-200 h-5 w-5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          </div>
                          <p class="sr-only">3.9 out of 5 stars</p>
                          <a
                            href="#"
                            class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >117 reviews</a
                          >
                        </div>
                      </div>
                    </section>
    
                    <section aria-labelledby="options-heading" class="mt-10">
                      <h3 id="options-heading" class="sr-only">Product options</h3>
    
                      <form>
                        <div>
                          <h4 class="text-sm text-gray-900 font-medium">Color</h4>
    
                          <fieldset class="mt-4">
                            <legend class="sr-only">Choose a color</legend>
                            <div class="flex items-center space-x-3">
                              <label
                                class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400"
                              >
                                <input
                                  type="radio"
                                  name="color-choice"
                                  value="White"
                                  class="sr-only"
                                  aria-labelledby="color-choice-0-label"
                                />
                                <p id="color-choice-0-label" class="sr-only">
                                  White
                                </p>
                                <span
                                  aria-hidden="true"
                                  class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                                ></span>
                              </label>
    
                              <label
                                class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400"
                              >
                                <input
                                  type="radio"
                                  name="color-choice"
                                  value="Gray"
                                  class="sr-only"
                                  aria-labelledby="color-choice-1-label"
                                />
                                <p id="color-choice-1-label" class="sr-only">
                                  Gray
                                </p>
                                <span
                                  aria-hidden="true"
                                  class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                                ></span>
                              </label>
    
                              <label
                                class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900"
                              >
                                <input
                                  type="radio"
                                  name="color-choice"
                                  value="Black"
                                  class="sr-only"
                                  aria-labelledby="color-choice-2-label"
                                />
                                <p id="color-choice-2-label" class="sr-only">
                                  Black
                                </p>
                                <span
                                  aria-hidden="true"
                                  class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                                ></span>
                              </label>
                            </div>
                          </fieldset>
                        </div>
    
                        <div class="mt-10">
                          <div class="flex items-center justify-between">
                            <h4 class="text-sm text-gray-900 font-medium">Size</h4>
                            <a
                              href="#"
                              class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >Size guide</a
                            >
                          </div>
    
                          <fieldset class="mt-4">
                            <legend class="sr-only">Choose a size</legend>
                            <div class="grid grid-cols-4 gap-4">
                              <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="XXS"
                                  class="sr-only"
                                  aria-labelledby="size-choice-0-label"
                                />
                                <p id="size-choice-0-label">XXS</p>
    
                                <div
                                  class="absolute -inset-px rounded-md pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </label>
    
                              <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="XS"
                                  class="sr-only"
                                  aria-labelledby="size-choice-1-label"
                                />
                                <p id="size-choice-1-label">XS</p>
    
                                <div
                                  class="absolute -inset-px rounded-md pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </label>
    
                              <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="S"
                                  class="sr-only"
                                  aria-labelledby="size-choice-2-label"
                                />
                                <p id="size-choice-2-label">S</p>
    
                                <div
                                  class="absolute -inset-px rounded-md pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </label>
    
                              <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="M"
                                  class="sr-only"
                                  aria-labelledby="size-choice-3-label"
                                />
                                <p id="size-choice-3-label">M</p>
    
                                <div
                                  class="absolute -inset-px rounded-md pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </label>
    
                              <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="L"
                                  class="sr-only"
                                  aria-labelledby="size-choice-4-label"
                                />
                                <p id="size-choice-4-label">L</p>
    
                                <div
                                  class="absolute -inset-px rounded-md pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </label>
    
                              <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="XL"
                                  class="sr-only"
                                  aria-labelledby="size-choice-5-label"
                                />
                                <p id="size-choice-5-label">XL</p>
    
                                <div
                                  class="absolute -inset-px rounded-md pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </label>
    
                              <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="XXL"
                                  class="sr-only"
                                  aria-labelledby="size-choice-6-label"
                                />
                                <p id="size-choice-6-label">XXL</p>
    
                                <div
                                  class="absolute -inset-px rounded-md pointer-events-none"
                                  aria-hidden="true"
                                ></div>
                              </label>
    
                              <label
                                class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50 text-gray-200 cursor-not-allowed"
                              >
                                <input
                                  type="radio"
                                  name="size-choice"
                                  value="XXXL"
                                  disabled
                                  class="sr-only"
                                  aria-labelledby="size-choice-7-label"
                                />
                                <p id="size-choice-7-label">XXXL</p>
    
                                <div
                                  aria-hidden="true"
                                  class="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                >
                                  <svg
                                    class="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1="0"
                                      y1="100"
                                      x2="100"
                                      y2="0"
                                      vector-effect="non-scaling-stroke"
                                    />
                                  </svg>
                                </div>
                              </label>
                            </div>
                          </fieldset>
                        </div>
    
                        <button
                          type="submit"
                          class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Add to bag
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

            `;
            });
            productList.innerHTML = html;
        })
}

// purchase product
function purchaseProduct(e) {
    if (e.target.classList.contains(add - to - cart - btn)) {
        let product = e.target.parentElement.parentElement;
        getProductInfo(product);
    }
}

//
function getProductInfo(products) {
    let productInfo = {
        id: cartItemID,
        imgSrc: products.querySelector('.products-img img').src,
        name: products.querySelector('.products-name').textContent,
        color: products.querySelector('.products-color').textContent,
        price: products.querySelector('.products-price').textContent
    }
    cartItemID++;
    addToCartList(productInfo);

}

// add the selected product to the cart list
function addToCartList(products) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-id', `${products.id}`);
    cartItem.innerHTML = `
                            <div class="cart-item-image w-40 h-24 bg-white p-4 rounded-lg">
                                <img class="w-full h-full object-contain" src="${products.img}" alt="product image" />
                            </div>

                            <div class="flex-grow items-center p-2" id="cart-item-info">
                                <div class="font-bold text-sm text-gray-600" id="cart-item-name">
                                   ${products.name}
                                </div>
                                <div class="text-sm text-gray-400" id="cart-item-color">${products.color}</div>

                                <div class="font-bold text-gray-400 p-4" id="cart-item-price">
                                    ${products.price}
                                </div>
                            </div>

                            <button class="cart-item-delete w-10 font-bold text-gray-300 cursor-pointer hover:text-gray-500" id="cart-item-del-btn">
                                    <i class="fas fa-times"></i>
                            </button>
    `;
    cartList.appendChild(cartItem);
}