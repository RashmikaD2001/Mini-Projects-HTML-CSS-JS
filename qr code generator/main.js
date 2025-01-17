const container = document.querySelector(".container");
        const userInput = document.getElementById("userInput");
        const submitBtn = document.getElementById("submit");
        const downloadBtn = document.getElementById("download");
        const sizeOptions = document.querySelector(".sizeOptions");
        const bgColor = document.getElementById("bgColor");
        const fgColor = document.getElementById("fgColor");
        
        let QR_Code;
        let sizeChoice = 100;
        let bgColorChoice = "#ffffff";
        let fgColorChoice = "#377dff";
        
        sizeOptions.addEventListener("change", () => {
            sizeChoice = parseInt(sizeOptions.value);
        });
        
        bgColor.addEventListener("input", () => {
            bgColorChoice = bgColor.value;
        });
        
        fgColor.addEventListener("input", () => {
            fgColorChoice = fgColor.value;
        });
        
        const inputFormatter = (value) => {
            return value.replace(/[^a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]/g, "");
        };
        
        submitBtn.addEventListener("click", () => {
            container.innerHTML = "";
            QR_Code = new QRCode(container, {
                text: userInput.value,
                width: sizeChoice,
                height: sizeChoice,
                colorDark: fgColorChoice,
                colorLight: bgColorChoice
            });
            
            // Wait for QR code to be generated
            setTimeout(() => {
                const src = container.querySelector("canvas").toDataURL("image/png");
                downloadBtn.href = src;
                const fileName = inputFormatter(userInput.value);
                downloadBtn.download = `${fileName}-QR.png`;
                downloadBtn.classList.remove("hide");
            }, 300);
        });
        
        userInput.addEventListener("input", () => {
            if (userInput.value.trim().length < 1) {
                submitBtn.disabled = true;
                downloadBtn.href = "";
                downloadBtn.classList.add("hide");
            } else {
                submitBtn.disabled = false;
            }
        });
        
        window.onload = () => {
            container.innerHTML = "";
            sizeOptions.value = sizeChoice;
            userInput.value = "";
            bgColor.value = bgColorChoice;
            fgColor.value = fgColorChoice;
            downloadBtn.classList.add("hide");
            submitBtn.disabled = true;
        };