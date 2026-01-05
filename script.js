let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice');

function speak(text) {
    const User_speak = new SpeechSynthesisUtterance(text);
    User_speak.rate = 1;
    User_speak.pitch = 1;
    User_speak.volume = 1;
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    // Best choice
    User_speak.voice = voices.find(v =>
        v.name.includes("Google US English")
    );

    window.speechSynthesis.speak(User_speak);
}


function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours > 12 && hours < 16) {
        speak("Good afternoon Sir")
    }
    else {
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load', () => {
//     wishMe();
//     speak("I am your Ai Assistant. How can I help you?")
// });

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.continuous = false;
recognition.lang = 'en-US';

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript;
    takeCommand(transcript);
    // console.log(event)
}

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
})

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir, what can i help you?")
    }
    else if (message.includes("who are you")) {
        speak("i am virtual assistant, created by Ayush Sir")
    }
    else if (message.includes("how are you")) {
        speak("I am fine sir, tell me how can I help you?")
    }
    else if (message.includes("time")) {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        speak(`Sir, the time is ${hours} ${minutes}`);
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    }
    else if (message.includes("open YouTube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com", "_blank");
    }
    else if (message.includes("open Google")) {
        speak("Opening Google...");
        window.open("https://www.google.com", "_blank");
    }
    else if (message.includes("open Facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com", "_blank");
    }
    else if (message.includes("open Instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com", "_blank");
    }
    else if (message.includes("open Groww")) {
        speak("Opening Groww...");
        window.open("https://www.groww.in", "_blank");
    }
    else if (message.includes("open Gmail")) {
        speak("Opening Gmail...");
        window.open("https://gmail.google.com", "_blank");
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace("Syno", "")}`, "_blank");
        speak("Here is what I found on google regarding " + message.replace("Syno", ""));
    }
}

