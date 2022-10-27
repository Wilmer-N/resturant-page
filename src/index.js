
import { createHome } from "./home.js"
import { createMenu } from "./menu"
import { createContact } from "./contanct"

const content = document.querySelector("#content")
const header = document.createElement("header")
const logo = document.createElement("div")
const navigation = document.createElement("nav")
const ul = document.createElement("ul")
const home = document.createElement("li")
const menu = document.createElement("li")
const contact = document.createElement("li")
const contentDiv = document.createElement("div")

content.appendChild(header)
header.appendChild(logo)
logo.textContent = "Comortable Coffee"
header.appendChild(navigation)
navigation.appendChild(ul)
ul.appendChild(home)
home.setAttribute("id", "home")
home.textContent = "Home"
ul.appendChild(menu)
menu.setAttribute("id", "menu")
menu.textContent = "Menu"
ul.appendChild(contact)
contact.setAttribute("id", "contact")
contact.textContent = "Contact"
content.appendChild(contentDiv)
contentDiv.setAttribute("id", "content-div")

createHome()

home.addEventListener("click", function(){
    contentDiv.innerHTML = ""
    createHome()
})
menu.addEventListener("click", function(){
    contentDiv.innerHTML = ""
    createMenu()
})
contact.addEventListener("click", function(){
    contentDiv.innerHTML = ""
    createContact()
})