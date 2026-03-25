const formulario = document.getElementById('formulario');
const fila = document.getElementById('fila');
const columna = document.getElementById('columna');
const resultado = document.getElementById('resultado');

function calcularMovimientos() {
    const fila = parseInt(document.getElementById("fila").value);
    const columna = parseInt(document.getElementById("columna").value);
    const resultado = document.getElementById("caballitoBrum")
    if (fila < 1 || fila > 8  || columna < 1 || columna > 8) {
        resultado.textContent = "Cordenadas invalidas (1-8)";
        return;
    }
    const movimientos = [
        [2,1], [2,-1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2]
    ];
    let posicionesValidas = [];
    movimientos.forEach(mov => {
        let nuevaFila = fila + mov[0];
        let nuevaColumna = columna + mov[1]
        if (nuevaFila >= 1 && nuevaFila <= 8 && nuevaColumna >= 1 && nuevaColumna <= 8) {
            posicionesValidas.push((`${nuevaFila},${nuevaColumna}`));
        }
    });
    resultado.textContent = "El caballo puede salatar:" + posicionesValidas.join(",")
}