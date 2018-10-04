let selectedTag = 'Todos'
let columns = ''
let htmlStyles = ''
const $more = document.querySelector('.more')
const $items = document.querySelectorAll('.wrap-works .item')

const works = [
    {
        tag: 'Front-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
    {
        tag: 'Front-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
    {
        tag: 'Front-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
    {
        tag: 'Back-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
    {
        tag: 'Back-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
    {
        tag: 'Back-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
    {
        tag: 'Front-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
    {
        tag: 'Front-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
    {
        tag: 'Back-end',
        name: 'Portfólio',
        desc: 'HTML5, CSS3, JS',
        image: 'http://html.vlthemes.com/vinero/assets/img/portfolio/1.jpg',
        link: '/work/1'
    },
]

function loadWorks() {
    $works = document.querySelector('.works')
    htmlStyles = window.getComputedStyle(document.querySelector('html'))
    columns = parseInt(htmlStyles.getPropertyValue("--columns"))

    $works.innerHTML = '';
    
    works.forEach(work => {
        if(work.tag == selectedTag || selectedTag == 'Todos'){
            elem = `
            <article class="work">
                <a href="${work.link}" class="link">
                    <div class="wrap">
                        <div class="image">
                            <img src="${work.image}">
                        </div>
                        <div class="content">
                            <div class="title">${work.name}</div>
                            <p class="description">${work.desc}</p>
                        </div>
                    </div>
                </a>
            </article>
            `
            $works.insertAdjacentHTML('beforeend', elem)
        }
    });
}

let previous = document.querySelector('.item.-active')

function showTag(e) {
    e.preventDefault()
    target = e.target
    selectedTag = target.textContent
    previous.classList.remove('-active')    
    target.classList.add('-active')
    loadWorks()
    previous = target
}

$items.forEach(item => {
    item.addEventListener('click', showTag)
});

loadWorks()
document.addEventListener('resize', loadWorks)