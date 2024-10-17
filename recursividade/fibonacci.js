//RECURSIVO
/* 
DADO UM VALOR N, CALCULAR O FIBONACCI.
O CALCULO É O VALOR DE N-1 + N-2

ESSA SOLUÇÃO É INEFICIENTE POIS REPETE CALCULOS EM UMA ESTRUTURA DE ARVORES
*/
function fib(n){
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    return fib(n-1) + fib(n-2)
}

//RECURSIVIDADE DE CALDA
/* 
DADO UM VALOR N, CALCULAR O FIBONACCI. SOLUÇÃO DE FORMA LINEAR
FIB(4) FIB(3) FIB(2) FIB(1) FIB(0) 

4   3   2   1   0

0 1 1 2 3 5 8

FIBONACCIRECURSIVETAIL(N, FIRST, SECOND){}
*/


function fib2(n){
    return fibRecursiveTail(n, 0, 1)
}

function fibRecursiveTail(n, first, second){
    if(n === 1){
        return second
    }

    return fibRecursiveTail(n-1, second, first + second)
}

console.log(fib2(45));
