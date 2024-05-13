const collapse = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            collapse[i].children[1].classList.remove("rotate-180")
            content.style.display = "none";
            
        } else {
            collapse[i].children[1].classList.add("rotate-180")
            content.style.display = "block";
            
        }
    });
}










