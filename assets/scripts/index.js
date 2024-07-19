let btn = document.querySelectorAll(".btn");
let closebtn = document.querySelectorAll(".icon-x");
let widget = document.querySelector(".widgets-grid");
let btnid = '';
let windowid = '';

btn.forEach(b => {

    let window = document.querySelectorAll(".window");
    b.addEventListener("click", () => {
        btnid = b.id;
        window.forEach(wdw => {
            if (wdw.id === btnid) {
                windowid = wdw.id;
                wdw.classList.toggle("open");
                widget.classList.toggle("close");
            }
        })
    })
});

closebtn.forEach(b => {
    let window = document.querySelectorAll(".window");
    b.addEventListener("click", () => {
        window.forEach(wdw => {
            if (wdw.id === btnid) {
                windowid = wdw.id;
                wdw.classList.toggle("open");
                widget.classList.toggle("close");
            }
        })
    })
})