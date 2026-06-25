// localStorage names used by this website
const USERS_KEY = "homedokan-users";
const CURRENT_USER_KEY = "homedokan-current-user";

// Get all signed up users from localStorage
function getUsers() {
    let usersText = localStorage.getItem(USERS_KEY);

    if (usersText === null) {
        return [];
    }

    try {
        let users = JSON.parse(usersText);
        return users;
    } catch (error) {
        return [];
    }
}

// Save all signed up users into localStorage
function saveUsers(users) {
    let usersText = JSON.stringify(users);
    localStorage.setItem(USERS_KEY, usersText);
}

// Get the user who is logged in right now
function getCurrentUser() {
    let userText = localStorage.getItem(CURRENT_USER_KEY);

    if (userText === null) {
        return null;
    }

    try {
        let user = JSON.parse(userText);
        return user;
    } catch (error) {
        return null;
    }
}

// Sign out only removes the current login session.
// It does not delete the signed up account.
function signOut() {
    localStorage.removeItem(CURRENT_USER_KEY);
    alert("You have signed out.");
    window.location.href = "login.html";
}

// Show Login when no user is logged in.
// Show the user's name and Sign Out when a user is logged in.
function updateNavbarAccount() {
    let user = getCurrentUser();
    let accountLinks = document.querySelectorAll(".account-link");
    let signOutLinks = document.querySelectorAll(".signout-link");

    for (let i = 0; i < accountLinks.length; i++) {
        if (user === null) {
            accountLinks[i].textContent = "Login";
            accountLinks[i].href = "login.html";
        } else {
            accountLinks[i].textContent = user.name;
            accountLinks[i].href = "cart.html";
        }
    }

    for (let i = 0; i < signOutLinks.length; i++) {
        if (user === null) {
            signOutLinks[i].classList.add("d-none");
        } else {
            signOutLinks[i].classList.remove("d-none");
        }
    }
}

// Run this after the page loads
// It also runs after navbar.html is inserted into the page.
document.addEventListener("DOMContentLoaded", function () {
    updateNavbarAccount();
});
