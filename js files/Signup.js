const form = document.getElementById("signupForm");
const agree = document.getElementById("agree");
const createBtn = document.getElementById("createBtn");

agree.addEventListener("change", function () {
    createBtn.disabled = !this.checked;
});

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirm").value.trim();

    document.getElementById("fnameError").textContent = "";
    document.getElementById("lnameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
    document.getElementById("agreeError").textContent = "";

    let valid = true;

    if (fname === "") {
        document.getElementById("fnameError").textContent = "First name is required";
        valid = false;
    }

    if (lname === "") {
        document.getElementById("lnameError").textContent = "Last name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters";
        valid = false;
    }

    if (confirm !== password) {
        document.getElementById("confirmError").textContent =
            "Passwords do not match";
        valid = false;
    }

    if (!agree.checked) {
        document.getElementById("agreeError").textContent =
            "Please accept the terms";
        valid = false;
    }

    if (!valid) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let emailExists = users.some(function (user) {
        return user.email === email;
    });

    if (emailExists) {
        document.getElementById("emailError").textContent =
            "Email already exists";
        return;
    }

    let newUser = {
        Name: fname,
        last: lname,
        email: email,
        pass: password,
        createdDate: new Date().toLocaleDateString(),
        lastUpdate: "Never Updated"
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    form.reset();
    createBtn.disabled = true;

    window.location.href = "../html files/Signin.html";
});