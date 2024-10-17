function reverse(list){

    if(list.length <= 1){
        return list
    }

    list.reverse()

    return list
}

//Pensando em uma solução recursiva

function reverse2(list){
    if(list.length <= 1){
        return list
    }

    const head = list[0]
    const tail = list.slice(1)
    console.log(list)

    return reverse2(tail).concat([head])

}

console.log(reverse2(["azul", "verde", "preto", "rosa"]));
