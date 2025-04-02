setInterval(() => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        const a = Math.random() * 255;
        const b = Math.random() * 255;
        const c = Math.random() * 255;
        box.style.background = `rgb(${a},${b},${c})`;
    })
    const cont = document.querySelector(".container");
    const a = Math.random() * 255;
    const b = Math.random() * 255;
    const c = Math.random() * 255;
    cont.style.background = `rgb(${a},${b},${c})`;
}, 2000)