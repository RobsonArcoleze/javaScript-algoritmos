

function extractDateData(date){

    const part = date.split('/')
    const dia = parseInt(part[0])
    const mes = parseInt(part[1])
    const ano = parseInt(part[2])


    return { dia, mes, ano}
}

console.log(extractDateData('21/07/2010'))