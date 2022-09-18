const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayBuddies(data));
}

loadBuddies();

const displayBuddies = data =>{
    console.log(data);
    const buddies = data.results;
    const buddiesElement = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} `;

        buddiesElement.appendChild(p);
    }
}