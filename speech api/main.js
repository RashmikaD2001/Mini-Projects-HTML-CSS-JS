let text = document.getElementById("txt");
let submitBtn = document.getElementById("submit");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");
let audioMessage;

submitBtn.addEventListener("click", () => {
    if (audioMessage && text.value.trim()) {
        if (!window.speechSynthesis.speaking) {
            audioMessage.text = text.value;
            window.speechSynthesis.speak(audioMessage);
        } else {
            alert("Speech is already playing. Please pause or wait.");
        }
    } else {
        alert("Please enter some text to speak.");
    }
});

resumeBtn.addEventListener("click", () => {
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        resumeBtn.style.display = "none";
        pauseBtn.style.display = "block";
    }
});

pauseBtn.addEventListener("click", () => {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "block";
    }
});

window.onload = () => {
    resumeBtn.style.display = "none";
    text.focus(); // Focus on textarea for better UX
    if ("speechSynthesis" in window) {
        audioMessage = new SpeechSynthesisUtterance();
    } else {
        alert("Speech Synthesis is not supported in your browser.");
    }
};
