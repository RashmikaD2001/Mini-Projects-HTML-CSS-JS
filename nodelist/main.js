// NodeList - Static collection of HTML elements by (id, class, element)
//            can be created by using querySelectorAll() similar to an Array, but no (Map, FileSystemEntry, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll('.myButtons');

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😎";
})

buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "tomato";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    })
})

// Add an element
const newButton = document.createElement("button")
newButton.textContent = "Button 5"

// newButton.classList.add("myButtons");
newButton.classList = "myButtons"

// Add to DOM
document.body.appendChild(newButton)

buttons = document.querySelectorAll(".myButtons")

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.removeEventListener();
    })
})