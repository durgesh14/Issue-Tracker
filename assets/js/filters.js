const searchInput = document.getElementById("filer-search");
const issueContainer = document.querySelector(".issue-container");

//function for search functionality
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    // Get the trimmed and lowercased search text from the input field
    const searchText = event.target.value.trim().toLowerCase();
    // Get all the issue sub-containers
    const issueSubContainers = issueContainer.querySelectorAll(
      ".issue-sub-container"
    );
    // Loop through each issue sub-container
    issueSubContainers.forEach(function (issueSubContainer) {
      const title = issueSubContainer
        .querySelector(".issue-container-title")
        .textContent.toLowerCase();
      const description = issueSubContainer
        .querySelector(".issue-container-desc")
        .textContent.toLowerCase();
      // Check if the search text is included in either the title or description
      if (title.includes(searchText) || description.includes(searchText)) {
        /// If so, show/hide the issue sub-container
        issueSubContainer.style.display = "block";
      } else {
        issueSubContainer.style.display = "none";
      }
    });
  }
});

//display/hide dropdown menu for author on click.
const dropdownButtonAuthor = document.querySelector(
  ".filter-dropdown-author-button"
);
const dropdownContentAuthor = document.querySelector(
  ".filter-dropdown-author-content"
);

//function handler when user clicks on author dropdown
dropdownButtonAuthor.addEventListener("click", function () {
  if (dropdownContentAuthor.classList.contains("show")) {
    dropdownContentAuthor.classList.remove("show");
  } else {
    dropdownContentAuthor.classList.add("show");
  }
});

//Function for seacrh by author functionality
const checkboxesAuthor = document.querySelectorAll(
  ".filter-dropdown-author-item input"
);
const selectedAuthors = [];
const issueSubContainers = issueContainer.querySelectorAll(
  ".issue-sub-container"
);
//loops over each element in the checkboxesAuthor NodeList
//and adds an event listener to each element.
checkboxesAuthor.forEach((checkbox) => {
  checkbox.addEventListener("change", function (event) {
    //checks if the checkbox was checked.
    if (event.target.checked) {
      //gets the value of the checkbox
      const authLabel = event.target.value.trim().toLowerCase();
      //adds the authLabel value to the selectedAuthors array.
      selectedAuthors.push(authLabel);

      console.log(selectedAuthors);
      //calls the findAuthors function
      findAuthors(authLabel, issueSubContainers);
      //executes when the checkbox is unchecked.
    } else {
      const authLabel = event.target.value.trim().toLowerCase();
      const index = selectedAuthors.indexOf(authLabel);
      if (index > -1) {
        selectedAuthors.splice(index, 1);
      }
      findAuthors(issueSubContainers);
    }
  });
});

//common function to find authors
function findAuthors(authLabel, issueSubContainers) {
  issueSubContainers.forEach(function (issueSubContainer) {
    const author = issueSubContainer
      .querySelector(".issue-container-author")
      .textContent.toLowerCase();

    if (author === authLabel) {
      issueSubContainer.style.display = "block";
    } else {
      issueSubContainer.style.display = "none";
    }
  });
}

//handling click on cross icon for authors
const close = document.querySelector(".author__close");
close.addEventListener("click", function (e) {
  //condition to revert back to original display if nothing is selected
  selectedAuthors.length = 0;
  issueSubContainers.forEach(function (issueSubContainer) {
    issueSubContainer.style.display = "block";
  });
});

//display/hide labels dropdown
const dropdownButtonLabel = document.querySelector(
  ".filter-dropdown-label-button"
);
const dropdownContentLabel = document.querySelector(
  ".filter-dropdown-label-content"
);
//Click event listner when user clicks on labels dropdown
dropdownButtonLabel.addEventListener("click", function () {
  //show/hide the dropdown based on the added class
  if (dropdownContentLabel.classList.contains("show")) {
    dropdownContentLabel.classList.remove("show");
  } else {
    dropdownContentLabel.classList.add("show");
  }
});

//Function for search by labels functionality
const checkboxesLabel = document.querySelectorAll(
  ".filter-dropdown-label-item input"
);
const selectedLabel = [];

//loops over each element in the checkboxesLabel NodeList
//and adds an event listener to each element.
checkboxesLabel.forEach((checkbox) => {
  checkbox.addEventListener("change", function (event) {
    //checks if the checkbox was checked.
    if (event.target.checked) {
      //gets the value of the checkbox
      const label = event.target.value.trim().toLowerCase();
      //adds the label value to the selectedLabel array.
      selectedLabel.push(label);

      findLabels(issueSubContainers);
      //executes when the checkbox is unchecked.
    } else {
      const label = event.target.value.trim().toLowerCase();
      const index = selectedLabel.indexOf(label);
      if (index > -1) {
        selectedLabel.splice(index, 1);
      }
      findLabels(issueSubContainers);
      //condition to revert back to original display if nothing is selected
      if (selectedLabel.length == 0) {
        issueSubContainers.forEach(function (issueSubContainer) {
          issueSubContainer.style.display = "block";
        });
      }
    }
  });
});

//common function to find labels
function findLabels(issueSubContainers) {
  //It loops through each issue sub-container, gets the labels of the issue
  issueSubContainers.forEach(function (issueSubContainer) {
    const label = issueSubContainer
      .querySelector(".issue-container-labels")
      .textContent.toLowerCase()
      .split(",");
    // it uses the every() method to check if every selected label is present in the issue's label array.
    let result = selectedLabel.every(function (element) {
      return label.indexOf(element) !== -1;
    });
    //it sets the display property of the issue sub-container to block/none,
    if (result) {
      issueSubContainer.style.display = "block";
    } else {
      issueSubContainer.style.display = "none";
    }
  });
}
