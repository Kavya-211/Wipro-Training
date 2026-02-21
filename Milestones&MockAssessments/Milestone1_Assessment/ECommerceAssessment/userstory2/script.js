const list = document.getElementById("productList");
const loading = document.getElementById("loading");
const filter = document.getElementById("categoryFilter");
const sort = document.getElementById("sortPrice");

let allProducts = [];

async function fetchProducts() {
  try {
    const res = await fetch("products.json");
    allProducts = await res.json();
    loading.style.display = "none";
    displayProducts(allProducts);
  } catch {
    loading.textContent = "Error loading products";
  }
}

function displayProducts(products) {
  list.innerHTML = "";
  products.forEach(p => {
    list.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm product-card">
          <img src="${p.image}" class="card-img-top" alt="${p.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${p.name}</h5>
            <p class="text-muted">Category: ${p.category}</p>
            <p class="fw-bold text-primary">$${p.price}</p>
          </div>
        </div>
      </div>`;
  });
}

filter.addEventListener("change", applyFilters);
sort.addEventListener("change", applyFilters);

function applyFilters() {
  let filtered = filter.value === "all"
    ? allProducts
    : allProducts.filter(p => p.category === filter.value);

  if (sort.value === "low") filtered.sort((a,b)=>a.price-b.price);
  if (sort.value === "high") filtered.sort((a,b)=>b.price-a.price);

  displayProducts(filtered);
}

fetchProducts();
