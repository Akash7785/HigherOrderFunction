document.querySelector("form").addEventListener("submit", jobApply);

let jobArr = JSON.parse(localStorage.getItem("jobList")) || [];
function jobApply() {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let role = document.querySelector("#role").value;
  let exSalary = document.querySelector("#salary").value;

  let jobObj = {
    personName: name,
    personEmail: email,
    personRole: role,
    personSalary: exSalary,
  };
  jobArr.push(jobObj);
  localStorage.setItem("jobList", JSON.stringify(jobArr));
}
