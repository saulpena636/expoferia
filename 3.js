var preguntas =[
    {
        pregunta : "¿Qué error tiene este código en C?",
        a : "main debe estar en mayusculas",
        b : "Falta un punto y coma después de printf(\"Hola, mundo\")",
        c : "printf no existe en C",
        d : "No hay error",
        correct : 'b'
    },
    {
        pregunta : "¿Qué error tiene este código en C?",
        a : " x no debería tener \"\" ",
        b : "Falta la librería <stdlib.h>",
        c : "printf necesita una conversión explícita",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en C?",
        a : "scanf debe usar &numero en lugar de numero",
        b : "Falta un ; después de printf",
        c : "numero debe ser un float",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en Python?",
        a : "Falta paréntesis en print",
        b : "print debe escribirse en mayúsculas",
        c : "print necesita comillas dobles",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en Python?",
        a : "x debe ser una cadena de texto",
        b : "if necesita un else",
        c : "Se usa = en lugar de == en la comparación",
        d : "No hay error",
        correct : 'c'
    },
    {
        pregunta : "¿Qué error tiene este código en Python?",
        a : "Falta return en la función",
        b : "Falta : después de saludar()",
        c : "print necesita paréntesis",
        d : "No hay error",
        correct : 'b'
    },
    {
        pregunta : "¿Qué error tiene este código en Java?",
        a : "main debe estar en mayúsculas",
        b : "Falta un punto y coma después de println",
        c : "System.out.println debe llevar paréntesis",
        d : "No hay error",
        correct : 'c'
    },
    {
        pregunta : "¿Qué error tiene este código en Java?",
        a : "\"10\" debe convertirse a int antes de asignarse",
        b : "numero debe ser un float",
        c : "System.out.println necesita una importación",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en Java?",
        a : "Falta punto y coma después del if",
        b : "if necesita == en lugar de =",
        c : " main debe ser estático",
        d : "No hay error",
        correct : 'b'
    },
    {
        pregunta : "¿Qué error tiene este código en C?",
        a : "Falta #include <stdio.h>",
        b : "printf debe ir dentro de un for",
        c : "printf debe escribirse en minúsculas",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en Python?",
        a : "x debe convertirse a entero antes de sumarlo",
        b : "Falta punto y coma en print(y)",
        c : "Debería de ser scan",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en Java?",
        a : "main debe tener String[] args",
        b : "Falta punto y coma en println",
        c : "System.out.println debe escribirse en mayúsculas",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en C?",
        a : "gets está obsoleto y debe reemplazarse por fgets",
        b : "nombre debe ser un int",
        c : "Falta #include <stdlib.h>",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en Python?",
        a : " Falta : después de range(5)",
        b : "print debe llevar corchetes",
        c : "range no puede usarse en for",
        d : "No hay error",
        correct : 'a'
    },
    {
        pregunta : "¿Qué error tiene este código en Java?",
        a : "Se deben usar comillas dobles para las cadenas",
        b : "main debe estar en mayúsculas",
        c : "Falta return en main",
        d : "No hay error",
        correct : 'a'
    }
]


var codigos = [
    "#include &lt;stdio.h&gt;\n\n\nint main() {\n\tprintf(\"Hola, mundo!\")\n\treturn 0;\n}",
    "#include &lt;stdio.h&gt;\n\nint main() {\n\tint x = \"10\";\n\tprintf(\"%d\", x);\n\treturn 0;\n}",
    "#include &lt;stdio.h&gt;\n\nint main() {\n\tint numero;\n\tprintf(\"Ingrese un número: \");\n\tscanf(\"%d\", numero);\n\treturn 0;\n}",
    "print \"Hola, mundo!\"",
    "x = 10\nif x = 5:\n\tprint(\"x es 5\")",
    "def saludar()\n\tprint(\"Hola\")",
    "public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println \"Hola, mundo!\" ;\n\t}\n}",
    "public class Main {\n\tpublic static void main(String[] args) {\n\t\tint numero = \"10\";\n\t\tSystem.out.println(numero);\n\t}\n}",
    "public class Main {\n\tpublic static void main(String[] args) {\n\t\tint x = 5;\n\t\tif (x = 10) {\n\t\t\tSystem.out.println(\"x es 10\");\n\t\t}\n\t}\n}",
    "int main() {\n\tprintf(\"Hola, mundo!\\n\");\n}",
    "x = input(\"Ingresa un número: \")\ny = x + 5\nprint(y)",
    "class Main {\n\tpublic static void main() {\n\t\tSystem.out.println(\"Hola, mundo!\");\n\t}\n}",
    "#include &lt;stdio.h&gt;\n\nint main() {\n\tchar nombre[10];\n\tgets(nombre);\n\tprintf(\"Hola, %s\", nombre);\n\treturn 0;\n}",
    "for i in range(5)\n\tprint(i)",
    "public class Main {\n\tpublic static void main(String[] args) {\n\t\tString nombre = \'Juan\';\n\t\tSystem.out.println(nombre);\n\t}\n}"
]

function numerosAleatoriosNoRepetidos(cantidad, rango) {
    let numeros = [];
    while (numeros.length < cantidad) {
        let numero = Math.floor(Math.random() * rango);
        if (numeros.indexOf(numero) === -1) {
            numeros.push(numero);
        }
    }
    return numeros;
}

var preguntasAleatoriasIndices = numerosAleatoriosNoRepetidos(5, preguntas.length);

// Seleccionamos el contenedor donde vamos a agregar las preguntas
const contenedorPreguntas = document.querySelector(".questionsContainer");

preguntasAleatoriasIndices.forEach((indice, index) => {
    const pregunta = preguntas[indice];
    const codigo = codigos[indice];

    // Creamos el contenedor de la pregunta
    const preguntaElemento = document.createElement("div");
    preguntaElemento.classList.add("containerQuestionAnswer");

    // Añadimos el HTML de la pregunta, código y respuestas
    preguntaElemento.innerHTML = `
        <div class="containerQuestionAnswer">
            <div class="questionContainer">
                <div class="ellipse"></div>
                <div class="rectangle"></div>
                <div class="questionNumber">${index + 1}</div>
                <div class="question">${pregunta.pregunta}</div>
            </div>
            
            <div class="codeContainer">
                <div class="code">
                    <pre>${codigo}</pre>
                </div>
            </div>

            <div class="answerContainer">
                <input type="radio" name="q${index + 1}" value="${pregunta.correct === 'a' ? 1 : 0}"> ${pregunta.a}<br>
                <input type="radio" name="q${index + 1}" value="${pregunta.correct === 'b' ? 1 : 0}"> ${pregunta.b}<br>
                <input type="radio" name="q${index + 1}" value="${pregunta.correct === 'c' ? 1 : 0}"> ${pregunta.c}<br>
                <input type="radio" name="q${index + 1}" value="${pregunta.correct === 'd' ? 1 : 0}"> ${pregunta.d}<br>
            </div>
        </div>
    `;

    // Agregamos el div de la pregunta al contenedor
    contenedorPreguntas.appendChild(preguntaElemento);
});

// Modificar la función contarRespuestasCorrectas
let respuestasIncorrectas = []; // Variable global para almacenar errores

function contarRespuestasCorrectas() {
    let correctas = 0;
    respuestasIncorrectas = []; // Reiniciar array

    preguntasAleatoriasIndices.forEach((indicePregunta, index) => {
        const preguntaReal = preguntas[indicePregunta];
        const seleccionada = document.querySelector(`input[name="q${index + 1}"]:checked`);
        const userAnswer = seleccionada ? String.fromCharCode(97 + [...seleccionada.parentNode.children].indexOf(seleccionada)) : null;

        if (seleccionada && seleccionada.value === "1") {
            correctas++;
        } else {
            respuestasIncorrectas.push({
                indice: indicePregunta,
                pregunta: preguntaReal.pregunta,
                codigo: codigos[indicePregunta],
                respuestaUsuario: userAnswer,
                correcta: preguntaReal.correct
            });
        }
    });

    return correctas;
}

// Modificar verificarCodigo para mostrar los errores
function verificarCodigo() {
    let totalCorrectas = contarRespuestasCorrectas();
    
    // ... código existente ...
    let resultadoTexto = totalCorrectas >= 4 ? "🚀 ¡Tienes buena capacidad para detectar errores en código!" :
                        totalCorrectas >= 2 ? "🔧 Estás en buen camino para analizar código." :
                       "🎮 Sigue practicando para mejorar tu análisis de código.";
    resultadoTexto = `Tienes ${totalCorrectas}/5 aciertos ` + resultadoTexto;
    let imagen = totalCorrectas >= 4 ? " gato2.png" :
                 totalCorrectas >= 2 ? "gato3.png" :
                 "gato1.png";
    document.getElementById("resultado").textContent = resultadoTexto;
    document.getElementById("imagenResultado").src = imagen;

    // Limpiar contenedor de errores
    const erroresContainer = document.getElementById("erroresContainer");
    erroresContainer.innerHTML = "";

    // Agregar detalles de errores
    respuestasIncorrectas.forEach(error => {
        const preguntaReal = preguntas[error.indice];
        // Modificar la sección donde se construye el HTML de errores
        const errorHTML = `
        <div class="error-item">
            <h4>${error.pregunta}</h4>
            <pre>${error.codigo}</pre>
            <p>Tu respuesta: ${error.respuestaUsuario ? preguntaReal[error.respuestaUsuario.toLowerCase()] : 'Ninguna'}</p>
            <p>Respuesta correcta: ${preguntaReal[preguntaReal.correct]}</p>
        </div>
        <hr>
        `;
        erroresContainer.innerHTML += errorHTML;
    });

    abrirModal();
}

/* function verificarCodigo() {
    let totalCorrectas = contarRespuestasCorrectas();

    let resultadoTexto = totalCorrectas >= 4 ? "🚀 ¡Tienes buena capacidad para detectar errores en código!" :
                        totalCorrectas >= 2 ? "🔧 Estás en buen camino para analizar código." :
                       "🎮 Sigue practicando para mejorar tu análisis de código.";
    resultadoTexto = `Tienes ${totalCorrectas}/5 aciertos ` + resultadoTexto;
    let imagen = totalCorrectas >= 4 ? " gato2.png" :
                 totalCorrectas >= 2 ? "gato3.png" :
                 "gato1.png";
    document.getElementById("resultado").textContent = resultadoTexto;
    document.getElementById("imagenResultado").src = imagen;
    
    abrirModal();
} */

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
    window.location.href = "index.html"
}

/* function contarRespuestasCorrectas() {
    let correctas = 0;

    for (let i = 0; i < preguntas.length; i++) {  
        let seleccionada = document.querySelector(`input[name="q${i}"]:checked`);
        if (seleccionada && seleccionada.value === "1") {  
            correctas++;
        }
    }

    return correctas;
} */
