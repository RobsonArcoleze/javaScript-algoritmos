
// 1! = 1*0
// 2! = 2*1
// 3! = 3*2*1
// 4! = 4*3*2*1

// factorial(n) = n * factorial(n-1)
function factorial1(n){
    if(n === 0){
        return 1
    }
    return n * factorial(n-1)
}

//RESOLVENDO COM RECURSIVIDADE DE CAUDA / LINEAR E NÃO EXPONENCIAL
//                     0
// 4 * 3 * 2 * 1 * 0 -----> fat = 24
// *   *   *   *
// 1   4   12  24
function factorial2(n){
    return factorialRecursiveTail(n, 1)
}

function factorialRecursiveTail(n, fat){
    if(n === 0){
        return fat
    }
    return factorialRecursiveTail(n-1, n*fat)
}

console.log(factorial2(7));