$(document).ready(function () {
  let products = JSON.parse(localStorage.getItem("products"));

    function searchProducts() {
        var keyword = document.getElementById("searchInput").value.toLowerCase();
        var filteredProducts = products.filter(function(product) {
            return product.title.toLowerCase().includes(keyword);
        });
    
        displayFilteredProducts(filteredProducts);
    }

    
  function displayFilteredProducts(products) {
    $("#home-products").empty();
    products.forEach(function(product) {
      let col = document.createElement("div");
    col.className = "col-3";

    let card = document.createElement("div");
    card.className = "card";

    let cardBody = document.createElement("a");
    cardBody.className = "card-body";
    cardBody.id = product.id;
    cardBody.href = "../html/mu-bao-hiem.html";

    let img = document.createElement("img");
    img.src = product.img;
    img.className = "card-img";

    let title = document.createElement("h6");
    title.className = "card-title title-center form-control mb-3 pb-3 font-weight-bold";
    title.textContent = product.title;
    title.style.border = "unset"; 
    title.style.fontSize = "14px";
    title.style.height = "3rem";

    let price = document.createElement("span");
    price.className = "card-price mt-3 mb-3";
    price.textContent = "Giá: " + product.price + " VND";
    price.style.color = "black";

    let button = document.createElement("button");
    button.className = "card-btn form-control";
    button.style.background = "#ff6319";
    button.textContent = "Mua ngay";
    button.style.color = "white"; 

    cardBody.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(button);

    card.appendChild(cardBody);
    
    col.appendChild(card);

    $("#home-products").append(col);
    });
  }

  document.getElementById("btnSearch").addEventListener("click", function() {
    searchProducts();
  });

  document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      searchProducts();
    }

  });
    
});