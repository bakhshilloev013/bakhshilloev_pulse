// const { src } = require("gulp");

document.addEventListener("DOMContentLoaded", () => {
    const prev = document.querySelector(".prev"),
      next = document.querySelector(".next"),
      sliderImg = document.querySelector(".carousel__img"),
      catalog_contents = document.querySelectorAll(".catalog__content"),
      links = document.querySelectorAll(".catalog-item__link"),
      removes = document.querySelectorAll(".catalog-item__remove-link"),
      list = document.querySelector(".catalog-item__list"),
      catalog_tabs = document.querySelectorAll(".catalog__tab"),
      socials = document.querySelectorAll(".icon"),
      pulsometr = document.querySelector(".type_of_pulsometr"),
      btns = document.querySelectorAll(".button"),
      modal_closes = document.querySelectorAll(".modal__close"),
      overlay = document.querySelector(".overlay"),
      consultation = document.querySelector("#consultation"),
      order = document.querySelector("#order"),
      btn_order = document.querySelectorAll(".button_order"),
      thanks = document.querySelector("#thanks"),
      chevron = document.querySelector(".pageup");

    let currentIndex = 0;
    let imagesArr = [];
    imagesArr.push("img/slide_1.jpg", "img/slide_2.jpg", "img/slide_3.jpg");

    // For slider
    prev.addEventListener("click", e=> {
        currentIndex--
        if (currentIndex == 0) {
            sliderImg.src = imagesArr[currentIndex];
        } else if (currentIndex < 0) {
            currentIndex = imagesArr.length - 1;
        }
        sliderImg.src = imagesArr[currentIndex];
    });
    next.addEventListener("click", e=> {
        currentIndex++;
        if (currentIndex == 2) {
            sliderImg.src = imagesArr[currentIndex];
        } else if (currentIndex > 2) {
            currentIndex = 0;
        }
        sliderImg.src = imagesArr[currentIndex];
    })

    // For list
    let content = links.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.parentElement.classList.length == 2 && (e.target.parentElement).nextElementSibling.classList.length == 1) {
                e.target.parentElement.classList.remove("catalog-item__content_active");
                (e.target.parentElement).nextElementSibling.classList.toggle("catalog-item__list_active");
            } else if (e.target.parentElement.classList.length == 1 && (e.target.parentElement).nextElementSibling.classList.length == 2){
                e.target.parentElement.classList.toggle("catalog-item__content_active");
                (e.target.parentElement).nextElementSibling.classList.remove("catalog-item__list_active");
            }
        })
    })
    let remove = removes.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            if (e.target.parentElement.classList.length == 2) {
                e.target.parentElement.classList.remove("catalog-item__list_active");
                (e.target.parentElement).previousElementSibling.classList.toggle("catalog-item__content_active")
            }
        })
    })

    // For tabs
    let tabs = catalog_tabs.forEach(function(item,i) {
        item.addEventListener("click", e => {
            e.preventDefault();
            if (item == catalog_tabs[0]) {
                catalog_tabs[1].classList.remove("catalog__tab_active");
                catalog_tabs[2].classList.remove("catalog__tab_active");
                catalog_contents[1].classList.remove("catalog__content_active");
                catalog_contents[2].classList.remove("catalog__content_active");
                catalog_contents[i].classList.toggle("catalog__content_active");
            }
            else if (item == catalog_tabs[2]) {
                catalog_tabs[0].classList.remove("catalog__tab_active");
                catalog_tabs[1].classList.remove("catalog__tab_active");
                catalog_contents[0].classList.remove("catalog__content_active");
                catalog_contents[1].classList.remove("catalog__content_active");
                catalog_contents[i].classList.toggle("catalog__content_active");
            }
            else if (item == catalog_tabs[1]){
                catalog_tabs[0].classList.remove("catalog__tab_active");
                catalog_tabs[2].classList.remove("catalog__tab_active");
                catalog_contents[0].classList.remove("catalog__content_active");
                catalog_contents[2].classList.remove("catalog__content_active");
                catalog_contents[i].classList.toggle("catalog__content_active");
            } else {alert(false)}

            if (item.classList.contains("catalog__tab_active") == false) {
                item.classList.toggle("catalog__tab_active");   
            } else if (item.classList.contains("catalog__tab_active") == true) {
                item.classList.remove("catalog__tab_active");
            }
        })
    })

    // For socials
    socials.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
        })
    })

    //For consultation and buy 
    btns.forEach(item => {
        item.addEventListener("click", e => {
            if (item.classList.contains("button_main") == true) {
                overlay.setAttribute("id", "overlay_active");
                consultation.classList.add("modal_active");
            }
            if (item.classList.contains("header_btn") == true) {
                overlay.setAttribute("id", "overlay_active");
                consultation.classList.add("modal_active");
            }
            if (item.classList.contains("catalog-item__btn") == true) {
                overlay.setAttribute("id", "overlay_active");
                order.classList.add("modal_active");
                order.firstElementChild.nextElementSibling.nextElementSibling.textContent = item.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.textContent;
            }
            if (item.classList.contains("button_order") == true) {
                if (item.previousElementSibling.value == "") {
                    
                } else {
                    e.preventDefault();
                    order.classList.remove("modal_active");
                    thanks.classList.add("modal_active");
                    order.querySelectorAll(".input").forEach(item => {
                        item.value = "";
                    })
                    
                }
            }
        })
    })
    modal_closes.forEach(item => {
            item.addEventListener("click", e => {
                overlay.removeAttribute("id");
                if (item.parentElement.id == "thanks") {
                    thanks.classList.remove("modal_active");  
                } 
                    
                
            })
    })

    // Scroll

    window.addEventListener("scroll", () => {
        if (window.scrollY > 700) {
            // console.log("scrolled more 700")
            document.querySelector(".pageup").classList.add("pageup_active");
        } else {
            document.querySelector(".pageup").classList.remove("pageup_active");
        };

        chevron.addEventListener("click", e => {
            e.preventDefault();
            window.scroll({     //Открывается объект для определения свойств прокрутки
                top: 0,     //Указывается куда перенести страницу         
                behavior: 'smooth',     //Указывается стиль прокрутки
            })
        });
        // const scrollable = document.documentElement.scrollHeight - window.innerHeight;  //Узнать максимум значений(px) скролла по всей странице
        const scrolled = window.scrollY; //Узнать значение сколько px прокручено вниз
        // console.log(scrolled);

        // if (Math.ceil(scrolled) === scrollable) {  //Math.ceil округляет число до следующего целого десятичного числа, его использование не объязательно
        //     alert('You\'e reached to bottom!') //Сообщает об достижении дна всей страницы
        // } else if (window.scrollY == 0) {
        //     alert('You\'e reached to top!') //Сообщает об достижении верхушки страницы
        // }

        // Comments animate
        // const comments = document.querySelectorAll(".comments__item");
    
        // if (window.scrollY == 2700) {
        //     comments.forEach(item => {
        //         item.classList.toggle("comments__item_active");
        //         item.classList.toggle("animate__animated");
        //         item.classList.toggle("animate__fadeInUp");
        //     })
        // }
    })
    
    
    

    // if (window.scrollY >= 2600) {
    //     alert("scrolled 2600")
    //     comments[0].classList.toggle("animate__animated");
    //     comments[0].classList.toggle("animate__fadeInUp");
    // } else if (window.scrollY >= 2900) {
    //     comments[1].classList.toggle("animate__animated");
    //     comments[1].classList.toggle("animate__fadeInUp");
    // } else if (window.scrollY >= 3100) {
    //     comments[2].classList.toggle("animate__animated");
    //     comments[2].classList.toggle("animate__fadeInUp");
    // }

})