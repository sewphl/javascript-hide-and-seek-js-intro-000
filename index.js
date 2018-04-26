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
  const current = document.querySelectorAll("#grand-node");
  for (let i = 0; i < current.length; i++) {
    console.log(current[i].innerHTML);
  }
}
