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
  let node = document.querySelector('#grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
}
