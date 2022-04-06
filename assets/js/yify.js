document.addEventListener("DOMContentLoaded", function() { 

var searchInput = document.querySelector(".mobile-input");
searchInput.addEventListener("blur",(e)=>{
    e.currentTarget.parentElement.classList.remove("focused");
});
searchInput.addEventListener("focus",(e)=>{
    e.currentTarget.parentElement.classList.add("focused");
})



var searchBtn = document.querySelector(".search-mobile__btn");

searchBtn.addEventListener("click",()=>{
    document.querySelector(".yify-mobile__search").classList.toggle("open");
})
});