function invalidTransactions(transactions){

    if(transactions.length == 0){
        return ['']
    }

    obj1 = transactions[0].split(',')
    obj2 = transactions[1].split(',')

    invalid = []

    if(obj1[0] === obj2[0] && obj1[3] !== obj2[3]){

        invalid.push(obj1.join(','), obj2.join(','))
    }else {
        if(obj1[1] > 60 || obj1[2] > 1000){
            invalid.push(obj1.join(','))
        }
        if(obj2[1] > 60 || obj2[2] > 1000){
            invalid.push(obj2.join(','))
        }
    }

    
    return  invalid

}


console.log(invalidTransactions(["alice,20,800,mtv","bob,50,1200,mtv"]))