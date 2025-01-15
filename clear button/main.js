let inputField = document.getElementById("username");

let clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function(){
    inputField.value = "";
})