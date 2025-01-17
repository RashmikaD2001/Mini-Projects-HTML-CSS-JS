let input = document.getElementById("input");
        let btn = document.getElementById("btn-barcode-generator");
        
        btn.addEventListener("click", generateBarcode);
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                generateBarcode();
            }
        });
        
        function generateBarcode() {
            if (input.value.trim() === "") {
                alert("Please enter a value");
                return;
            }
            
            JsBarcode("#barcode", input.value, {
                format: "code128",
                displayValue: true,
                fontSize: 24,
                lineColor: "#000",
                background: "#ffffff",
                margin: 10,
                height: 100
            });
        }
        
        window.onload = () => {
            input.value = "";
            input.focus();
        };