function getFirstSelector(selector) {
  return(document.querySelector(selector));
}

function nestedTarget() {
  var g = document.querySelector("#nested");
  return(g.querySelector(".target"));
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  const ancestor = document.querySelectorAll("#grand-node");
  const descendants = ancestor.querySelectorAll("div");
  for (let i = 0; i < descendents.length; i++) {
    var e = descendents[i];
    console.log(e.innerHTML());
  }
}
