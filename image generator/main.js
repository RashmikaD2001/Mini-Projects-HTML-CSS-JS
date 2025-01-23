function getRandomImageURL(){
    const width = 150;
    const height = 150;
    return `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
}

function generateImages(){
    const imageContainer = document.getElementById('images');
    imageContainer.innerHTML = "";
    for(let i = 0;i<3;i++){
        const img = document.createElement("img");
        img.src = getRandomImageURL();
        imageContainer.appendChild(img);
    }
}

document.getElementById("generate-btn")
addEventListener("click", generateImages);