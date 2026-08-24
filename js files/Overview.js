let user = JSON.parse(localStorage.getItem("currentUser"));

if (user) {

    document.getElementById("userName").textContent =
        user.Name + " " + user.last;

    document.getElementById("userEmail").textContent =
        user.email;

    document.querySelector(".welcome h2").textContent =
        "Welcome back, " + user.Name;

    document.getElementById("avatar").textContent =
        user.Name.charAt(0).toUpperCase() +
        user.last.charAt(0).toUpperCase();

} else {

    alert("Please sign in first.");
    window.location.href = "../html files/Signin.html";

}
