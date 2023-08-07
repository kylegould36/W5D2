var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEl = document.querySelector("main");
let topMenuEl = document.getElementById("top-menu");
let subMenuEl = document.getElementById("sub-menu");


mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");


topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach(function (aTag) {
  let aEl = document.createElement("a");
  aEl.textContent = aTag.text;
  aEl.setAttribute("href", aTag.href);
  topMenuEl.appendChild(aEl);
  return;
});


subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = document.querySelectorAll("a");
var showingSubMenu = false;
topMenuEl.addEventListener("click", topMenuClick);

function topMenuClick(evt) {
  evt.preventDefault();

  if (evt.target.tagName !== "A") return;

  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  if (evt.target) evt.target.classList.add("active");

  menuLinks.forEach(function (sub) {
    if (sub.subLinks !== undefined) showingSubMenu = true;
    else showingSubMenu = false;
  });

  if (showingSubMenu === true) buildSubMenu();
  else {
    subMenuEl.style.top = "0";
  }

  function buildSubMenu(i, j) {
    let currentLink;
    currentContent = subMenuEl.querySelectorAll("a");

    if (currentContent.length !== 0) {
      currentContent.forEach(function (child) {
        subMenuEl.removeChild(child);
      });
    }
    for (i = 0; i < menuLinks.length; i++) {
      currentLink = menuLinks[i].text;
      current = menuLinks[i];
      if (
        evt.target.innerHTML === currentLink &&
        evt.target.innerHTML !== "ABOUT"
      ) {
        for (j = 0; j < current.subLinks.length; j++) {
          let subMenuObj = document.createElement("a");
          subMenuObj.textContent = current.subLinks[j].text;
          subMenuObj.setAttribute("href", current.subLinks[j].href);
          subMenuEl.appendChild(subMenuObj);
          subMenuEl.style.top = "100%";
        }
      }
    }
    return;
  }
}
subMenuEl.addEventListener("click", subMenuClick);
function subMenuClick(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") console.log(evt.target);

  showingSubMenu = false;
  subMenuEl.style.top = "0";
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
    if (evt.target.innerText === "ABOUT") mainEl.innerHTML = "ABOUT";
    else mainEl.innerHTML = `<h1>${evt.target.innerText}</h1>`;
  }
}