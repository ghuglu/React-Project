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


document.getElementById("welcomeText").textContent =
    "Welcome, " + user.Name;


document.querySelector(".logout a").addEventListener("click", function (e) {

    e.preventDefault();

    localStorage.removeItem("currentUser");

    alert("Logged out successfully.");

    window.location.href = "../html files/Signin.html";
});