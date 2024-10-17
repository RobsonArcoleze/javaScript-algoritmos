function dotProductsTwoArrays(nums1, nums2){

    let result = 0

    for (let i = 0; i < Math.min(nums1.length, nums2.length); i++) {
        result += nums1[i] * nums2[i]
    }

    return result;
}

let nums1 = [1,0,0,2,3];
let nums2 = [0,3,0,4,0];
// = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
console.log(dotProductsTwoArrays(nums1, nums2));

nums1 = [0,1,0,0,0];
nums2 = [0,0,0,0,2];
// = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0
console.log(dotProductsTwoArrays(nums1, nums2));

nums1 = [0,1,0,0,2,0,0];
nums2 = [1,0,0,0,3,0,4];
// = 0*1 + 1*0 + 0*0 + 0*0 + 2*3 + 0*0 + 0*4 = 6
console.log(dotProductsTwoArrays(nums1, nums2));