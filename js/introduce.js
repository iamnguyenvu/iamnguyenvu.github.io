$(document).ready(function () {
    let favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    let carts = JSON.parse(localStorage.getItem("carts")) || [];
    $("#favourite").text(favourite.length);
    $("#cart").text(carts.length);
});