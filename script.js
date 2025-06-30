let showMenu = document.querySelector(".show_menu");
let closeMenu = document.querySelector(".close_menu");
let ul = document.querySelector("ul");
let menu = document.querySelector(".menu");
let allCart = document.querySelector(".all_cart")
let allLink = document.querySelectorAll("ul a")
let retur = document.querySelector(".return")
let nextBtn = document.querySelector(".next_btn")
let prevBtn = document.querySelector(".prev_btn")

if (showMenu) {
    showMenu.addEventListener("click", function() {
        ul.style.marginLeft = "0"
    })
}

if (closeMenu) {
    closeMenu.addEventListener("click", function() {
        ul.style.marginLeft = "120%"
    })
}

let Requet = new XMLHttpRequest();

Requet.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        data.forEach((el) => {
            allCart.innerHTML += 
            `
            <div class="item_cart">
                <div class="bg_home"></div>
                <img src="images/${el.img}" alt="image" class="cold_coffee">
                <img src="images/caféengrains.png.png" alt="image" class="bean_1">
                <img src="images/caféengrains.png.png" alt="image" class="bean_2">
                <div class="content">
                    <h3>${el.title}</h3>
                    <p>${el.paragraph}</p>
                    <button>Order now: $19:90</button>
                </div>
            </div>
            `
        })
    }
}
Requet.open("GET", "product.json");
Requet.send();

allLink[1].addEventListener("click", function() {
    popul()
})

allLink[2].addEventListener("click", function() {
    about()
})

allLink[4].addEventListener("click", function() {
    contact()
})


setInterval(() => {
    if (allCart.scrollLeft >= 1090) {
        allCart.scrollLeft += -275
    }
    else{
        allCart.scrollLeft += 275
    }
}, 2000);



allLink.forEach((el) => {
    el.addEventListener("click", function() {
        if (!el.classList.contains("active")) {
            allLink.forEach((item) => {
                item.classList.remove("active")
            })
            el.classList.add("active")
        }
    })
})

retur.addEventListener("click", function() {
    window.scrollTo(0, 0);
})

let scrolling = document.getElementById("home").scrollHeight + document.getElementById("about").scrollHeight + document.getElementById("products").scrollHeight + document.getElementById("contact").scrollHeight + document.getElementById("popular").scrollHeight

window.onscroll = function() {
    if (window.scrollY > 0) {
        menu.classList.add("shadow_header")
    }
    else{
        menu.classList.remove("shadow_header")
    }
    if (window.scrollY >= document.getElementById("home").scrollHeight - 200) {
        retur.style.cssText = "bottom: 2rem";
    }
    else {
        retur.style.cssText = "bottom: -50%";
    }
    if (window.scrollY >= scrolling - 300) {
        document.querySelectorAll("footer  article").forEach((el) => {
            el.style.cssText = "animation: visiblity 0.8s, products 1.7s;"
        })
        document.querySelector("footer .copyright").style.cssText = "animation: visiblity 1.5s, products 2.3s;"
    }
    if (window.scrollY >= document.getElementById("popular").scrollHeight - 370) {
        popul();
    }
    if (window.scrollY >= (document.getElementById("popular").scrollHeight + document.getElementById("popular").scrollHeight - 480)) {
        about();
    }
    if (window.scrollY >= (document.getElementById("popular").scrollHeight + document.getElementById("popular").scrollHeight +  document.getElementById("products").scrollHeight)) {
        contact();
    }
}

function popul() {
    allCart.style.cssText = "animation: visiblity 1.5s, products 2.5s;"
}

function about(){
    document.querySelector("#about .content").style.cssText = "animation: visiblity 0.8s, about 1.5s;"
    document.querySelector("#about .cercle").style.cssText = "animation: visiblity 0.8S, photo 1.5s;"
    document.querySelector("#about .coffe").style.cssText = "animation: visiblity 1.6s, footer 2.5s;"
    document.querySelector("#about .bean1").style.cssText = "animation: visiblity 2s, bean1 2.7s;"
    document.querySelector("#about .bean2").style.cssText = "animation: visiblity 2s, bean1 2.7s;"
}

function contact(){
    document.querySelector("#contact .write").style.cssText = "animation: visiblity 1.8s, cold 2.5s;"
    document.querySelector("#contact .location").style.cssText = "animation: visiblity 1.8s, cold 2.5s;"
    document.querySelector("#contact .delivery").style.cssText = "animation: visiblity 1.8s, cold 2.5s;"
    document.querySelector("#contact .attention").style.cssText = "animation: visiblity 1.8s, cold 2.5s;"
    document.querySelector("#contact .del").style.cssText = "animation: visiblity 2s, del 3s;"
    document.querySelector("#contact .del img").style.cssText = "animation: visiblity 2.7s, cold 3.9s;"
}