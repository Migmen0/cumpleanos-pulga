/* =========================================================
   ELEMENTOS PRINCIPALES
========================================================= */

const inicio =
    document.getElementById("inicio");

const juego =
    document.getElementById("juego");

const sorpresa =
    document.getElementById("sorpresa");

const regalo =
    document.getElementById("regalo");

const carta =
    document.getElementById("carta");

const deseos =
    document.getElementById("deseos");

const comenzar =
    document.getElementById("comenzar");

const jardin =
    document.getElementById("jardin");

const floresEncontradas =
    document.getElementById("floresEncontradas");

const progreso =
    document.getElementById("progreso");

const mensajeFlor =
    document.getElementById("mensajeFlor");

const mensajeFlorIcono =
    document.getElementById("mensajeFlorIcono");

const mensajeFlorNumero =
    document.getElementById("mensajeFlorNumero");

const tituloMensajeFlor =
    document.getElementById("tituloMensajeFlor");

const textoMensajeFlor =
    document.getElementById("textoMensajeFlor");

const cerrarMensajeFlor =
    document.getElementById("cerrarMensajeFlor");

const cerrarMensajeFlorBoton =
    document.getElementById("cerrarMensajeFlorBoton");

const abrirRegalo =
    document.getElementById("abrirRegalo");

const abrirCarta =
    document.getElementById("abrirCarta");

const regaloCaja =
    document.getElementById("regaloCaja");

const irDeseos =
    document.getElementById("irDeseos");

const numeroDeseo =
    document.getElementById("numeroDeseo");

const textoDeseo =
    document.getElementById("textoDeseo");

const deseoIcono =
    document.getElementById("deseoIcono");

const siguienteDeseo =
    document.getElementById("siguienteDeseo");

const deseoCard =
    document.getElementById("deseoCard");

const finalDeseos =
    document.getElementById("finalDeseos");


/* =========================================================
   MÚSICA DE FONDO
========================================================= */

const musicaFondo =
    document.getElementById("musicaFondo");


/* =========================================================
   CONFIGURACIÓN DEL AUDIO
========================================================= */

if (musicaFondo) {

    musicaFondo.volume = 0.45;

    musicaFondo.muted = false;


    musicaFondo.addEventListener(
        "loadeddata",
        () => {

            console.log(
                "🎵 Música cargada correctamente."
            );

        }
    );


    musicaFondo.addEventListener(
        "canplay",
        () => {

            console.log(
                "🎵 El navegador puede reproducir la música."
            );

        }
    );


    musicaFondo.addEventListener(
        "play",
        () => {

            console.log(
                "🎵 La música comenzó a reproducirse."
            );

        }
    );


    musicaFondo.addEventListener(
        "pause",
        () => {

            console.log(
                "⏸️ La música está pausada."
            );

        }
    );


    musicaFondo.addEventListener(
        "error",
        () => {

            console.error(
                "❌ ERROR: No se pudo cargar a-thousand-years.mp3"
            );

            console.error(
                "Verifica que el archivo esté en la misma carpeta que index.html."
            );

        }
    );

}


/* =========================================================
   INTENTAR REPRODUCIR AUTOMÁTICAMENTE
========================================================= */

function intentarAutoplay() {

    if (!musicaFondo) {

        console.error(
            "❌ No existe el elemento #musicaFondo."
        );

        return;

    }


    try {

        musicaFondo.volume = 0.45;

        musicaFondo.muted = false;


        const promesa =
            musicaFondo.play();


        if (
            promesa !== undefined
        ) {

            promesa
                .then(
                    () => {

                        console.log(
                            "🎵 Autoplay permitido. Música iniciada automáticamente."
                        );

                    }
                )
                .catch(
                    error => {

                        console.warn(
                            "⚠️ El navegador bloqueó el autoplay con sonido."
                        );

                        console.warn(
                            "La música comenzará cuando el usuario interactúe con la página."
                        );

                        console.warn(
                            "Detalle:",
                            error
                        );

                    }
                );

        }

    } catch (error) {

        console.error(
            "❌ Error intentando reproducir la música:",
            error
        );

    }

}


/* =========================================================
   INTENTAR AUTOPLAY AL CARGAR LA PÁGINA
========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        () => {

            intentarAutoplay();

        }
    );

} else {

    intentarAutoplay();

}


/* =========================================================
   RESPALDO PARA EL PRIMER CLIC
========================================================= */

function iniciarMusica() {

    if (!musicaFondo) {

        console.error(
            "❌ No existe el elemento #musicaFondo."
        );

        return;

    }


    try {

        musicaFondo.volume = 0.45;

        musicaFondo.muted = false;


        /*
         * IMPORTANTE:
         * No utilizamos musicaFondo.load()
         * aquí porque el archivo ya está cargado
         * y llamar a load() puede reiniciar
         * el estado de reproducción.
         */


        const promesa =
            musicaFondo.play();


        if (
            promesa !== undefined
        ) {

            promesa
                .then(
                    () => {

                        console.log(
                            "🎵 Música iniciada correctamente mediante interacción."
                        );

                    }
                )
                .catch(
                    error => {

                        console.error(
                            "❌ El navegador rechazó la reproducción:",
                            error
                        );

                    }
                );

        }

    } catch (error) {

        console.error(
            "❌ Error iniciando la música:",
            error
        );

    }

}


/* =========================================================
   ELEMENTOS DEL JARDÍN
========================================================= */

const petalosJardin =
    document.getElementById("petalosJardin");

const brillosJardin =
    document.getElementById("brillosJardin");


/* =========================================================
   ELEMENTOS DE LA CARTA
========================================================= */

const sobreContenedor =
    document.getElementById("sobreContenedor");

const abrirSobre =
    document.getElementById("abrirSobre");

const cartaContenido =
    document.getElementById("cartaContenido");


/* =========================================================
   CONFIGURACIÓN
========================================================= */

const TOTAL_FLORES = 12;

const TOTAL_DESEOS = 12;


/* =========================================================
   ESTADO
========================================================= */

let encontradas = 0;

let intervaloEscritura = null;

let deseoActual = 0;

let sobreAbierto = false;

let jardinCelebrado = false;


/* =========================================================
   MENSAJES DE LAS 12 FLORES
========================================================= */

const mensajesFlores = [

    {
        icono: "🌸",
        titulo: "Un pequeño recuerdo",
        mensaje:
            "Hace 12 años llegó al mundo una personita que con el tiempo se volvió muy especial para mí. 💜"
    },

    {
        icono: "🦋",
        titulo: "Para mi Pulga",
        mensaje:
            "Puede que estés creciendo, pero para mí siempre vas a ser mi Pulga. Esa pequeña persona que quiero muchísimo. 🥹"
    },

    {
        icono: "✨",
        titulo: "Nunca olvides esto",
        mensaje:
            "Eres una persona única. No necesitas parecerte a nadie para ser increíble. Tu forma de ser es precisamente lo que te hace especial."
    },

    {
        icono: "🌷",
        titulo: "Las cosas pequeñas",
        mensaje:
            "Espero que nunca pierdas esa forma tan tuya de disfrutar las cosas pequeñas. Muchas veces ahí se encuentran los momentos más bonitos. ✨"
    },

    {
        icono: "💕",
        titulo: "Personas bonitas",
        mensaje:
            "Que nunca te falten personas que te quieran de verdad, que te respeten y que siempre quieran verte feliz."
    },

    {
        icono: "🌙",
        titulo: "Cuando algo salga mal",
        mensaje:
            "A veces la vida no será fácil, pero recuerda que siempre puedes levantarte, aprender y seguir adelante. Nunca dudes de tu fuerza. 💪"
    },

    {
        icono: "⭐",
        titulo: "Tus sueños",
        mensaje:
            "Quiero que tengas muchos sueños... pero sobre todo, que tengas el valor para perseguirlos, aunque parezcan demasiado grandes."
    },

    {
        icono: "🎈",
        titulo: "No tengas miedo",
        mensaje:
            "Nunca tengas miedo de equivocarte. De los errores también nacen aprendizajes, historias y momentos que algún día recordarás con una sonrisa."
    },

    {
        icono: "🎂",
        titulo: "El comienzo",
        mensaje:
            "Espero que estos 12 años sean solamente el comienzo de una vida llena de aventuras bonitas, aprendizajes y momentos inolvidables."
    },

    {
        icono: "💜",
        titulo: "Siempre sé tú",
        mensaje:
            "Nunca cambies tu esencia solamente para encajar. Ser tú siempre será suficiente."
    },

    {
        icono: "🌟",
        titulo: "Algún día",
        mensaje:
            "Quiero que algún día mires atrás y sonrías pensando en todas las cosas bonitas que lograste y en todo lo que fuiste capaz de superar."
    },

    {
        icono: "💌",
        titulo: "La última flor",
        mensaje:
            "Esta última flor tiene un mensaje especial... porque todavía falta entregarte la verdadera sorpresa. 💜 Ahora sí, Pulga... prepárate."
    }

];


/* =========================================================
   ICONOS DE LAS 12 FLORES
========================================================= */

const floresIconos = [

    "✨",
    "🌼",
    "🌷",
    "🌻",
    "🌹",
    "🌼",
    "🌸",
    "🦋",
    "✨",
    "🌺",
    "💐",
    "🥀"

];


/* =========================================================
   POSICIONES DE LAS 12 FLORES
========================================================= */

const posicionesFlores = [

    { left: 8, top: 12 },
    { left: 38, top: 8 },
    { left: 70, top: 13 },
    { left: 20, top: 28 },
    { left: 53, top: 25 },
    { left: 84, top: 32 },
    { left: 7, top: 48 },
    { left: 38, top: 45 },
    { left: 68, top: 52 },
    { left: 18, top: 68 },
    { left: 48, top: 70 },
    { left: 79, top: 72 }

];


/* =========================================================
   COMENZAR
========================================================= */

comenzar.addEventListener(
    "click",
    () => {

        /*
         * Este clic es una interacción real del usuario.
         * Si el navegador había bloqueado el autoplay,
         * aquí normalmente permitirá comenzar el audio.
         */

        iniciarMusica();


        inicio.style.display =
            "none";


        juego.style.display =
            "block";


        crearFlores();

        crearPetalosJardin();

        crearBrillosJardin();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   CREAR LAS 12 FLORES
========================================================= */

function crearFlores() {

    jardin
        .querySelectorAll(".flor-juego")
        .forEach(
            flor => flor.remove()
        );


    posicionesFlores.forEach(
        (posicion, index) => {

            const flor =
                document.createElement("button");


            flor.className =
                "flor-juego";


            flor.type =
                "button";


            flor.textContent =
                floresIconos[index];


            flor.dataset.numero =
                index + 1;


            flor.style.left =
                posicion.left + "%";


            flor.style.top =
                posicion.top + "%";


            flor.style.animationDelay =
                `${index * 0.12}s, ${0.8 + index * 0.12}s`;


            flor.setAttribute(
                "aria-label",
                `Descubrir flor ${index + 1}`
            );


            flor.addEventListener(
                "click",
                () => {

                    descubrirFlor(
                        flor,
                        index
                    );

                }
            );


            jardin.appendChild(
                flor
            );

        }
    );

}


/* =========================================================
   CREAR PÉTALOS DEL JARDÍN
========================================================= */

function crearPetalosJardin() {

    if (!petalosJardin) {
        return;
    }


    petalosJardin.innerHTML =
        "";


    const simbolos = [
        "🌸",
        "🌷",
        "✦",
        "✧",
        "♡"
    ];


    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const petalo =
            document.createElement("span");


        petalo.className =
            "petalo-jardin";


        petalo.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        petalo.style.left =
            Math.random() *
            100 +
            "%";


        petalo.style.fontSize =
            (
                10 +
                Math.random() * 10
            ) +
            "px";


        petalo.style.animationDuration =
            (
                7 +
                Math.random() * 7
            ) +
            "s";


        petalo.style.animationDelay =
            (
                Math.random() * -12
            ) +
            "s";


        petalo.style.setProperty(
            "--movimiento",
            (
                Math.random() * 120 -
                60
            ) +
            "px"
        );


        petalosJardin.appendChild(
            petalo
        );

    }

}


/* =========================================================
   CREAR BRILLOS DEL JARDÍN
========================================================= */

function crearBrillosJardin() {

    if (!brillosJardin) {
        return;
    }


    brillosJardin.innerHTML =
        "";


    const cantidad = 10;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const brillo =
            document.createElement("span");


        brillo.className =
            "brillo-jardin";


        brillo.textContent =
            i % 2 === 0
                ? "✦"
                : "✧";


        brillo.style.left =
            (
                5 +
                Math.random() * 90
            ) +
            "%";


        brillo.style.top =
            (
                5 +
                Math.random() * 90
            ) +
            "%";


        brillo.style.fontSize =
            (
                8 +
                Math.random() * 10
            ) +
            "px";


        brillo.style.animationDelay =
            (
                Math.random() * 3
            ) +
            "s";


        brillo.style.animationDuration =
            (
                2.5 +
                Math.random() * 2
            ) +
            "s";


        brillosJardin.appendChild(
            brillo
        );

    }

}


/* =========================================================
   DESCUBRIR FLOR
========================================================= */

function descubrirFlor(
    flor,
    index
) {

    if (
        flor.classList.contains(
            "encontrada"
        )
    ) {
        return;
    }


    crearExplosionFlor(
        flor
    );


    crearHaloFlor(
        flor
    );


    flor.classList.add(
        "encontrada"
    );


    encontradas++;


    floresEncontradas.textContent =
        encontradas;


    const contadorNumero =
        floresEncontradas.parentElement;


    contadorNumero.classList.remove(
        "pop"
    );


    void contadorNumero.offsetWidth;


    contadorNumero.classList.add(
        "pop"
    );


    const porcentaje =
        (
            encontradas /
            TOTAL_FLORES
        ) *
        100;


    progreso.style.width =
        porcentaje + "%";


    if ("vibrate" in navigator) {

        navigator.vibrate([
            30,
            30,
            30
        ]);

    }


    actualizarVidaJardin();


    mostrarMensajeFlor(
        index,
        encontradas,
        floresIconos[index]
    );

}


/* =========================================================
   EXPLOSIÓN DE PARTÍCULAS
========================================================= */

function crearExplosionFlor(
    flor
) {

    const rect =
        flor.getBoundingClientRect();


    const simbolos = [
        "✦",
        "✧",
        "♡",
        "✨",
        "🌸"
    ];


    const cantidad = 12;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const particula =
            document.createElement(
                "span"
            );


        particula.className =
            "particula-flor";


        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        particula.style.left =
            (
                rect.left +
                rect.width / 2
            ) +
            "px";


        particula.style.top =
            (
                rect.top +
                rect.height / 2
            ) +
            "px";


        const angulo =
            (
                Math.PI * 2 * i
            ) /
            cantidad;


        const distancia =
            35 +
            Math.random() * 55;


        const dx =
            Math.cos(
                angulo
            ) *
            distancia;


        const dy =
            Math.sin(
                angulo
            ) *
            distancia;


        particula.style.setProperty(
            "--dx",
            dx + "px"
        );


        particula.style.setProperty(
            "--dy",
            dy + "px"
        );


        particula.style.fontSize =
            (
                10 +
                Math.random() * 10
            ) +
            "px";


        particula.style.animationDelay =
            (
                Math.random() * 0.08
            ) +
            "s";


        document.body.appendChild(
            particula
        );


        setTimeout(
            () => {

                particula.remove();

            },
            1100
        );

    }

}


/* =========================================================
   HALO AL DESCUBRIR
========================================================= */

function crearHaloFlor(
    flor
) {

    const rect =
        flor.getBoundingClientRect();


    const rectJardin =
        jardin.getBoundingClientRect();


    const halo =
        document.createElement(
            "span"
        );


    halo.className =
        "halo-descubrimiento";


    halo.style.left =
        (
            rect.left +
            rect.width / 2 -
            rectJardin.left
        ) +
        "px";


    halo.style.top =
        (
            rect.top +
            rect.height / 2 -
            rectJardin.top
        ) +
        "px";


    jardin.appendChild(
        halo
    );


    setTimeout(
        () => {

            halo.remove();

        },
        1000
    );

}


/* =========================================================
   EL JARDÍN COBRA VIDA
========================================================= */

function actualizarVidaJardin() {

    const nivel =
        encontradas /
        TOTAL_FLORES;


    const brillo =
        1 +
        nivel * 0.06;


    jardin.style.filter =
        `brightness(${brillo})`;


    if (
        encontradas >=
        TOTAL_FLORES / 2
    ) {

        jardin
            .querySelectorAll(
                ".jardin-resplandor"
            )
            .forEach(
                resplandor => {

                    resplandor.style.opacity =
                        "0.38";

                }
            );

    }


    if (
        encontradas >=
        TOTAL_FLORES - 3
    ) {

        jardin
            .querySelectorAll(
                ".brillo-jardin"
            )
            .forEach(
                brillo => {

                    brillo.style.opacity =
                        "1";

                }
            );

    }

}


/* =========================================================
   MOSTRAR MENSAJE DE FLOR
========================================================= */

function mostrarMensajeFlor(
    index,
    numeroDescubrimiento,
    iconoFlor
) {

    const informacion =
        mensajesFlores[index];


    if (!informacion) {
        return;
    }


    mensajeFlorIcono.textContent =
        iconoFlor;


    mensajeFlorNumero.textContent =
        `FLOR ${numeroDescubrimiento} DE ${TOTAL_FLORES}`;


    tituloMensajeFlor.textContent =
        informacion.titulo;


    textoMensajeFlor.textContent =
        "";


    mensajeFlor.classList.add(
        "activo"
    );


    escribirTexto(
        informacion.mensaje
    );

}


/* =========================================================
   EFECTO DE ESCRITURA
========================================================= */

function escribirTexto(
    texto
) {

    clearInterval(
        intervaloEscritura
    );


    let posicion = 0;


    intervaloEscritura =
        setInterval(
            () => {

                textoMensajeFlor.textContent +=
                    texto.charAt(
                        posicion
                    );


                posicion++;


                if (
                    posicion >=
                    texto.length
                ) {

                    clearInterval(
                        intervaloEscritura
                    );

                }

            },
            18
        );

}


/* =========================================================
   CELEBRACIÓN DEL JARDÍN COMPLETO
========================================================= */

function celebrarJardinCompleto() {

    if (jardinCelebrado) {
        return;
    }


    jardinCelebrado = true;


    jardin.classList.add(
        "jardin-completo"
    );


    crearExplosionJardin();

    lanzarConfetiJardin();


    setTimeout(
        () => {

            jardin.classList.remove(
                "jardin-completo"
            );

        },
        1800
    );

}


/* =========================================================
   EXPLOSIÓN FINAL DEL JARDÍN
========================================================= */

function crearExplosionJardin() {

    const rect =
        jardin.getBoundingClientRect();


    const simbolos = [
        "🌸",
        "🌷",
        "🌺",
        "💜",
        "✨",
        "🦋",
        "✦",
        "♡"
    ];


    for (
        let i = 0;
        i < 32;
        i++
    ) {

        const particula =
            document.createElement(
                "span"
            );


        particula.className =
            "particula-flor";


        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        particula.style.left =
            (
                rect.left +
                rect.width / 2
            ) +
            "px";


        particula.style.top =
            (
                rect.top +
                rect.height / 2
            ) +
            "px";


        const angulo =
            Math.random() *
            Math.PI *
            2;


        const distancia =
            80 +
            Math.random() * 220;


        particula.style.setProperty(
            "--dx",
            (
                Math.cos(angulo) *
                distancia
            ) +
            "px"
        );


        particula.style.setProperty(
            "--dy",
            (
                Math.sin(angulo) *
                distancia
            ) +
            "px"
        );


        particula.style.fontSize =
            (
                12 +
                Math.random() * 18
            ) +
            "px";


        document.body.appendChild(
            particula
        );


        setTimeout(
            () => {

                particula.remove();

            },
            1200
        );

    }

}


/* =========================================================
   CONFETI PEQUEÑO DEL JARDÍN
========================================================= */

function lanzarConfetiJardin() {

    const simbolos = [
        "🌸",
        "✦",
        "✧",
        "♡",
        "✨"
    ];


    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const particula =
            document.createElement(
                "div"
            );


        particula.className =
            "particula-confeti";


        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        particula.style.left =
            Math.random() *
            100 +
            "vw";


        particula.style.animationDuration =
            (
                2 +
                Math.random() * 2
            ) +
            "s";


        particula.style.animationDelay =
            (
                Math.random() * 0.4
            ) +
            "s";


        particula.style.fontSize =
            (
                12 +
                Math.random() * 15
            ) +
            "px";


        document.body.appendChild(
            particula
        );


        setTimeout(
            () => {

                particula.remove();

            },
            4500
        );

    }

}


/* =========================================================
   CERRAR MENSAJE
========================================================= */

function cerrarMensaje() {

    mensajeFlor.classList.remove(
        "activo"
    );


    clearInterval(
        intervaloEscritura
    );


    if (
        encontradas ===
        TOTAL_FLORES
    ) {

        setTimeout(
            () => {

                celebrarJardinCompleto();

            },
            150
        );


        setTimeout(
            () => {

                mostrarSorpresa();

            },
            1900
        );

    }

}


/* =========================================================
   BOTÓN CERRAR
========================================================= */

cerrarMensajeFlor.addEventListener(
    "click",
    cerrarMensaje
);


/* =========================================================
   BOTÓN CONTINUAR
========================================================= */

cerrarMensajeFlorBoton.addEventListener(
    "click",
    cerrarMensaje
);


/* =========================================================
   CERRAR TOCANDO FUERA
========================================================= */

mensajeFlor.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target ===
            mensajeFlor
        ) {

            cerrarMensaje();

        }

    }
);


/* =========================================================
   MOSTRAR SORPRESA
========================================================= */

function mostrarSorpresa() {

    juego.style.display =
        "none";


    sorpresa.classList.add(
        "visible"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    lanzarConfeti();

}


/* =========================================================
   ABRIR REGALO
========================================================= */

abrirRegalo.addEventListener(
    "click",
    () => {

        sorpresa.style.display =
            "none";


        regalo.classList.add(
            "visible"
        );


        setTimeout(
            () => {

                regalo.classList.add(
                    "abierto"
                );

            },
            300
        );


        lanzarConfeti();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   MOSTRAR CARTA
========================================================= */

abrirCarta.addEventListener(
    "click",
    () => {

        regalo.style.display =
            "none";


        carta.classList.add(
            "visible"
        );


        sobreContenedor.style.display =
            "block";


        cartaContenido.classList.remove(
            "visible"
        );


        sobreAbierto = false;


        sobreContenedor.classList.remove(
            "abriendo"
        );


        lanzarConfeti();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   ABRIR SOBRE
========================================================= */

abrirSobre.addEventListener(
    "click",
    () => {

        if (sobreAbierto) {
            return;
        }


        sobreAbierto = true;


        sobreContenedor.classList.add(
            "abriendo"
        );


        setTimeout(
            () => {

                sobreContenedor.style.display =
                    "none";


                cartaContenido.classList.add(
                    "visible"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                setTimeout(
                    () => {

                        lanzarConfeti();

                    },
                    500
                );

            },
            900
        );

    }
);


/* =========================================================
   IR A LOS DESEOS
========================================================= */

irDeseos.addEventListener(
    "click",
    () => {

        carta.style.display =
            "none";


        deseos.classList.add(
            "visible"
        );


        deseoActual = 0;


        deseoCard.style.display =
            "block";


        finalDeseos.classList.remove(
            "visible"
        );


        mostrarDeseo();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   LISTA DE LOS 12 DESEOS
========================================================= */

const listaDeseos = [

    {
        icono: "✨",
        texto:
            "Que nunca dejes de soñar, incluso cuando tus sueños parezcan demasiado grandes."
    },

    {
        icono: "🦋",
        texto:
            "Que siempre tengas la libertad de ser tú misma y disfrutar quien eres."
    },

    {
        icono: "🌸",
        texto:
            "Que encuentres personas que te quieran por quien eres y no por lo que esperan de ti."
    },

    {
        icono: "🌙",
        texto:
            "Que incluso en los días difíciles encuentres una pequeña razón para seguir sonriendo."
    },

    {
        icono: "⭐",
        texto:
            "Que tengas el valor de intentar cosas nuevas y descubrir todo lo que eres capaz de hacer."
    },

    {
        icono: "💜",
        texto:
            "Que nunca olvides lo valiosa y especial que eres."
    },

    {
        icono: "🌷",
        texto:
            "Que la vida te regale muchísimos momentos que algún día recordarás con cariño."
    },

    {
        icono: "🎨",
        texto:
            "Que nunca pierdas tu creatividad, tu curiosidad y esas ganas de descubrir el mundo."
    },

    {
        icono: "☁️",
        texto:
            "Que aprendas a dejar ir aquello que no te haga bien y a cuidar siempre tu tranquilidad."
    },

    {
        icono: "🌟",
        texto:
            "Que algún día puedas mirar atrás y sentirte orgullosa de todo lo que conseguiste."
    },

    {
        icono: "🌺",
        texto:
            "Que tengas muchas aventuras, viajes, historias y recuerdos increíbles."
    },

    {
        icono: "💕",
        texto:
            "Que estos 12 años sean solamente el comienzo de una vida llena de cosas bonitas y que nunca te falte amor."
    }

];


/* =========================================================
   MOSTRAR DESEO
========================================================= */

function mostrarDeseo() {

    const deseo =
        listaDeseos[deseoActual];


    if (!deseo) {
        return;
    }


    deseoCard.classList.remove(
        "cambiar"
    );


    deseoCard.classList.remove(
        "ultimo-deseo"
    );


    void deseoCard.offsetWidth;


    if (
        deseoActual ===
        TOTAL_DESEOS - 1
    ) {

        deseoCard.classList.add(
            "ultimo-deseo"
        );

    } else {

        deseoCard.classList.add(
            "cambiar"
        );

    }


    numeroDeseo.textContent =
        deseoActual + 1;


    deseoIcono.textContent =
        deseo.icono;


    textoDeseo.textContent =
        deseo.texto;


    lanzarParticulasDeseo();

}


/* =========================================================
   PARTÍCULAS DE LOS DESEOS
========================================================= */

function lanzarParticulasDeseo() {

    const simbolos = [
        "✦",
        "✧",
        "♡",
        "✨"
    ];


    const rect =
        deseoCard.getBoundingClientRect();


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const particula =
            document.createElement("span");


        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        particula.style.position =
            "fixed";


        particula.style.left =
            (
                rect.left +
                rect.width / 2 +
                (
                    Math.random() * 180 -
                    90
                )
            ) +
            "px";


        particula.style.top =
            (
                rect.top +
                rect.height / 2 +
                (
                    Math.random() * 120 -
                    60
                )
            ) +
            "px";


        particula.style.zIndex =
            "10";


        particula.style.pointerEvents =
            "none";


        particula.style.fontSize =
            (
                10 +
                Math.random() * 10
            ) +
            "px";


        particula.style.color =
            "#b69bd0";


        particula.style.opacity =
            "0.8";


        particula.style.transition =
            "transform 1s ease, opacity 1s ease";


        document.body.appendChild(
            particula
        );


        requestAnimationFrame(
            () => {

                const x =
                    (
                        Math.random() * 100
                    ) -
                    50;


                const y =
                    (
                        Math.random() * 100
                    ) -
                    70;


                particula.style.transform =
                    `
                    translate(
                        ${x}px,
                        ${y}px
                    )
                    rotate(
                        ${Math.random() * 180}deg
                    )
                    scale(
                        ${0.7 + Math.random() * 0.8}
                    )
                    `;


                particula.style.opacity =
                    "0";

            }
        );


        setTimeout(
            () => {

                particula.remove();

            },
            1100
        );

    }

}


/* =========================================================
   SIGUIENTE DESEO
========================================================= */

siguienteDeseo.addEventListener(
    "click",
    () => {

        if ("vibrate" in navigator) {

            navigator.vibrate(25);

        }


        deseoActual++;


        if (
            deseoActual >=
            TOTAL_DESEOS
        ) {

            deseoCard.classList.add(
                "ultimo-deseo"
            );


            setTimeout(
                () => {

                    deseoCard.style.display =
                        "none";


                    finalDeseos.classList.add(
                        "visible"
                    );


                    lanzarConfeti();


                    window.scrollTo({
                        top:
                            document.body.scrollHeight,

                        behavior:
                            "smooth"
                    });

                },
                350
            );


            return;

        }


        mostrarDeseo();

    }
);


/* =========================================================
   CONFETI
========================================================= */

function lanzarConfeti() {

    const simbolos = [
        "✦",
        "✧",
        "♡",
        "💜",
        "🌸",
        "🦋",
        "✨"
    ];


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const particula =
            document.createElement(
                "div"
            );


        particula.className =
            "particula-confeti";


        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        particula.style.left =
            Math.random() *
            100 +
            "vw";


        particula.style.animationDuration =
            (
                2.5 +
                Math.random() * 3
            ) +
            "s";


        particula.style.animationDelay =
            (
                Math.random() * 1.5
            ) +
            "s";


        particula.style.fontSize =
            (
                12 +
                Math.random() * 18
            ) +
            "px";


        document.body.appendChild(
            particula
        );


        setTimeout(
            () => {

                particula.remove();

            },
            6000
        );

    }

}


/* =========================================================
   INICIAR PRIMER DESEO
========================================================= */

mostrarDeseo();