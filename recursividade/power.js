function power(base, expoente){
    return powerRecursive(base, 1, expoente) 
}

function powerRecursive(base, a, expoente){
    if(expoente === 0){
        return a
    }
    return powerRecursive(base, base*a, expoente-1)
}
console.log(power(3, 4))