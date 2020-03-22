import createElement from "./createElement";
import link from "./link";

document.title = "Virtual Dom";

const root = document.querySelector(".root");

const elements = [
  createElement("div", {
    attributes: {
      innerHTML: "this is the parent div"
    },
    children: [
      createElement("span", {
        attributes: {
          innerHTML: "this is the child"
        }
      }),
      createElement("span", {
        attributes: {
          innerHTML: "this is a sibling to the previous span"
        }
      })
    ]
  }),
  createElement("div", {
    attributes: {
      innerHTML: "this is a sibling to the first div"
    }
  })
];

function main() {
  const linkedList = link(elements);
  console.log(linkedList);
}
main();
