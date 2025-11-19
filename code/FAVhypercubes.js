function faces(d) {
    if (d < 0) {
        console.log("The number of dimensions can't go below 0!");
        return null;
    }
    const calc = d * (d - 1) / 2 * 2 ** (d - 2);
    return calc;
}

function edges(d) {
    if (d < 0) {
        console.log("The number of dimensions can't go below 0!");
        return null;
    }
    const calc = d * 2 ** (d - 1);
    return calc;
}

function vertices(d) {
    if (d < 0) {
        console.log("The number of dimensions can't go below 0!");
        return null;
    }
    const calc = 2 ** d;
    return calc;
}

// console.log(faces(0));
// console.log(edges(0));
// console.log(vertices(0));

module.exports = {
    faces: faces,
    edges: edges,
    vertices: vertices
};