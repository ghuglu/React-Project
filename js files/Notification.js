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



let checkboxes = document.querySelectorAll('input[type="checkbox"]');

if (user.notifications) {
    checkboxes[0].checked = user.notifications.email;
    checkboxes[1].checked = user.notifications.security;
}

checkboxes[0].addEventListener("change", saveNotifications);
checkboxes[1].addEventListener("change", saveNotifications);

function saveNotifications() {

    user.notifications = {
        email: checkboxes[0].checked,
        security: checkboxes[1].checked
    };

    localStorage.setItem("currentUser", JSON.stringify(user));

    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === user.email) {
            users[i] = user;
            break;
        }
    }

    localStorage.setItem("users", JSON.stringify(users));

    alert("Notification settings saved.");
}