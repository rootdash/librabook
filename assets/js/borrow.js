const borrowButtons = document.querySelectorAll(".btn-primary");

borrowButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const rowContent = e.target.parentNode.parentNode;
    const bookTitle = rowContent.querySelector("h4 strong span").textContent;
    const bookImage = rowContent.querySelector("img").src;

    const borrowedData = {
      title: bookTitle,
      image: bookImage,
    };
    localStorage.setItem("borrowedData", JSON.stringify(borrowedData));
    rowContent.style.opacity = 0.5;
    rowContent.style.pointerEvents = "none";
  });
});
