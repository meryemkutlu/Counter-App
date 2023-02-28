const count = document.querySelector(".count");
//const btn3 = document.querySelector(".btn-3");
//const btn2 = document.querySelector(".btn-2");
//const btn = document.querySelector(".btn");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("btn-2")) {
        count.innerHTML = 0;
        setColor();
    }
    if (e.target.classList.contains("btn-3")) {
        count.innerHTML++;
        setColor();
    }
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "green";
    } else if (count.innerHTML < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "#fff";
    }
}


//btn3.addEventListener("click", () => {
//    count.innerHTML++;
//});
//btn.addEventListener("click", () => {
//    count.innerHTML--;
//});
//btn2.addEventListener("click", () => {
 //   count.innerHTML = 0;
//});
