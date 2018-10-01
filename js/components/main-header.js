const $toggle = document.querySelector('.-toggle')

function toggleMenu(){
    const $nav = document.querySelector('.menu')
    $nav.classList.toggle('-show')
    if($nav.classList.contains('-show')) {
        $toggle.querySelector('img').src = '../../img/close.svg'
    } else {
        $toggle.querySelector('img').src = '../../img/menu.svg'
    }
}
$toggle.addEventListener('click', toggleMenu) 