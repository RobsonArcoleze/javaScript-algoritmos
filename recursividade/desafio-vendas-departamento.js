
function totalSales(sales, department){
    return totalSalesRecursive(sales, department, 0, 0, sales.length-1)
}


function totalSalesRecursive(sales, department, qtdSales, total, indice){
    if(indice < 0){
        return [qtdSales, total]
    }

    const sale = sales[indice].split(',')
    const saleAmount =  parseFloat(sale[2])
    const departmentSale = sale[3]

    if(department === departmentSale){
        qtdSales++
        total += saleAmount
    }

    return totalSalesRecursive(sales, department, qtdSales, total, indice-1)
}

const result = totalSales([
    "8349,14/09/2024,899.9,ESPORTE",
    "4837,17/09/2024,530.0,VESTUARIO",
    "15281,21/09/2024,1253.99,ESPORTE",
    "15344,27/09/2024,1000.9,VESTUARIO",
    "18317,04/10/2024,250.4,VESTUARIO",
    "18972,11/10/2024,385.5,JARDINAGEM"
    ], "ESPORTE")

console.log(`${result[0]} VENDAS`);
console.log(`TOTAL = $ ${result[1]}`);


