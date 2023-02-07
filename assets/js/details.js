// document.querySelector("#openModalBtn").addEventListener("click", function () {
//   document.querySelector("#modal").style.display = "block";
// });

// document.querySelector(".close-btn").addEventListener("click", function () {
//   document.querySelector("#modal").style.display = "none";
// });

// // window.addEventListener("click", function (event) {
// //   if (event.target == document.querySelector("#modal")) {
// //     document.querySelector("#modal").style.display = "none";
// //   }
// // });
// Get the input element where the user types the label

var input = document.getElementById("label-input");

// Get the dropdown element where the matching labels will be displayed
var dropdown = document.getElementById("labels");

// Listen for changes to the input value
input.addEventListener("input", function () {
  // Get the input value
  var value = input.value;

  // Get the labels for the selected project that match the input
  var labels = getMatchingLabels(value);
  console.log("clickeddd", labels);
  // Clear the current dropdown options
  dropdown.innerHTML = "";

  // Populate the dropdown with the matching labels
  labels.forEach(function (label) {
    var option = document.createElement("option");
    option.value = label.name;
    option.innerHTML = label.name;
    dropdown.appendChild(option);
  });
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
