//Handling labels
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");
const submitButton = document.querySelector("#submit-labels");

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
      selectedValues.push(event.target.value);
    } else {
      const index = selectedValues.indexOf(event.target.value);
      if (index > -1) {
        selectedValues.splice(index, 1);
      }
    }
    console.log(selectedValues);
  });
});

//handling input behaviour of labels
const input = document.getElementById("issue-labels");
const container = input.parentNode;

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
    }
  }
});

async function getMatchingLabels(value) {
  // Code to retrieve the labels for the selected project and match them against the input value
  //   const ans = ["example"];
  //   return ans;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const projectId = urlParams.get("projectId");

  fetch(`/match-labels?value=${value} + &projectId=${projectId}`)
    .then((response) => response.json())
    .then((data) => {
      // Do something with the returned data
      //Todo
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
