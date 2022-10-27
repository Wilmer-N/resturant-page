const content = document.querySelector("#content")
const header = document.createElement("header")
const logo = document.createElement("div")
const hero = document.createElement("div")
const navigation = document.createElement("nav")
const ul = document.createElement("ul")
const home = document.createElement("li")
const menu = document.createElement("li")
const contact = document.createElement("li")
const h1 = document.createElement("h1")
const h3 = document.createElement("h3")

content.appendChild(header)
header.appendChild(logo)
logo.textContent = "Comortable Coffee"
header.appendChild(navigation)
navigation.appendChild(ul)
ul.appendChild(home)
home.textContent = "Home"
ul.appendChild(menu)
menu.textContent = "Menu"
ul.appendChild(contact)
contact.textContent = "Contact"

content.appendChild(hero)
hero.setAttribute("id", "hero")
hero.appendChild(h1)
h1.textContent = "Comfortable Coffee"
hero.appendChild(h3)
h3.textContent = "Ayo! You better get your ass over here and taste some of this sweet coffee!"