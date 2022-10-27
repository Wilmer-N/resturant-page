function createContact(){
    const contentDiv = document.querySelector("#content-div")
const hero = document.createElement("div")
const h1 = document.createElement("h1")
const h3 = document.createElement("h3")

contentDiv.appendChild(hero)
hero.appendChild(h1)
h1.textContent = "This the contact yo!"
}

export {createContact};