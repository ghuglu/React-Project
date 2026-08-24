let user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
    alert("Please login first.");
    window.location.href = "../html files/Signin.html";
}

document.getElementById("userName").textContent =
    user.Name + " " + user.last;

document.getElementById("userEmail").textContent =
    user.email;

document.getElementById("avatar").textContent =
    user.Name.charAt(0).toUpperCase() +
    user.last.charAt(0).toUpperCase();

let accountCreated = document.getElementById("accountcreated");
if (accountCreated) {
    accountCreated.textContent =
        user.createdDate || "Not Available";
}

let lastUpdate = document.getElementById("lastupdate");
if (lastUpdate) {
    lastUpdate.textContent =
        user.lastUpdate || "Never Updated";
}

function clearFields() {
    document.getElementById("pass").value = "";
    document.getElementById("new").value = "";
    document.getElementById("con").value = "";
}

function updatepassword() {

    let currentPassword = document.getElementById("pass").value.trim();
    let newPassword = document.getElementById("new").value.trim();
    let confirmPassword = document.getElementById("con").value.trim();

    if (
        currentPassword === "" ||
        newPassword === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    if (currentPassword !== user.pass) {
        alert("Current password is incorrect.");
        return;
    }

    if (newPassword.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    user.pass = newPassword;
    user.lastUpdate = new Date().toLocaleString();

    localStorage.setItem("currentUser", JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === user.email) {
            users[i] = user;
            break;
        }
    }

    localStorage.setItem("users", JSON.stringify(users));

    if (document.getElementById("lastupdate")) {
        document.getElementById("lastupdate").textContent =
            user.lastUpdate;
    }

    document.getElementById("userName").textContent =
        user.Name + " " + user.last;

    document.getElementById("userEmail").textContent =
        user.email;

    document.getElementById("avatar").textContent =
        user.Name.charAt(0).toUpperCase() +
        user.last.charAt(0).toUpperCase();

    alert("Password Updated Successfully!");

    clearFields();
}