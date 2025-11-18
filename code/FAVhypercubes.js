function Faces(d) {
    if (d < 0) {
        console.log("The number of dimensions can't go below 0!");
        return null;
    }
    const calc = d * (d - 1) / 2 * 2 ** (d - 2);
    return calc;
}

function Edges(d) {
    if (d < 0) {
        console.log("The number of dimensions can't go below 0!");
        return null;
    }
    const calc = d * 2 ** (d - 1);
    return calc;
}

function Vertices(d) {
    if (d < 0) {
        console.log("The number of dimensions can't go below 0!");
        return null;
    }
    const calc = 2 ** d;
    return calc;
}

Faces(0);
Edges(0);

Vertices(0);
