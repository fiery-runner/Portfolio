let menu = document.querySelector(".fixed_menu")
menu.addEventListener("click", function(event) {
    let clickTarget = event.target
    let activeBtn = document.querySelector(".active")

    if (clickTarget.classList.contains("nav_link")) {
        activeBtn.classList.remove("active")
        clickTarget.classList.add("active")

        let mobile = document.querySelector(".mobile_menu")
        if (!mobile.classList.contains("hide")) {
            mobile.classList.add("hide")
        }

    }

    let body = document.querySelector("body")
    let mobile_menu = document.querySelector(".mobile_menu")
    if (!body.classList.contains("offscroll") && !mobile_menu.classList.contains("hide")){
        body.classList.add("offscroll")
    } else {
        body.classList.remove("offscroll")
    }

})

let classLink = ".main_link"
window.onscroll = function() {
    let h= document.documentElement.clientHeight
    if (window.scrollY >= h*3.8 ) {
        classLink = ".comments_link"
    }
    else if (window.scrollY >= h*2.8 ) {
        classLink = ".works_link"
    }
     else if (window.scrollY >= h*1.8 ) {
        classLink = ".skills_link"
    }
     else if (window.scrollY >= h*0.8 ) {
        classLink = ".about_link"
    }
     else{
        classLink = ".main_link"
    }
    let activeBtn = document.querySelector(".active");
    let newActiveBtn = document.querySelector(classLink);

    if (!newActiveBtn.classList.contains("active")) {
        newActiveBtn.classList.add("active");
        activeBtn.classList.remove("active")
    };
}

document.querySelector(".mobile_button").addEventListener("click", function(event){
    document.querySelector(".mobile_menu").classList.toggle("hide")
})


