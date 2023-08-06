// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");

for(let i = 0; i < menuLinks.length; i++) {
  const menuLink = menuLinks[i];

const aEl = document.createElement("a");
aEl.textContent = menuLink.text;
aEl.setAttribute("href", menuLink.href);
topMenuEl.appendChild(aEl);
}

let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "#3da4ab";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = document.querySelectorAll("topMenuEl");

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.textContent);

  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  event.target.classList.add("active");

  const anchorName = event.target.textContent;
  const menuLink = menuLinks.find((link) => {
  });

  if (menuLink === undefined) {
    return;
  }

  if (menuLink.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  const buildSubMenu = (sublinks) => {
    subMenuEl.innerHTML = "";
    for (let i = 0; i < sublinks.length; i++) {
      const newAnchor = document.createElement("a");
      newAnchor.setAttribute("href", sublinks[i].href);
      newAnchor.textContent = sublinks[i].text;
      subMenuEl.append(newAnchor);
    }
  };

  if (showingSubMenu) {
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  if (anchorName === "about") {
    mainEl.innerHTML = "<h1>about</h1>";
  }
});

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.textContent);

  showingSubMenu = false;
  subMenuEl.style.top = "0";

  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }

  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});