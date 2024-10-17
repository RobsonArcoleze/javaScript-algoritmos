function findNumbers(nums){
    let countDigits = 0;

    for (const value of nums){
        console.log(String(value).length);
        if(String(value).length % 2 == 0 ){
            countDigits ++
        }
    }

    return countDigits;
}


console.log(findNumbers([12,345,2,6,7896]))