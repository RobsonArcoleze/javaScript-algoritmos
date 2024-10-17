function buscaBinariaInterativa(nums, key){
    let row = 0;
    let middle;
    let high = nums.length -1

    while(row < high){
        middle = Math.floor((row + high) / 2);
        if(key < nums[middle]){
            high = middle -1
        }else if(key > nums[middle]){
            row = middle + 1
        }else{
            return middle
        }
    }
    return -1
}


console.log(buscaBinariaInterativa([-5, 0, 2, 8, 13, 16, 19, 23, 29,34,38], 34));
console.log(buscaBinariaInterativa([-5, 0, 2, 8, 13, 16, 19, 23, 29,34,38], 10));
console.log(buscaBinariaInterativa([-10, -3, 4, 11, 13, 18, 44, 64, 91, 225, 431], 11));