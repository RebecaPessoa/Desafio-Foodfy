const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

const receipts = document.querySelectorAll('.card__title');

for (let card of cards) {
            card.addEventListener("click", function(){
            const imgId = card.getAttribute("id")
            modalOverlay.classList.add('active')
            modalOverlay.querySelector("img").src =`/assets/${imgId}`

        const title = card.querySelector('.card__title p')
        modalOverlay.querySelector(".modal-content .card__title p").textContent=title.textContent

        const author = card.querySelector('.card__author p')
        modalOverlay.querySelector(".modal-content .card__author p").textContent=author.textContent
    })
}


document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = "";
});


