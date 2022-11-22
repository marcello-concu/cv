const hamburgerBtn = document.getElementById('hamburger')
const navList = document.getElementById('navBar')

function switchBtn() {
    navList.classList.toggle('showNav')
}

hamburgerBtn.addEventListener('click', switchBtn)