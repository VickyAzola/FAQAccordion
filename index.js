let button = document.querySelectorAll(".dropdown")
let icon =  document.querySelectorAll(".icon")

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function() {
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                icon[i].src = "images/icon-plus.svg"
            } else {
                content.style.display = "block";
                icon[i].src = "images/icon-minus.svg"
            }
        });
    }

