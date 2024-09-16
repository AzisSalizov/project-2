const characterCard = (data) => {
    const container = document.getElementById('character_container');
    data.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character_card';
        card.innerHTML = `
                    <div>
                        <h2>${character.name}</h2>
                        <p><strong>Age:</strong> ${character.age}</p>
                        <p><strong>Bio:</strong> ${character.bio}</p>
                    </div>
                    <img src="${character.photo}" alt="${character.name}">
`;
        container.appendChild(card)
    })
}

const loadCharacterData = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '../data/characters.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
    request.onload = () => {
        const data = JSON.parse(request.responseText);
        characterCard(data)
    }
}
loadCharacterData()