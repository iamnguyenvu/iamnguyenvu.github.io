$(document).ready(function () {
    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    let products = JSON.parse(localStorage.getItem("products"));
    
    function updateQuantityAndTotal(inputQuantity, cart, product, totalCell) {
        inputQuantity.addEventListener('change', function() {
            let newQuantity = parseInt(this.value);
            if (newQuantity < 0) {
                newQuantity = 0; 
            }
            cart.quantity = newQuantity;
            this.value = newQuantity;
            totalCell.textContent = product.price * cart.quantity + " VND";
            localStorage.setItem("carts", JSON.stringify(carts));
            updateTotalAmount();
        });
    }

    function updateTotalAmount() {
        let totalAmount = 0;
        carts.forEach(cart => {
            products.forEach(product => {
                if (cart.productId === product.id) {
                    totalAmount += product.price * cart.quantity;
                }
            });
        });
        $("#totalAmount").text(totalAmount + " VND");
    }

    $('input[type="checkbox"]').change(function() {
        updateTotalAmount();
    });

    //Thêm sản phẩm vào bảng giỏ hàng   
    for(let i = 0; i < carts.length; i++) {
        for(let j = 0; j < products.length; j++) {
            if (carts[i].productId === products[j].id) {
                let cart = carts[i];
                let product = products[j];
                const tableBody = document.getElementById("productTableBody");

                const row = document.createElement("tr");

                const checkboxCell = document.createElement("td");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.className = "ml-5";
                let img = document.createElement("img");
                img.src = product.img;
                img.style.width = "80px";
                img.className = "m-0 ml-3";
                let title = document.createElement("label");
                title.className = "m-0 ml-3";
                title.innerHTML = product.title;
                checkboxCell.appendChild(checkbox); 
                checkboxCell.appendChild(img);  
                checkboxCell.appendChild(title);
                row.appendChild(checkboxCell);

                const priceCell = document.createElement("td");
                priceCell.style.verticalAlign = "middle";
                priceCell.textContent = product.price + " VND";
                row.appendChild(priceCell);

                const quantityCell = document.createElement("td");
                quantityCell.style.verticalAlign = "middle";
                const inputQuantity = document.createElement("input");
                inputQuantity.type = "number";
                inputQuantity.value = cart.quantity;
                inputQuantity.style.width = "80px";
                quantityCell.appendChild(inputQuantity);
                row.appendChild(quantityCell);

                const totalCell = document.createElement("td");
                totalCell.style.verticalAlign = "middle";
                totalCell.textContent = product.price * cart.quantity + " VND";
                row.appendChild(totalCell);

                updateQuantityAndTotal(inputQuantity, cart, product, totalCell);

                const actionCell = document.createElement("td");
                actionCell.style.verticalAlign = "middle";
                const deleteButton = document.createElement("button");
                deleteButton.className = "btn text-white";
                deleteButton.style.backgroundColor = "#ff6319";
                deleteButton.textContent = "Xóa";
                deleteButton.addEventListener("click", function() {
                    removeProductFromCart(i);
                    tableBody.removeChild(row);
                    updateTotalAmount();
                });
                actionCell.appendChild(deleteButton);
                row.appendChild(actionCell);

                tableBody.appendChild(row);
                row.style.borderBottom = "2px solid #dddddd";
                break;
            }
        }
    }

    function removeProductFromCart(index) {
        carts.splice(index, 1);
        localStorage.setItem("carts", JSON.stringify(carts));
    }

    let favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    $("#favourite").text(favourite.length);
    $("#cart").text(carts.length);

    // function calculateTotalAmount() {
    //     let totalAmount = 0;
    //     carts.forEach(cart => {
    //         products.forEach(product => {
    //             if (cart.productId === product.id) {
    //                 totalAmount += product.price * cart.quantity;
    //             }
    //         });
    //     });
    //     return totalAmount;
    // }

    // function updateTotalAmount() {
    //     let totalAmount = calculateTotalAmount();
    //     $("#totalAmount").text(totalAmount + " VND");
    // }

    updateTotalAmount();
});
