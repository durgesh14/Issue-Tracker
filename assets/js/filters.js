const searchInput = document.getElementById("filer-search");
const issueContainer = document.querySelector(".issue-container");

//function for search functionality
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchText = event.target.value.trim().toLowerCase();
    const issueSubContainers = issueContainer.querySelectorAll(
      ".issue-sub-container"
    );

    issueSubContainers.forEach(function (issueSubContainer) {
      const title = issueSubContainer
        .querySelector(".issue-container-title")
        .textContent.toLowerCase();
      const description = issueSubContainer
        .querySelector(".issue-container-desc")
        .textContent.toLowerCase();

      if (title.includes(searchText) || description.includes(searchText)) {
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

checkboxesAuthor.forEach((checkbox) => {
  checkbox.addEventListener("change", function (event) {
    if (event.target.checked) {
      const authLabel = event.target.value.trim().toLowerCase();
      selectedAuthors.push(authLabel);

      console.log(selectedAuthors);
      findAuthors(authLabel, issueSubContainers);
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

dropdownButtonLabel.addEventListener("click", function () {
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

checkboxesLabel.forEach((checkbox) => {
  checkbox.addEventListener("change", function (event) {
    if (event.target.checked) {
      const label = event.target.value.trim().toLowerCase();
      selectedLabel.push(label);

      findLabels(issueSubContainers);
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
  issueSubContainers.forEach(function (issueSubContainer) {
    const label = issueSubContainer
      .querySelector(".issue-container-labels")
      .textContent.toLowerCase()
      .split(",");

    let result = selectedLabel.every(function (element) {
      return label.indexOf(element) !== -1;
    });

    if (result) {
      issueSubContainer.style.display = "block";
    } else {
      issueSubContainer.style.display = "none";
    }
  });
}
