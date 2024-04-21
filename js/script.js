$(document).ready(function() {
  let loggedInUser = localStorage.getItem('loggedInAccount');

  if (loggedInUser) {
      $("#username-greeting").text("Xin chào, " + loggedInUser);
      $(".login-link").attr("href", "../index.html");
      $(".login-text").text("Đăng xuất");
      $(".login-link").click(function (e) { 
        localStorage.removeItem('loggedInAccount');
        window.onload;
      });
  } else {
      $("#username-greeting").text("Xin chào, ");
      $(".login-link").attr("href", "../html/dang-nhap.html");
      $(".login-text").text("Đăng nhập");
  }

  //Phân trang
  let products = JSON.parse(localStorage.getItem("products"));
  let quantityProducts = products.length;
  const productsPerPage = 12;
  let currentPage = 1;
  
  function displayProductsOnPage(pageNumber) {
    let startIndex = (pageNumber - 1) * productsPerPage;
    let endIndex = Math.min(startIndex + productsPerPage, quantityProducts);
    let pageContent = document.getElementById("home-products");
    pageContent.innerHTML = "";
    for(let i = startIndex; i < endIndex; i += 4) {
      let row = document.createElement("div");
      row.className = "container row product-list mb-3";
      for (let j = i; j < i + 4 && j < endIndex; j++) {
        let product = products[j];

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

        row.appendChild(col);
      }

    pageContent.appendChild(row);
    }
  }

  window.onload = displayProductsOnPage(currentPage);
  window.onload = $("#firstPage").css("background", "#ff6319");
  

  $("#prevPage").click(function() {
    currentPage--;
    if(currentPage > 0) 
      currentPage = currentPage;
    else currentPage = 1;

    if(currentPage == 1) {
      $("#firstPage").css("background", "#ff6319");
      $("#secondPage").css("background", "");
    }
    else if(currentPage == 2) {
      $("#secondPage").css("background", "#ff6319");
      $("#firstPage").css("background", "");
    }
    displayProductsOnPage(currentPage);
  });

  $("#nextPage").click(function() {
    currentPage++;
    if(currentPage > 2) currentPage = 2;

   if(currentPage == 2) {
      $("#secondPage").css("background", "#ff6319");
      $("#firstPage").css("background", "");
    }
    displayProductsOnPage(currentPage);
  });

  $("#firstPage").click(function() {
    currentPage = 1;
    displayProductsOnPage(currentPage);
    $(this).css("background", "#ff6319");
    $("#secondPage").css("background", "");
  });

  $("#secondPage").click(function() {
    currentPage = 2;
    displayProductsOnPage(currentPage);
    $(this).css("background", "#ff6319");
    $("#firstPage").css("background", "");
  });

  $(document).on("click", ".card-body", function (e) { 
    e.preventDefault();
    let idHelmet = $(this).attr("id");
    localStorage.setItem('clickedItem', idHelmet);
    window.location.href = "../html/mu-bao-hiem.html";
  });

  // window.onload = localStorage.removeItem('clickedItem');
  let clickedItem = localStorage.getItem('clickedItem');
  if(clickedItem) {
    $(".homepage").click(function (e) { 
      e.preventDefault();
      localStorage.removeItem('clickedItem');
    });
  }

  let favourite = JSON.parse(localStorage.getItem("favourite")) || [];
  let carts = JSON.parse(localStorage.getItem("carts")) || [];
  $("#favourite").text(favourite.length);
  $("#cart").text(carts.length);

  function sortByPrice(order) {
    products.sort(function(a, b) {
      if (order === 'higher') {
        return b.price - a.price;
      } else if (order === 'lower') {
        return a.price - b.price;
      }
    });
    displayProductsOnPage(currentPage);
  }
  
  $("#slSort").change(function() {
    let selectedOption = $(this).val();
    sortByPrice(selectedOption);
  });

  function filterProductsByCategory() {
    let selectedCategories = [];
    $("input[type='checkbox']:checked").each(function() {
      selectedCategories.push($(this).attr("name"));
    });
  
    if (selectedCategories.length === 0) {
      displayProductsOnPage(currentPage);
    } 
    else {
      let filteredProducts = products.filter(function(product) {
        return selectedCategories.includes(product.category);
      }); 
      displayFilteredProducts(filteredProducts);
    }
    
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
  
  $("input[type='checkbox']").change(function() {
    filterProductsByCategory();
  });

  $("#btnPrice").click(function() {
    let fromPrice = $("#fromPrice").val();
    let toPrice = $("#toPrice").val();
  
    if (fromPrice !== '' && toPrice !== '') {
      let filteredProducts = products.filter(function(product) {
        return product.price >= parseInt(fromPrice) && product.price <= parseInt(toPrice);
      });
      displayFilteredProducts(filteredProducts);
    } else {
      displayProductsOnPage(currentPage);
    }
  });

  document.getElementById("btnClear").addEventListener("click", function() {
    document.getElementById("slSort").selectedIndex = 0;

    document.getElementById("cbFullface").checked = false;
    document.getElementById("cb1phan2").checked = false;
    document.getElementById("cb3phan4").checked = false;
    document.getElementById("cbChinup").checked = false;
    document.getElementById("cbKid").checked = false;

    document.getElementById("fromPrice").value = "";
    document.getElementById("toPrice").value = "";
    window.location.reload();
  });

  function displayBestSeller() {
    let pageBestSeller = document.getElementById("best-seller");
    pageBestSeller.innerHTML = "";
      let row = document.createElement("div");
      row.className = "container row product-list mb-3 justify-content-center m-3";
    for(let i = 0; i < 4; i++) {
      let productBS = products[i];

        let col = document.createElement("div");
        col.className = "col-3";

        let card = document.createElement("div");
        card.className = "card";

        let cardBody = document.createElement("a");
        cardBody.className = "card-body";
        cardBody.id = productBS.id;
        cardBody.href = "../html/mu-bao-hiem.html";

        let img = document.createElement("img");
        img.src = productBS.img;
        img.className = "card-img";

        let title = document.createElement("h6");
        title.className = "card-title title-center form-control mb-3 pb-3 font-weight-bold";
        title.textContent = productBS.title;
        title.style.border = "unset"; 
        title.style.fontSize = "14px";
        title.style.height = "3rem";

        let price = document.createElement("span");
        price.className = "card-price mt-3 mb-3";
        price.textContent = "Giá: " + productBS.price + " VND";
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

        row.appendChild(col);

      pageBestSeller.appendChild(row);
    }
  }
  window.onload = displayBestSeller();
  
});


