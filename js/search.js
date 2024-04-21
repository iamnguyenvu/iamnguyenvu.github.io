$(document).ready(function () {
    let productAll = JSON.parse(localStorage.getItem('products')).filter(item => item.status == 1);
    function searchProducts() {
        let valeSearchInput = document.querySelector('.searchInput').value;
        let valueCategory = document.getElementById("btnSearch").value;

        let result = valueCategory == "Tất cả" ? productAll : productAll.filter((item) => {
            return item.category == valueCategory;
        });

        result = valeSearchInput == "" ? result : result.filter(item => {
            return item.title.toString().toUpperCase().includes(valeSearchInput.toString().toUpperCase());
        })

        showHomeProduct(result)
    }
    $("#btnSearch").click(function () { 
        searchProducts();
    });
});