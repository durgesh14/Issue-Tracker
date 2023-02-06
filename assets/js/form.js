const createProjectBtn = document.getElementById("create-project-btn");
var formProject;
createProjectBtn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/toggle-form", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      document.querySelector(".create-project").innerHTML = xhr.responseText;
    }
  };
  xhr.send(
    `showForm=${
      document.querySelector(".create-project form") ? "false" : "true"
    }`
  );
});
