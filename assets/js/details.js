//Handling labels
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");
const submitButton = document.querySelector("#submit-labels");
const input = document.getElementById("issue-labels");
const container = input.parentNode;

dropdownButton.addEventListener("click", function () {
  if (dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
  } else {
    dropdownContent.classList.add("show");
  }
});

// handling labels checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedValues = [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function (event) {
    if (event.target.checked) {
      const tag = document.createElement("span");
      tag.classList.add("tag");
      tag.textContent = event.target.value;
      container.insertBefore(tag, input);
    } else {
      // Remove the tag
      const tags = document.querySelectorAll(".tag");
      tags.forEach((tag) => {
        if (tag.textContent === event.target.value) {
          tag.remove();
        }
      });
    }
  });
});

//handling input behaviour of labels

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const value = event.target.value.trim();
    if (value) {
      const tag = document.createElement("span");
      tag.classList.add("tag");
      tag.textContent = value;
      container.insertBefore(tag, input);
      input.value = "";

      //creating checkbox when user hit(create) any new label
      const newItem = document.createElement("div");
      newItem.classList.add("dropdown-item");
      newItem.innerHTML = `
        <input type="checkbox" value="${value}" id="${value}" checked>
        <label for="${value}">${value}</label>
      `;
      document.querySelector(".dropdown-item-list").appendChild(newItem);
    }
  }
});

function labelsArray() {
  const tags = document.querySelectorAll(".tag");
  let tagTexts = [];
  for (let tag of tags) {
    tagTexts.push(tag.textContent);
  }

  document.getElementById("labels").value = tagTexts;
}
