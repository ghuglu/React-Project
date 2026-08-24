document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(function (u) {
        return u.email === email && u.pass === password;
    });

    if (!user) {
        alert("Invalid Email or Password.");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login Successful!");

    window.location.href = "../html files/Overview.html";
});