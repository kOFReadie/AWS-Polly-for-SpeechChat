window.addEventListener("load", () =>
{
    setTimeout(() => {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.setAttribute("src", "https://cdn.jsdelivr.net/gh/kOFReadie/Twitch-TTS-Browser-Extention/Extention/tts.js");
        document.head.appendChild(js);
    }, 1000);
});