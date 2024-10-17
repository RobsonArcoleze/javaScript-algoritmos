function maxConsecutivesOnes(nums){
    let maxOnes = 0;
    let countOnes = 0;

    for(let value of nums){
        if(value === 1 )
            countOnes ++

        if(value != 1 && countOnes > 0){
            if(countOnes > maxOnes)
                maxOnes = countOnes
            countOnes = 0
        }
    }

    if( countOnes > maxOnes)
        maxOnes = countOnes

    
    console.log(maxOnes);
    
}

maxConsecutivesOnes([1,0,1,1,0,1])