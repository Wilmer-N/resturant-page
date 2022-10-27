function createHome() {
const contentDiv = document.querySelector("#content-div")
const hero = document.createElement("div")
const h1 = document.createElement("h1")
const h3 = document.createElement("h3")

contentDiv.appendChild(hero)
hero.setAttribute("id", "hero")
hero.appendChild(h1)
h1.textContent = "Comfortable Coffee"
hero.appendChild(h3)
h3.textContent = "Ayo! You better get your ass over here and taste some of this sweet coffee!"
}

export {createHome};