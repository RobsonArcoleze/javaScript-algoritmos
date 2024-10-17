function minor(list){
    const head = list[0]
    return minorRecursive(list, head)
}

function minorRecursive(list, value){
    if(list.length === 0){
        return value
    }
    const head = list[0]
    const tail = list.slice(1)
    if(head < value){
        value = head
    }

    return minorRecursive(tail, value)
}

console.log(minor([10, 15, 20, 8, 30, 17]));
