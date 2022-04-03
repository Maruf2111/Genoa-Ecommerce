// saidbar

// let subMenu1 = document.querySelector(".sub-menu-1");
// let subMenu2 = document.querySelector(".sub-menu-2");
// let subMenu3 = document.querySelector(".sub-menu-3");

// function plusBtn1(){
//     subMenu1.classList.toggle("toggle-sub-menu-1");
// };
// function plusBtn2(){
//     subMenu2.classList.toggle("toggle-sub-menu-2");
// };
// function plusBtn3(){
//     subMenu3.classList.toggle("toggle-sub-menu-3");
// };


// saidvar menu

let saidbarMenu = document.querySelector(".saidbar");
let menubarIcon = document.querySelector("#menubar-icon");
let saidbarcorssIcon = document.querySelector("#saidbar-cross-icon");

menubarIcon.onclick = () =>{
    saidbarMenu.style.right = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
saidbarcorssIcon.onclick = () =>{
    saidbarMenu.style.right = "-100%";
}


// search bar

let searchBar = document.querySelector(".search-section");
let searchIcon = document.querySelector("#search-icon");
let searchcrossIcon = document.querySelector("#searchcross-icon");


searchIcon.onclick = () =>{
    searchBar.style.top = "0%";
    searchcrossIcon.style.display = "block";
}
searchcrossIcon.onclick = () =>{
    searchBar.style.top = "-100%";
    searchcrossIcon.style.display = "none";
}


// single product

let describeBtn = document.querySelector(".describe-btn");
let reviewBtn = document.querySelector(".review-btn");
let describe = document.querySelector(".sproduct-describe");
let review = document.querySelector(".sproduct-review-2");


describeBtn.onclick = () =>{
    describe.style.display = "block";
    review.style.display = "none";
};

reviewBtn.onclick = () =>{
    describe.style.display = "none";
    review.style.display = "block";
};






