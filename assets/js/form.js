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

const lis = document.querySelectorAll("li");
lis.forEach(function (li) {
  li.addEventListener("click", function (e) {
    // get the id of the clicked li
    const id = e.target.id;
    // redirect the user to the bugs page with the id of the project
    window.location.href = `/bugs?projectId=${id}`;
  });
});
