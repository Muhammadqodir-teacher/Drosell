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



// hero swiper fetch
fetch("https://gist.githubusercontent.com/Muhammadqodir-teacher/0bde30d73f2b476edc8fb4d419399667/raw/932f918b1bc60ed89137ef154990f555f2f70491/Drosell-swipper-img")
    .then(res => res.json())
    .then(data => {
        const swiperDiv = document.getElementById("swiper-wrapper")
        data.forEach(p => {
            swiperDiv.innerHTML += `
            <div class="swiper-slide flex items-center justify-center text-xl rounded-2xl">
                <img class="w-full h-[500px] object-cover rounded-2xl" src="${p.image}" alt="swiper-img">
            </div>
            `
        })
    })


// popular fetch
fetch("https://gist.githubusercontent.com/Muhammadqodir-teacher/54ca102ff661ae127a9f4a2217f7751f/raw/034b35798ecfa2831d5f0b38f69e90f56e83bae5/Drosell-popular-json")
    .then(res => res.json())
    .then(data => {

        const popularDiv = document.getElementById("popular");

        data.forEach(p => {
            popularDiv.innerHTML += `
        <div class="rounded-lg cursor-pointer flex flex-col gap-2 items-start justify-between">
            <div class="">
                <img class="w-52 rounded-xl " src="${p.image}" alt="img">
            </div>
            <p class="w-full text-gray-600 text-[13px]">${p.description}</p>
            <p class="text-gray-800 flex items-center justify-center gap-1">${p.price}<span>so'm</span></p>
            <button class="w-full bg-red-600 py-2 rounded-lg text-white text-[14px] cursor-pointer hover:bg-red-500">add to cart</button>
        </div>
        `
        });
    })
    .catch(err => {
        alert("xatolik" + err)
    });