// Card Generator - Renders product cards dynamically
class CardGenerator {
  /**
   * Generate product cards HTML
   * @param {Array} products - Array of product objects
   * @param {Boolean} showCategory - Whether to show category label
   * @returns {String} HTML string of cards
   */
  static generateCards(products, showCategory = false) {
    return products.map(product => `
<div class="col">
  <div class="card h-100 border-0 shadow-sm product-card">
    <div class="ratio ratio-4x3 bg-light"><img src="${product.image}" class="w-100 h-100 object-fit-cover rounded-top" alt="${product.name}"></div>
    <div class="card-body d-flex flex-column">
      ${showCategory ? `<small class="text-success text-uppercase fw-semibold mb-2">${product.category || ''}</small>` : ''}
      <h5 class="card-title">${product.name}</h5>
      <p class="text-success fw-bold fs-5">&#8377;${product.price} <small class="text-secondary fw-normal">${product.unit}</small></p>
      <button class="btn btn-success add-to-cart" data-product-id="${product.id}">Add to Cart</button>
    </div>
  </div>
</div>`
    ).join('');
  }

  /**
   * Render cards into a container
   * @param {String} containerId - ID of the container element
   * @param {Array} products - Array of product objects
   * @param {Boolean} showCategory - Whether to show category label
   */
  static renderCards(containerId, products, showCategory = false) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = this.generateCards(products, showCategory);
      this.attachCartListeners();
    }
  }

  /**
   * Attach event listeners to add-to-cart buttons
   */
  static attachCartListeners() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
      if (typeof addToCart === 'function') {
        button.addEventListener('click', () => addToCart(button));
      }
    });
  }

  /**
   * Get products by category
   * @param {String} category - Category name
   * @returns {Array} Array of products in the category
   */
  static getProductsByCategory(category) {
    const products = productsData[category] || [];
    // Add category to each product for display
    return products.map(p => ({ ...p, category: category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') }));
  }

  /**
   * Get all products from all categories
   * @returns {Array} Array of all products
   */
  static getAllProducts() {
    let allProducts = [];
    for (const category in productsData) {
      const products = productsData[category].map(p => ({
        ...p,
        category: category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')
      }));
      allProducts = allProducts.concat(products);
    }
    return allProducts;
  }
}
