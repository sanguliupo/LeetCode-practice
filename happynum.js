var isHappy = function(n) {
    const visited = new Set();
    let str = n.toString();
    return process(str, visited);
};

function process(str, visited) {
    if (visited.has(str)) {
        return false;
    } else {
        visited.add(str);
    }
    console.log(visited);

    let result = 0;
    // if (
    //     str.length === 1 &&
    //     Number(str[0]) * Number(str[0]) < 10 &&
    //     Number(str[0]) * Number(str[0]) !== 1
    // ) {
    //     return false;
    // }

    for (let i = 0; i < str.length; i++) {
        result += str[i] * str[i];
    }

    if (result === 1) {
        return true;
    } else {
        return process(result.toString(), visited);
    }
}

console.log(isHappy(4));
