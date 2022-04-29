function openServices(){
    var openSer = document.getElementById("myModal").style.display = "block";
}
function closeServices(){
    var closeSer = document.getElementById("myModal").style.display = "none";
}
function openServices2(){
    var openSer = document.getElementById("myModal2").style.display = "block";
}
function closeServices2(){
    var closeSer = document.getElementById("myModal2").style.display = "none";
}
function openServices3(){
    var openSer = document.getElementById("myModal3").style.display = "block";
}
function closeServices3(){
    var closeSer = document.getElementById("myModal3").style.display = "none";
}
function openServices4(){
    var openSer = document.getElementById("myModal4").style.display = "block";
}
function closeServices4(){
    var closeSer = document.getElementById("myModal4").style.display = "none";
}
function scrollUp(){
    const scrollUp = document.getElementById("scroll-upp");
    if(this.scrollY >=560) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll");   
}
window.addEventListener("scroll",scrollUp)