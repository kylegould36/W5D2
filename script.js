let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

for(let i = 0; i < menuLinks.length; i++) {
  const menuLink = menuLinks[i];

const aEl = document.createElement("a");
aEl.textContent = menuLink.text;
aEl.setAttribute("href", menuLink.href);
topMenuEl.appendChild(aEl);
}