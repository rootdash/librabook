const borrowedContentContainer = document.getElementById("borrowed-content");

if (localStorage.getItem("borrowedData")) {
  const borrowedData = JSON.parse(localStorage.getItem("borrowedData"));
  const borrowedContentHTML = `
    <div class="row">
      <div class="col-md-4 col-xxl-3">
        <img src="${borrowedData.image}" class="rounded img-fluid" width="130" height="180">
      </div>
      <div class="col-md-4 col-xxl-5">
        <h4><strong>${borrowedData.title}</strong></h4>
      </div>
      <div class="col-md-4">
        <button class="btn btn-primary btn-lg" id="return-button" style="margin-top: 132px; margin-left: 44px; font-family: 'Poppins'; font-weight: bold; background: #212529; border-radius: 17px; padding-right: 30px; padding-left: 30px; padding-bottom: 10px; padding-top: 10px">Return</button>
      </div>
    </div>
  `;
  borrowedContentContainer.innerHTML = borrowedContentHTML;

  document.getElementById("return-button").addEventListener("click", () => {
    localStorage.removeItem("borrowedData");

    borrowedContentContainer.innerHTML = "";

    const rowContent = document.querySelector(`[data-book-title="${borrowedData.title}"]`);
    rowContent.style.opacity = 1;
    rowContent.style.pointerEvents = "auto";
  });
} else {
  borrowedContentContainer.innerHTML = "<p>No borrowed books.</p>";
}
