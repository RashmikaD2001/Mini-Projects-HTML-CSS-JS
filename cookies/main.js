// check cookie enabled
// console.log(navigator.cookieEnabled);

// add cookie
// document.cookie = "firstName=Rashmika; expires=Sun, 2 February 2025 12:00:00 UTC; path=/"
// document.cookie = "lastName=Perera; expires=Sun, 2 February 2025 12:00:00 UTC; path=/"

// // override cookie
// document.cookie = "firstName=Dushmantha; expires=Sun, 2 February 2025 12:00:00 UTC; path=/"

// // access cookie
// console.log(document.cookie)

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText, 5);
    setCookie("lastName", lastText, 5);
})

cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
})

function setCookie(name, value, daysToLive){
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

// delete cookie
function deleteCookie(name){
    setCookie(name, null, null);
}

function getCookie(name){
    const cDecode = decodeURIComponent(document.cookie)
    const cArray = cDecode.split("; ");
    let result = null;
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result
}