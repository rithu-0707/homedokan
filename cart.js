const CART_KEY = "homedokan-cart";

const SEARCH_PAGES = [
    "index.html",
    "shop.html",
    "vegetables.html",
    "fruits.html",
    "dairy.html",
    "dairy-products.html",
    "cleaning-essentials.html",
    "cooking-essentials.html",
    "bakery.html",
    "categories.html",
    "offers.html",
    "search-results.html"
];

const SEARCH_PRODUCTS = [
    { name: "Organic Tomato", category: "Vegetables", price: 80, unit: "/ kg", page: "vegetables.html", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500" },
    { name: "Fresh Apple", category: "Fruits", price: 120, unit: "/ kg", page: "fruits.html", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" },
    { name: "Tomatoes", category: "Vegetables", price: 50, unit: "/ kg", page: "vegetables.html", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80" },
    { name: "Potatoes", category: "Vegetables", price: 45, unit: "/ kg", page: "vegetables.html", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80" },
    { name: "Carrots", category: "Vegetables", price: 65, unit: "/ kg", page: "vegetables.html", image: "https://images.unsplash.com/photo-1633380110125-f6e685676160?w=600&auto=format&fit=crop&q=60" },
    { name: "Broccoli", category: "Vegetables", price: 85, unit: "/ piece", page: "vegetables.html", image: "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?w=600&auto=format&fit=crop&q=60" },
    { name: "Red Apples", category: "Fruits", price: 120, unit: "/ kg", page: "fruits.html", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80" },
    { name: "Bananas", category: "Fruits", price: 60, unit: "/ dozen", page: "fruits.html", image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=600&q=80" },
    { name: "Oranges", category: "Fruits", price: 90, unit: "/ kg", page: "fruits.html", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&auto=format&fit=crop&q=60" },
    { name: "Mangoes", category: "Fruits", price: 150, unit: "/ kg", page: "fruits.html", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80" },
    { name: "Fresh Milk", category: "Dairy Products", price: 55, unit: "/ litre", page: "dairy-products.html", image: "https://images.unsplash.com/photo-1550583724-b2692b85b143?auto=format&fit=crop&w=600&q=80" },
    { name: "Milk", category: "Dairy Products", price: 60, unit: "/ litre", page: "dairy-products.html", image: "https://plus.unsplash.com/premium_photo-1694481100261-ab16523c4093?w=600&auto=format&fit=crop&q=60" },
    { name: "Cheddar Cheese", category: "Dairy Products", price: 180, unit: "/ pack", page: "dairy-products.html", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80" },
    { name: "Farm Eggs", category: "Dairy Products", price: 75, unit: "/ 6 pieces", page: "dairy-products.html", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=600&q=80" },
    { name: "Basmati Rice", category: "Cooking Essentials", price: 140, unit: "/ kg", page: "cooking-essentials.html", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80" },
    { name: "Cooking Oil", category: "Cooking Essentials", price: 160, unit: "/ litre", page: "cooking-essentials.html", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80" },
    { name: "Wheat Flour", category: "Cooking Essentials", price: 65, unit: "/ kg", page: "cooking-essentials.html", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" },
    { name: "Red Lentils", category: "Cooking Essentials", price: 120, unit: "/ kg", page: "cooking-essentials.html", image: "https://images.unsplash.com/photo-1672660589379-891ab59588a8?w=600&auto=format&fit=crop&q=60" },
    { name: "Sugar", category: "Cooking Essentials", price: 50, unit: "/ kg", page: "cooking-essentials.html", image: "https://images.unsplash.com/photo-1634612831148-03a8550e1d52?w=600&auto=format&fit=crop&q=60" },
    { name: "Natural Honey", category: "Cooking Essentials", price: 220, unit: "/ jar", page: "cooking-essentials.html", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&auto=format&fit=crop&q=60" },
    { name: "Dishwashing Liquid", category: "Cleaning Essentials", price: 95, unit: "/ bottle", page: "cleaning-essentials.html", image: "https://images.unsplash.com/photo-1704819177121-cd91a0d4351c?w=600&auto=format&fit=crop&q=60" },
    { name: "Laundry Detergent", category: "Cleaning Essentials", price: 210, unit: "/ pack", page: "cleaning-essentials.html", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80" },
    { name: "Floor Cleaner", category: "Cleaning Essentials", price: 140, unit: "/ bottle", page: "cleaning-essentials.html", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80" },
    { name: "Hand Wash", category: "Cleaning Essentials", price: 85, unit: "/ bottle", page: "cleaning-essentials.html", image: "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?auto=format&fit=crop&w=600&q=80" },
    { name: "Whole Wheat Bread", category: "Bakery", price: 45, unit: "/ loaf", page: "bakery.html", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" },
    { name: "Butter Croissant", category: "Bakery", price: 55, unit: "/ piece", page: "bakery.html", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80" },
    { name: "Chocolate Muffin", category: "Bakery", price: 65, unit: "/ piece", page: "bakery.html", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=80" },
    { name: "Oat Cookies", category: "Bakery", price: 140, unit: "/ pack", page: "bakery.html", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80" }
];
function getCart() {

    let savedCart = localStorage.getItem(CART_KEY);

    if (savedCart === null) {
        return [];
    }

    try {
        return JSON.parse(savedCart);
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {

    localStorage.setItem(CART_KEY, JSON.stringify(cart));

    updateCartCount();
    renderCart();
}

function addToCart(button) {

    let card = button.closest(".card");

    let name = card.querySelector(".card-title") ? card.querySelector(".card-title").textContent.trim() : card.querySelector("h5").textContent.trim();

    let price = getProductPrice(card, button, name);
    let image = card.querySelector("img").src;

    let cart = getCart();

    let oldProduct = null;

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].id === name) {
            oldProduct = cart[i];
            break;
        }
    }

    if (oldProduct !== null) {

        oldProduct.quantity++;

    } else {

        let product = {
            id: name,
            name: name,
            price: price,
            image: image,
            quantity: 1
        };

        cart.push(product);
    }

    saveCart(cart);

    showCartMessage(name);
}

function parsePriceText(text) {
    let price = parseInt(String(text || "").replace(/[^\d]/g, ""));
    return Number.isFinite(price) ? price : null;
}

function findProductByName(name) {
    let normalizedName = normalizeSearchText(name);

    if (normalizedName === "") {
        return null;
    }

    let products = getSearchableProducts();

    for (let i = 0; i < products.length; i++) {
        if (normalizeSearchText(products[i].name) === normalizedName) {
            return products[i];
        }
    }

    return null;
}

function findProductById(id) {
    if (!id) {
        return null;
    }

    let products = getSearchableProducts();

    for (let i = 0; i < products.length; i++) {
        if (String(products[i].id) === String(id)) {
            return products[i];
        }
    }

    return null;
}

function getProductPrice(card, button, name) {
    let priceElement = card.querySelector(".product-price");
    let price = priceElement ? parsePriceText(priceElement.textContent) : null;

    if (price !== null) {
        return price;
    }

    let product = findProductById(button.dataset.productId) || findProductByName(name);

    if (product && Number.isFinite(Number(product.price))) {
        return Number(product.price);
    }

    let priceCandidates = card.querySelectorAll("p, span, small, div");

    for (let i = 0; i < priceCandidates.length; i++) {
        let text = priceCandidates[i].textContent;

        if (/\u20b9|&#8377;|rs\.?|inr|\d/.test(text.toLowerCase())) {
            price = parsePriceText(text);

            if (price !== null) {
                return price;
            }
        }
    }

    return 0;
}

function changeQuantity(id, amount) {

    let cart = getCart();

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].id === id) {

            cart[i].quantity += amount;

            if (cart[i].quantity <= 0) {
                cart.splice(i, 1);
            }

            break;
        }
    }

    saveCart(cart);
}

function removeFromCart(id) {

    let cart = getCart();

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].id === id) {

            cart.splice(i, 1);

            break;
        }
    }

    saveCart(cart);
}

function clearCart() {

    saveCart([]);
}

function formatPrice(price) {

    return "Rs. " + price;
}

function getCartTotal(cart) {

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total += getCartItemPrice(cart[i]) * cart[i].quantity;
    }

    return total;
}

function getCartItemPrice(item) {
    let price = Number(item.price);

    if (Number.isFinite(price) && price > 0) {
        return price;
    }

    let product = findProductByName(item.name);

    if (product && Number.isFinite(Number(product.price))) {
        return Number(product.price);
    }

    return 0;
}

function repairCartPrices(cart) {
    let repaired = false;

    for (let i = 0; i < cart.length; i++) {
        let fixedPrice = getCartItemPrice(cart[i]);

        if (!Number.isFinite(Number(cart[i].price)) || Number(cart[i].price) <= 0) {
            cart[i].price = fixedPrice;
            repaired = true;
        }
    }

    if (repaired) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
}

function getCartCount(cart) {

    let count = 0;

    for (let i = 0; i < cart.length; i++) {
        count += cart[i].quantity;
    }

    return count;
}

function updateCartCount() {

    let count = getCartCount(getCart());
    let badges = document.querySelectorAll(".cart-count");

    badges.forEach(function (badge) {
        badge.textContent = count;

        if (count > 0) {
            badge.classList.remove("d-none");
        } else {
            badge.classList.add("d-none");
        }
    });
}

function escapeCartId(id) {
    return id.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function showCartMessage(name) {

    let toast = document.getElementById("cartToast");
    let toastProductName = document.getElementById("toastProductName");

    if (!toast) {
        let toastContainer = document.createElement("div");
        toastContainer.className = "toast-container position-fixed bottom-0 end-0 p-3";
        toastContainer.innerHTML = `
            <div id="cartToast" class="toast border-0 text-bg-success">
                <div class="d-flex">
                    <div class="toast-body"><strong id="toastProductName"></strong> added to your cart.</div>
                    <button class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>
        `;
        document.body.appendChild(toastContainer);
        toast = document.getElementById("cartToast");
        toastProductName = document.getElementById("toastProductName");
    }

    if (toast && toastProductName && window.bootstrap) {
        toastProductName.textContent = name;
        bootstrap.Toast.getOrCreateInstance(toast).show();
        return;
    }

    let message = document.createElement("div");

    message.textContent = name + " added to cart";
    message.className = "cart-float-message";
    message.style.position = "fixed";
    message.style.right = "20px";
    message.style.bottom = "20px";
    message.style.zIndex = "1080";
    message.style.background = "#198754";
    message.style.color = "#fff";
    message.style.padding = "12px 20px";
    message.style.borderRadius = "8px";
    message.style.boxShadow = "0 .75rem 1.5rem rgba(0,0,0,.18)";

    document.body.appendChild(message);

    setTimeout(function () {
        message.remove();
    }, 2000);
}

function checkoutNow() {
    let cart = getCart();

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let user = null;
    let savedUser = localStorage.getItem("homedokan-current-user");

    if (savedUser !== null) {
        try {
            user = JSON.parse(savedUser);
        } catch (error) {
            user = null;
        }
    }

    if (user === null){
        localStorage.setItem("homedokan-after-login", "cart.html");
        alert("Please login or create an account to continue your order.");
        window.location.href = "login.html";
        return;
    }

    alert("Thank you for shopping with HomeDokan! Your order has been placed.");
    clearCart();
}

function renderCart() {

    let cart = getCart();
    repairCartPrices(cart);

    let cartItems = document.getElementById("cartItems");
    let cartTotal = document.getElementById("cartTotal");
    let cartPageTotal = document.getElementById("cartPageTotal");
    let cartSubtotal = document.getElementById("cartSubtotal");
    let cartDelivery = document.getElementById("cartDelivery");
    let cartSummary = document.getElementById("cartSummary");
    let emptyCart = document.getElementById("emptyCart");
    let cartItemCountText = document.getElementById("cartItemCountText");

    updateCartCount();

    if (!cartItems) {
        return;
    }

    let subtotal = getCartTotal(cart);
    let delivery = cart.length === 0 || subtotal >= 499 ? 0 : 40;
    let total = subtotal + delivery;
    let cartCount = getCartCount(cart);

    if (emptyCart) {
        emptyCart.style.display = cart.length === 0 ? "block" : "none";
    }

    if (cartSummary) {
        if (cart.length === 0) {
            cartSummary.classList.add("d-none");
        } else {
            cartSummary.classList.remove("d-none");
        }
    }

    let html = "";

    for (let i = 0; i < cart.length; i++) {

        let item = cart[i];
        let safeId = escapeCartId(item.id);
        let itemPrice = getCartItemPrice(item);
        let itemTotal = itemPrice * item.quantity;

        html += `
        <div class="cart-item-card bg-white border rounded-3 shadow-sm p-3 p-md-4 mb-3">
            <div class="row g-3 align-items-center">
                <div class="col-4 col-md-2">
                    <img src="${item.image}" class="cart-item-img rounded-3" alt="${item.name}">
                </div>

                <div class="col-8 col-md-4">
                    <span class="badge text-bg-success-subtle text-success border border-success-subtle mb-2">In stock</span>
                    <h5 class="fw-bold mb-1">${item.name}</h5>
                    <p class="text-secondary small mb-0">Fresh grocery item</p>
                </div>

                <div class="col-6 col-md-2">
                    <p class="text-secondary small mb-1">Price</p>
                    <p class="fw-bold mb-0">${formatPrice(itemPrice)}</p>
                </div>

                <div class="col-6 col-md-2">
                    <p class="text-secondary small mb-1">Quantity</p>
                    <div class="quantity-control d-inline-flex align-items-center border rounded-pill bg-light">
                        <button class="btn btn-sm border-0" onclick="changeQuantity('${safeId}', -1)" aria-label="Decrease ${item.name}">-</button>
                        <span class="fw-bold px-2">${item.quantity}</span>
                        <button class="btn btn-sm border-0" onclick="changeQuantity('${safeId}', 1)" aria-label="Increase ${item.name}">+</button>
                    </div>
                </div>

                <div class="col-12 col-md-2 text-md-end">
                    <p class="text-secondary small mb-1">Item total</p>
                    <p class="fw-bold fs-5 mb-2">${formatPrice(itemTotal)}</p>
                    <button class="btn btn-link text-danger p-0 text-decoration-none" onclick="removeFromCart('${safeId}')">Remove</button>
                </div>
            </div>
        </div>
        `;
    }

    cartItems.innerHTML = html;

    if (cartSubtotal) {
        cartSubtotal.textContent = formatPrice(subtotal);
    }

    if (cartDelivery) {
        cartDelivery.textContent = delivery === 0 ? "Free" : formatPrice(delivery);
    }

    if (cartTotal) {
        cartTotal.textContent = formatPrice(total);
    }

    if (cartPageTotal) {
        cartPageTotal.textContent = "Cart subtotal: " + formatPrice(subtotal);
    }

    if (cartItemCountText) {
        cartItemCountText.textContent = cartCount + (cartCount === 1 ? " item" : " items");
    }
}

function currentPageName() {
    let page = window.location.pathname.split("/").pop().toLowerCase();
    return page || "index.html";
}

function isSearchAllowedPage() {
    return SEARCH_PAGES.indexOf(currentPageName()) !== -1;
}

function getSearchCards() {
    let cards = Array.from(document.querySelectorAll(".product-card, .category-card, main .card, section .card"));

    return cards.filter(function (card) {
        return !card.closest("footer") && !card.closest(".offcanvas") && !card.closest("#global-navbar") && !card.closest("nav");
    });
}

function setSearchCardVisible(card, visible) {
    let wrapper = card.closest(".col-12, .col, [class*='col-']");

    if (wrapper) {
        wrapper.classList.toggle("d-none", !visible);
    } else {
        card.classList.toggle("d-none", !visible);
    }
}

function ensureSearchStatus(input) {
    let existing = input.parentElement.querySelector(".search-status");

    if (existing) {
        return existing;
    }

    let status = document.createElement("div");
    status.className = "search-status small text-warning-emphasis mt-1 text-start";
    input.parentElement.appendChild(status);
    return status;
}

function getSearchableProducts() {
    if (window.CardGenerator && typeof CardGenerator.getAllProducts === "function") {
        return CardGenerator.getAllProducts().map(function (product) {
            let page = product.page;

            if (!page) {
                let categoryKey = (product.category || "").toLowerCase().replace(/\s+/g, "-");
                page = categoryKey === "dairy" ? "dairy-products.html" : categoryKey + ".html";
            }

            return Object.assign({}, product, { page: page });
        });
    }

    return SEARCH_PRODUCTS;
}

function cardMatchesSearch(card, query) {
    let searchText = normalizeSearchText(query);

    if (searchText === "") {
        return true;
    }

    let title = card.querySelector(".card-title, h5, h4, h3");
    let image = card.querySelector("img");
    let cardText = title ? title.textContent : card.textContent;

    if (image && image.alt) {
        cardText += " " + image.alt;
    }

    cardText = normalizeSearchText(cardText);

    return searchText.split(" ").every(function (word) {
        return cardText.indexOf(word) !== -1;
    });
}

function filterPageProducts(query, input) {
    let status = ensureSearchStatus(input);
    let cards = getSearchCards();
    let visibleCount = 0;

    cards.forEach(function (card) {
        let visible = cardMatchesSearch(card, query);
        setSearchCardVisible(card, visible);

        if (visible && query.trim() !== "") {
            visibleCount++;
        }
    });

    if (query.trim() === "") {
        status.textContent = "";
    } else if (visibleCount === 0) {
        status.textContent = "No matching groceries found. Press Enter to view the search page.";
    } else {
        status.textContent = visibleCount + (visibleCount === 1 ? " product shown" : " products shown");
    }
}

function normalizeSearchText(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function getSearchResults(query) {
    let searchText = normalizeSearchText(query);

    if (searchText === "") {
        return [];
    }

    let searchableProducts = getSearchableProducts();

    let nameMatches = searchableProducts.filter(function (product) {
        return normalizeSearchText(product.name).indexOf(searchText) !== -1;
    });

    if (nameMatches.length > 0) {
        return nameMatches;
    }

    return searchableProducts.filter(function (product) {
        let haystack = normalizeSearchText(product.name + " " + product.category + " groceries " + product.unit);
        return searchText.split(" ").every(function (word) {
            return haystack.indexOf(word) !== -1;
        });
    });
}

function goToSearchResults(query) {
    let searchText = query.trim();

    if (searchText === "") {
        return;
    }

    window.location.href = "search-results.html?q=" + encodeURIComponent(searchText);
}

function renderSearchResultsPage() {
    let grid = document.getElementById("searchResultsGrid");
    let title = document.getElementById("searchResultsTitle");
    let summary = document.getElementById("searchResultsSummary");
    let input = document.getElementById("searchResultsInput");

    if (!grid) {
        return;
    }

    let params = new URLSearchParams(window.location.search);
    let query = params.get("q") || "";
    let results = getSearchResults(query);

    if (input) {
        input.value = query;
    }

    if (title) {
        title.textContent = query.trim() === "" ? "Search Products" : "Search results for \"" + query + "\"";
    }

    if (summary) {
        if (query.trim() === "") {
            summary.textContent = "Type a product name and press Enter.";
        } else if (results.length === 0) {
            summary.textContent = "No matching products found.";
        } else {
            summary.textContent = results.length + (results.length === 1 ? " product found" : " products found");
        }
    }

    if (query.trim() === "") {
        grid.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info mb-0">Search for milk, rice, apple, bread, oil, cleaner or any grocery item.</div>
            </div>
        `;
        return;
    }

    if (results.length === 0) {
        grid.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning mb-0">No products found. Try searching for milk, rice, apple, bread, oil or cleaner.</div>
            </div>
        `;
        return;
    }

    grid.innerHTML = results.map(function (product) {
        return `
            <div class="col">
                <div class="card h-100 border-0 shadow-sm product-card">
                    <div class="ratio ratio-4x3 bg-light"><img src="${product.image}" class="w-100 h-100 object-fit-cover rounded-top" alt="${product.name}"></div>
                    <div class="card-body d-flex flex-column">
                        <small class="text-success text-uppercase fw-semibold mb-2">${product.category}</small>
                        <h5 class="card-title">${product.name}</h5>
                        <p><span class="product-price text-success fw-bold fs-5">&#8377;${product.price}</span> <small class="text-secondary fw-normal">${product.unit}</small></p>
                        <div class="d-flex flex-column gap-2 mt-auto">
                            <button class="btn btn-success add-to-cart">Add to Cart</button>
                            <a href="${product.page}" class="btn btn-outline-success">View Category</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    grid.querySelectorAll(".add-to-cart").forEach(function (button) {
        button.addEventListener("click", function () {
            addToCart(button);
        });
    });
}

function setupSearchBar() {
    if (!isSearchAllowedPage()) {
        return;
    }

    let inputs = document.querySelectorAll(".bg-dark input[type='text'], .bg-dark input[type='search'], #searchResultsInput");

    inputs.forEach(function (input) {
        input.setAttribute("type", "search");
        input.setAttribute("aria-label", "Search products");
        input.setAttribute("autocomplete", "off");

        input.addEventListener("input", function () {
            filterPageProducts(input.value, input);
        });

        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                goToSearchResults(input.value);
            }
        });

        let form = input.closest("form");
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                goToSearchResults(input.value);
            });
        }
    });

    renderSearchResultsPage();
}

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            addToCart(button);

        });

    });

    renderCart();
    updateCartCount();
    setupSearchBar();
});

window.addEventListener("storage", function (event) {
    if (event.key === CART_KEY) {
        updateCartCount();
        renderCart();
    }
});
