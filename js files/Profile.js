let user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
    alert("Please login first.");
    window.location.href = "../html files/Signin.html";
}

document.getElementById("userName").textContent =
    `${user.Name} ${user.last}`;

document.getElementById("userEmail").textContent =
    user.email;

document.getElementById("avtar").textContent =
    user.Name.charAt(0).toUpperCase() +
    (user.last ? user.last.charAt(0).toUpperCase() : "");

document.getElementById("name").value =
    `${user.Name} ${user.last}`;
    

document.getElementById("email").value = user.email;
document.getElementById("dob").value = user.dob || "";
document.getElementById("phone").value = user.phone || "";
document.getElementById("Street").value = user.street || "";
document.getElementById("pin").value = user.pin || "";
document.getElementById("city").value = user.city || "";
document.getElementById("Country").value = user.country || "";
document.getElementById("git").value = user.github || "";

document.getElementById("profileForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let fullName = document.getElementById("name").value.trim();
    let names = fullName.split(" ");

    user.Name = names[0];
    user.last = names.slice(1).join(" ");

    user.email = document.getElementById("email").value.trim();
    user.dob = document.getElementById("dob").value;
    user.phone = document.getElementById("phone").value.trim();
    user.street = document.getElementById("Street").value.trim();
    user.pin = document.getElementById("pin").value.trim();
    user.city = document.getElementById("city").value.trim();
    user.country = document.getElementById("Country").value.trim();
    user.github = document.getElementById("git").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let index = users.findIndex(u => u.email === user.email);

    if (index !== -1) {
        users[index] = user;
    }

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(user));

    document.getElementById("userName").textContent =
        `${user.Name} ${user.last}`;

    document.getElementById("userEmail").textContent =
        user.email;

    document.getElementById("avtar").textContent =
        user.Name.charAt(0).toUpperCase() +
        (user.last ? user.last.charAt(0).toUpperCase() : "");

    alert("Profile Updated Successfully!");
});