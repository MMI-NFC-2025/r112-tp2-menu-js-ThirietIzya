const nav = document.querySelector('nav')
const toggle = document.querySelector('button');
const scroll = document.querySelector('body');
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    scroll.classList.toggle("noscroll");
});