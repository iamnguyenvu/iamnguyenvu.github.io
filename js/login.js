$(document).ready(function() {
    $("#errUsername, #errPassword").css({"color": "red", "font-size": "14px"});

    $("#btnLogin").click(function(e) {
        e.preventDefault();

        let username = $("#ipUsername").val();
        let password = $("#ipPassword").val();
        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        let found = false;
        
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].username === username && accounts[i].password === password) {
                found = true;
                let loggedInUser = accounts[i].username;
                localStorage.setItem('loggedInAccount', JSON.stringify(loggedInUser));
                window.location.href = "../index.html";
                break;
            }
        }

        if (!found) {
            $("#errUsername").text("Tên đăng nhập hoặc mật khẩu không chính xác");
            $("#ipPassword").val("");
        }
    });
});
