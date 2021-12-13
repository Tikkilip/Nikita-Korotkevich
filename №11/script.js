let div = document.createElement("div");
div.className = "wrapper";
document.body.append(div);

let arr = [
  { type: "text", name: "Name", value: "Nicolas" },
  { type: "text", name: "Second name", value: "Winding" },
  { type: "text", name: "Surname", value: "Refn" },
];

function makeForm(arr) {
  let form = document.createElement("form");
  div.append(form);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "text") {
      let input = document.createElement("input");
      input.value = arr[i].value;
      form.append(input);
      input.className = "text";
    }
  }
}

makeForm(arr);