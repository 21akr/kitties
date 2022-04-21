const showPussy = document.querySelectorAll(".img--block");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

const pussy = ["assets/img/pussy.gif"];
const negro = ["assets/img/negro.png"];

showPussy.forEach((e) => {
  e.addEventListener("click", () => {
    e.innerHTML = `<img src=${pussy} />`;
  });
});

dark.addEventListener("click", () => {
  document.body.style = `background: #181A18;
                         color: white;`;
                         
  showPussy.forEach((e) => {
    e.innerHTML = `<img src=${negro} />`;
  });
});

light.addEventListener("click", () => {
  document.body.style = `background: #FFF;
                           color: black;`;
});
