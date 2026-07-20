/*=========================================
        CORAZONES FLOTANTES
=========================================*/

const heartsContainer = document.querySelector(".hearts");

function crearCorazon() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(crearCorazon, 350);


/*=========================================
        EFECTO EN LA FOTO
=========================================*/

const foto = document.querySelector(".fotoPrincipal");

if (foto) {

    foto.addEventListener("mousemove", (e) => {

        const rect = foto.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 16;
        const rotateX = ((y / rect.height) - 0.5) * -16;

        foto.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;

    });

    foto.addEventListener("mouseleave", () => {

        foto.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) scale(1)";

    });

}


/*=========================================
        ANIMACIÓN DEL BOTÓN
=========================================*/

const boton = document.querySelector("button");

if (boton) {

    boton.addEventListener("mouseenter", () => {

        boton.style.transform = "scale(1.08)";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "scale(1)";

    });

}


/*=========================================
        MENSAJE EN CONSOLA
=========================================*/

console.log("%c❤️ Feliz Cumpleaños Mamá ❤️",
"color:#d63384;font-size:28px;font-weight:bold;");

console.log("%cEsta página fue hecha con muchísimo amor ❤️",
"color:#444;font-size:16px;");
function mostrarSorpresa() {

    const sorpresa = document.getElementById("sorpresa");

    if (sorpresa.style.display === "block") {

        sorpresa.style.display = "none";

    } else {

        sorpresa.style.display = "block";

    }

}
function abrirCarta() {

    const sobre = document.getElementById("sobre");

    sobre.classList.toggle("abierto");

}