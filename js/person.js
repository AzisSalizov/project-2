const loadCard = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');

        const images = [
            {"img": "https://i.pinimg.com/originals/be/53/fc/be53fc5350400539c44b3bc7c2552fe9.gif"},
            {"img": "https://gifsec.com/wp-content/uploads/2022/11/smooth-anime-gif-1.gif"},
            {"img": "https://www.icegif.com/wp-content/uploads/2022/01/icegif-543.gif"},
            {"img": "https://giffiles.alphacoders.com/395/3951.gif"}
        ];

        const data = await res.json();
        const cardContainer = document.getElementById('card_container');
        let card = '';

        data.forEach((item, index) => {
            const img = images[index] ? images[index].img : 'default-image.jpg';

            const description = item.body;

            card += `
            <div class="card">
                    <h2 class="card-title">${item.title}</h2>
                <div class="card-content">
                <img src="${img}" alt="${description}" class="card-img">
                    <p class="card-description">${description}</p>
                </div>
            </div>
        `;
        });

        cardContainer.innerHTML = card;
    } catch (e) {
        console.log(e)
    }

};

loadCard()
