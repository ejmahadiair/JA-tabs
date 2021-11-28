var tabs = document.querySelectorAll(".tab");
var vw = document.querySelector(".view");

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        document.getElementsByClassName("veiw")[i].style.visibility = "visible !important n";
    })



}