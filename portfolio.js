const initSlider = () => {
    const imageList = document.querySelector(".Project .mini-project");
    const moveButton = document.querySelectorAll(".Project .move-button");

    moveButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "move-left" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider);

  function goToWork() {
    window.location.href = "#project"; // change file   name as needed
  }

////////////project-button//////////////////////
function openProject(url) {
    window.open(url, "_blank");
}

////////////////////contact button////////////////
function goContact(){
    window.location.href = "contact.html";
}


function toggleText(el){
    let parent = el.parentElement;
    let moreText = parent.querySelector(".more-text");

    if(moreText.style.display === "inline"){
        moreText.style.display = "none";
        el.innerText = " Read more";
    } else {
        moreText.style.display = "inline";
        el.innerText = " Read less";
    }
}