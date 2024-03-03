let navmanu = document.querySelector(".nav-list");
let togglebtn = document.querySelector(".toggle-btn");
let mybars = document.querySelector(".bar");
let toggleSubmanu = document.querySelector("#sublist-manu-1");
let toggleSubmanu2 = document.querySelector("#sublist-manu-2");
let submanu = document.querySelector(".sub-list");
let submanu2 = document.querySelector(".sub-list2");
 
togglebtn.addEventListener("click", () => {
        togglebtn.classList.toggle("icon");
        navmanu.classList.toggle("open");
    });
toggleSubmanu.addEventListener("click", ()=>{
   submanu.classList.toggle("openSubmanu-all");
});
toggleSubmanu2.addEventListener("click", ()=>{
   submanu2.classList.toggle("openSubmanu-all2");
});
document.onclick = function(e){
    if(!togglebtn.contains(e.target)&& !navmanu.contains(e.target)){
        togglebtn.classList.remove("icon");
        navmanu.classList.remove("open");
        submanu.classList.remove("openSubmanu-all");
        submanu2.classList.remove("openSubmanu-all2");
    }
};
