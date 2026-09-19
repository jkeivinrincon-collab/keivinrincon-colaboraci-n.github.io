const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");
const vid = document.querySelector("video");

const steps = [
    {
        gif: "recursos/rusure.gif",
        text: "¿Quisiste decir que SÍ, verdad? 🤨",
        yesStyle: { height: "65%", width: "60%" },
        noStyle: { width: "30%" }
    },
    {
        gif: "recursos/3shocked-1.gif",
        text: "Se te resbaló el dedo, ¿no? 🥺",
        yesStyle: { height: "70%", width: "70%" },
        noStyle: { width: "20%" }
    },
    {
        gif: "recursos/4.crying.gif",
        text: "Voy a llorar 😭",
        yesStyle: { height: "80%", width: "80%" },
        noStyle: { width: "10%", fontSize: "4vh" } 
    },
    {
        gif: "recursos/5.crying.gif",
        text: "Por favorcito 🥺😘",
        yesStyle: { height: "90%", width: "96%" },
        noStyle: { display: "none" } 
    }
];

let stepIndex = 0;

const allGifs = steps.map(step => step.gif).concat(["recursos/idc.gif"])

allGifs.forEach(src => {
    const img = new Image();
    img.src = src;
});

noBtn.addEventListener("click", () => {
    if(stepIndex < steps.length) {
        const currentStep = steps[stepIndex];
        gif.src = currentStep.gif;
        text.innerHTML = currentStep.text;

        Object.assign(yesBtn.style, currentStep.yesStyle);
        Object.assign(noBtn.style, currentStep.noStyle);
        
        stepIndex++;
    }
})

// BOTÓN SÍ 💗
yesBtn.addEventListener("click", () => {
    text.innerHTML = "Sabía que me amas 😍💗";
    gif.src = "recursos/idc.gif";
    noBtn.style.display = "none";
    yesBtn.style.height = "90%" ;
    yesBtn.style.width = "96%" ; 

    if (vid) {
        vid.style.display = "block";
        vid.play().catch(e => console.log("autoplay boqueado o video no cargado"));
        setTimeout(() => {
            vid.style.display = "none";
        }, 9000);
    }
});