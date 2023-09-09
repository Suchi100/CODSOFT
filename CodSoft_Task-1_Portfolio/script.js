
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 200);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

const carouse1 = document.querySelector(".carouse1");
firstImg = carouse1.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;



const showHideIcons = () => {
    let scrollWidth = carouse1.scrollWidth - carouse1.clientWidth;
    arrowIcons[0].style.display = carouse1.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carouse1.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        let firstImgWidth = firstImg.clientWidth + 14;
        carouse1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouse1.scrollLeft
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carouse1.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carouse1.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carouse1.classList.remove("dragging");
}

carouse1.addEventListener("mousedown", dragStart);
carouse1.addEventListener("mousemove", dragging);
carouse1.addEventListener("mouseup", dragStop);
carouse1.addEventListener("mouseleave", dragStop);




