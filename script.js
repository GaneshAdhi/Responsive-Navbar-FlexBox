let unHideBtnEl = document.getElementById("unHideBtn");

let hideBtn = document.getElementById("hideBtn");

let listItemContainerEl = document.getElementById("listItemContainer");


unHideBtnEl.addEventListener("click", function() {
    listItemContainerEl.classList.toggle("hide");
    unHideBtnEl.classList.remove("unhide");

    unHideBtnEl.classList.add("hide");
    hideBtn.classList.toggle("hide");
});

hideBtn.addEventListener("click", function() {
    listItemContainerEl.classList.toggle("hide");
    unHideBtnEl.classList.add("unhide");
    hideBtn.classList.toggle("hide");
});
