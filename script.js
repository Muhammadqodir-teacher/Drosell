// data swicher
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab

        tab_switcher.addEventListener('click', () => {
            const currentActive = document.querySelector(".nav__collect .nav__item.activePage")
            if (currentActive) {
                currentActive.classList.remove("activePage")
            }
            tab_switcher.classList.add("activePage");
            changePage(page_id);
        })
    }
}
function changePage(page_id) {
    const current_page = document.querySelector(".pages .page.activePage");
    current_page.classList.remove("activePage");

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add("activePage");
}











// hero swiper 
let slideArr = [
    {
        Image: "./images/hero.png"
    },
    {
        Image: "./images/hero.png"
    },
    {
        Image: "./images/hero.png"
    },
    {
        Image: "./images/hero.png"
    },
    {
        Image: "./images/hero.png"
    },
]

const swiperDiv = document.getElementById("swiper-wrapper");
for (let i = 0; i < slideArr.length; i++) {
    const swiper = slideArr[i];
    swiperDiv.innerHTML += `
     <div class="swiper-slide flex items-center justify-center text-xl rounded-2xl">
        <img class="w-full h-[500px] object-cover rounded-2xl" src="${swiper.Image}" alt="swiper-img">
     </div>
    `
}