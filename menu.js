const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu button')

menuBtn.onclick = () => {
    console.log();
    menu.classList.toggle('closed')
}