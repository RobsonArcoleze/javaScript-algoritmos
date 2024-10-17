// Problema "cpf"
// Dado o CPF de uma pessoa, o qual pode conter pontos ou traços como separadores, retorne o CPF contendo somente dígitos.

// Exemplo 1:
// Entrada 87409217293 Saída 87409217293

// Exemplo 2:
// Entrada 874092172-93 Saída 87409217293 

// Exemplo 3:
// Entrada 874.092.172-93 Saída 87409217293

function removeNonDigits(cpf){
    const regex = /\D/g;
    return cpf.replaceAll(regex, "")
}

function removeNonDigits2(cpf){
    let charArray = []

    for (const charracter of cpf) {
        if(charracter >= '0' && charracter <=9){
            charArray.push(charracter)
        }
    }
    return charArray.join('');
}

console.log(removeNonDigits("874.092.172-93"))
console.log(removeNonDigits2("874.092.172-93"))



