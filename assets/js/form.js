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

const clickables = document.getElementsByClassName("clickable");

Array.from(clickables).forEach(function (clickable) {
  clickable.addEventListener("click", function (e) {
    // get the id of the parent div (project-details)
    const id = e.currentTarget.parentNode.id;
    // redirect the user to the bugs page with the id of the project
    window.location.href = `/bugs?projectId=${id}`;
  });
});
