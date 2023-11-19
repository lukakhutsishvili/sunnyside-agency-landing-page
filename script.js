
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const headertxt = document.querySelector(".headertxt");
const menutxt = document.querySelectorAll(".menutxt p")
const menudiv = document.querySelectorAll(".menutxt div")
const colordiv = document.querySelector(".colordiv")
let timer;
let sectimer;
const menuDesktop = document.querySelectorAll(".menutxtdesktop div"); 


const hideMenu = () => {
    headertxt.style.display = "grid"; 
    menu.style.display = "none";
};

hamburger.addEventListener("mouseover", () => {
    headertxt.style.display = "none";
    menu.style.display = "grid";
});
hamburger.addEventListener("mouseout", () => {
    sectimer = setTimeout(hideMenu,2500);
});
menu.addEventListener("mouseover", () => {
    clearTimeout(sectimer);
    clearTimeout(timer);
});

menu.addEventListener("mouseout", () => {
    timer = setTimeout(hideMenu, 400);
});



for(let j = 0;j<menudiv.length;j++){
    let eachdiv = menudiv[j];
    eachdiv.addEventListener("mouseover",()=>{
            eachdiv.style.backgroundColor = "#FBD600";
            eachdiv.style.padding = "15px 31px";
            eachdiv.style.borderRadius = "28px";
    }
 ); 
    eachdiv.addEventListener("mouseout",()=>{
        eachdiv.style.backgroundColor = "white";
        eachdiv.style.padding = "0px";
        eachdiv.style.borderRadius = "none";
    }) 
}   
