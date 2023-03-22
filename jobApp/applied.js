let aplJob = JSON.parse(localStorage.getItem("jobList")) || [];
let bookmarkArr = JSON.parse(localStorage.getItem("bookObj")) || [];

displayTable(aplJob);

document.querySelector("#filterRole").addEventListener("change", roleFilter);

function roleFilter() {
  let selected = document.querySelector("#filterRole").value;
  // console.log(selected);
  let res = aplJob.filter(function (ele) {
    return ele.personRole == selected;
  });
  console.log(res);
  displayTable(res);
}

document.querySelector("#sortName").addEventListener("change", handleNameSort);

function handleNameSort() {
  let sorted = document.querySelector("#sortName").value;
  // document.querySelector("tbody").innerHTML = "";
  if (sorted == "Ascending") {
    aplJob.sort(function (a, b) {
      let x = a.personName.toLowerCase();
      let y = b.personName.toLowerCase();

      if (x > y) return 1;
      if (x < y) return -1;
      return 0;
    });
    displayTable(aplJob);
  }
  if (sorted == "Descending") {
    aplJob.sort(function (a, b) {
      let x = a.personName.toLowerCase();
      let y = b.personName.toLowerCase();

      if (x > y) return -1;
      if (x < y) return 1;
      return 0;
    });
    displayTable(aplJob);
  }
}

function displayTable(aplJob) {
  document.querySelector("tbody").innerHTML = "";

  aplJob.forEach(function (ele) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = ele.personName;
    let col2 = document.createElement("td");
    col2.innerText = ele.personEmail;
    let col3 = document.createElement("td");
    col3.innerText = ele.personRole;
    let col4 = document.createElement("td");
    col4.innerText = ele.personSalary;
    let col5 = document.createElement("td");
    col5.innerText = "Bookmark";
    col5.style.background = "teal";
    col5.addEventListener("click", function () {
      bookMarkFun(ele);
    });

    row.append(col1, col2, col3, col4, col5);
    document.querySelector("tbody").append(row);
  });
}

function bookMarkFun(ele) {
  bookmarkArr.push(ele);
  let bookObj = localStorage.setItem("bookObj", JSON.stringify(bookmarkArr));
}
