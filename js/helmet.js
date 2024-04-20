$(document).ready(function () {
    let id = localStorage.getItem('clickedItem');
    let products = JSON.parse(localStorage.getItem("products"));
    let img = document.getElementById("helmet-img");
    let title = document.getElementById("helmet-title");
    let category = document.getElementById("helmet-category");
    let price = document.getElementById("helmet-price");
    let desc = document.getElementById("helmet-desc");

    for(let i = 0; i < products.length; i++) {
        if(products[i].id === parseInt(id)) {
            let product = products[i]; 
            img.setAttribute("src", product.img);
            title.innerHTML = product.title;
            let titleCate;
            switch(product.category) {
                case "Fullface": {
                    titleCate = "Mũ bảo hiểm Fullface";
                    break;
                }
                case "3phan4": {
                    titleCate = "Mũ bảo hiểm 3/4 đầu";
                    break;
                }
                case "1phan2": {
                    titleCate = "Mũ bảo hiểm 1/2 đầu";
                    break;
                }
                case "chinup": {
                    titleCate = "Mũ bảo hiểm lật cằm";
                    break;
                }
                case "kid": {
                    titleCate = "Mũ bảo hiểm trẻ em";
                    break;
                }
            }
            category.innerHTML = "Phân loại: " + titleCate;
            price.innerHTML = product.price + " VND";
            $(".subDesc").text(product.title);
            break;
        }
    }

    const quantityInput = document.getElementById("quantityInput");
    const btnMinus = document.querySelector(".btnMinus");
    const btnPlus = document.querySelector(".btnPlus");

    btnMinus.addEventListener("click", function() {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

    btnPlus.addEventListener("click", function() {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

    let favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    document.querySelector("#btnAddtoFav").addEventListener("click", function() {
        let flag = false;
        for(let i = 0; i < favourite.length; i++) {
            if(favourite[i].productId == parseInt(id)){
                flag = true;
                break;
            }
        }
        if(!flag){
            favourite.push({
                productId: parseInt(id),
            });
        }
        
        localStorage.setItem('favourite', JSON.stringify(favourite));
    });

    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    document.querySelector("#btnAddtoCart").addEventListener("click", function() {
        let found = false;
        for(let i = 0; i < carts.length; i++) {
            if(carts[i].productId == parseInt(id)){
                carts[i].quantity += parseInt(quantityInput.value);
                found = true;
                break;
            }
            
        }
        if(!found){
            carts.push({
                productId: parseInt(id),
                quantity: parseInt(quantityInput.value)
            });
        }
        
        localStorage.setItem('carts', JSON.stringify(carts));
    });
    // window.onload =  localStorage.removeItem('carts');
});


// function displayDetailProduct() {
    //     for(let i = 0; i < products.length; i++) {
    //         if(products[i].id === id) {
    //             let product = products[i];  
    
    //             // //leftSection
    //             // let leftSection = document.createElement('section');
    //             // leftSection.className = "col-5 img";
    
    //             // let containerImg = document.createElement('div');
    //             // containerImg.className = "container p-5";
    
    //             // let imgContent = document.createElement('img');
    //             // imgContent.className = "img-helmet card-img";
    //             // imgContent.src = product.img;
    
    //             // //Favourite
    //             // let favRow = document.createElement('div');
    //             // favRow.className = "row m-1";
    
    //             // let colBlank = document.createElement('div');
    //             // colBlank.className = "col";
    
    //             // let colFav = document.createElement('div');
    //             // colFav.className = "col";
    //             // colFav.style.borderLeft = "1px solid gray";
    
    //             // let btnFav = document.createElement('button');
    //             // btnFav.className = "btn btn-light";
    //             // btnFav.style.border = "unset";
                
    //             // let rowBtnFav = document.createElement('div');
    //             // rowBtnFav.className = "row";
    //             // rowBtnFav.style.color = "#ff6319";
    
    //             // let iconFav = document.createElement('i');
    //             // iconFav.className = "fa-regular fa-heart mr-3 pl-3";
    //             // iconFav.style.fontSize = "1.5em";
    
    //             // let textBtnFav = document.createElement('span');
    //             // textBtnFav.innerHTML = "Yêu thích";
    
    //             // rowBtnFav.appendChild(iconFav);
    //             // rowBtnFav.appendChild(textBtnFav);
    //             // btnFav.appendChild(rowBtnFav);
    //             // colFav.appendChild(btnFav);
    //             // favRow.appendChild(colBlank);
    //             // favRow.appendChild(colFav);
    
    //             // containerImg.appendChild(imgContent);
    //             // leftSection.appendChild(containerImg);
    //             // leftSection.appendChild(favRow);
    
    
    //             // //RightSection
    //             // let RightSection = document.createElement("section");
    //             // RightSection.className = "col-7  helmet-content";
    
    //             // let containerTopRS = document.createElement("div");
    //             // containerTopRS.className = "container p-5 m-3";
    
    //             // let firstRow = document.createElement("div");
    //             // firstRow.className = "row m-3";
    //             // let title = document.createElement("h2");
    //             // title.className = "helmet-title text-center font-weight-bold";
    //             // title.innerHTML = product.title;
    //             // firstRow.appendChild(title);
    
    //             // let secondRow = document.createElement("div");
    //             // secondRow.className = "row m-3";
    //             // let category = document.createElement("h5");
    //             // category.className = "helmet-category";
    //             // let titleCate;
    //             // switch(product.category) {
    //             //     case "Fullface": {
    //             //         titleCate = "Mũ bảo hiểm Fullface";
    //             //         break;
    //             //     }
    //             //     case "3phan4": {
    //             //         titleCate = "Mũ bảo hiểm 3/4 đầu";
    //             //         break;
    //             //     }
    //             //     case "1phan2": {
    //             //         titleCate = "Mũ bảo hiểm 1/2 đầu";
    //             //         break;
    //             //     }
    //             //     case "chinup": {
    //             //         titleCate = "Mũ bảo hiểm lật cằm";
    //             //         break;
    //             //     }
    //             //     case "kid": {
    //             //         titleCate = "Mũ bảo hiểm trẻ em";
    //             //         break;
    //             //     }
    //             // }
    //             // category.innerHTML = "Phân loại: " + titleCate;
    //             // secondRow.appendChild(category);
    
    //             // let thirdRow = document.createElement("div");
    //             // thirdRow.className = "row m-3";
    //             // let colStar = document.createElement("div");
    //             // colStar.className = "col";
    //             // colStar.style.borderRight = "1px solid gray";
    //             // colStar.style.color = "#ff6319";
    //             // let textStar = document.createElement("div");
    //             // textStar.className = "text-center";
    //             // let iconStar = document.createElement("i");
    //             // iconStar.className = "fa-solid fa-star";
    //             // let colReview = document.createElement( "div" );
    //             // colReview.className = "col";
    //             // let textReview = document.createElement("h5");
    //             // textReview.className = "text-center";
    //             // textReview.innerHTML = "Đánh giá";
    //             // colReview.appendChild(textReview);
    //             // textStar.appendChild(iconStar);
    //             // textStar.appendChild(iconStar);
    //             // textStar.appendChild(iconStar);
    //             // textStar.appendChild(iconStar);
    //             // textStar.appendChild(iconStar);
    //             // colStar.appendChild(textStar);
    //             // thirdRow.appendChild(colStar);
    //             // thirdRow.appendChild(colReview);
    
    //             // let priceRow = document.createElement("div");
    //             // priceRow.className = "row m-3";
    
    //             // pageContent.appendChild(leftSection);
    //             // break;

                

    //         }
            
    
    //     }
    
    // }
    // displayDetailProduct();
    // $(".img-helmet").attr("src", value);