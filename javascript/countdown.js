let a = document.getElementById("cd");
let b = document.getElementById("op");
let c = 1;

a.addEventListener("mousedown", function () {
    let intervalId = setInterval(function () {
        b.textContent = `${c}`;
        c++;

        if (c ==10000) {
            clearInterval(intervalId); // Stop the interval when c reaches 10000
        }
    }, 1000);
});