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
        tabContentItems.forEach((item,index) => {
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

setInterval(autoSlider , 3000)

