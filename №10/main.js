const uls = document.getElementsByTagName("ul");
const ul = uls[0];

function colorFunc(li) {
    let selected_Li = ul.querySelectorAll("li");
    for (let element of selected_Li) {
      element.style.background = "none";
    }
    li.style.background = "green";
  }

ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
      if (event.ctrlKey) {
      event.target.style.background = "green";
    } else {
        colorFunc(event.target);
    }
  }
});

