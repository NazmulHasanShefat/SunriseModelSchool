let navmanu = document.querySelector(".nav-list");
let togglebtn = document.querySelector(".toggle-btn");
let mybars = document.querySelector(".bar")
 
togglebtn.addEventListener("click", () => {
        togglebtn.classList.toggle("icon");
        navmanu.classList.toggle("open");
    });

document.onclick = function(e){
    if(!togglebtn.contains(e.target)&& !navmanu.contains(e.target)){
        togglebtn.classList.toggle("icon");
      navmanu.classList.remove("open");
    }
}