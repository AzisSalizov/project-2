const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector("#btn-get")
const modalCloseButton = document.querySelector(".modal_close");


const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
}

modalTrigger.onclick = openModal
modalCloseButton.onclick = closeModal
modal.onclick = e => {
    if (e.target === modal) {
        closeModal()
    }
}

setTimeout(openModal, 10000)

const showModalByScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = document.documentElement.clientHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= fullHeight) {
        openModal()
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll)

