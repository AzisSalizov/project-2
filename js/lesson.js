const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabContentItemsParent = document.querySelector(".tab_content_items");

let currentTab = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = "none";
    })
    tabContentItems.forEach(item => {
        item.classList.remove('tab_content_item_active');
    })
}

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = "block";
    tabContentItems[id].classList.add("tab_content_item_active");
}

hideTabContent()
showTabContent()

tabContentItemsParent.onclick = (e) => {
    if (e.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) => {
            if (e.target === item) {
                hideTabContent();
                showTabContent(index);
            }
        })
    }
}

const autoSlider = () => {
    currentTab++;
    if (currentTab >= tabContentBlocks.length) {
        currentTab = 0;
    }
    hideTabContent()
    showTabContent(currentTab)
}

setInterval(autoSlider, 3000)

//Converter
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = async (elem, targetElem1, targetElem2) => {
    try {
        const res = await fetch('../data/converter.json');
        const data = await res.json();

        elem.oninput = () => {
            if (elem.value === "") {
                targetElem1.value = "";
                targetElem2.value = "";
                return;
            }

            if (elem === somInput) {
                targetElem1.value = (elem.value / data.usd).toFixed(2);
                targetElem2.value = (elem.value / data.eur).toFixed(2);
            } else if (elem === usdInput) {
                targetElem1.value = (elem.value * data.usd).toFixed(2);
                targetElem2.value = (elem.value * (data.eur / data.usd)).toFixed(2);
            } else if (elem === eurInput) {
                targetElem1.value = (elem.value * data.eur).toFixed(2);
                targetElem2.value = (elem.value * (data.usd / data.eur)).toFixed(2);
            }
        }
    } catch (e) {
        console.error(e);
    }
};

converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);

//CARD SWITCHER

const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
let cardId = 1;

const fetchTodo = async id => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json();
    card.innerHTML = `
             <p>${data.title}</p>
             <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
             <span>${data.id}</span>
            `;
}
fetchTodo(cardId)

btnNext.onclick = () => {
    cardId++;
    if (cardId > 200) {
        cardId = 1;
    }
    fetchTodo(cardId);
};

btnPrev.onclick = () => {
    cardId--;
    if (cardId < 1) {
        cardId = 200;
    }
    fetchTodo(cardId);
};

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
// .then(data => console.log(data))

//Weather

const searchInput = document.querySelector('.cityName');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

const API_KEY = 'e417df62e04d3b1b111abeab19cea714';
const API = 'http://api.openweathermap.org/data/2.5/weather';

searchInput.oninput = async () => {
    try {
        const res = await fetch(`${API}?q=${searchInput.value}&appid=${API_KEY}`);
        const data = await res.json();
        city.innerHTML = data.name || 'Город не найден...';
        temp.innerHTML = data.main?.temp ?
            Math.round(data.main.temp - 273.15) + '&deg;C' : '*-*-*'
    } catch (e) {
        console.log(e)
    }
};

