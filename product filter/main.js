let products = {
    data:[{
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "assets/white-tshirt.jpg"
    },
    {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "40",
        image: "assets/Short-Skirt.jpg"
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "55",
        image: "assets/Sports-Smartwatch.jpg"
    },
    {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "25",
        image: "assets/Knitted-Top.jpg"
    },
    {
        productName: "Black Jacket",
        category: "Jacket",
        price: "45",
        image: "assets/black-jacket.jpg"
    },
    {
        productName: "Black T-Shirt",
        category: "Topwear",
        price: "15",
        image: "assets/black-t-shirt.jpg"
    }]
};

for(let i of products.data){

    // Create Card
    let card = document.createElement("div");
    // Card should have category
    card.classList.add("card",i.category,"hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    // price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach(button => {

        if(value.toUpperCase() == button.innerHTML.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

    // select all cards
    let elements = document.querySelectorAll(".card");

    elements.forEach(element => {

        // display all cards

        if(value == "all"){
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }else{
                element.classList.add("hide");
            }
        }
    });
}

// Initially display all
window.onload = () => {
    filterProduct("all");
}

// Search

document.getElementById("search").addEventListener("click", () => {
    // Get search input and convert to uppercase for case-insensitive comparison
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    // If search input is empty, show all cards
    if (searchInput === "") {
        cards.forEach(card => card.classList.remove("hide"));
        return;
    }

    elements.forEach((element, index) => {
        // Convert element text to uppercase for case-insensitive comparison
        let productName = element.innerText.toUpperCase();
        if (productName.includes(searchInput)) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});