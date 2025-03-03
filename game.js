var canvas = document.getElementById("juego1");
var ctx = canvas.getContext('2d');

var img = new Image();
img.src = "pacmant.png";
var xTile = 0;
var yTile = 0;

var xTileE = 0;
var yTileE = 0;

var img2 = new Image();
img2.src = "caracter.png"

let Pc = [
    [853, 5, 33, 33, 33, 33],
    [853, 55, 33, 33, 33, 33],
    [853, 105, 33, 33, 33, 33],
]
var xp = 324
var yp = 550
var dxp = 2
var dyp = 2
var ctrlp = 0
var indicep = 0
var orgp = 0

let P = [
    [1, 4, 35, 35, 35, 35],
    [1, 54, 35, 35, 35, 35],
    [1, 104, 35, 35, 35, 35],
    [1, 154, 35, 35, 35, 35],
    [1, 204, 35, 35, 35, 35],
    [1, 254, 35, 35, 35, 35],
    [1, 304, 35, 35, 35, 35],
    [1, 354, 35, 35, 35, 35],
]
var x = 24;
var y = 92;
var x2 = 60
var y2 = 256;
var x3 = 24
var y3 = 696;
var x4 = 60
var y4 = 696;

var dx = 2;
var dy = 2;
var dx2 = 2;
var dy2 = 2;
var dx3 = 2;
var dy3 = 2;
var dx4 = 2;
var dy4 = 2

var indice1 = 0;

var org = 0;
var org2 = 0;
var org3 = 0;
var org4 = 0;

var or1 = 1;
var or2 = 1;
var or3 = 1;
var or4 = 1;

var mm1 = 0;
var mm2 = 0;
var mm3 = 0;
var mm4 = 0;

juego = 0;
const rectTile = canvas.getBoundingClientRect();

let Esc = [1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 43, 42, 10, 10, 58, 58, 91, 90, 58, 58, 58, 58, 58, 58, 58, 58, 58, 48, 3, 46, 46, 46, 46, 46, 46, 46, 46, 46, 25, 24, 46, 46, 94, 94, 73, 72, 94, 94, 94, 94, 94, 94, 94, 94, 94, 50, 3, 46, 23, 14, 14, 14, 14, 14, 38, 46, 25, 24, 46, 23, 70, 94, 73, 72, 94, 71, 62, 62, 62, 62, 62, 70, 94, 50, 3, 46, 27, 21, 21, 21, 21, 21, 26, 46, 25, 24, 46, 25, 72, 94, 73, 72, 94, 75, 68, 68, 68, 68, 68, 74, 94, 50, 3, 46, 46, 46, 46, 46, 46, 46, 46, 46, 25, 24, 46, 25, 72, 94, 73, 72, 94, 94, 94, 94, 94, 94, 94, 94, 94, 50, 7, 14, 14, 14, 14, 22, 46, 23, 22, 46, 25, 24, 46, 25, 72, 94, 73, 72, 94, 71, 70, 94, 71, 62, 62, 62, 62, 54, 21, 21, 21, 21, 21, 26, 46, 25, 24, 46, 25, 24, 46, 25, 72, 94, 73, 72, 94, 73, 72, 94, 75, 68, 68, 68, 68, 68, -1, 47, 46, 46, 46, 46, 46, 25, 24, 46, 27, 26, 46, 25, 72, 94, 75, 74, 94, 73, 72, 94, 94, 94, 94, 94, 95, -1, 14, 14, 14, 14, 14, 38, 46, 25, 24, 46, 46, 46, 46, 25, 72, 94, 94, 94, 94, 73, 72, 94, 71, 62, 62, 62, 62, 62, 9, 21, 21, 21, 21, 26, 46, 25, 36, 14, 14, 22, -1, 25, 72, -1, 71, 62, 62, 85, 72, 94, 75, 68, 68, 68, 68, 56, 3, 46, 46, 46, 46, 46, 46, 25, 34, 21, 21, 26, -1, 27, 74, -1, 75, 68, 68, 83, 72, 94, 94, 94, 94, 94, 94, 50, 3, 46, 23, 14, 14, 22, 46, 25, 24, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 73, 72, 94, 71, 62, 62, 70, 94, 50, 3, 46, 25, 45, 45, 24, 46, 25, 24, -1, 29, 13, 33, 332, 332, 80, 60, 76, -1, 73, 72, 94, 73, 93, 93, 72, 94, 50, 3, 46, 25, 45, 45, 24, 46, 25, 24, -1, 2, -1, -1, -1, -1, -1, -1, 51, -1, 73, 72, 94, 73, 93, 93, 72, 94, 50, 3, 46, 25, 45, 45, 24, 46, 25, 24, -1, 2, -1, -1, -1, -1, -1, -1, 51, -1, 73, 72, 94, 73, 93, 93, 72, 94, 50, 3, 46, 25, 45, 45, 24, 46, 25, 24, -1, 2, -1, -1, -1, -1, -1, -1, 147, -1, 169, 168, 190, 169, 189, 189, 168, 190, 146, 3, 46, 27, 21, 21, 26, 46, 27, 26, -1, 31, 11, 11, 11, 154, 154, 154, 174, -1, 171, 170, 190, 171, 164, 164, 170, 190, 146, 3, 46, 46, 46, 46, 46, 46, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 190, 190, 190, 190, 190, 190, 146, 3, 46, 23, 22, 46, 23, 14, 14, 14, 14, 14, 22, -1, 23, 166, -1, 167, 158, 158, 158, 158, 158, 166, 190, 167, 158, 158, 150, 3, 46, 25, 24, 46, 25, 34, 21, 21, 21, 21, 26, -1, 25, 168, -1, 171, 164, 164, 164, 164, 179, 168, 190, 171, 164, 164, 164, 3, 46, 25, 24, 46, 25, 24, 46, 46, 46, 46, 46, -1, 25, 168, -1, 190, 190, 190, 190, 190, 169, 168, 190, 190, 190, 191, -1, 3, 46, 25, 24, 46, 25, 24, 46, 23, 14, 14, 14, 14, 37, 180, 158, 158, 158, 158, 166, 190, 169, 168, 190, 167, 158, 158, 158, 3, 46, 27, 26, 46, 25, 24, 46, 27, 21, 21, 21, 21, 21, 164, 164, 164, 164, 164, 170, 190, 169, 168, 190, 171, 164, 164, 152, 3, 46, 46, 46, 46, 25, 24, 46, 46, 46, 46, 46, 46, -1, -1, 190, 190, 190, 190, 190, 190, 169, 168, 190, 190, 190, 190, 146, 3, 46, 23, 22, 46, 25, 36, 14, 14, 14, 14, 22, 46, 23, 166, 190, 167, 158, 158, 158, 158, 181, 168, 190, 167, 166, 190, 146, 3, 46, 25, 24, 46, 25, 34, 21, 21, 21, 21, 26, 46, 25, 168, 190, 171, 164, 164, 164, 164, 179, 168, 190, 169, 168, 190, 146, 3, 46, 25, 24, 46, 25, 24, 46, 46, 46, 46, 46, 46, 25, 168, 190, 190, 190, 190, 190, 190, 169, 168, 190, 169, 168, 190, 146, 3, 46, 25, 24, 46, 25, 24, 46, 23, 14, 14, 22, 46, 25, 168, 190, 167, 158, 158, 166, 190, 169, 168, 190, 169, 168, 190, 146, 3, 46, 27, 26, 46, 27, 26, 46, 27, 21, 21, 26, 46, 25, 168, 190, 171, 164, 164, 170, 190, 171, 170, 190, 171, 170, 190, 146, 3, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 25, 168, 190, 190, 190, 190, 190, 190, 190, 190, 190, 190, 190, 190, 146, 5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 37, 180, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 148]

var M = [];
for (var j = 0; j < 31; j++) {
    M[j] = new Array(28);
    for (var i = 0; i < 28; i++) {
        M[j][i] = -1;
    }

}

document.addEventListener("keydown", detectarTecla);

img2.onload = function () {
    setInterval(draw, 15);
    setInterval(anim1, 400);
    setInterval(animp, 90)
}

canvas.addEventListener('mousedown', manejadorRaton, false);

function draw() {
    if (juego == 0) {
        inicializaG();
        juego = 1;
    }
    drawEscenario();
    motionP();
    motion1();
    motion2();
    motion3();
    motion4();
}

function inicializaG() {
    leerContenido();
}

function manejadorRaton(e) {
    if (juego == 1) {
        var relativeX = e.clientX - rectTile.left
        var relativeY = e.clientY - rectTile.top
        xTileE = Math.floor(relativeX / 24);
        yTileE = Math.floor(relativeY / 24);
        console.log(xTileE, yTileE)

        if (xTileE == 1 && yTileE == 7) {
            window.location.href = "test1.html";
        }

        if (xTileE == 26 && yTileE == 7) {
            window.location.href = "test2.html";
        }

        if (xTileE == 26 && yTileE == 20) {
            window.location.href = "test3.html";
        }
    }

}

/**************************************************************************/
function motionP() {
    //console.log(Math.floor((yp + 16) / 24), Math.floor((xp + 30) / 24))
    ctx.drawImage(img2, Pc[indicep][0], Pc[indicep][1] + orgp, Pc[indicep][2], Pc[indicep][3], xp, yp, Pc[indicep][4], Pc[indicep][5]);
    if (ctrlp == 1 && (M[Math.floor((yp + 16) / 24)][Math.floor((xp + 30) / 24)] == -1 || M[Math.floor((yp + 16) / 24)][Math.floor((xp + 30) / 24)] % 48 == 46 || M[Math.floor((yp + 16) / 24)][Math.floor((xp + 30) / 24)] % 48 == 47)) {
        xp += dxp
        desaparece(Math.floor((yp + 16) / 24), Math.floor((xp + 25) / 24));
    }
    if (ctrlp == 2 && (M[Math.floor((yp + 16) / 24)][Math.floor((xp + 4) / 24)] == -1 || M[Math.floor((yp + 16) / 24)][Math.floor((xp + 4) / 24)] % 48 == 46 || M[Math.floor((yp + 16) / 24)][Math.floor((xp + 4) / 24)] % 48 == 47)) {
        xp -= dxp
        desaparece(Math.floor((yp + 16) / 24), Math.floor((xp + 9) / 24));
    }
    if (ctrlp == 3 && (M[Math.floor((yp) / 24)][Math.floor((xp + 17) / 24)] == -1 || M[Math.floor((yp) / 24)][Math.floor((xp + 17) / 24)] % 48 == 46 || M[Math.floor((yp) / 24)][Math.floor((xp + 17) / 24)] % 48 == 47)) {
        yp -= dyp
        desaparece(Math.floor((yp + 8) / 24), Math.floor((xp + 17) / 24));
    }
    if (ctrlp == 4 && (M[Math.floor((yp + 33) / 24)][Math.floor((xp + 17) / 24)] == -1 || M[Math.floor((yp + 33) / 24)][Math.floor((xp + 17) / 24)] % 48 == 46 || M[Math.floor((yp + 33) / 24)][Math.floor((xp + 17) / 24)] % 48 == 47)) {
        yp += dyp
        desaparece(Math.floor((yp + 33) / 24), Math.floor((xp + 17) / 24))
    }
}

function desaparece(xx, yy) {
    console.log(xx, yy);
    if (M[xx][yy] % 48 == 46 || M[xx][yy] % 48 == 47) {
        M[xx][yy] = -1;
        if (yy == 1 && xx == 7) {
            console.log("uno")
            window.location.href = "test1.html";
        }
        if (yy == 26 && xx == 7) {
            console.log("dos")
            window.location.href = "test2.html";
        }
        if (yy == 26 && xx == 20) {
            console.log("tres")
            window.location.href = "test3.html";
        }
    }
}

function animp() {
    indicep = (indicep + 1) % 3;
}

function detectarTecla(e) {
    if ((e.keyCode == 39 || e.keyCode == 68) && (M[Math.floor((yp + 16) / 24)][Math.floor((xp + 36) / 24)] == -1 || M[Math.floor((yp + 16) / 24)][Math.floor((xp + 36) / 24)] % 48 == 46 || M[Math.floor((yp + 16) / 24)][Math.floor((xp + 36) / 24)] % 48 == 47)) { // Flecha derecha o 'D'
        console.log("Avanzando a la derecha");
        ctrlp = 1;
        orgp = 0;
    }
    if ((e.keyCode == 37 || e.keyCode == 65) && (M[Math.floor((yp + 16) / 24)][Math.floor((xp) / 24)] == -1 || M[Math.floor((yp + 16) / 24)][Math.floor((xp) / 24)] % 48 == 46 || M[Math.floor((yp + 16) / 24)][Math.floor((xp) / 24)] % 48 == 47)) { // Flecha izquierda o 'A'
        console.log("Avanzando a la izquierda");
        ctrlp = 2;
        orgp = 300;
    }
    if ((e.keyCode == 38 || e.keyCode == 87) && (M[Math.floor((yp) / 24)][Math.floor((xp + 17) / 24)] == -1 || M[Math.floor((yp) / 24)][Math.floor((xp + 17) / 24)] % 48 == 46 || M[Math.floor((yp) / 24)][Math.floor((xp + 17) / 24)] % 48 == 47)) { // Flecha arriba o 'W'
        console.log("Avanzando arriba");
        ctrlp = 3;
        orgp = 450;
    }
    if ((e.keyCode == 40 || e.keyCode == 83) && (M[Math.floor((yp + 33) / 24)][Math.floor((xp + 17) / 24)] == -1 || M[Math.floor((yp + 33) / 24)][Math.floor((xp + 17) / 24)] % 48 == 46 || M[Math.floor((yp + 33) / 24)][Math.floor((xp + 17) / 24)] % 48 == 47)) { // Flecha abajo o 'S'
        console.log("Avanzando abajo");
        ctrlp = 4;
        orgp = 150;
    }
}

//-----------------------------------------------------------//

function motion1() {
    ctx.drawImage(img2, P[org + indice1][0], P[org + indice1][1], P[org + indice1][2], P[org + indice1][3], x, y, P[org + indice1][4], P[org + indice1][5]);
    if (mm1 == 0) {
        mov1 = Math.floor((Math.random() * 1000) % 4) + 1
        if (mov1 == 1)
            org = 0; // derecha
        else if (mov1 == 2)
            org = 4; // izquierda
        else if (mov1 == 3)
            org = 6; // arriba
        else
            org = 2; // abajo
        mm1 = 1
    }
    if (mm1 == 1) {
        switch (org) {
            case 0:
                if ((M[Math.floor((y + 17) / 24)][Math.floor((x + 40) / 24)] % 48) == 46 || (M[Math.floor((y + 17) / 24)][Math.floor((x + 40) / 24)] % 48) == 47 || (M[Math.floor((y + 17) / 24)][Math.floor((x + 40) / 24)]) == -1)
                    x += dx;
                else
                    mm1 = 0
                break;
            case 4:
                if (M[Math.floor((y + 17) / 24)][Math.floor((x) / 24)] % 48 == 46 || M[Math.floor((y + 17) / 24)][Math.floor((x) / 24)] % 48 == 47 || M[Math.floor((y + 17) / 24)][Math.floor((x) / 24)] == -1)
                    x -= dx;
                else
                    mm1 = 0;
                break;
            case 6:
                if (M[Math.floor((y) / 24)][Math.floor((x + 17) / 24)] % 48 == 46 || M[Math.floor((y) / 24)][Math.floor((x + 17) / 24)] % 48 == 47 || M[Math.floor((y) / 24)][Math.floor((x + 17) / 24)] == -1)
                    y -= dy;
                else
                    mm1 = 0
                break;
            case 2:
                if (M[Math.floor((y + 40) / 24)][Math.floor((x + 17) / 24)] % 48 == 46 || M[Math.floor((y + 40) / 24)][Math.floor((x + 17) / 24)] % 48 == 47 || M[Math.floor((y + 40) / 24)][Math.floor((x + 17) / 24)] == -1)
                    y += dy;
                else
                    mm1 = 0
                break;
        }
    }
}

function motion2() {
    ctx.drawImage(img2, P[org2 + indice1][0] + 50, P[org2 + indice1][1], P[org2 + indice1][2], P[org2 + indice1][3], x2, y2, P[org2 + indice1][4], P[org2 + indice1][5]);
    if (mm2 == 0) {
        mov2 = Math.floor((Math.random() * 1000) % 4) + 1
        if (mov2 == 1)
            org2 = 0; // derecha
        else if (mov2 == 2)
            org2 = 4; // izquierda
        else if (mov2 == 3)
            org2 = 6; // arriba
        else
            org2 = 2; // abajo
        mm2 = 1
    }
    if (mm2 == 1) {
        switch (org2) {
            case 0:
                if ((M[Math.floor((y2 + 17) / 24)][Math.floor((x2 + 40) / 24)] % 48) == 46 || (M[Math.floor((y2 + 17) / 24)][Math.floor((x2 + 40) / 24)] % 48) == 47 || (M[Math.floor((y2 + 17) / 24)][Math.floor((x2 + 40) / 24)]) == -1)
                    x2 += dx;
                else
                    mm2 = 0
                break;
            case 4:
                if (M[Math.floor((y2 + 17) / 24)][Math.floor((x2) / 24)] % 48 == 46 || M[Math.floor((y2 + 17) / 24)][Math.floor((x2) / 24)] % 48 == 47 || M[Math.floor((y2 + 17) / 24)][Math.floor((x2) / 24)] == -1)
                    x2 -= dx;
                else
                    mm2 = 0;
                break;
            case 6:
                if (M[Math.floor((y2) / 24)][Math.floor((x2 + 17) / 24)] % 48 == 46 || M[Math.floor((y2) / 24)][Math.floor((x2 + 17) / 24)] % 48 == 47 || M[Math.floor((y2) / 24)][Math.floor((x2 + 17) / 24)] == -1)
                    y2 -= dy;
                else
                    mm2 = 0
                break;
            case 2:
                if (M[Math.floor((y2 + 40) / 24)][Math.floor((x2 + 17) / 24)] % 48 == 46 || M[Math.floor((y2 + 40) / 24)][Math.floor((x2 + 17) / 24)] % 48 == 47 || M[Math.floor((y2 + 40) / 24)][Math.floor((x2 + 17) / 24)] == -1)
                    y2 += dy;
                else
                    mm2 = 0
                break;
        }
    }
}

function motion3() {
    ctx.drawImage(img2, P[org3 + indice1][0] + 100, P[org3 + indice1][1], P[org3 + indice1][2], P[org3 + indice1][3], x3, y3, P[org3 + indice1][4], P[org3 + indice1][5]);
    if (mm3 == 0) {
        mov3 = Math.floor((Math.random() * 1000) % 4) + 1
        if (mov3 == 1)
            org3 = 0; // derecha
        else if (mov3 == 2)
            org3 = 4; // izquierda
        else if (mov3 == 3)
            org3 = 6; // arriba
        else
            org3 = 2; // abajo
        mm3 = 1
    }
    if (mm3 == 1) {
        switch (org3) {
            case 0:
                if ((M[Math.floor((y3 + 17) / 24)][Math.floor((x3 + 40) / 24)] % 48) == 46 || (M[Math.floor((y3 + 17) / 24)][Math.floor((x3 + 40) / 24)] % 48) == 47 || (M[Math.floor((y3 + 17) / 24)][Math.floor((x3 + 40) / 24)]) == -1)
                    x3 += dx;
                else
                    mm3 = 0
                break;
            case 4:
                if (M[Math.floor((y3 + 17) / 24)][Math.floor((x3) / 24)] % 48 == 46 || M[Math.floor((y3 + 17) / 24)][Math.floor((x3) / 24)] % 48 == 47 || M[Math.floor((y3 + 17) / 24)][Math.floor((x3) / 24)] == -1)
                    x3 -= dx;
                else
                    mm3 = 0;
                break;
            case 6:
                if (M[Math.floor((y3) / 24)][Math.floor((x3 + 17) / 24)] % 48 == 46 || M[Math.floor((y3) / 24)][Math.floor((x3 + 17) / 24)] % 48 == 47 || M[Math.floor((y3) / 24)][Math.floor((x3 + 17) / 24)] == -1)
                    y3 -= dy;
                else
                    mm3 = 0
                break;
            case 2:
                if (M[Math.floor((y3 + 40) / 24)][Math.floor((x3 + 17) / 24)] % 48 == 46 || M[Math.floor((y3 + 40) / 24)][Math.floor((x3 + 17) / 24)] % 48 == 47 || M[Math.floor((y3 + 40) / 24)][Math.floor((x3 + 17) / 24)] == -1)
                    y3 += dy;
                else
                    mm3 = 0
                break;
        }
    }
}

function motion4() {
    ctx.drawImage(img2, P[org4 + indice1][0] + 150, P[org4 + indice1][1], P[org4 + indice1][2], P[org4 + indice1][3], x4, y4, P[org4 + indice1][4], P[org4 + indice1][5]);
    if (mm4 == 0) {
        mov4 = Math.floor((Math.random() * 1000) % 4) + 1
        if (mov4 == 1)
            org4 = 0; // derecha
        else if (mov4 == 2)
            org4 = 4; // izquierda
        else if (mov4 == 3)
            org4 = 6; // arriba
        else
            org4 = 2; // abajo
        mm4 = 1
    }
    if (mm4 == 1) {
        switch (org4) {
            case 0:
                if ((M[Math.floor((y4 + 17) / 24)][Math.floor((x4 + 40) / 24)] % 48) == 46 || (M[Math.floor((y4 + 17) / 24)][Math.floor((x4 + 40) / 24)] % 48) == 47 || (M[Math.floor((y4 + 17) / 24)][Math.floor((x4 + 40) / 24)]) == -1)
                    x4 += dx;
                else
                    mm4 = 0
                break;
            case 4:
                if (M[Math.floor((y4 + 17) / 24)][Math.floor((x4) / 24)] % 48 == 46 || M[Math.floor((y4 + 17) / 24)][Math.floor((x4) / 24)] % 48 == 47 || M[Math.floor((y4 + 17) / 24)][Math.floor((x4) / 24)] == -1)
                    x4 -= dx;
                else
                    mm4 = 0;
                break;
            case 6:
                if (M[Math.floor((y4) / 24)][Math.floor((x4 + 17) / 24)] % 48 == 46 || M[Math.floor((y4) / 24)][Math.floor((x4 + 17) / 24)] % 48 == 47 || M[Math.floor((y4) / 24)][Math.floor((x4 + 17) / 24)] == -1)
                    y4 -= dy;
                else
                    mm4 = 0
                break;
            case 2:
                if (M[Math.floor((y4 + 40) / 24)][Math.floor((x4 + 17) / 24)] % 48 == 46 || M[Math.floor((y4 + 40) / 24)][Math.floor((x4 + 17) / 24)] % 48 == 47 || M[Math.floor((y4 + 40) / 24)][Math.floor((x4 + 17) / 24)] == -1)
                    y4 += dy;
                else
                    mm4 = 0
                break;
        }
    }
}

function anim1() {
    indice1 = (indice1 + 1) % 2;
}

function drawEscenario() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 31; i++) {
        for (j = 0; j < (canvas.width / 24); j++) {
            if (M[i][j] != -1) {
                ctx.drawImage(img, (M[i][j] % 16) * 24, Math.floor((M[i][j] / 16)) * 24, 24, 24, j * 24, i * 24, 24, 24);
            }
        }
    }

    //ctx_e.drawImage(img,xTile*32,yTile*32,32,32,xTileE*32,yTileE*32,32,32);
}


function leerContenido() {
    for (var i = 0; i < 868; i++) {
        M[Math.floor(i / 28)][i % 28] = Esc[i];

    }
    drawEscenario();
}