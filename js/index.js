const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav bar 
let nav = document.querySelectorAll("nav a");
nav[0].innerHTML = "Services";
nav[1].innerHTML = "Product";
nav[2].innerHTML = "Vision";
nav[3].innerHTML = "Features";
nav[4].innerHTML = "About";
nav[5].innerHTML = "Contact";

//task 3
let taskThree = document.createElement("a");
nav[0].prepend(taskThree);

taskThree.innerText ="WebPT6";
taskThree.style.marginRight = "35px";
taskThree.href="https://lambdaschool.com";

const taskThreePart2 = document.createElement("a");
nav[5].appendChild(taskThreePart2);
taskThreePart2.innerText = "Lambda";
taskThreePart2.style.marginLeft = "35px";
taskThreePart2.href="https://google.com";
taskThreePart2.style.color = "green";
taskThree.style.color = "green";

//header area
let domIsAwesome = document.querySelector(".cta-text h1");
domIsAwesome.innerHTML = "DOM <br> is <br> Awesome";

let ctaButton = document.querySelector(".cta button");
ctaButton.innerHTML = "Get Started";

// let ctaImg = document.getElementById("#cta-img");
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//
let topHeadings = document.querySelectorAll(".top-content h4");
topHeadings[0].innerHTML = "Features";
topHeadings[1].innerHTML = "About";

let topParagraph = document.querySelectorAll(".top-content p");
topParagraph[0].innerHTML = siteContent["main-content"]["features-content"];
topParagraph[1].innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let bottomHeadings = document.querySelectorAll(".bottom-content h4");
bottomHeadings[0].innerHTML = "Services";
bottomHeadings[1].innerHTML = "Product";
bottomHeadings[2].innerHTML = "Vision";

let bottomParagraph = document.querySelectorAll(".bottom-content p");
bottomParagraph[0].innerHTML = siteContent["main-content"]["services-content"];
bottomParagraph[1].innerHTML = siteContent["main-content"]["product-content"];
bottomParagraph[2].innerHTML = siteContent["main-content"]["vision-content"];

//contact section
let contactSection = document.querySelector(".contact h4");
contactSection.innerHTML = "Contact";

let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerHTML = "123 Way 456 street<br> Somewhere, USA";
contactInfo[1].innerHTML = "1 (888) 888-8888";
contactInfo[2].innerHTML = "sales@greatidea.io";

//footer
let footerSection = document.querySelector("footer p");
footerSection.innerHTML = "Copyright Great Idea! 2019!";

//stretch
const stretchButton = document.createElement("button");
footerSection.appendChild(stretchButton);
stretchButton.innerText = "Update";
stretchButton.style.marginLeft = "20px";
stretchButton.style.padding = "20px";
stretchButton.style.borderRadius = "10%";
stretchButton.onclick = "refreshPage()";

stretchButton.addEventListener("click", refreshPage);

function refreshPage(){
  window.location.reload();
};
