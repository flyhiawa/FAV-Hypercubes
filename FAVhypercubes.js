function OneL_calcularF(dnum) {
    const result = (dnum * (dnum - 1) / 2) * (2 ** (dnum - 2));
    console.log(result);
}

function OneL_calcularA(dnum) {
    const result = dnum * (2 ** (dnum - 1));
    console.log(result);
}

function OneL_calcularV(dnum) {
    const result = 2 ** dnum;
    console.log(result);
}

OneL_calcularF(8);
OneL_calcularA(8);
OneL_calcularV(8);