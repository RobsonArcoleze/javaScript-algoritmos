function mergeList(a, b){
    if(a.length === 0 && b.length === 0){
        return []
    }
    if(a.length === 0){
        return b
    }
    if(b.length === 0){
        return a
    }

    return [a[0], b[0]].concat(mergeList(a.slice(1), b.slice(1)))
}

// Testando a função
const a = [10, 20, 30];
const b = [5, 8, 7];

console.log(mergeList(a, b));