// classList = Element property in JS used to interact with an element's list
//             of classes (CSS classes). Allows you to make reusable classes for many
//             elements across your webpage

// add(), remove(), toggle(Remove if present, Add if not), replace(old_class, new_class), contains()

// const myButton = document.getElementById("myButton");

// // add
// myButton.classList.add("enabled");
// myButton.classList.add("hover")

// // remove
// myButton.classList.remove("enabled");
// myButton.classList.remove("hover");

// toggle 
// [add & remove can also use]

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })

// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {
    
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent = "";
//     }else{
//         event.target.classList.replace("enabled", "disabled")
//     }
// })


// const myH1 = document.getElementById("myH1");

// myH1.classList.add("enabled")


let buttons = document.querySelectorAll(".myButton")

buttons.forEach(button => {
    button.classList.add("enabled")
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover")
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover")
    })
})


buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.classList.replace("disabled", "enabled")
            event.target.textContent = event.target.textContent.replace(`${"\u{1F600}"}`, "");
        }else{
            event.target.classList.replace("enabled", "disabled")
            event.target.textContent += `${"\u{1F600}"}`
        }
    })
})