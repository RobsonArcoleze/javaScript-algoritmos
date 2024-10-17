function sumList(list){
    if(list.length === 0){
        return 0
    }
    const start = list[0]
    const tail = list.slice(1)
    return sumList(tail) + start
}

//APLICANDO RECURSIVIDADE DE CALDA
function sumList2(list){
    return sumListRecursive(list, 0)
}

function sumListRecursive(list, soma){
    if(list.length === 0){
        return soma
    }
    const start = list[0]
    const tail = list.slice(1)
    return sumListRecursive(tail, soma+=start)
}
console.log(sumList2([]));
