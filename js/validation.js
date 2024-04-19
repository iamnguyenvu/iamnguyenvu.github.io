$(document).ready(function() {
    $("#errFullname, #errPhoneNumber, #errUsername, #errPassword, #errConfirmPassword, #errEmail").css({"color": "red", "font-size": "14px"});

    function isValidFullname() {
        var fullname = /^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/;
        if ($("#ipFullname").val() === "") {
            $("#errFullname").text("Không được để trống!");
            return false;
        } else if (!fullname.test($("#ipFullname").val())) {
            $("#errFullname").text("Họ và tên không hợp lệ!");
            return false;
        } else {
            $("#errFullname").text("");
            return true;
        }
    }

    function isValidPhoneNumber() {
        const sdt = $("#ipPhoneNumber").val();
        const sdtRegex = /^((09|03|07|08|05)+([0-9]{8}))/g;
        const sdtError = $("#errPhoneNumber");

        if (sdt === "") {
            sdtError.text("Số điện thoại không được để trống.");
            return false;
        } else if (!sdtRegex.test(sdt)) {
            sdtError.text("Số điện thoại không hợp lệ.");
            return false;
        } else {
            sdtError.text("");
            return true;
        }
    }

    function isValidUsername() {
        var username = /^[a-zA-Z0-9_]+$/;
        if ($("#ipUsername").val() === "") {
            $("#errUsername").text("Tên đăng nhập không được để trống!");
            return false;
        } else if (!username.test($("#ipUsername").val())) {
            $("#errUsername").text("Tên đăng nhập không hợp lệ!");
            return false;
        } else {
            $("#errUsername").text("");
            return true;
        }
    }

    function isValidPassword() {
        var password = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.{8,})/;
        if ($("#ipPassword").val() === "") {
            $("#errPassword").text("Không được để trống!");
            return false;
        } else if (!password.test($("#ipPassword").val())) {
            $("#errPassword").text("Mật khẩu không hợp lệ!");
            return false;
        } else {
            $("#errPassword").text("");
            return true;
        }
    }

    function isValidConfirmPassword() {
        if ($("#ipConfirmPassword").val() === "") {
            $("#errConfirmPassword").text("Không được để trống!");
            return false;
        } else if ($("#ipConfirmPassword").val() !== $("#ipPassword").val()) {
            $("#errConfirmPassword").text("Mật khẩu nhập lại không khớp với mật khẩu!");
            return false;
        } else {
            $("#errConfirmPassword").text("");
            return true;
        }
    }

    function isValidEmail() {
        const email = $("#ipEmail").val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = $("#errEmail");

        if (email === "") {
            emailError.text("Email không được để trống.");
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.text("Email không hợp lệ.");
            return false;
        } else {
            emailError.text("");
            return true;
        }
    }

    $("#ipFullname").blur(isValidFullname);
    $("#ipPhoneNumber").blur(isValidPhoneNumber);
    $("#ipUsername").blur(isValidUsername);
    $("#ipPassword").blur(isValidPassword);
    $("#ipConfirmPassword").blur(isValidConfirmPassword);
    $("#ipEmail").blur(isValidEmail);

    $("#btnRegist").click(function(e) {
        var isValid = true;
        
        if (!isValidFullname()) {
            $("#ipFullname").focus(); 
            isValid = false;
            return false;
        } else if (!isValidPhoneNumber()) {
            $("#ipPhoneNumber").focus(); 
            isValid = false;
            return false;
        } else if (!isValidUsername()) {
            $("#ipUsername").focus(); 
            isValid = false;
            return false;
        } else if (!isValidPassword()) {
            $("#ipPassword").focus(); 
            isValid = false; 
            return false;
        } else if (!isValidConfirmPassword()) {
            $("#ipConfirmPassword").focus(); 
            isValid = false; 
            return false;
        } else if (!isValidEmail()) {
            $("#ipEmail").focus(); 
            isValid = false; 
            return false;
        } 

        if (!isValid) {
            e.preventDefault(); 
        } else {
            let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
            accounts.push({
                fullname: $("#ipFullname").val(),
                phone: $("#ipPhoneNumber").val(),
                username: $("#ipUsername").val(),
                password: $("#ipPassword").val(),
                email: $("#ipEmail").val(),
                join: new Date().toString(),
                status: 1,
                cart: [],
                userType: 1
            });
            localStorage.setItem("accounts", JSON.stringify(accounts));
        }
    });
});
