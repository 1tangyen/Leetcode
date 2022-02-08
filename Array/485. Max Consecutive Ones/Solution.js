/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (nums == 0 || nums.length == 0) {
        return 0
    }
    
    let result = 0;
    let count = 0;
    
    for(i = 0; i<nums.length; i++) {
        if(nums[i] === 0) {
            count = 0
        } else {
            count ++
        }
        result = Math.max(result, count)
    }
    return result
};