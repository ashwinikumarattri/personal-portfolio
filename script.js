"use -strict";

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//side menu

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

const scriptURL = "https://script.google.com/macros/s/AKfycbxhfZ3HYW71t4YahdPYr-ab4Je1QNHXkjrBsc3TYfJ-kJixL8s0uSN2IW40r_KEWTbT/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch((error) => console.error("Error!", error.message));
});
